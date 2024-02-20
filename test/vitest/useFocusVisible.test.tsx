/// <reference types="vitest/globals" />

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
import { describe, it, expect, beforeEach } from "vitest";
import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { useFocusVisible } from "../../src/hooks";

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
		const element = screen.getAllByTestId("fdz-js-element")[0];

		fireEvent.keyDown(element, { key: "Tab" });
		toggleBrowserTabs();

		expect(element).toHaveAttribute("data-focus-visible", "true");
	});

	it("returns positive isFocusVisible result after toggling browser window after keyboard navigation", () => {
		render(<Example />);
		const element = screen.getAllByTestId("fdz-js-element")[0];

		fireEvent.keyDown(element, { key: "Tab" });
		toggleBrowserWindow();

		expect(element).toHaveAttribute("data-focus-visible", "true");
	});

	it("returns negative isFocusVisible result after toggling browser window without prior keyboard navigation", () => {
		render(<Example />);
		const element = screen.getAllByTestId("fdz-js-element")[0];

		fireEvent.mouseDown(element);
		toggleBrowserWindow();

		expect(element).toHaveAttribute("data-focus-visible", "false");
	});
});
