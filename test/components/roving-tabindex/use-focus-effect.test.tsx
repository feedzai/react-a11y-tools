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
import { renderHook } from "@testing-library/react-hooks";
import { useFocus } from "../../../src/components/roving-tabindex/use-focus-effect";

describe("useFocus", () => {
	test("does not focus on mount when false", () => {
		const focusMock = jest.fn();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const mockRef = { current: { focus: focusMock } } as React.RefObject<any>;
		const { rerender } = renderHook(() => useFocus(mockRef, false));
		expect(focusMock).toBeCalledTimes(0);
		rerender();
		expect(focusMock).toBeCalledTimes(0);
	});

	test("focuses on mount when true", () => {
		const focusMock = jest.fn();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const mockRef = { current: { focus: focusMock } } as React.RefObject<any>;
		const { rerender } = renderHook(() => useFocus(mockRef, true));
		expect(focusMock).toBeCalledTimes(1);
		rerender();
		expect(focusMock).toBeCalledTimes(1);
	});

	test("focuses when focus value changes to true", () => {
		let focused = false;
		const focusMock = jest.fn();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const mockRef = { current: { focus: focusMock } } as React.RefObject<any>;
		const { rerender } = renderHook(() => useFocus(mockRef, focused));

		focused = true;
		rerender();
		expect(focusMock).toBeCalledTimes(1);
		rerender();
		expect(focusMock).toBeCalledTimes(1);

		focused = false;
		rerender();
		expect(focusMock).toBeCalledTimes(1);
	});
});
