/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * skip-links.spec.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
const ROVER_STORY_URL = "/docs/navigation/skip-links";

describe("Skip Links", () => {
	beforeEach(() => {
		cy.visit(ROVER_STORY_URL);

		cy.findByTestId("fdz-js-docs-browser-window").as("preview");

		cy.get("@preview").within(() => {
			cy.findByRole("link", { name: "Skip to main content" }).as("SkipMainContent");
			cy.findByRole("link", { name: "Go to navigation menu" }).as("SkipNavigationMenu");
			cy.findByTestId("fdz-js-skip-links-main").as("MainContent");
			cy.findByTestId("fdz-js-skip-links-nav").as("NavigationMenu");
		});
	});

	it("should not show any skip link by default", () => {
		cy.get("@SkipMainContent").should("not.have.focus");
		cy.get("@SkipNavigationMenu").should("not.have.focus");
	});

	it("should show skip links on pressing the Tab key", () => {
		cy.get("@preview").within(() => {
			cy.findByTestId("fdz-js-skip-links-target-button").tab();
			cy.get("@SkipMainContent").should("have.focus");

			cy.focused().tab();
			cy.get("@SkipMainContent").should("not.have.focus");
			cy.get("@SkipNavigationMenu").should("have.focus");
		});
	});
});
