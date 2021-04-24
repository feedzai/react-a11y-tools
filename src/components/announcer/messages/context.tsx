/* eslint-disable @typescript-eslint/no-empty-function */
/* istanbul ignore file */
/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
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
