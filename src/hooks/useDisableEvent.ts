/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { useCallback } from "react";

export type UseDisableEventReturns = (event: React.SyntheticEvent) => void;

/**
 * Disables an event bubbling up on a DOM element
 *
 * @export
 * @param {boolean} [disabled]
 * @returns {UseDisableEventReturns}
 */
export function useDisableEvent(disabled?: boolean): UseDisableEventReturns {
	return useCallback(
		/**
		 * @param {SyntheticEvent} event
		 * @returns {void}
		 */
		(event: React.SyntheticEvent) => {
			// Returns early if the event has been prevented previously
			if (event.defaultPrevented) {
				return;
			}

			// If an element is disabled, then stops the event bubbling and prevents its
			// default behaviour
			if (disabled) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		[disabled],
	);
}
