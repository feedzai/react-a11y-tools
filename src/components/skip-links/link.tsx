/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import React, { FunctionComponent, useCallback, KeyboardEvent } from "react";
import "./styles.css";

export const SKIP_LINK_DEFAULT_PROPS: ISkipLink = {
	target: "#content",
	text: "Skip to main content",
	as: "link",
};

export interface ISkipLink {
	target: string;
	text: string;
	as?: "link" | "button";
}

/**
 * Skip Link to Main Content
 *
 * @param {ISkipLink} props
 * @returns {JSX.Element}
 */
export const SkipLink: FunctionComponent<ISkipLink> = ({ target, text, as }) => {
	const onKeyUp = useCallback(
		(event: KeyboardEvent<HTMLButtonElement>) => {
			if (event.key === "Enter" || event.key === " ") {
				const targetElement: HTMLElement | null = document.querySelector(target);

				targetElement?.focus();
			}
		},
		[target],
	);

	if (as === "button") {
		return (
			<button role="link" type="button" onKeyUp={onKeyUp} className="skip-links__item">
				{text}
			</button>
		);
	}
	return (
		<a href={target} className="skip-links__item">
			{text}
		</a>
	);
};

SkipLink.defaultProps = SKIP_LINK_DEFAULT_PROPS;

export default SkipLink;
