/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * commands.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import "cypress-plugin-tab";
import "@testing-library/cypress/add-commands";
import "cypress-real-events/support";
import "cypress-axe";
import { recurse } from "cypress-recurse";

/**
 * Presses the tab key until a predicate element is true.
 * It accepts a callback for finding the target element, and an optional shift element to tab backwards.
 * This commmand is specially useful to avoid chaining `.tab()` multiple times before reaching an element.
 *
 * @requires `cypress-plugin-tab` needs to be installed
 *
 * @example
 *
 * // Press tab until cypress finds the tab with the name "Transaction History"
 * cy.tabUntil(() => cy.getTab("Transaction History"));
 *
 * // Press tab until cypress finds the tab with the name "Transaction History",
 * // BUT travel backwards, using the `Shift+Tab` key combo
 * cy.tabUntil(() => cy.getTab("Transaction History", true));
 */
Cypress.Commands.add(
	"tabUntil",
	/**
	 * @param {IGetElement} getElement the target element that will stop the tab press
	 * @param {boolean} [shift] use the shift key along to tab backwards instead
	 * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
	 * @memberof Chainable
	 */
	(getElement, shift = false) => {
		return recurse(
			() => getElement(),
			/**
			 * Element assertion.
			 *
			 * @param {JQuery<HTMLElement>} $el
			 * @returns {boolean}
			 */
			($el) => $el.is(":focus"),
			{
				log: "Found the element!",
				post() {
					cy.focused().tab({ shift });
				},
			},
		).should("have.focus");
	},
);
