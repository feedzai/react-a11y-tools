declare namespace Cypress {
	interface Chainable {
		snapshot(name?: string): void;
		tab(options?: Partial<{ shift: Boolean }>): Chainable;
	}
}
