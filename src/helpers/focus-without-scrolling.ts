/* istanbul ignore file */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
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
function getAllScrollableElements<GenericElement extends HTMLElement | SVGElement>(element: GenericElement): IScrollableElement[] {
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
 * Places focus on an `HTMLElement` or `SVGElement` without causing a page scroll.
 *
 * @example
 *
 * // Placing focus on a button
 * const element = document.querySelector("button.some-css-class");
 *
 * if (element) {
 *    focusWithoutScrolling(element);
 * }
 * @export
 * @param {HTMLElement} element
 */
export function focusWithoutScrolling<GenericElement extends HTMLElement | SVGElement>(element: GenericElement): void {
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
