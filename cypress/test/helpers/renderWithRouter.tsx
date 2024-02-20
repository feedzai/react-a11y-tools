/* istanbul ignore file */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
import React from "react";
import { MemoryRouter } from "react-router-dom";

/**
 * Renders a component wrapped inside a `@reach/router` instance.
 * Adds `history` to the returned utilities to allow us to reference it in our tests
 *
 * @param {React.ReactElement} ui
 */
export function renderWithRouter(
	ui: React.ReactElement,
) {
	cy.mount(<MemoryRouter basename="/">{ui}</MemoryRouter>);
}
