/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
export interface ISetMessage {
	text: string;
	politeness?: "assertive" | "polite";
}
export interface IMessagesAnnouncerContext {
	message: string;
	politeness: "assertive" | "polite";
	setMessage: (message: ISetMessage) => void;
}

export type TUseMessagesAnnouncerReturns = (message: ISetMessage) => void;

export * from "./provider";
export * from "./useMessagesAnnouncer";
