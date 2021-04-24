/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import React, { FunctionComponent } from "react";
import { ISkipLink, SkipLink, SKIP_LINK_DEFAULT_PROPS } from "./link";
export interface ISkipLinksProps {
	items?: ISkipLink[];
}

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
			<div className="skip-links" data-testid="skip-links">
				{list}
			</div>
		);
	}

	return renderLinks();
};

SkipLinks.defaultProps = {
	items: [
		{
			...SKIP_LINK_DEFAULT_PROPS,
		},
	],
};
