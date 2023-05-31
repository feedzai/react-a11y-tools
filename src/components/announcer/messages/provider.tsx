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
import React, { FunctionComponent, useReducer } from "react";
import { Announcer } from "../announcer";
import { defaultState, MessagesAnnouncerContext } from "./context";
import { AnnouncementReducerState } from "./index";

function reducer(
	state: AnnouncementReducerState,
	action: AnnouncementReducerState,
): AnnouncementReducerState {
	switch (action.politeness) {
		case "polite":
		case "assertive":
			return {
				politeness: action.politeness,
				message: action.message,
			};

		default:
			return state;
	}
}

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
 * setMessage({ message: "Form was submitted", politeness: "polite"});
 *
 * @param {FunctionComponent} props
 * @returns {JSX.Element}
 */
export const MessagesAnnouncer: FunctionComponent = ({ children }) => {
	const [state, setMessage] = useReducer(reducer, {
		message: defaultState.message,
		politeness: defaultState.politeness,
	});

	return (
		<MessagesAnnouncerContext.Provider
			value={{
				...state,
				setMessage,
			}}
		>
			{children}
			<Announcer
				aria-live={state.politeness}
				id="notifications-announcer"
				message={state.message}
			/>
		</MessagesAnnouncerContext.Provider>
	);
};
