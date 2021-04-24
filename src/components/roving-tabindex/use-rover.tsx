/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import { useRef, useCallback, useContext, RefObject, KeyboardEvent } from "react";
import { useSafeLayoutEffect } from "../../hooks/index";
import { RoverContext } from "./rover-provider/context";
import { TKeyDirection } from "./index";

let counter = 0;

/**
 * Generates a unique ID.
 * If prefix is given, the ID is appended to it.
 *
 * @export
 * @param {string} prefix
 * @returns {string}
 */
function uniqueId(prefix: string): string {
	return `${prefix}_${++counter}`;
}

type TabDirection = "NEXT" | "PREVIOUS";

/**
 * Gets the next direction on which to set focus to.
 *
 * @param {(KeyboardEvent<GenericType | any>)} event
 * @param {TKeyDirection} direction
 * @returns {(TabDirection | null)}
 */
function getDirection<GenericType>(
	event: KeyboardEvent<GenericType | any>,
	direction: TKeyDirection,
): TabDirection | null {
	if (direction === "horizontal" || direction === "both") {
		if (event.key === "ArrowLeft") {
			return "PREVIOUS";
		}
		if (event.key === "ArrowRight") {
			return "NEXT";
		}
	}
	if (direction === "vertical" || direction === "both") {
		if (event.key === "ArrowUp") {
			return "PREVIOUS";
		}
		if (event.key === "ArrowDown") {
			return "NEXT";
		}
	}

	return null;
}

/**
 * Custom Hook for the Rover
 *
 * @export
 * @template GenericType
 * @param {(RefObject<GenericType | any>)} domElementRef a React DOM element ref of the DOM element that is the focus target.
 * This must be the same DOM element for the lifecycle of the component
 * @param {boolean} disabled can be updated as appropriate to reflect the current enabled
 * or disabled state of the component
 * @param {string} [id] an optional ID that is the unique ID for the component.
 * - If provided, then it must be a non-empty string
 * - If not provided, then one will be autogenerated
 * @returns {([number, boolean, (event: KeyboardEvent<GenericType | any>) => void, () => void])}
 */
export function useRover<GenericType>(
	domElementRef: RefObject<GenericType | any>,
	disabled: boolean,
	id?: string,
): [number, boolean, (event: KeyboardEvent<GenericType | any>) => void, () => void] {
	const tabIndexId = useRef(id || uniqueId("react-a11y-tools-rover-index_"));
	const { state, dispatch } = useContext(RoverContext);

	useSafeLayoutEffect(() => {
		if (disabled) {
			return;
		}

		const id = tabIndexId.current;

		dispatch({
			type: "REGISTER",
			payload: { id, domElementRef },
		});

		// eslint-disable-next-line consistent-return
		return (): void => {
			dispatch({
				type: "UNREGISTER",
				payload: { id },
			});
		};
	}, [disabled]);

	/**
	 * Handles the `KeyPress` events inside the context
	 *
	 * @param {(KeyboardEvent<GenericType | any>)} event
	 */
	const handleOnKeyPress = useCallback(
		(event: KeyboardEvent<GenericType | any>) => {
			const payload = { id: tabIndexId.current };

			switch (getDirection(event, state.direction)) {
				case "PREVIOUS":
					dispatch({
						type: "TAB_TO_PREVIOUS",
						payload,
					});
					break;

				case "NEXT":
					dispatch({
						type: "TAB_TO_NEXT",
						payload,
					});
					break;

				default:
					break;
			}

			switch (event.key) {
				case "Home":
					dispatch({ type: "TAB_TO_FIRST" });
					event.preventDefault();
					break;

				case "End":
					dispatch({ type: "TAB_TO_LAST" });
					event.preventDefault();
					break;

				default:
					break;
			}
		},
		[state.direction, dispatch],
	);

	const handleClick = useCallback(() => {
		dispatch({
			type: "CLICKED",
			payload: { id: tabIndexId.current },
		});
	}, [dispatch]);

	const selected = !disabled && tabIndexId.current === state.selectedId;
	const tabIndex = selected ? 0 : -1;
	const focused = selected && state.lastActionOrigin !== null;

	return [tabIndex, focused, handleOnKeyPress, handleClick];
}
