/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * use-focus-effect.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { RefObject } from "react";
import { useSafeLayoutEffect } from "../../hooks/index";

/**
 * Invokes focus() on ref as a layout effect whenever focusesd
 * changes from false to true.
 *
 * @template GenericType
 * @param {boolean | null} [focused]
 * @param {RefObject<GenericType | any>} ref
 * @returns {void}
 */
export function useFocus<GenericType>(
	ref: RefObject<GenericType | any>,
	focused?: boolean | null,
): void {
	useSafeLayoutEffect(() => {
		if (focused && ref.current) {
			ref.current.focus();
		}
	}, [ref, focused]);
}
