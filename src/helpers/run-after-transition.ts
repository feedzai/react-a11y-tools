/* istanbul ignore file */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
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
