/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { inRange } from "@jtmdias/js-utilities";
import { FIRST_HEADING_LEVEL, LAST_HEADING_LEVEL } from "./constants";

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

	switch (true) {
		case isWithinRange:
			return level;

		default:
			return Math.min(Math.max(FIRST_HEADING_LEVEL, level), LAST_HEADING_LEVEL);
	}
}
