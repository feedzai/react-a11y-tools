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
const ROVER_STORY_URL = "/iframe.html?id=navigation-skip-links--skip-links&args=&viewMode=story";

describe("Skip Links", () => {
	beforeEach(() => {
		cy.visit(ROVER_STORY_URL);
		cy.findByRole("link", { name: "Skip to main content" }).as("SkipMainContent");
		cy.findByRole("link", { name: "Go to navigation menu" }).as("SkipNavigationMenu");
		cy.findByRole("main").as("MainContent");
		cy.findByRole("navigation").as("NavigationMenu");
	});

	it("should not show any skip link by default", () => {
		cy.get("@SkipMainContent").should("not.have.focus");
		cy.get("@SkipNavigationMenu").should("not.have.focus");
	});

	it("should show skip links on pressing the Tab key", () => {
		cy.get("body").tab();
		cy.get("@SkipMainContent").should("have.focus");

		cy.focused().tab();
		cy.get("@SkipMainContent").should("not.have.focus");
		cy.get("@SkipNavigationMenu").should("have.focus");
	});
});
