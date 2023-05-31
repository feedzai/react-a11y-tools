/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
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
			<button
				role="link"
				type="button"
				onKeyUp={onKeyUp}
				className="css-skip-links__item"
				data-testid="js-skip-link"
			>
				{text}
			</button>
		);
	}
	return (
		<a href={target} className="css-skip-links__item" data-testid="js-skip-link">
			{text}
		</a>
	);
};

SkipLink.defaultProps = SKIP_LINK_DEFAULT_PROPS;

export default SkipLink;
