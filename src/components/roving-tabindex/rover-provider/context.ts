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
