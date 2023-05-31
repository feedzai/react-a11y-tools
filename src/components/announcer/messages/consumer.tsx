/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React from "react";
import { AnnouncementContext } from ".";
import { MessagesAnnouncerContext } from "./context";

/**
 * Messages Announcer Context Consumer
 *
 * A Context API wrapper suitable for class-based components, where `useMessagesAnnouncer` hook is not possible.
 *
 * @example
 * <MessagesAnnouncerConsumer>
 * 		{(setMessage) => {
 * 			return (
 * 				<button
 * 					type="button"
 * 					onClick={() => setMessage({ text: "An important message to announce", politeness: "assertive" })}
 * 				>
 * 					Super important button
 * 				</button>
 * 			);
 * 		}}
 * </MessagesAnnouncerConsumer>
 *
 * @export
 * @param {({
 * 	 children: (message: string, politeness: "assertive" | "polite", setMessage: (message: ISetMessage) => void) => React.ReactElement;
 *  })} props
 * @returns
 */
export function MessagesAnnouncerConsumer({
	children,
}: {
	children: (setMessage: AnnouncementContext["setMessage"]) => React.ReactElement;
}) {
	return (
		<MessagesAnnouncerContext.Consumer>
			{({ setMessage }) => children(setMessage)}
		</MessagesAnnouncerContext.Consumer>
	);
}
