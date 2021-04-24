/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me, No Rights Reserved.
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
