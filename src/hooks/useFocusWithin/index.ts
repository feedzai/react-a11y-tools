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
 * index.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import { callIfExists } from "../../helpers";
import { FocusEvent, useCallback, useRef } from "react";
import { useSyntheticBlurEvent } from "./helpers";
import { UseFocusWithinProps, UseFocusWithinReturns } from "./types";

/**
 * Handles focus events for the target and its descendants.
 *
 * @export
 * @param {UseFocusWithinProps} { onBlurWithin, onFocusWithin, onFocusWithinChange }
 * @returns {UseFocusWithinReturns}
 */
export function useFocusWithin({
	onBlurWithin,
	onFocusWithin,
	onFocusWithinChange,
}: UseFocusWithinProps): UseFocusWithinReturns {
	const state = useRef({
		isFocusWithin: false,
	});

	const onBlur = useCallback(
		(event: FocusEvent) => {
			// We don't want to trigger onBlurWithin and then immediately onFocusWithin again
			// when moving focus inside the element. Only trigger if the currentTarget doesn't
			// include the relatedTarget (where focus is moving).
			if (
				state.current.isFocusWithin &&
				!(event.currentTarget as Element).contains(event.relatedTarget as Element)
			) {
				state.current.isFocusWithin = false;

				callIfExists(onBlurWithin, event);
				callIfExists(onFocusWithinChange, false);
			}
		},
		[onBlurWithin, onFocusWithinChange, state],
	);

	const onSyntheticFocus = useSyntheticBlurEvent(onBlur);
	const onFocus = useCallback(
		(event: FocusEvent) => {
			if (!state.current.isFocusWithin) {
				callIfExists(onFocusWithin, event);
				callIfExists(onFocusWithinChange, true);

				state.current.isFocusWithin = true;
				onSyntheticFocus(event);
			}
		},
		[onFocusWithin, onFocusWithinChange, onSyntheticFocus],
	);

	return {
		focusWithinProps: {
			onFocus,
			onBlur,
		},
	};
}
