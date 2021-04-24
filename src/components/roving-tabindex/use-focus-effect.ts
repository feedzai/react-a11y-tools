/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
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
