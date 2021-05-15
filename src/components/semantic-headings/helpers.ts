/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * helpers.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import { HEADINGS_SELECTOR, INITIAL_LEVEL, MAXIMUM_LEVEL } from "./constants";

export function isProduction() {
	return !process || !process.env || process.env.NODE_ENV === "production";
}

/**
 * Collects an array of heading violations on the page
 *
 * @param {number[]} headings
 * @returns
 */
function getAllInvalidHeadingsOnAPage(headings: number[]): number[] {
	const hasMultipleH1s = headings.filter(
		(heading): boolean => heading === 1
	).length >= 2;
	const hasSkippedHeadings = headings.some((heading, index, arr): boolean => {
		const precedingHeading = arr[index - 1];

		if (!precedingHeading) {
			return false
		}

		return heading > precedingHeading + 1;
	});

	if (hasMultipleH1s || hasSkippedHeadings) {
		return headings;
	}

	return [];
}

/**
 * Checks if the heading level is within range and valid.
 * If not:
 * 1.1. Throws an error (during development)
 * 1.2. and returns a value between the range (ex: if 7, then returns 6)
 *
 * @param {number} level
 * @returns {number}
 */
export function getHeadingLevel(level: number): number {
	const isWithinRange = level > 0 && level <= MAXIMUM_LEVEL;

	if (isWithinRange) {
		return level;
	}

	const err = `Heading level "${level}" is not valid. Supported levels from 1 to ${MAXIMUM_LEVEL}`;

	if (!isProduction()) {
		throw Error(err);
	}
	return Math.min(Math.max(INITIAL_LEVEL, level), MAXIMUM_LEVEL);
}

/**
 * Runs an audit on all the headings on a page
 *
 * @param {number[]} levels
 * @returns {number[]}
 */
export function checkHeadingLevels(levels: number[]): number[] {
	const invalidHeadings = getAllInvalidHeadingsOnAPage(levels);
	const hasErrors = invalidHeadings.length > 0;

	if (hasErrors) {
		const err = `Invalid heading levels detected: ${invalidHeadings}`;

		if (!isProduction()) {
			throw Error(err);
		}

		console.warn(err);
	}

	return invalidHeadings;
}

export function auditHeadingsOnPage() {
	const allHeadings: HTMLHeadingElement[] = Array.from(document.querySelectorAll(HEADINGS_SELECTOR));
	const allLevels = allHeadings.map((elm) =>
		parseFloat(elm.tagName.substring(1))
	);

	checkHeadingLevels(allLevels);
}
