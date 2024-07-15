/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import { FocusManagerProps } from "../types";
import { Options } from "focus-trap";

/**
 * Sets the initial focus element.
 */
export function getInitialFocus(
	autoFocus: FocusManagerProps["autoFocus"],
	initialFocus: Options["initialFocus"],
) {
	// If true, resumes the normal behaviour
	if (autoFocus === true) {
		return undefined;
	}

	// If false, prevents the autoFocus from happening
	else if (autoFocus === false) {
		return false;
	}

	// If is nil, uses the value defined in the `initialFocus` param,
	// which if also nil, resumes the normal behaviour
	return initialFocus;
}

/**
 * Sets the fallback focus element to a:
 * 1. Defined option as prop
 * 2. A fallback ref element
 */
export function getFallbackFocus<GenericElement extends HTMLElement>(
	element: GenericElement | null,
	fallbackFocus: Options["fallbackFocus"],
) {
	if (fallbackFocus) {
		return fallbackFocus;
	}

	return element ?? undefined;
}

/**
 * Returns the correct prop value for the return focus functionality.
 */
export function getReturnFocusProps(restoreFocus: FocusManagerProps["restoreFocus"]) {
	if (restoreFocus && restoreFocus === true) {
		return {
			returnFocusOnDeactivate: true,
		};
	}

	return {
		setReturnFocus: restoreFocus,
	};
}
