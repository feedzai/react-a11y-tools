/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * merge-event-handlers.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */
import { SyntheticEvent } from "react";

/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */
export function mergeEventHandlers<
	EventType extends SyntheticEvent | Event
>(
	theirHandler: ((event: EventType) => any) | undefined,
	ourHandler: (event: EventType) => any
): (event: EventType) => any {
	return (event) => {
		theirHandler && theirHandler(event);
		if (!event.defaultPrevented) {
			return ourHandler(event);
		}
	};
}
