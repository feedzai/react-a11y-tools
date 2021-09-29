/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * helpers.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { isProduction, inRange } from "../../helpers";
import { HEADINGS_SELECTOR, FIRST_HEADING_LEVEL, LAST_HEADING_LEVEL } from "./constants";

const CONSOLE_WARN_STYLE = `
		color: #111111;
		background-color: #eb9800;
		font-weight: bold;
		font-size: 9px;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-family: 'Dank Mono', 'Fira Code', 'Lucida Console', monospace
`;

/**
 * Collects an array of heading violations on the page
 *
 * @param {number[]} headings
 * @returns
 */
function getAllInvalidHeadingsOnAPage(headings: number[]): number[] {
	const hasMultipleH1s = headings.filter((heading): boolean => heading === 1).length >= 2;
	const hasSkippedHeadings = headings.some((heading, index, arr): boolean => {
		const precedingHeading = arr[index - 1];

		if (!precedingHeading) {
			return false;
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
 * 1.1. Outputs a warning to the browser's console (during development)
 * 1.2. and returns a value between the range (i.e: if invalid h7, then returns 6)
 *
 * @param {number} level
 * @returns {number}
 */
export function getHeadingLevel(level: number): number {
	const isWithinRange = inRange(level, FIRST_HEADING_LEVEL, LAST_HEADING_LEVEL);
	const isDevelopment = !isProduction();
	const isOutOfRangeAndInDevelopment = !isWithinRange && isDevelopment;

	if (isOutOfRangeAndInDevelopment) {
		console.warn("%c ⚠ Warning ", CONSOLE_WARN_STYLE, `Heading level "${level}" is not valid. Supported levels from 1 to ${LAST_HEADING_LEVEL}. This message is development only. If possible, fix them before releasing to production.`);
	}

	switch (true) {
		case isWithinRange:
		case isDevelopment:
			return level;

		default:
			return Math.min(Math.max(FIRST_HEADING_LEVEL, level), LAST_HEADING_LEVEL);
	}
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
		console.warn("%c ⚠ Warning ", CONSOLE_WARN_STYLE, `Invalid heading levels detected: ${invalidHeadings}. This message is development only. If possible, fix them before releasing to production.`);
	}

	return invalidHeadings;
}

/**
 * Audits all Headings on a page and check their semantic level.
 *
 * @export {void}
 */
export function auditHeadingsOnPage() {
	const allHeadings: HTMLHeadingElement[] = Array.from(
		document.querySelectorAll(HEADINGS_SELECTOR),
	);
	const allLevels = allHeadings.map((elm) => parseFloat(elm.tagName.substring(1)));

	checkHeadingLevels(allLevels);
}
