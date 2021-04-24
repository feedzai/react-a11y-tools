/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
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
