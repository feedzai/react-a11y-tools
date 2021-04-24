/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import { useContext } from "react";
import { MessagesAnnouncerContext } from "./context";
import { TUseMessagesAnnouncerReturns } from "./index";

/**
 * Hook for sending messages to the `MessagesAnnouncer` context provider
 *
 * @returns {TUseMessagesAnnouncerReturns}
 */
export function useMessagesAnnouncer(): TUseMessagesAnnouncerReturns {
	const { setMessage } = useContext(MessagesAnnouncerContext);

	return setMessage;
}
