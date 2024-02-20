/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 feedzai.com, Rights Reserved.
 */
import { useContext } from "react";
import { IFocusManager } from "./index";
import { FocusContext } from "./context";

/**
 * Returns a FocusManager interface for the parent FocusScope.
 * A FocusManager can be used to programmatically move focus within
 * a FocusScope, e.g. in response to user events like keyboard navigation.
 *
 * @example
 * function Toolbar(props) {
 * 	return (
 *  	<div role="toolbar"><FocusScope>{props.children}</FocusScope></div>
 *  );
 * }
 *
 * function ToolbarButton(props) {
 * 	const focusManager = useFocusManager();
 * 	const onKeyDown = (event) => {
 * 	switch (event.key) {
 * 		case 'ArrowRight':
 * 			focusManager.focusNext({ wrap: true });
 * 			break;
 * 		case 'ArrowLeft':
 * 			focusManager.focusPrevious({ wrap: true });
 * 			break;
 * 	}
 * };
 *
 * return <button onKeyDown={onKeyDown}>{props.children}</button>;}
 *
 * <Toolbar>
 * 	<ToolbarButton>Cut</ToolbarButton>
 * 	<ToolbarButton>Copy</ToolbarButton>
 * 	<ToolbarButton>Paste</ToolbarButton>
 * </Toolbar>
 *
 * @returns {IFocusManager}
 */
export function useFocusManager(): IFocusManager | null {
  return useContext(FocusContext);
}
