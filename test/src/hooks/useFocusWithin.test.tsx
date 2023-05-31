/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2022 Feedzai, Rights Reserved.
 */

/**
 * useFocusWithin.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { act, render, waitFor } from "@testing-library/react";
import { useFocusWithin } from "../../../src/hooks";
import { UseFocusWithinProps } from "../../../src/hooks/useFocusWithin/types";

const Example: React.FC<UseFocusWithinProps> = (props) => {
	const { focusWithinProps } = useFocusWithin(props);
	return (
		<div tabIndex={-1} {...focusWithinProps} data-testid="fdz-js-example">
			{props.children}
		</div>
	);
};

interface EventsArray {
	type: string;
	target?: EventTarget | null;
	isFocused?: boolean;
}

describe("useFocusWithin", () => {
	it("handles focus events on the target itself", () => {
		const events: EventsArray[] = [];
		const addEvent = (e: FocusEvent) => events.push({ type: e.type, target: e.target });
		const tree = render(
			<Example
				onFocusWithin={addEvent}
				onBlurWithin={addEvent}
				onFocusWithinChange={(isFocused: boolean) =>
					events.push({ type: "focuschange", isFocused })
				}
			/>,
		);

		const el = tree.getByTestId("fdz-js-example");
		act(() => {
			el.focus();
		});
		act(() => {
			el.blur();
		});

		expect(events).toEqual([
			{ type: "focus", target: el },
			{ type: "focuschange", isFocused: true },
			{ type: "blur", target: el },
			{ type: "focuschange", isFocused: false },
		]);
	});

	it("does handle focus events on children", () => {
		const events: EventsArray[] = [];
		const addEvent = (e: FocusEvent) => events.push({ type: e.type, target: e.target });
		const tree = render(
			<Example
				onFocusWithin={addEvent}
				onBlurWithin={addEvent}
				onFocusWithinChange={(isFocused) => events.push({ type: "focuschange", isFocused })}
			>
				<div data-testid="child" tabIndex={-1} />
			</Example>,
		);

		const el = tree.getByTestId("fdz-js-example");
		const child = tree.getByTestId("child");
		act(() => {
			child.focus();
		});
		act(() => {
			el.focus();
		});
		act(() => {
			child.focus();
		});
		act(() => {
			child.blur();
		});

		expect(events).toEqual([
			{ type: "focus", target: child },
			{ type: "focuschange", isFocused: true },
			{ type: "blur", target: child },
			{ type: "focuschange", isFocused: false },
		]);
	});

	it("events do not bubble when stopPropagation is called", () => {
		const onWrapperFocus = jest.fn();
		const onWrapperBlur = jest.fn();
		const onInnerFocus = jest.fn((e) => e.stopPropagation());
		const onInnerBlur = jest.fn((e) => e.stopPropagation());
		const tree = render(
			<div onFocus={onWrapperFocus} onBlur={onWrapperBlur}>
				<Example onFocusWithin={onInnerFocus} onBlurWithin={onInnerBlur}>
					<div data-testid="child" tabIndex={-1} />
				</Example>
			</div>,
		);

		const child = tree.getByTestId("child");
		act(() => {
			child.focus();
		});
		act(() => {
			child.blur();
		});

		expect(onInnerFocus).toHaveBeenCalledTimes(1);
		expect(onInnerBlur).toHaveBeenCalledTimes(1);
		expect(onWrapperFocus).not.toHaveBeenCalled();
		expect(onWrapperBlur).not.toHaveBeenCalled();
	});

	it("events bubble by default", () => {
		const onWrapperFocus = jest.fn();
		const onWrapperBlur = jest.fn();
		const onInnerFocus = jest.fn();
		const onInnerBlur = jest.fn();
		const tree = render(
			<div onFocus={onWrapperFocus} onBlur={onWrapperBlur}>
				<Example onFocusWithin={onInnerFocus} onBlurWithin={onInnerBlur}>
					<div data-testid="child" tabIndex={-1} />
				</Example>
			</div>,
		);

		const child = tree.getByTestId("child");
		act(() => {
			child.focus();
		});
		act(() => {
			child.blur();
		});

		expect(onInnerFocus).toHaveBeenCalledTimes(1);
		expect(onInnerBlur).toHaveBeenCalledTimes(1);
		expect(onWrapperFocus).toHaveBeenCalledTimes(1);
		expect(onWrapperBlur).toHaveBeenCalledTimes(1);
	});

	it("should fire onBlur when a focused element is disabled", async () => {
		const Example: React.FC<UseFocusWithinProps & { disabled?: boolean }> = (props) => {
			const { focusWithinProps } = useFocusWithin(props);
			return (
				<div {...focusWithinProps}>
					<button disabled={props.disabled}>Button</button>
				</div>
			);
		};

		const onFocus = jest.fn();
		const onBlur = jest.fn();
		const tree = render(<Example onFocusWithin={onFocus} onBlurWithin={onBlur} />);
		const button = tree.getByRole("button");

		act(() => {
			button.focus();
		});
		expect(onFocus).toHaveBeenCalled();
		tree.rerender(<Example disabled onFocusWithin={onFocus} onBlurWithin={onBlur} />);
		// MutationObserver is async
		await waitFor(() => expect(onBlur).toHaveBeenCalled());
	});
});
