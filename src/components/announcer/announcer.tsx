/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import React, { NamedExoticComponent, memo } from "react";

export interface IAnnouncerProps {
	id?: string;
	ariaLive?: React.AriaAttributes["aria-live"];
	ariaAtomic?: React.AriaAttributes["aria-atomic"];
	styles?: React.CSSProperties;
	text?: string;
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
	id: "rat-route-announcer",
	styles,
	ariaLive: "assertive",
	ariaAtomic: "true",
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
export const Announcer: NamedExoticComponent<IAnnouncerProps> = memo(
	({
		id = defaultProps.id,
		styles = defaultProps.styles,
		ariaLive = defaultProps.ariaLive,
		ariaAtomic = defaultProps.ariaAtomic,
		text = defaultProps.text,
	}) => {
		/**
		 * Renders the contents inside the announcer div
		 *
		 * @returns {string | null}
		 */
		function renderText() {
			if (!text || text.length === 0) {
				return null;
			}

			return text;
		}

		return (
			<div
				id={id}
				aria-live={ariaLive}
				aria-atomic={ariaAtomic}
				className="rat__announcer"
				data-testid="rat-announcer"
				style={styles}
			>
				{renderText()}
			</div>
		);
	},
);
