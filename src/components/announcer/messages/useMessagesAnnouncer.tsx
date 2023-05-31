/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * useMessagesAnnouncer.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
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
