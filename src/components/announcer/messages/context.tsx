/* eslint-disable @typescript-eslint/no-empty-function */
/* istanbul ignore file */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * context.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { createContext } from "react";
import { IMessagesAnnouncerContext } from "./index";

export const defaultMessagesAnnouncerContext: IMessagesAnnouncerContext = {
	message: "",
	politeness: "polite",
	setMessage: () => {},
};

export const MessagesAnnouncerContext = createContext<IMessagesAnnouncerContext>(
	defaultMessagesAnnouncerContext,
);
