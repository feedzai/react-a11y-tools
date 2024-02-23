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
import { focusWithoutScrolling } from "../../helpers";

/**
 * Invokes `focus()` on a DOM element.
 * Supports for a `ref` as well as an `HTMLElement` or `SVGElement`
 *
 * @example
 *
 * // Place the focus on an element with a ref
 * useFocus(buttonRef, true);
 *
 * // or
 * useFocus(buttonRef);
 *
 * // Place the focus on an element queried from the DOM
 * useFocus(document.querySelector("button"), true);
 *
 * // Place the focus on an element with a ref, but prevent scrolling when calling the `focus()` method
 * useFocus(buttonRef, true, false);
 *
 * @export
 * @template GenericElement
 * @param {RefObject<GenericElement>} element
 * @param {(boolean)} [willFocus=true]
 * @param {(boolean)} [scrollWhenFocus=true]
 * @returns {void}
 */
export function useFocus<GenericElement extends HTMLElement | SVGElement>(
	element: RefObject<GenericElement> | GenericElement,
	willFocus: boolean | undefined = true,
	scrollWhenFocus: boolean | undefined = true,
): void {
	useEffect(() => {
		if (willFocus) {
			const DOMElement = "current" in element ? element.current : element;

			if (DOMElement) {
				scrollWhenFocus ? DOMElement.focus() : focusWithoutScrolling(DOMElement);
			}
		}
	}, [element, willFocus]);
}
