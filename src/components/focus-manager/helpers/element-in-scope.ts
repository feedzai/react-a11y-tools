/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * element-in-scope.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { RefObject } from "react";

/**
 * Check if an element is in the scope
 *
 * @param {(Element | null)} element
 * @param {(HTMLElement[] | null)} scope
 * @returns {boolean | undefined}
 */
export function isElementInScope(
	element: Element | null,
	scope: HTMLElement[] | null,
): boolean | undefined {
	return scope?.some((node) => node.contains(element));
}

/**
 * @param {(Element | null)} element
 * @param {Set<RefObject<HTMLElement[]>>} scopes
 * @returns {boolean}
 */
export function isElementInAnyScope(
	element: Element | null,
	scopes: Set<RefObject<HTMLElement[]>>,
): boolean {
	for (const scope of scopes.values()) {
		if (isElementInScope(element, scope.current)) {
			return true;
		}
	}
	return false;
}
