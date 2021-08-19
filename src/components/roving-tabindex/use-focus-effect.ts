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
import { useEffect, RefObject } from "react";

/**
 * Invokes focus() on ref as a layout effect whenever focus changes from false to true.
 *
 * @param {boolean | null} [focused]
 * @param {RefObject<SVGElement | HTMLElement>} ref
 * @returns {void}
 */
export function useFocus(ref: RefObject<SVGElement | HTMLElement>, focused?: boolean | null): void {
	useEffect(() => {
		if (focused && ref.current) {
			ref.current.focus();
		}
	}, [ref, focused]);
}
