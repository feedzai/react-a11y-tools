/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
const ROVER_STORY_URL = "/docs/content-and-navigation/skip-links";

describe("Skip Links", () => {
	beforeEach(() => {
		cy.visit(ROVER_STORY_URL);

		cy.findByTestId("js-docs-browser-window").as("preview");

		cy.get("@preview").within(() => {
			cy.findByRole("link", { name: "Skip to main content" }).as("SkipMainContent");
			cy.findByRole("link", { name: "Go to navigation menu" }).as("SkipNavigationMenu");
			cy.findByTestId("js-skip-links-main").as("MainContent");
			cy.findByTestId("js-skip-links-nav").as("NavigationMenu");
		});
	});

	it("should not show any skip link by default", () => {
		cy.get("@SkipMainContent").should("not.have.focus");
		cy.get("@SkipNavigationMenu").should("not.have.focus");
	});

	it("should show skip links on pressing the Tab key", () => {
		cy.get("@preview").within(() => {
			cy.findByTestId("js-skip-links-target-button").click().realPress("Tab");
			cy.get("@SkipMainContent").should("have.focus");

			cy.focused().realPress("Tab");
			cy.get("@SkipMainContent").should("not.have.focus");
			cy.get("@SkipNavigationMenu").should("have.focus");
		});
	});
});
