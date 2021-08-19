/* istanbul ignore file */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
import React from "react";
import { mount as render } from "@cypress/react";
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

export interface IRenderWithRouter {
	history: History;
}

/**
 * Renders a component wrapped inside a `@reach/router` instance.
 * Adds `history` to the returned utilities to allow us to reference it in our tests
 *
 * @param {React.ReactElement} ui
 * @param {IRenderWithRouter} [options]
 */
export function renderWithRouter(
	ui: React.ReactElement,
	{ route = "/", history = createHistory(createMemorySource(route)) }: RenderWithRouterOptions = {},
) {
	render(<LocationProvider history={history}>{ui}</LocationProvider>);
}

/**
 * `renderWithRouter` with a Router wrapper from `@reach/router`
 *
 * @param {React.ReactElement} ui
 * @param {RenderWithRouterOptions} [options]
 */
export function renderWithRouterWrapper(
	ui: React.ReactElement,
	{ route = "/", history = createHistory(createMemorySource(route)) }: RenderWithRouterOptions = {},
) {
	render(
		<LocationProvider history={history}>
			<Router>{ui}</Router>
		</LocationProvider>,
	);
}
