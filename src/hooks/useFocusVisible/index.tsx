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
 * useFocusVisible.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

import { useEffect, useState } from "react";
import {
	FocusVisibleHandler,
	FocusVisibleProps,
	FocusVisibleResult,
	Handler,
	HandlerEvent,
	Modality,
} from "./types";

const changeHandlers = new Set<Handler>();
let currentModality: Modality | null = null;
let hasSetupGlobalListeners = false;
let hasEventBeforeFocus = false;
let hasBlurredWindowRecently = false;

// Only Tab or Esc keys will make focus visible on text input elements
const FOCUS_VISIBLE_INPUT_KEYS = {
	Tab: true,
	Escape: true,
};

function triggerChangeHandlers(modality: Modality, event: HandlerEvent | null) {
	for (const handler of changeHandlers) {
		handler(modality, event);
	}
}

/**
 * Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
 * click event. This is a method of inferring such clicks. Every browser except
 * IE 11 only sets a zero value of "detail" for click events that are "virtual".
 * However, IE 11 uses a zero value for all click events. For IE 11 we rely on
 * the quirk that it produces click events that are of type PointerEvent, and
 * where only the "virtual" click lacks a pointerType field.
 *
 * @export
 * @param {(MouseEvent | PointerEvent)} event
 * @returns {*}  {boolean}
 */
export function isVirtualClick(event: MouseEvent | PointerEvent): boolean {
	// JAWS/NVDA with Firefox.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	if ((event as any).mozInputSource === 0 && event.isTrusted) {
		return true;
	}

	return event.detail === 0 && !(event as PointerEvent).pointerType;
}

/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */
function isValidKey(event: KeyboardEvent) {
	// Control and Shift keys trigger when navigating back to the tab with keyboard.
	return !(
		event.metaKey ||
		(!/^Mac/i.test((window.navigator["userAgentData"] || window.navigator).platform) &&
			event.altKey) ||
		event.ctrlKey ||
		event.key === "Control" ||
		event.key === "Shift" ||
		event.key === "Meta"
	);
}

function handleKeyboardEvent(event: KeyboardEvent) {
	hasEventBeforeFocus = true;
	if (isValidKey(event)) {
		currentModality = "keyboard";
		triggerChangeHandlers("keyboard", event);
	}
}

function handlePointerEvent(e: PointerEvent | MouseEvent) {
	currentModality = "pointer";
	if (e.type === "mousedown" || e.type === "pointerdown") {
		hasEventBeforeFocus = true;
		triggerChangeHandlers("pointer", e);
	}
}

function handleClickEvent(event: MouseEvent) {
	if (isVirtualClick(event)) {
		hasEventBeforeFocus = true;
		currentModality = "virtual";
	}
}

function handleFocusEvent(e: FocusEvent) {
	// Firefox fires two extra focus events when the user first clicks into an iframe:
	// first on the window, then on the document. We ignore these events so they don't
	// cause keyboard focus rings to appear.
	if (e.target === window || e.target === document) {
		return;
	}

	// If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
	// This occurs, for example, when navigating a form with the next/previous buttons on iOS.
	if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
		currentModality = "virtual";
		triggerChangeHandlers("virtual", e);
	}

	hasEventBeforeFocus = false;
	hasBlurredWindowRecently = false;
}

function handleWindowBlur() {
	// When the window is blurred, reset state. This is necessary when tabbing out of the window,
	// for example, since a subsequent focus event won't be fired.
	hasEventBeforeFocus = false;
	hasBlurredWindowRecently = true;
}

