/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import { useEffect, useRef } from "react";

/**
 * React state hook that returns the previous state as described in the React hooks FAQ.
 * {@link https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state}
 *
 * @export
 * @template GenericType
 * @param {GenericType} state
 * @returns {(GenericType | undefined)}
 */
export function usePrevious<GenericType>(state: GenericType): GenericType | undefined {
	const ref = useRef<GenericType>();

	useEffect(() => {
		ref.current = state;
	});

	return ref.current;
}
