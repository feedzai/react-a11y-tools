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
export * from "./consumer";
export * from "./useMessagesAnnouncer";
