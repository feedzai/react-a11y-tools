/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React, {
	Ref,
	forwardRef,
	createElement,
	useContext,
	PropsWithChildren,
	DetailedHTMLProps,
	HTMLAttributes,
} from "react";
import { getHeadingLevel } from "./helpers";
import { HeadingsContext } from "./context";

export interface ILevelProps {
	/**
	 * Overrides the default heading level.
	 * Use this prop with caution.
	 *
	 * @example
	 *
	 * // Rendering a Heading as an h3 instead of an h2.
	 * <Level dangerouslySetHeadingLevel={3}>
	 *    <Heading>I'm a title!</Heading>
	 * </Level>
	 *
	 * // Instead of rendering
	 * <h2>I'm a title</h2>
	 *
	 * // Would render as:
	 * <h3>I'm a title</h3>
	 */
	dangerouslySetHeadingLevel?: number;
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
	 * <h1>Main title</h1>
	 * <Heading>title</Heading>
	 * <Level>
	 *   <Heading>subtitle</Heading>
	 * </Level>
	 *
	 * // And this renders
	 * <h1>Main title</h1>
	 * <h2>title</h2>
	 * <h3>subtitle</h3>
	 */
	offset?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

/**
 * Creates a new heading level depth and increments the current heading level for all children using the `<Heading>` component.
 *
 * @param {PropsWithChildren<ILevelProps>} props
 * @returns
 */
export function Level({ dangerouslySetHeadingLevel, children }: PropsWithChildren<ILevelProps>) {
	const current = useContext(HeadingsContext);
	const value = getHeadingLevel(
		dangerouslySetHeadingLevel !== undefined ? dangerouslySetHeadingLevel : current + 1,
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
 * <Heading id="a-title" className="css-a-classname">a title</Heading>
 *
 * // Passing a React ref to the component
 * <Heading ref={elementRef}>a title</Heading>
 */
export const Heading = forwardRef(
	({ children, offset, ...props }: HeadingProps, ref: Ref<HTMLHeadingElement> | undefined) => {
		const contextLevel = useContext(HeadingsContext);
		const proposedLevel = contextLevel + (offset !== undefined ? offset : 0);
		const level = getHeadingLevel(proposedLevel);
		const HeadingLevel = `h${level}`;
		const elementProps = {
			"data-testid": "js-heading",
			...props,
			ref,
		};

		return createElement(HeadingLevel, elementProps, children);
	},
);

export * from "./useHeadings";
