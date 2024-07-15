/* eslint-disable @typescript-eslint/no-namespace */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * commands.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import "@testing-library/cypress/add-commands";
import "cypress-real-events/support";
import "./a11y";
import { isAriaDisabled } from "./a11y/assertions/isAriaDisabled";
import { recurse } from "cypress-recurse";
import { mount, unmount } from "cypress/react";

chai.use(isAriaDisabled);

declare global {
	namespace Cypress {
		interface Chainable {
			tab(options?: Partial<{ shift: boolean }>): Chainable;

			/**
			 * Presses the tab key until a predicate element is true.
			 * It accepts a callback for finding the target element, and an optional shift element to tab backwards.
			 * This commmand is specially useful to avoid chaining `.realPress("Tab")` multiple times before reaching an element.
			 *
			 * @requires `cypress-real-events` needs to be installed
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
			tabUntil<GenericCallback extends Cypress.Chainable<JQuery<HTMLElement>>>(
				element: () => GenericCallback,
				shift?: boolean,
			): Cypress.Chainable<JQuery<HTMLElement>>;

			mount: typeof mount;
			unmount: typeof unmount;
		}
	}
}

function tab<GenericSubject>(
	prevSubject: GenericSubject,
	options: Partial<{ shift: boolean }> = { shift: false },
) {
	return cy.wrap(prevSubject).realPress(options.shift ? ["Shift", "Tab"] : "Tab");
}

function tabUntil<GenericCallback extends Cypress.Chainable<JQuery<HTMLElement>>>(
	getElement: () => GenericCallback,
	shift = false,
) {
	return recurse(
		() => getElement(),
		/**
		 * Element assertion.
		 *
		 * @param {JQuery<HTMLElement>} $el
		 * @returns {boolean}
		 */
		($el: JQuery<HTMLElement>): boolean => $el.is(":focus"),
		{
			log: "Found the element!",
			post() {
				cy.focused().realPress(shift ? ["Shift", "Tab"] : "Tab");
			},
		},
	).should("have.focus");
}

Cypress.Commands.add("tab", { prevSubject: ["element"] }, tab);

Cypress.Commands.add("tabUntil", tabUntil);
