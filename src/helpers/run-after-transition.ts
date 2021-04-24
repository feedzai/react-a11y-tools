/* istanbul ignore file */
/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me, No Rights Reserved.
 */
const transitionsByElement = new Map<EventTarget, Set<string>>();
const transitionCallbacks = new Set<() => void>();

export function runAfterTransition(fn: () => void): void {
	requestAnimationFrame(() => {
		if (transitionsByElement.size === 0) {
			fn();
		} else {
			transitionCallbacks.add(fn);
		}
	});
}
