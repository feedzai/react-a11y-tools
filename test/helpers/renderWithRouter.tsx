/* istanbul ignore file */
/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, RenderResult, queries } from "@testing-library/react";
import {
	Router,
	createHistory,
	createMemorySource,
	LocationProvider,
	History,
} from "@reach/router";

export interface RenderWithRouterOptions {
	route?: string;
	history?: History;
}

export interface IRenderWithRouter {
	ui: React.ReactElement;
	options?: RenderWithRouterOptions;
}

export interface IRenderWithRouterReturns extends RenderResult<typeof queries> {
	history: History;
}

/**
 * Renders a component wrapped inside a `@reach/router` instance.
 * Adds `history` to the returned utilities to allow us to reference it in our tests
 *
 * @param {React.ReactElement} ui
 * @param {RenderWithRouterOptions} [options]
 * @returns {IRenderWithRouterReturns}
 */
export function renderWithRouter(
	ui: React.ReactElement,
	{ route = "/", history = createHistory(createMemorySource(route)) }: RenderWithRouterOptions = {},
): IRenderWithRouterReturns {
	return {
		...render(<LocationProvider history={history}>{ui}</LocationProvider>),
		history,
	};
}

/**
 * `renderWithRouter` with a Router wrapper from `@reach/router`
 *
 * @param {React.ReactElement} ui
 * @param {RenderWithRouterOptions} [options]
 * @returns {IRenderWithRouterReturns}
 */
export function renderWithRouterWrapper(
	ui: React.ReactElement,
	{ route = "/", history = createHistory(createMemorySource(route)) }: RenderWithRouterOptions = {},
): IRenderWithRouterReturns {
	return {
		...render(
			<LocationProvider history={history}>
				<Router>{ui}</Router>
			</LocationProvider>,
		),
		history,
	};
}
