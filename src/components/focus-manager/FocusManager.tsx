/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import React from "react";
import FocusTrap from "focus-trap-react";
import { FocusManagerProps } from "./types";
import { useFocusManager } from "./useFocusManager";

/**
 * A FocusManager manages focus for its descendants. It supports containing focus inside
 * the scope, restoring focus to the previously focused element on unmount, and auto
 * focusing children on mount. It also acts as a container for a programmatic focus
 * management interface that can be used to move focus forward and back in response
 * to user events.
 *
 * @example <caption>Default Usage</caption>
 * ```jsx
 * // a Focus Manager that contains focus, sets focus on the first tabbable element and restores focus when unmounting
 * import { FocusManager } from "@feedzai/react-a11y-tools";
 * ...
 * function Component() {
 * 	return (
 *  	<FocusManager>
 * 			<input data-testid="fdz-js-input-1" />
 * 			<input data-testid="fdz-js-input-2" />
 * 			<input data-testid="fdz-js-input-3" />
 * 		</FocusManager>
 * 	);
 * }
 * ```
 *
 * @example <caption>Restore focus to a different element</caption>
 * ```jsx
 * import { FocusManager } from "@feedzai/react-a11y-tools";
 * ...
 * function Component() {
 * 	const fallbackElement = useRef();
 * 	return (
 *   <div>
 *    <button ref={fallbackElement}>Fallback Element</button>
 *    <FocusManager restoreFocus={fallbackElement.current}>
 *     <input data-testid="fdz-js-input-1" />
 *     <input data-testid="fdz-js-input-2" />
 *     <input data-testid="fdz-js-input-3" />
 *    </FocusManager>
 *   </div>
 *  );
 * }
 * ```
 */
export function FocusManager({
	children,
	contain = true,
	restoreFocus = true,
	autoFocus = true,
	options,
}: FocusManagerProps): JSX.Element {
	const { fallbackRef, ...props } = useFocusManager({
		contain,
		restoreFocus,
		autoFocus,
		options,
	});

	return (
		<FocusTrap {...props}>
			<div ref={fallbackRef} tabIndex={-1} data-testid="fdz-js-focus-manager">
				{children}
			</div>
		</FocusTrap>
	);
}
