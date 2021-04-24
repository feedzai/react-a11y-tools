/* istanbul ignore file */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * context.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { createContext } from "react";
import { RovingContext, RovingState } from "../index";

export const initialState: RovingState = {
	direction: "vertical",
	selectedId: null,
	lastActionOrigin: null,
	tabStops: [],
};

export const RoverContext = createContext<RovingContext>({
	state: {
		...initialState,
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	dispatch: () => { },
});
