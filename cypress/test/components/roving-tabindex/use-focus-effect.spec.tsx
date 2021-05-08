/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * use-focus-effect.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { mountHook } from "@cypress/react";
import { useFocus } from "../../../../src/components/roving-tabindex/use-focus-effect";

describe("useFocus", () => {
	it("does not focus on mount when false", () => {
		const focusMock = cy.stub();
		const mockRef = { current: { focus: focusMock } } as React.RefObject<any>;

		mountHook(() => useFocus(mockRef, false)).then(() => {
			expect(focusMock).to.have.been.callCount(0);
		});
	});

	it("focuses on mount when true", () => {
		const focusMock = cy.stub();
		const mockRef = { current: { focus: focusMock } } as React.RefObject<any>;

		mountHook(() => useFocus(mockRef, true)).then(() => {
			expect(focusMock).to.have.been.callCount(1);
		});
	});
});
