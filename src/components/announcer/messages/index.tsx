/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
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
