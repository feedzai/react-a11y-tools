/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import type { Dispatch } from "react";
export interface Announcement {
	message: string;
	politeness?: "assertive" | "polite";
}

export type AnnouncementContext = Announcement & {
	setMessage: Dispatch<Announcement>;
};

export type AnnouncementReducerState = Announcement;

export * from "./provider";
export * from "./consumer";
export * from "./useMessagesAnnouncer";
