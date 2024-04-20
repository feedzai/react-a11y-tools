/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * announcer.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React from "react";
import { isString } from "@feedzai/js-utilities";

export interface IAnnouncerProps {
	id?: string;
	"aria-live"?: React.AriaAttributes["aria-live"];
	"aria-atomic"?: React.AriaAttributes["aria-atomic"];
	styles?: React.CSSProperties;
	message?: string;
}

const styles: React.CSSProperties = {
	position: `absolute`,
	top: 0,
	width: 1,
	height: 1,
	padding: 0,
	overflow: `hidden`,
	clip: `rect(0, 0, 0, 0)`,
	whiteSpace: `nowrap`,
	border: 0,
};

const defaultProps: Partial<IAnnouncerProps> = {
	id: "fdz-js-route-announcer",
	styles,
	"aria-live": "assertive",
	"aria-atomic": "true",
};

/**
 * Basic Announcer HTML element that tells a screen-reader of parts of the content that need the users attention.
 * Depending on the type of "politeness", users can be interrupted/or not by these messages.
 *
 * @example
 * // Changing page routes on a single-page application.
 * "Navigated to Create Account"
 *
 * // Status messages for form-related operations
 * "Your email is on the way!"
 * "Sorry, you need to fill the password field"
 *
 * // Notifications
 * "There's a new message"
 * "You're currently offline. Check your internet connection."
 *
 * @param {IAnnouncerProps} props
 * @returns {JSX.Element}
 */
export const Announcer = ({
	id = defaultProps.id,
	styles = defaultProps.styles,
	"aria-live": ariaLive = defaultProps["aria-live"],
	"aria-atomic": ariaAtomic = defaultProps["aria-atomic"],
	message = defaultProps.message,
}: IAnnouncerProps): JSX.Element => {
	/**
	 * Renders the contents inside the announcer div
	 *
	 * @returns {string | null}
	 */
	function renderText() {
		if (!isString(message) || message.length === 0) {
			return null;
		}

		return <p>{message}</p>;
	}

	console.log;

	return (
		<div
			id={id}
			aria-live={ariaLive}
			aria-atomic={ariaAtomic}
			className="fdz-css-announcer"
			data-testid="fdz-js-announcer"
			style={styles}
		>
			{renderText()}
		</div>
	);
};
