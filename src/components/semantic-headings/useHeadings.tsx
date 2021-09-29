/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
/**
 * useHeadings.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */

import { useContext } from "react";
import { HeadingsContext } from "./context";
import { CHECK_AFTER_MS } from "./constants";
import { getHeadingLevel, auditHeadingsOnPage } from "./helpers";
import { isProduction } from "../../helpers/isProduction";

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

	if (!isProduction()) {
		setTimeout(auditHeadingsOnPage, CHECK_AFTER_MS);
	}

	return getHeadingLevel(contextLevel);
}
