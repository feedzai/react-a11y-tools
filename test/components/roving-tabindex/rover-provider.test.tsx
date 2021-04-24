/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * rover-provider.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React from "react";
import { JSDOM } from "jsdom";
import { RovingAction, RovingState, TabStop } from "../../../src/components/roving-tabindex";
import { reducer } from "../../../src/components/roving-tabindex/rover-provider/reducer";

const testDOM = new JSDOM(`
  <body>
    <button id="button-1">
    <button id="button-2">
    <button id="button-3">
  </body>
`);

const getTestDOMElementRef = (id: string): React.RefObject<HTMLElement> => ({
	current: testDOM.window.document.getElementById(id),
});

describe("reducer", () => {
	const buttonOneId = "button-1";
	const buttonOneTabStop: TabStop = {
		id: buttonOneId,
		domElementRef: getTestDOMElementRef(buttonOneId),
	};

	const buttonTwoId = "button-2";
	const buttonTwoTabStop: TabStop = {
		id: buttonTwoId,
		domElementRef: getTestDOMElementRef(buttonTwoId),
	};

	const buttonThreeId = "button-3";

	describe("when registering a tab stop", () => {
		describe("when no tab stops have been registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: null,
				lastActionOrigin: "mouse",
				tabStops: [],
			});

			it("should add the tab stop as the only tab stop", () => {
				const action: RovingAction = {
					type: "REGISTER",
					payload: buttonOneTabStop,
				};

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonOneId,
					lastActionOrigin: "mouse",
					tabStops: [buttonOneTabStop],
				});
			});
		});

		describe("when one earlier tab stop has already been registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonOneId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop],
			});

			it("should add the new tab stop after the existing tab stop", () => {
				const action: RovingAction = {
					type: "REGISTER",
					payload: buttonTwoTabStop,
				};

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonOneId,
					lastActionOrigin: "mouse",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});

		describe("when one later tab stop has already been registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonTwoId,
				lastActionOrigin: "mouse",
				tabStops: [buttonTwoTabStop],
			});

			it("should add the new tab stop before the existing tab stop", () => {
				const action: RovingAction = {
					type: "REGISTER",
					payload: buttonOneTabStop,
				};

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonTwoId,
					lastActionOrigin: "mouse",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});

		describe("when the same tab stop has already been registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonOneId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop],
			});

			it("should not add the tab stop again", () => {
				const action: RovingAction = {
					type: "REGISTER",
					payload: buttonOneTabStop,
				};
				const result = reducer(givenState, action);
				expect(result).toEqual(givenState);
			});
		});
	});

	describe("when unregistering a tab stop", () => {
		describe("when the tab stop to remove is not registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: null,
				lastActionOrigin: "mouse",
				tabStops: [],
			});

			it("should not change state", () => {
				const action: RovingAction = {
					type: "UNREGISTER",
					payload: { id: buttonOneId },
				};

				const result = reducer(givenState, action);

				expect(result).toEqual(givenState);
			});
		});

		describe("when the tab stop to remove is registered", () => {
			describe("when it is the currently selected tab stop", () => {
				const givenState: RovingState = Object.freeze({
					direction: "horizontal",
					selectedId: buttonOneId,
					lastActionOrigin: "mouse",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});

				it("should unregister the tab stop", () => {
					const action: RovingAction = {
						type: "UNREGISTER",
						payload: { id: buttonOneId },
					};

					const result = reducer(givenState, action);

					expect(result).toEqual({
						direction: "horizontal",
						selectedId: buttonTwoId,
						lastActionOrigin: "mouse",
						tabStops: [buttonTwoTabStop],
					});
				});
			});

			describe("when it is not the currently selected tab stop", () => {
				const givenState: RovingState = Object.freeze({
					direction: "horizontal",
					selectedId: buttonOneId,
					lastActionOrigin: "mouse",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});

				it("should unregister the tab stop", () => {
					const action: RovingAction = {
						type: "UNREGISTER",
						payload: { id: buttonTwoId },
					};

					const result = reducer(givenState, action);

					expect(result).toEqual({
						direction: "horizontal",
						selectedId: buttonOneId,
						lastActionOrigin: "mouse",
						tabStops: [buttonOneTabStop],
					});
				});
			});
		});
	});

	describe("when clicking on a tab stop", () => {
		const givenState: RovingState = Object.freeze({
			direction: "horizontal",
			selectedId: buttonOneId,
			lastActionOrigin: "keyboard",
			tabStops: [buttonOneTabStop, buttonTwoTabStop],
		});

		it("should set the clicked tab stop as the selected tab stop", () => {
			const action: RovingAction = {
				type: "CLICKED",
				payload: { id: buttonTwoId },
			};

			const result = reducer(givenState, action);

			expect(result).toEqual({
				direction: "horizontal",
				selectedId: buttonTwoId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});
		});
	});

	describe("when tabbing to the next tab stop", () => {
		describe("when the current tab stop is not registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonOneId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			const action: RovingAction = {
				type: "TAB_TO_NEXT",
				payload: { id: buttonThreeId },
			};

			it("should not change state", () => {
				const result = reducer(givenState, action);
				expect(result).toEqual(givenState);
			});
		});

		describe("when the current tab stop is not the last tab stop", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonOneId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			it("should set the next tab stop as the current tab stop", () => {
				const action: RovingAction = {
					type: "TAB_TO_NEXT",
					payload: { id: buttonOneId },
				};

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonTwoId,
					lastActionOrigin: "keyboard",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});

		describe("when the current tab stop is the last tab stop", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonTwoId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			it("should wrap around to set the first tab stop as the current tab stop", () => {
				const action: RovingAction = {
					type: "TAB_TO_NEXT",
					payload: { id: buttonTwoId },
				};

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonOneId,
					lastActionOrigin: "keyboard",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});
	});

	describe("when tabbing to the previous tab stop", () => {
		describe("when the current tab stop is not registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonOneId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			const action: RovingAction = {
				type: "TAB_TO_PREVIOUS",
				payload: { id: buttonThreeId },
			};

			it("should not change state", () => {
				const result = reducer(givenState, action);
				expect(result).toEqual(givenState);
			});
		});

		describe("when the current tab stop is not the first tab stop", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonTwoId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			it("should set the previous tab stop as the current tab stop", () => {
				const action: RovingAction = {
					type: "TAB_TO_NEXT",
					payload: { id: buttonTwoId },
				};

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonOneId,
					lastActionOrigin: "keyboard",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});

		describe("when the current tab stop is the first tab stop", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonOneId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			it("should wrap around to set the last tab stop as the current tab stop", () => {
				const action: RovingAction = {
					type: "TAB_TO_NEXT",
					payload: { id: buttonOneId },
				};

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonTwoId,
					lastActionOrigin: "keyboard",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});
	});

	describe("when tabbing to the first tab stop", () => {
		describe("when no tab stops have been registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: null,
				lastActionOrigin: "mouse",
				tabStops: [],
			});

			it("should not change state", () => {
				const action: RovingAction = { type: "TAB_TO_FIRST" };
				const result = reducer(givenState, action);
				expect(result).toEqual(givenState);
			});
		});

		describe("when the current tab stop is the first tab stop", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonOneId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			it("should only alter the action origin", () => {
				const action: RovingAction = { type: "TAB_TO_FIRST" };

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonOneId,
					lastActionOrigin: "keyboard",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});

		describe("when the current tab stop is not the first tab stop", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonTwoId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			it("should set the first tab stop as the current tab stop", () => {
				const action: RovingAction = { type: "TAB_TO_FIRST" };

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonOneId,
					lastActionOrigin: "keyboard",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});
	});

	describe("when tabbing to the last tab stop", () => {
		describe("when no tab stops have been registered", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: null,
				lastActionOrigin: "mouse",
				tabStops: [],
			});

			it("should not change state", () => {
				const action: RovingAction = { type: "TAB_TO_LAST" };
				const result = reducer(givenState, action);
				expect(result).toEqual(givenState);
			});
		});

		describe("when the current tab stop is the last tab stop", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonTwoId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			it("should only alter the action origin", () => {
				const action: RovingAction = { type: "TAB_TO_LAST" };

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonTwoId,
					lastActionOrigin: "keyboard",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});

		describe("when the current tab stop is not the last tab stop", () => {
			const givenState: RovingState = Object.freeze({
				direction: "horizontal",
				selectedId: buttonOneId,
				lastActionOrigin: "mouse",
				tabStops: [buttonOneTabStop, buttonTwoTabStop],
			});

			it("should set the last tab stop as the current tab stop", () => {
				const action: RovingAction = { type: "TAB_TO_LAST" };

				const result = reducer(givenState, action);

				expect(result).toEqual({
					direction: "horizontal",
					selectedId: buttonTwoId,
					lastActionOrigin: "keyboard",
					tabStops: [buttonOneTabStop, buttonTwoTabStop],
				});
			});
		});
	});

	test("changing the direction", () => {
		const givenState: RovingState = Object.freeze({
			direction: "horizontal",
			selectedId: buttonOneId,
			lastActionOrigin: "mouse",
			tabStops: [buttonOneTabStop, buttonTwoTabStop],
		});

		const action: RovingAction = {
			type: "CHANGE_DIRECTION",
			payload: {
				direction: "vertical",
			},
		};

		const result = reducer(givenState, action);

		expect(result).toEqual({
			direction: "vertical",
			selectedId: buttonOneId,
			lastActionOrigin: "mouse",
			tabStops: [buttonOneTabStop, buttonTwoTabStop],
		});
	});
});
