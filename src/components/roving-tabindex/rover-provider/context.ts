/* istanbul ignore file */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { createContext } from "react";
import { emptyFunction } from "@jtmdias/js-utilities";
import { RovingContext, RovingState } from "../index";

export const initialState: RovingState = {
	direction: "horizontal",
	selectedId: null,
	lastActionOrigin: null,
	tabStops: [],
};

export const RoverContext = createContext<RovingContext>({
	state: {
		...initialState,
	},
	dispatch: emptyFunction,
});
