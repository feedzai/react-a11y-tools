
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
import React from "react";
import { MemoryRouter, RouterProvider, createMemoryRouter, createRoutesFromElements } from "react-router-dom"

export interface RenderWithRouterOptions {
	route?: string;
}

export interface IRenderWithRouter {
	ui: React.ReactElement;
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
) {
	cy.mount(<MemoryRouter basename="/">
		{ui}
	</MemoryRouter>);
}
