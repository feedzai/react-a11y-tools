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
 * index.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */

import React, {
	createElement,
	useContext,
	PropsWithChildren,
	DetailedHTMLProps,
	HTMLAttributes,
} from "react";
import { getHeadingLevel, isProduction, auditHeadingsOnPage } from "./helpers";
import { CHECK_AFTER_MS } from "./constants";
import { HeadingsContext } from "./context";

export interface ILevelProps {
	/**
	 * Overrides the default behaviour and increment by a different value (number) than one.
	 */
	dangerouslyOverrideValue?: number;
}

export type HeadingProps = {
	/**
	 * Level relative to the current one
	 *
	 * @example
	 * // Offseting the heading level
	 * <Heading>title</Heading>
	 * <Heading offset={1}>subtitle</Heading>
	 *
	 * // Which is similar to writing levels with the `Level`:
	 * <Heading>title</Heading>
	 * <Level>
	 *   <Heading>subtitle</Heading>
	 * </Level>
	 *
	 * // And this renders
	 * <h1>title</h1>
	 * <h2>subtitle</h2>
	 */
	offset?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

/**
 * Creates a new heading level depth and increments the current heading level for all children using the `<Heading>` component.
 *
 * @param {PropsWithChildren<ILevelProps>} props
 * @returns
 */
export function Level({ dangerouslyOverrideValue, children }: PropsWithChildren<ILevelProps>) {
	const current = useContext(HeadingsContext);
	const value = getHeadingLevel(
		dangerouslyOverrideValue !== undefined ? dangerouslyOverrideValue : current + 1,
	);
	return <HeadingsContext.Provider value={value}>{children}</HeadingsContext.Provider>;
}

/**
 * Renders a heading HTML element (h1...h6) base on the number and depth of `Level`'s.
 *
 * @example
 * // Rendering a heading component
 * <Heading>a title</Heading>
 *
 * // Overriding the value of the heading
 * <Heading offset={1}>a title</Heading>
 *
 * // Passing HTML element props to the component
 * <Heading id="a-title" className="a-classname">a title</Heading>
 *
 *
 * @param {HeadingProps} props
 * @returns {JSX.Element}
 */
export function Heading({ children, offset, ...props }: HeadingProps) {
	const contextLevel = useContext(HeadingsContext);
	const proposedLevel = contextLevel + (offset !== undefined ? offset : 0);
	const level = getHeadingLevel(proposedLevel);
	const HeadingLevel = `h${level}`;

	if (!isProduction()) {
		setTimeout(auditHeadingsOnPage, CHECK_AFTER_MS);
	}

	return createElement(
		HeadingLevel,
		{ "data-testid": "fdz-js-react-a11y-tools-heading", ...props },
		children,
	);
}
