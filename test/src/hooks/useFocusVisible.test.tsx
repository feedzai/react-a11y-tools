/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2022 Feedzai, Rights Reserved.
 */

/**
 * useFocusVisible.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { useFocusVisible, useFocusVisibleListener } from "../../../src/hooks";

function Example({ id }: { id?: string }) {
	const { isFocusVisible } = useFocusVisible();

	return (
		<p id={id} data-testid="fdz-js-element" data-focus-visible={isFocusVisible}>
			Text
		</p>
	);
}

/**
 * This describes Chrome behaviour only, for other browsers visibilitychange fires after all focus events.
 */
function toggleBrowserTabs() {
	// leave tab
	const lastActiveElement = document.activeElement;
	fireEvent(lastActiveElement as Element, new Event("blur"));
	fireEvent(window, new Event("blur"));

	Object.defineProperty(document, "visibilityState", {
		value: "hidden",
		writable: true,
	});
	Object.defineProperty(document, "hidden", { value: true, writable: true });

	fireEvent(document, new Event("visibilitychange"));

	// return to tab
	Object.defineProperty(document, "visibilityState", {
		value: "visible",
		writable: true,
	});
	Object.defineProperty(document, "hidden", { value: false, writable: true });

	fireEvent(document, new Event("visibilitychange"));
	fireEvent(window, new Event("focus", { target: window } as EventInit));
	fireEvent(lastActiveElement as Element, new Event("focus"));
}

function toggleBrowserWindow() {
	fireEvent(window, new Event("blur", { target: window } as EventInit));
	fireEvent(window, new Event("focus", { target: window } as EventInit));
}

describe("useFocusVisible", () => {
	beforeEach(() => {
		fireEvent.focus(document.body);
	});

	it("returns positive isFocusVisible result after toggling browser tabs after keyboard navigation", () => {
		render(<Example />);
		const element = screen.getByTestId("fdz-js-element");

		fireEvent.keyDown(element, { key: "Tab" });
		toggleBrowserTabs();

		expect(element).toHaveAttribute("data-focus-visible", "true");
	});

	it("returns negative isFocusVisible result after toggling browser tabs without prior keyboard navigation", () => {
		render(<Example />);
		const element = screen.getByTestId("fdz-js-element");

		fireEvent.mouseDown(element);
		toggleBrowserTabs();

		expect(element).toHaveAttribute("data-focus-visible", "false");
	});

	it("returns positive isFocusVisible result after toggling browser window after keyboard navigation", () => {
		render(<Example />);
		const element = screen.getByTestId("fdz-js-element");

		fireEvent.keyDown(element, { key: "Tab" });
		toggleBrowserWindow();

		expect(element).toHaveAttribute("data-focus-visible", "true");
	});

	it("returns negative isFocusVisible result after toggling browser window without prior keyboard navigation", () => {
		render(<Example />);
		const element = screen.getByTestId("fdz-js-element");

		fireEvent.mouseDown(element);
		toggleBrowserWindow();

		expect(element).toHaveAttribute("data-focus-visible", "false");
	});
});

describe("useFocusVisibleListener", () => {
	it("emits on modality change (non-text input)", () => {
		const onFocusHandler = jest.fn();
		renderHook(() => useFocusVisibleListener(onFocusHandler, []));
		expect(onFocusHandler).toHaveBeenCalledTimes(0);
		act(() => {
			fireEvent.keyDown(document.body, { key: "a" });
			fireEvent.keyUp(document.body, { key: "a" });
			fireEvent.keyDown(document.body, { key: "Escape" });
			fireEvent.keyUp(document.body, { key: "Escape" });
			fireEvent.mouseDown(document.body);
			fireEvent.mouseUp(document.body); // does not trigger change handlers (but included for completeness)
		});
		expect(onFocusHandler).toHaveBeenCalledTimes(5);
		expect(onFocusHandler.mock.calls).toEqual([[true], [true], [true], [true], [false]]);
	});

	it("emits on modality change (text input)", () => {
		const onFocusHandler = jest.fn();
		renderHook(() => useFocusVisibleListener(onFocusHandler, [], { isTextInput: true }));
		expect(onFocusHandler).toHaveBeenCalledTimes(0);
		act(() => {
			fireEvent.keyDown(document.body, { key: "a" });
			fireEvent.keyUp(document.body, { key: "a" });
			fireEvent.keyDown(document.body, { key: "Escape" });
			fireEvent.keyUp(document.body, { key: "Escape" });
			fireEvent.mouseDown(document.body);
			fireEvent.mouseUp(document.body); // does not trigger change handlers (but included for completeness)
		});
		expect(onFocusHandler).toHaveBeenCalledTimes(3);
		expect(onFocusHandler.mock.calls).toEqual([[true], [true], [false]]);
	});
});
