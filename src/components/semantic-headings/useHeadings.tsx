/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { useContext } from "react";
import { HeadingsContext } from "./context";
import { getHeadingLevel } from "./helpers";

/**
 * Custom Hook that returns the appropriate heading level to render onto the DOM
 *
 * @example
 * // Get the current heading level
 * const level = useHeadings();
 *
 * // Render a custom heading element
 * const CustomHeading = `h${level}`;
 *
 * return (
 *  <CustomHeading>a title</CustomHeading>
 * );
 *
 * @returns {number}
 */
export function useHeadings(): number {
	const contextLevel = useContext(HeadingsContext);

	return getHeadingLevel(contextLevel);
}
