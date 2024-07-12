/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * link.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React, { FunctionComponent, useCallback, KeyboardEvent } from "react";
import { classNames } from "@feedzai/js-utilities";
import { useConstant } from "@feedzai/js-utilities/hooks";
import styles from "./index.module.scss";

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
	const CSS_CLASS = useConstant(() => {
		return classNames(styles.item, "fdz-css-skip-links__item");
	});

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
				className={CSS_CLASS}
				data-testid="fdz-js-skip-link"
			>
				{text}
			</button>
		);
	}
	return (
		<a href={target} className={CSS_CLASS} data-testid="fdz-js-skip-link">
			{text}
		</a>
	);
};

SkipLink.defaultProps = SKIP_LINK_DEFAULT_PROPS;

export default SkipLink;
