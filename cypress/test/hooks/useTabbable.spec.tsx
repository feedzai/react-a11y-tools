/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
import React from "react";
import { useTabbable } from "../../../src/hooks";

const ELEMENT_PROPS = {
	focusable: true,
	disabled: false,
	children: "An element content",
	"data-testid": "js-element",
};

const DemoComponent = (hookProps: typeof ELEMENT_PROPS) => {
	const tabbableProps = useTabbable(hookProps);
	return (
		<button type="button" {...tabbableProps}>
			A Button
		</button>
	);
};

describe("useTabbable", () => {
	let props: {
		focusable: boolean;
		disabled: boolean;
		children: string;
		"data-testid": string;
	};

	beforeEach(() => {
		props = ELEMENT_PROPS;
	});

	it("should disable an element semantically", () => {
		const CUSTOM_PROPS: typeof props = {
			...props,
			disabled: true,
		};

		cy.mount(<DemoComponent {...CUSTOM_PROPS} />);

		cy.findByRole("button").should("not.be.disabled").and("have.attr", "aria-disabled", "true");
	});

	it("should disable an element natively", () => {
		const CUSTOM_PROPS: typeof props = {
			...props,
			focusable: false,
			disabled: true,
		};

		cy.mount(<DemoComponent {...CUSTOM_PROPS} />);

		cy.findByRole("button").should("be.disabled").and("not.have.attr", "aria-disabled", "true");
	});

	context("should enable an element", () => {
		it("natively", () => {
			const CUSTOM_PROPS: typeof props = {
				...props,
				focusable: false,
				disabled: false,
			};

			cy.mount(<DemoComponent {...CUSTOM_PROPS} />);

			cy.findByRole("button")
				.should("not.be.disabled")
				.and("not.have.attr", "aria-disabled", "true");
		});

		it("focusable", () => {
			const CUSTOM_PROPS: typeof props = {
				...props,
				focusable: true,
				disabled: false,
			};

			cy.mount(<DemoComponent {...CUSTOM_PROPS} />);

			cy.findByRole("button")
				.should("not.be.disabled")
				.and("not.have.attr", "aria-disabled", "true");
		});
	});
});
