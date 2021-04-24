/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * usePrevious.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
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
