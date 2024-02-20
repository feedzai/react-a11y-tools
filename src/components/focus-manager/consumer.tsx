/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React from "react";
import { IFocusManager } from ".";
import { FocusContext } from "./context";

/**
 * Focus Manager Context Consumer
 *
 * A Context API wrapper suitable for class-based components, where `useFocusManager` hook is not possible.
 *
 * @example
 *  class SideMenuButton extends React.Component {
 *		onKeyDown = (event, context) => {
 *    		switch (event.key) {
 *				case 'Home':
 *					context.focusFirst();
 *					break;
 *				case 'End':
 *					context.focusLast();
 *					break;
 *
 *				default:
 *						break;
 *    		}
 *		};
 *
 *		render() {
 *			return (
 *				<FocusManagerConsumer>
 *					{(context) => {
 *						return (
 *							<button type="button" onClick={onClick} onKeyDown={(event) => this.onKeyDown(event, context)}>{children}</button>
 *						);
 *					}}
 *				</FocusManagerConsumer>
 *			);
 *		}
 *}
 *
 * @export
 * @param {({ children: (context: IFocusManager | null) => React.ReactElement })} props
 * @returns
 */
export function FocusManagerConsumer({
	children,
}: {
	children: (context: IFocusManager | null) => React.ReactElement;
}) {
	return <FocusContext.Consumer>{(context) => children(context)}</FocusContext.Consumer>;
}

FocusManagerConsumer.displayName = "FocusManagerConsumer";
