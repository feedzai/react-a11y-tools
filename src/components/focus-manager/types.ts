/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import React, { RefObject } from "react";
import { Props as FocusTrapProps } from "focus-trap-react";
import { Options as FocusTrapOptions } from "focus-trap";
import { FocusTrap } from "focus-trap";

export type RestoreFocusAsOption = FocusTrapOptions["setReturnFocus"];

export interface FocusManagerProps {
	/**
	 * Whether to contain focus inside the scope, so users cannot
	 * move focus outside, for example in a dialog.
	 *
	 * @default true
	 */
	contain?: boolean | "paused";

	/**
	 * Whether to restore focus back to the element that was focused
	 * when the focus scope mounted, after the focus scope unmounts.
	 *
	 * @default true
	 */
	restoreFocus?: true | RestoreFocusAsOption;

	/**
	 * Whether to auto focus the first focusable element in the focus scope on mount
	 *
	 * @default true
	 * */
	autoFocus?: boolean;

	/**
	 * Any type of children inside the FocusManager
	 */
	children: React.ReactNode;

	/**
	 * Extends the functionality of the component using the `focus-trap` package options.
	 * @see {@link https://github.com/focus-trap/focus-trap|FocusTrap documentation}
	 */
	options?: FocusTrapProps["focusTrapOptions"];
}

export type UseFocusManagerWithRef = FocusTrap;
export interface UseFocusManagerAsProps {
	/**
	 * By default, an error will be thrown if the focus trap contains no elements in its tab order.
	 *
	 * With this option you can specify a fallback element to programmatically receive focus if no other tabbable elements are found.
	 *
	 * For example, you may want a popover's <div> to receive focus if the popover's content includes no tabbable elements.
	 * Make sure the fallback element has a negative tabindex so it can be programmatically focused.
	 */
	fallbackRef: RefObject<HTMLDivElement>;

	/**
	 * Pause an active focus trap's event listening without deactivating the trap.
	 * If the focus trap has not been activated, nothing happens.
	 * Returns the trap.
	 *
	 * Any `onDeactivate` callback will not be called, and focus will not return to the element that was focused before the trap's activation.
	 * But the trap's behavior will be paused.
	 * This is useful in various cases, one of which is when you want one focus trap within another.
	 */
	paused: boolean;

	/**
	 * Props for the `FocusTrap` component
	 */
	focusTrapOptions: FocusTrapProps["focusTrapOptions"];
}
