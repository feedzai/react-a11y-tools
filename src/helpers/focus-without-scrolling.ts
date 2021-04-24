/* istanbul ignore file */
/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me, No Rights Reserved.
 */

interface IScrollableElement {
	element: HTMLElement;
	scrollTop: number;
	scrollLeft: number;
}

/**
 * @param {HTMLElement} element
 * @returns {IScrollableElement[]}
 */
function getAllScrollableElements(element: HTMLElement): IScrollableElement[] {
	let parent = element.parentNode;
	const IScrollableElements: IScrollableElement[] = [];
	const rootScrollingElement = document.scrollingElement || document.documentElement;

	while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
		if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
			IScrollableElements.push({
				element: parent,
				scrollTop: parent.scrollTop,
				scrollLeft: parent.scrollLeft,
			});
		}
		parent = parent.parentNode;
	}

	if (rootScrollingElement instanceof HTMLElement) {
		IScrollableElements.push({
			element: rootScrollingElement,
			scrollTop: rootScrollingElement.scrollTop,
			scrollLeft: rootScrollingElement.scrollLeft,
		});
	}

	return IScrollableElements;
}

/**
 * @param {IScrollableElement[]} IScrollableElements
 */
function restoreScrollPosition(IScrollableElements: IScrollableElement[]) {
	for (const { element, scrollTop, scrollLeft } of IScrollableElements) {
		element.scrollTop = scrollTop;
		element.scrollLeft = scrollLeft;
	}
}

/**
 * @export
 * @param {HTMLElement} element
 */
export function focusWithoutScrolling(element: HTMLElement): void {
	if (supportsPreventScroll()) {
		element.focus({ preventScroll: true });
	} else {
		const allScrollableElements = getAllScrollableElements(element);
		element.focus();
		restoreScrollPosition(allScrollableElements);
	}
}

let supportsPreventScrollCached: boolean | null = null;

function supportsPreventScroll() {
	if (supportsPreventScrollCached == null) {
		supportsPreventScrollCached = false;
		try {
			const focusElem = document.createElement("div");
			focusElem.focus({
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				get preventScroll() {
					supportsPreventScrollCached = true;
					return true;
				},
			});
		} catch (e) {
			// Ignore
		}
	}

	return supportsPreventScrollCached;
}
