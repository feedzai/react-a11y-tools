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
import { AnnouncementContext } from "./index";

export const defaultState: AnnouncementContext = {
	message: "",
	politeness: "polite",
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setMessage: () => {},
};

export const MessagesAnnouncerContext = createContext<AnnouncementContext>(defaultState);
