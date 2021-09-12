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
 * useHeadingsLevel.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */

import { useContext } from "react";
import { HeadingsContext } from "./context";
import { CHECK_AFTER_MS } from "./constants";
import { isProduction, getHeadingLevel, auditHeadingsOnPage } from "./helpers";

/**
 * Queries the DOM to check the heading level
 *
 * @example
 * // Get the current heading level
 * const level = useHeadingsLevel();
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
export function useHeadingsLevel(): number {
	const contextLevel = useContext(HeadingsContext);

	if (!isProduction()) {
		setTimeout(auditHeadingsOnPage, CHECK_AFTER_MS);
	}

	return getHeadingLevel(contextLevel);
}
