/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * useTabbable.test.js
 *
 * Test suite for the custom hook for tabbable html elements
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { mountHook } from "@cypress/react";
import { useTabbable } from "../../../src/hooks/useTabbable";

const ELEMENT_PROPS = {
	focusable: true,
	disabled: false,
	children: "An element content",
	"data-testid": "fdz-js-element",
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
		mountHook(() =>
			useTabbable({
				...props,
				disabled: true,
			}),
		).then(({ current }) => {
			expect(current).to.have.property("aria-disabled", true);
			expect(current).to.have.property("disabled", undefined);
		});
	});

	it("should disable an element natively", () => {
		mountHook(() =>
			useTabbable({
				...props,
				focusable: false,
				disabled: true,
			}),
		).then(({ current }) => {
			expect(current).to.have.property("aria-disabled", undefined);
			expect(current).to.have.property("disabled", true);
		});
	});

	it("should enable an element", () => {
		// Native element
		mountHook(() =>
			useTabbable({
				...props,
				focusable: false,
				disabled: false,
			}),
		).then(({ current }) => {
			expect(current).to.have.property("aria-disabled", undefined);
			expect(current).to.have.property("disabled", false);
		});

		// Focusable element
		mountHook(() =>
			useTabbable({
				...props,
				focusable: true,
				disabled: false,
			}),
		).then(({ current }) => {
			expect(current).to.have.property("aria-disabled", undefined);
			expect(current).to.have.property("disabled", false);
		});
	});
});
