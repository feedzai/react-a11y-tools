/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React from "react";
import { RovingAction, RovingState } from "../index";
import { RoverContext } from "./context";

/**
 * Rover Context Consumer
 *
 * A Context API wrapper suitable for class-based components, where `useRover` hook is not possible.
 *
 * @example
 * <RoverConsumer>
 * 		{(state, dispatch) => { ...your content goes here }}
 * </RoverConsumer>
 *
 * @export
 * @param {{ children: (state: RovingState, dispatch: React.Dispatch<RovingAction>) => React.ReactElement}} { children }
 * @returns {React.ReactElement}
 */
export function RoverConsumer({
	children,
}: {
	children: (state: RovingState, dispatch: React.Dispatch<RovingAction>) => React.ReactElement;
}) {
	return (
		<RoverContext.Consumer>
			{({ state, dispatch }) => children(state, dispatch)}
		</RoverContext.Consumer>
	);
}
