/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * provider.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React, { FunctionComponent, useState, useCallback } from "react";
import { Announcer } from "../announcer";
import { MessagesAnnouncerContext, defaultMessagesAnnouncerContext } from "./context";
import { IMessagesAnnouncerContext, ISetMessage } from "./index";

/**
 * The `MessagesAnnouncer` is a context-based announcer for the generic types of messages.
 * These can be notifications, alerts, form-related submissions, etc.
 *
 * @example
 * // Setting up the announcer at the root-level
 * <MessagesAnnouncer>
 * 		<YourApp />
 * </MessagesAnnouncer>
 *
 * // Setting up the announcer hook at the top of a functional component:
 * const setMessage = useMessagesAnnouncer();
 *
 * // And sending a message
 * setMessage({ text: "Form was submitted", politeness: "polite"});
 *
 * @param {FunctionComponent} props
 * @returns {JSX.Element}
 */
export const MessagesAnnouncer: FunctionComponent = ({ children }) => {
	const [politeness, setPoliteness] = useState(defaultMessagesAnnouncerContext.politeness);
	const [message, setNewMessage] = useState(defaultMessagesAnnouncerContext.message);

	/**
	 * Handles the message posting task.
	 *
	 * Politeness is optional, but affects the way the screen-reader ouputs a message
	 *
	 * @param {ISetMessage} message
	 */
	const setMessage = useCallback(
		(message: ISetMessage) => {
			setNewMessage(message.text);

			if (message.politeness) {
				setPoliteness(message.politeness);
			}
		},
		[setNewMessage, setPoliteness],
	);

	const value: IMessagesAnnouncerContext = {
		message,
		politeness,
		setMessage,
	};

	return (
		<MessagesAnnouncerContext.Provider value={value}>
			{children}
			<Announcer ariaLive={politeness} id="notifications-announcer" text={message} />
		</MessagesAnnouncerContext.Provider>
	);
};
