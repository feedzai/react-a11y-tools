/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * reducer.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import {
	RovingState,
	RovingAction,
	IRovingAction,
	IRovingActionPayloadID,
	IRovingActionWithPayload,
	TabStop,
} from "../index";

const DOCUMENT_POSITION_PRECEDING = 2;

/**
 * Reducer Action: Register
 *
 * @param {RovingState} state
 * @param {IRovingActionWithPayload<"REGISTER", TabStop>} action
 * @returns {RovingState}
 */
function registerAction(
	state: RovingState,
	action: IRovingActionWithPayload<"REGISTER", TabStop>,
): RovingState {
	const { tabStops } = state;
	const newTabStop = action.payload;

	if (tabStops.length === 0) {
		return {
			...state,
			selectedId: newTabStop.id,
			tabStops: [newTabStop],
		};
	}

	const index = tabStops.findIndex((tabStop) => {
		return tabStop.id === newTabStop.id;
	});

	if (index >= 0) {
		return state;
	}

	let indexToInsertAt = tabStops.findIndex(
		(tabStop) =>
			!!(
				tabStop.domElementRef.current.compareDocumentPosition(newTabStop.domElementRef.current) &
				DOCUMENT_POSITION_PRECEDING
			),
	);

	if (indexToInsertAt === -1) {
		indexToInsertAt = tabStops.length;
	}

	const filtered = [
		...tabStops.slice(0, indexToInsertAt),
		newTabStop,
		...tabStops.slice(indexToInsertAt),
	];

	return {
		...state,
		tabStops: filtered,
	};
}

/**
 * Reducer Action: Register
 *
 * @param {RovingState} state
 * @param {IRovingActionWithPayload<"UNREGISTER", TabStop>} action
 * @returns {RovingState}
 */
function unregisterAction(
	state: RovingState,
	action: IRovingActionWithPayload<"UNREGISTER", IRovingActionPayloadID>,
): RovingState {
	const { id } = action.payload;

	const filtered = state.tabStops.filter((tabStop) => tabStop.id !== id);

	if (filtered.length === state.tabStops.length) {
		return state;
	}

	return {
		...state,
		selectedId:
			state.selectedId === id ? (filtered.length === 0 ? null : filtered[0].id) : state.selectedId,
		tabStops: filtered,
	};
}

/**
 * Check on wether to go to the next or the previous item
 *
 * @param {RovingState} state
 * @param {(IRovingActionWithPayload<"TAB_TO_PREVIOUS", IRovingActionPayloadID> | IRovingActionWithPayload<"TAB_TO_NEXT", IRovingActionPayloadID>)} action
 * @returns {RovingState}
 */
function goToPreviousOrNext(
	state: RovingState,
	action:
		| IRovingActionWithPayload<"TAB_TO_PREVIOUS", IRovingActionPayloadID>
		| IRovingActionWithPayload<"TAB_TO_NEXT", IRovingActionPayloadID>,
): RovingState {
	const { id } = action.payload;
	const index = state.tabStops.findIndex((tabStop) => tabStop.id === id);

	if (index === -1) {
		return state;
	}

	const newIndex =
		action.type === "TAB_TO_PREVIOUS"
			? index <= 0
				? state.tabStops.length - 1
				: index - 1
			: index >= state.tabStops.length - 1
			? 0
			: index + 1;

	return {
		...state,
		lastActionOrigin: "keyboard",
		selectedId: state.tabStops[newIndex].id,
	};
}

/**
 * Check on wether to go to the first or the last item
 *
 * @param {RovingState} state
 * @param {IRovingAction<"TAB_TO_FIRST"> | IRovingAction<"TAB_TO_LAST">} action
 * @returns
 */
function goToFirstOrLast(
	state: RovingState,
	action: IRovingAction<"TAB_TO_FIRST"> | IRovingAction<"TAB_TO_LAST">,
): RovingState {
	if (!state.tabStops.length) {
		return state;
	}

	const firstStop = 0;
	const lastStop = state.tabStops.length - 1;
	const index = action.type === "TAB_TO_FIRST" ? firstStop : lastStop;

	return {
		...state,
		lastActionOrigin: "keyboard",
		selectedId: state.tabStops[index].id,
	};
}

/**
 * Rover reducer
 *
 * @export
 * @param {RovingState} state
 * @param {RovingAction} action
 * @returns {RovingState}
 */
export function reducer(state: RovingState, action: RovingAction): RovingState {
	switch (action.type) {
		case "REGISTER": {
			return {
				...registerAction(state, action),
			};
		}

		case "UNREGISTER":
			return {
				...unregisterAction(state, action),
			};

		case "TAB_TO_PREVIOUS":
		case "TAB_TO_NEXT":
			return {
				...goToPreviousOrNext(state, action),
			};

		case "TAB_TO_FIRST":
		case "TAB_TO_LAST":
			return {
				...goToFirstOrLast(state, action),
			};

		case "CLICKED":
			return {
				...state,
				lastActionOrigin: "mouse",
				selectedId: action.payload.id,
			};

		case "UPDATE_SELECTED":
			return {
				...state,
				lastActionOrigin: "keyboard",
				selectedId: action.payload.id,
			};

		case "CHANGE_DIRECTION":
			return {
				...state,
				direction: action.payload.direction,
			};

		/* istanbul ignore next */
		default:
			return state;
	}
}
