/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * roving-tabindex.spec.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { FOCUSABLE_ELEMENT_SELECTOR } from "../selectors/focusable";

const ROVER_STORY_URL = "/docs/manage-focus/roving-tabindex";

describe("Roving Tab Index", () => {
	beforeEach(() => {
		cy.visit(ROVER_STORY_URL);
		cy.findByRole("button", { name: "A Button" }).as("FirstButton");
		cy.findByRole("button", { name: "Another Button" }).as("SecondButton");
		cy.findByTestId("fdz-js-roving-tabindex-sidenav").as("Nav");
	});

	it("should not use tab as a means to travel through the menu", () => {
		cy.get("@FirstButton").click();
		cy.tabUntil(() => cy.get("@SecondButton"));
		cy.get("@SecondButton").should("have.focus");
	});

	it("should go through the menu using the down arrow button", () => {
		cy.get("@FirstButton").click();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");
			cy.focused().type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}");
			cy.get("@navButtons").last().should("have.focus");
		});
		cy.focused().realPress("Tab");
		cy.get("@SecondButton").should("have.focus");
	});

	it("should travel to the top of the menu when pressing the Home button", () => {
		cy.get("@FirstButton").click();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");
			cy.focused().type("{downarrow}{downarrow}{downarrow}{downarrow}{home}");
			cy.get("@navButtons").first().should("have.focus");
		});
	});

	it("should travel to the bottom of the menu when pressing the End button", () => {
		cy.get("@FirstButton").click();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");
			cy.focused().type("{downarrow}{downarrow}{downarrow}{downarrow}{home}");
			cy.get("@navButtons").first().should("have.focus");
		});
	});

	it("should travel to the bottom of the menu when pressing the End button", () => {
		cy.get("@FirstButton").click();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");
			cy.focused().type("{downarrow}{end}");
			cy.get("@navButtons").last().should("have.focus");
		});
	});

	it("should not do anything if pressed a non-mapped key", () => {
		cy.get("@FirstButton").click();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");
			cy.focused().type("{del}{insert}{movetoend}{pageup}{pagedown}{rightarrow}");
			cy.get("@navButtons").first().should("have.focus");
		});
	});
});
