/* istanbul ignore file */
/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
export type TKeyDirection = "horizontal" | "vertical" | "both";

export interface IRoverProviderProps {
	/**
	 * Your content goes here
	 */
	children: React.ReactNode;

	/**
	 * Depending on the direction ("vertical", "horizontal" or "both") it checks for the usage
	 * of the `ArrowLeft`, `ArrowRight`, `ArrowUp` and `ArrowDown`
	 */
	direction?: TKeyDirection;
}

export type ActionTypes =
	| "REGISTER"
	| "UNREGISTER"
	| "TAB_TO_FIRST"
	| "TAB_TO_LAST"
	| "TAB_TO_PREVIOUS"
	| "TAB_TO_NEXT"
	| "CLICKED"
	| "CHANGE_DIRECTION";

export type TabStop = {
	readonly id: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	readonly domElementRef: React.RefObject<any>;
};

export type RovingState = {
	direction: TKeyDirection;
	selectedId: string | null;
	lastActionOrigin: "mouse" | "keyboard" | null;
	tabStops: Array<TabStop>;
};

export interface IRovingActionPayloadID {
	id: TabStop["id"];
}

export interface IRovingActionPayloadDirection {
	direction: TKeyDirection;
}

export interface IRovingActionWithPayload<Action, Payload> {
	type: Action;
	payload: Payload;
}

export interface IRovingAction<Action> {
	type: Action;
}

export type RovingAction =
	| IRovingActionWithPayload<"REGISTER", TabStop>
	| IRovingActionWithPayload<"UNREGISTER", IRovingActionPayloadID>
	| IRovingAction<"TAB_TO_FIRST">
	| IRovingAction<"TAB_TO_LAST">
	| IRovingActionWithPayload<"TAB_TO_PREVIOUS", IRovingActionPayloadID>
	| IRovingActionWithPayload<"TAB_TO_NEXT", IRovingActionPayloadID>
	| IRovingActionWithPayload<"CLICKED", IRovingActionPayloadID>
	| IRovingActionWithPayload<"CHANGE_DIRECTION", IRovingActionPayloadDirection>;

export type RovingContext = {
	state: RovingState;
	dispatch: React.Dispatch<RovingAction>;
};

export { Provider as RoverProvider } from "./rover-provider/provider";
export * from "./use-rover";
export * from "./use-focus-effect";
