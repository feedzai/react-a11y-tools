/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-plugin-tab/src/index.d" />
/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
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
