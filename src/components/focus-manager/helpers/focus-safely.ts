/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * focus-safely.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { focusWithoutScrolling } from "../../../helpers/focus-without-scrolling";
import { runAfterTransition } from "../../../helpers/run-after-transition";

/**
 * A utility function that focuses an element while avoiding undesired side effects such
 * as page scrolling and screen reader issues with CSS transitions.
 */
export function focusSafely(element: HTMLElement): void {
	const lastFocusedElement = document.activeElement;
	runAfterTransition(() => {
		// If focus did not move and the element is still in the document, focus it.
		/* istanbul ignore else  */
		if (document.activeElement === lastFocusedElement && document.contains(element)) {
			focusWithoutScrolling(element);
		}
	});
}
