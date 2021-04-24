/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
const ROUTE_STORY_URL =
	"/iframe.html?id=feedback-route-announcer--route-announcer&args=&viewMode=story";
const MESSAGES_STORY_URL =
	"/iframe.html?id=feedback-messages-announcer--messages-announcer&args=&viewMode=story";

describe("Announcer", () => {
	describe("Route Announcer", () => {
		beforeEach(() => {
			cy.visit(ROUTE_STORY_URL);

			cy.get("[href='/']").as("BlogLink");
			cy.get("[href='/article-1']").as("ArticleOneLink");
			cy.get("[href='/article-2']").as("ArticleTwoLink");
			cy.get("[href='/product']").as("ProductLink");
			cy.findByTestId("rat-announcer").as("announcer");
		});

		it("should be empty by default", () => {
			cy.get("@announcer").should("not.have.text");
		});

		describe("change routes and announce them", () => {
			beforeEach(() => {
				cy.get("@BlogLink").click();
			});

			it("By their level-1 heading", () => {
				cy.focused().tab().tab().click();

				cy.get("#root h1")
					.then(($heading) => {
						const articlePageHeading = $heading.text();
						cy.get("@announcer").should("have.text", `Navigated to ${articlePageHeading}`);
						cy.get("@ArticleTwoLink").should("have.attr", "aria-current", "page");
						cy.get("body").tab().tab().tab().tab().tab().tab().click();

						return cy.get("#root h1");
					})
					.then(($heading) => {
						const listPageHeading = $heading.text();
						cy.get("@announcer").should("have.text", `Navigated to ${listPageHeading}`);
						cy.get("@BlogLink").should("have.attr", "aria-current", "page");
					});
			});

			it("By their document title", () => {
				cy.focused().tab().tab().tab().tab().tab().tab().tab().tab().click();

				cy.title()
					.then(($heading) => {
						const productPageTitle = $heading;
						cy.get("@announcer").should("have.text", `Navigated to ${productPageTitle}`);
						cy.get("@ProductLink").should("have.attr", "aria-current", "page");
						cy.get("body").tab().click();

						return cy.get("#root h1");
					})
					.then(($heading) => {
						const listPageHeading = $heading.text();
						cy.get("@announcer").should("have.text", `Navigated to ${listPageHeading}`);
						cy.get("@BlogLink").should("have.attr", "aria-current", "page");
					});
			});

			it("By their url", () => {
				cy.focused().tab().tab().tab().tab().click();

				cy.location().then(($location) => {
					const title = `Navigated to new page at ${$location.pathname}`;
					cy.get("@announcer").should("have.text", title);
				});
			});
		});
	});

	describe("Message Announcer", () => {
		beforeEach(() => {
			cy.visit(MESSAGES_STORY_URL);

			cy.findByRole("button", { name: "Pay 9.99€" }).as("Submit");
			cy.findByTestId("rat-announcer").as("announcer");
		});

		it("should be empty by default", () => {
			cy.get("@announcer").should("not.have.text");
		});

		it("should announce a change after submission", () => {
			cy.get("@Submit").click();
			cy.get("@announcer").should("have.text", "The money it's on the way! Thank you!");
		});
	});
});
