/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-plugin-tab/src/index.d" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * focus-manager.spec.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { FOCUSABLE_ELEMENT_SELECTOR } from "../selectors/focusable";

const STORY_URL = "/iframe.html?id=focus-focus-manager--focus-manager&args=&viewMode=story";

describe("Focus Manager", () => {
	beforeEach(() => {
		cy.visit(STORY_URL);

		cy.findByRole("button", { name: "Show Menu" }).as("MenuButton");
	});

	describe("Focus management", () => {
		beforeEach(() => {
			cy.get("@MenuButton").click();
			cy.findByRole("dialog").as("Menu");
		});

		describe("focus trap", () => {
			it("should place focus on the first valid HTML element", () => {
				cy.get("@Menu").findByRole("button", { name: "Close" }).should("have.focus");
			});

			describe("roving tab index", () => {
				beforeEach(() => {
					cy.get("@Menu").within(() => {
						cy.get(`${FOCUSABLE_ELEMENT_SELECTOR}`).as("allFocusableElements");
					});
				});

				describe("should place focus", () => {
					it("on the last menu item when the user presses shift+tab on the first element", () => {
						cy.get("@Menu").within(() => {
							cy.focused().tab({ shift: true });
							cy.get("@allFocusableElements").last().should("have.focus");
						});
					});

					it("on the first menu item when the user goes over the last element", () => {
						cy.get("@Menu").within(() => {
							cy.focused().tab().tab().tab().tab().tab().tab().tab().tab();
							cy.get("@allFocusableElements").first().should("have.focus");
						});
					});
				});
			});
		});

		it("should restore focus when the focus-managerped menu closes", () => {
			cy.get("@MenuButton").click();
			cy.get("@Menu").within(() => {
				cy.focused().tab().tab().tab().tab().tab().tab().tab().tab().click();
			});
			cy.get("@MenuButton").should("have.focus");
		});
	});
});
