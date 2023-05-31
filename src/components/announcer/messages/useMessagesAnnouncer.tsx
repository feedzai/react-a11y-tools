/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { useContext } from "react";
import { MessagesAnnouncerContext } from "./context";
import { AnnouncementContext } from "./index";

/**
 * Hook for sending messages to the `MessagesAnnouncer` context provider
 *
 * @returns {IMessagesAnnouncerContext}
 */
export function useMessagesAnnouncer(): AnnouncementContext {
	const context = useContext(MessagesAnnouncerContext);
	return context;
}
