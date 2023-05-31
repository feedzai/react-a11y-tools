/*
 * Please refer to the terms of the license
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
import React, { FunctionComponent } from "react";
import { ISkipLink, SkipLink, SKIP_LINK_DEFAULT_PROPS } from "./link";
export interface ISkipLinksProps {
	items?: ISkipLink[];
}

export const SKIP_LINK_ITEMS_DEFAULT_PROPS = {
	items: [
		{
			...SKIP_LINK_DEFAULT_PROPS,
		},
	],
};

/**
 * Skip Links are links at the top of the page which jumps the user down to an anchor
 * or target at the beginning of the main content
 *
 * @param {ISkipLinksProps} props
 * @returns {JSX.Element}
 */
export const SkipLinks: FunctionComponent<ISkipLinksProps> = ({ items }) => {
	/**
	 * Renders a list of `SkipLink` components
	 *
	 * @returns {JSX.Element}
	 */
	function renderLinks() {
		const list =
			items && items.length > 0 ? (
				items.map((item) => <SkipLink key={item.target} {...item} />)
			) : (
				<SkipLink
					as={SKIP_LINK_DEFAULT_PROPS.as}
					target={SKIP_LINK_DEFAULT_PROPS.target}
					text={SKIP_LINK_DEFAULT_PROPS.text}
				/>
			);

		return (
			<div className="fdz-css-skip-links" data-testid="fdz-js-skip-links">
				{list}
			</div>
		);
	}

	return renderLinks();
};

SkipLinks.defaultProps = SKIP_LINK_ITEMS_DEFAULT_PROPS;