/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */
function setupGlobalFocusEvents() {
	if (typeof window === "undefined" || hasSetupGlobalListeners) {
		return;
	}

	// Programmatic focus() calls shouldn't affect the current input modality.
	// However, we need to detect other cases when a focus event occurs without
	// a preceding user event (e.g. screen reader focus). Overriding the focus
	// method on HTMLElement.prototype is a bit hacky, but works.
	const focus = HTMLElement.prototype.focus;
	HTMLElement.prototype.focus = function () {
		hasEventBeforeFocus = true;
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		// eslint-disable-next-line prefer-rest-params
		focus.apply(this, arguments);
	};

	document.addEventListener("keydown", handleKeyboardEvent, true);
	document.addEventListener("keyup", handleKeyboardEvent, true);
	document.addEventListener("click", handleClickEvent, true);

	// Register focus events on the window so they are sure to happen
	// before React's event listeners (registered on the document).
	window.addEventListener("focus", handleFocusEvent, true);
	window.addEventListener("blur", handleWindowBlur, false);

	if (typeof PointerEvent !== "undefined") {
		document.addEventListener("pointerdown", handlePointerEvent, true);
		document.addEventListener("pointermove", handlePointerEvent, true);
		document.addEventListener("pointerup", handlePointerEvent, true);
	} else {
		document.addEventListener("mousedown", handlePointerEvent, true);
		document.addEventListener("mousemove", handlePointerEvent, true);
		document.addEventListener("mouseup", handlePointerEvent, true);
	}

	hasSetupGlobalListeners = true;
}

if (typeof document !== "undefined") {
	if (document.readyState !== "loading") {
		setupGlobalFocusEvents();
	} else {
		document.addEventListener("DOMContentLoaded", setupGlobalFocusEvents);
	}
}

/**
 * If true, keyboard focus is visible.
 */
export function isFocusVisible(): boolean {
	return currentModality !== "pointer";
}

export function getInteractionModality(): Modality | null {
	return currentModality;
}

export function setInteractionModality(modality: Modality) {
	currentModality = modality;
	triggerChangeHandlers(modality, null);
}

/**
 * Keeps state of the current modality.
 *
 * @export
 * @returns {{(Modality | null)}}
 */
export function useInteractionModality(): Modality | null {
	setupGlobalFocusEvents();

	const [modality, setModality] = useState(currentModality);
	useEffect(() => {
		const handler = () => {
			setModality(currentModality);
		};

		changeHandlers.add(handler);
		return () => {
			changeHandlers.delete(handler);
		};
	}, []);

	return modality;
}

/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 *
 * @param {(boolean | undefined)} isTextInput
 * @param {Modality} modality
 * @param {(HandlerEvent | null)} event
 * @returns {*}  {boolean}
 */
function isKeyboardFocusEvent(
	isTextInput: boolean | undefined,
	modality: Modality,
	event: HandlerEvent | null,
) {
	return !(
		isTextInput &&
		modality === "keyboard" &&
		event instanceof KeyboardEvent &&
		!FOCUS_VISIBLE_INPUT_KEYS[event.key as "Tab" | "Escape"]
	);
}

/**
 * Manages focus visible state for the page, and subscribes individual components for updates.
 *
 * @export
 * @param {FocusVisibleProps} [props={}]
 * @returns {FocusVisibleResult}
 */
export function useFocusVisible(props: FocusVisibleProps = {}): FocusVisibleResult {
	const { isTextInput, autoFocus } = props;
	const [isFocusVisibleState, setFocusVisible] = useState(autoFocus || isFocusVisible());

	useFocusVisibleListener(
		(isFocusVisible) => {
			setFocusVisible(isFocusVisible);
		},
		[isTextInput],
		{ isTextInput },
	);

	return { isFocusVisible: isFocusVisibleState };
}

/**
 * Listens for trigger change and reports if focus is visible (i.e., modality is not pointer).
 *
 * @export
 * @param {FocusVisibleHandler} fn
 * @param {ReadonlyArray<any>} deps
 * @param {{ isTextInput?: boolean }} [opts]
 */
export function useFocusVisibleListener(
	fn: FocusVisibleHandler,
	deps: ReadonlyArray<any>,
	opts?: { isTextInput?: boolean },
): void {
	setupGlobalFocusEvents();

	useEffect(() => {
		const handler = (modality: Modality, event: HandlerEvent | null) => {
			if (!isKeyboardFocusEvent(opts?.isTextInput, modality, event)) {
				return;
			}
			fn(isFocusVisible());
		};
		changeHandlers.add(handler);
		return () => {
			changeHandlers.delete(handler);
		};
	}, deps);
}
