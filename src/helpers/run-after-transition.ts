
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * run-after-transition.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
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
