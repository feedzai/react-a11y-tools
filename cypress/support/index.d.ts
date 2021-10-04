declare namespace Cypress {
	interface Chainable {
		snapshot(name?: string): void;
		tab(options?: Partial<{ shift: boolean }>): Chainable;

		/**
		 * Presses the tab key until a predicate element is true.
		 *
		 * It accepts a callback for finding the target element, and an optional shift key to tab backwards.
		 *
		 * This commmand is specially useful to avoid chaining `.tab()` multiple times before reaching an element,
		 * as well as a way to find possible unwanted focus traps.
		 *
		 * @requires `cypress-plugin-tab` as a dependency
		 *
		 * @example
		 *
		 * // Press tab until cypress finds the tab with the name "Transaction History"
		 * cy.tabUntil(() => cy.getTab("Transaction History"));
		 *
		 * // Press tab until cypress finds the tab with the name "Transaction History",
		 * // BUT travel backwards, using the `Shift+Tab` key combo
		 * cy.tabUntil(() => cy.getTab("Transaction History", true));
		 *
		 * @template GenericCallback Infered type from the callback itself
		 * @param {(() => GenericCallback | Cypress.Chainable<JQuery<HTMLElement>>)} element the target element that will stop the tab press
		 * @param {boolean} shift use the shift key along to tab backwards instead
		 * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
		 * @memberof Chainable
		 */
		tabUntil<GenericCallback>(
			element: () => GenericCallback | Cypress.Chainable<JQuery<HTMLElement>>,
			shift?: boolean,
		): Cypress.Chainable<JQuery<HTMLElement>>;
	}
}
