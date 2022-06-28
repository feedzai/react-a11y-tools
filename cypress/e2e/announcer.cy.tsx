/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * announcer.spec.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
const ROUTE_STORY_URL = "/docs/feedback/route-announcer#/";
const MESSAGES_STORY_URL = "/docs/feedback/messages-announcer";

describe("Announcer", () => {
	describe("Route Announcer", () => {
		beforeEach(() => {
			cy.visit(ROUTE_STORY_URL);
			cy.findByTestId("fdz-js-docs-browser-window").as("preview");
			cy.get("#__docusaurus article .markdown h1").as("pageLeveOneHeading");
			cy.get("@preview").find("h1").as("previewLevelOneHeading");

			cy.get("nav [href='#/']").as("BlogLink");
			cy.get("nav [href='#/article-1']").as("ArticleOneLink");
			cy.get("nav [href='#/article-2']").as("ArticleTwoLink");
			cy.get("nav [href='#/product']").as("ProductLink");
			cy.findByTestId("fdz-js-announcer").as("announcer");
		});

		it("should be empty by default", () => {
			cy.get("@preview").within(() => {
				cy.get("@announcer").should("not.have.text");
			});
		});

		describe("change routes and announce them", () => {
			beforeEach(() => {
				cy.get("@BlogLink").click();
			});

			it("By their level-1 heading", () => {
				cy.get("@preview").within(() => {
					cy.tabUntil(() => cy.get("@ArticleTwoLink")).click();

					cy.get("@previewLevelOneHeading")
						.then(($heading) => {
							const articlePageHeading = $heading.text();
							cy.get("@announcer").should("have.text", `Navigated to ${articlePageHeading}`);
							cy.get("@ArticleTwoLink").should("have.attr", "aria-current", "page");
							cy.tabUntil(() => cy.findByTestId("fdz-js-route-announer-go-back")).click();

							return cy.get("@previewLevelOneHeading");
						})
						.then(($heading) => {
							const listPageHeading = $heading.text();
							cy.get("@announcer").should("have.text", `Navigated to ${listPageHeading}`);
							cy.get("@BlogLink").should("have.attr", "aria-current", "page");
						});
				});
			});

			it("By their document title", () => {
				cy.get("@preview").within(() => {
					cy.tabUntil(() => cy.get("@ProductLink")).click();

					cy.title()
						.then(($heading) => {
							const productPageTitle = $heading;
							cy.get("@announcer").should("have.text", `Navigated to ${productPageTitle}`);
							cy.get("@ProductLink").should("have.attr", "aria-current", "page");

							cy.tabUntil(() => cy.get("@BlogLink"), true).click();

							return cy.get("@previewLevelOneHeading");
						})
						.then(($heading) => {
							const listPageHeading = $heading.text();
							cy.get("@announcer").should("have.text", `Navigated to ${listPageHeading}`);
							cy.get("@BlogLink").should("have.attr", "aria-current", "page");
						});
				});
			});

			it("By their url", () => {
				cy.get("@preview").within(() => {
					cy.tabUntil(() => cy.findByTestId("fdz-js-route-announcer-card-link")).click();

					cy.location().then(($location) => {
						const locationLink = $location.hash.substring(1);
						const title = `Navigated to new page at ${locationLink}`;
						cy.get("@announcer").should("have.text", title);
					});
				});
			});
		});
	});

	describe("Message Announcer", () => {
		beforeEach(() => {
			cy.visit(MESSAGES_STORY_URL);
			cy.findByTestId("fdz-js-docs-browser-window").as("preview");

			cy.findByRole("button", { name: "Pay 9.99€" }).as("Submit");
			cy.findByTestId("fdz-js-announcer").as("announcer");
		});

		it("should be empty by default", () => {
			cy.get("@preview").within(() => {
				cy.get("@announcer").should("not.have.text");
			});
		});

		it("should announce a change after submission", () => {
			cy.get("@preview").within(() => {
				cy.get("@Submit").click();
				cy.get("@announcer").should("have.text", "The money it's on the way! Thank you!");
			});
		});
	});
});
