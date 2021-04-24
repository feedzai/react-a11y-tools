/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { RoverProvider, useRover, useFocus } from "../../../src/components/roving-tabindex/index";

const TestButton: React.FC<{
	disabled: boolean;
	id?: string;
}> = ({ disabled, children, id }) => {
	const ref = React.useRef(null);
	const [tabIndex, focused, handleKeyDown, handleClick] = useRover(ref, disabled);
	useFocus(ref, focused);
	return (
		<button
			ref={ref}
			id={id}
			onKeyDown={handleKeyDown}
			onClick={handleClick}
			tabIndex={tabIndex}
			disabled={disabled}
			data-focused={focused}
		>
			{children}
		</button>
	);
};

const TestToolbar: React.FC<{
	direction?: "horizontal" | "vertical" | "both";
	flags?: Array<boolean>;
}> = ({ flags = [false, false, false], direction = "vertical" }) => (
	<RoverProvider direction={direction}>
		<TestButton disabled={flags[0]}>Button One</TestButton>
		<div>
			<TestButton disabled={flags[1]}>Button Two</TestButton>
		</div>
		<TestButton disabled={flags[2]}>Button Three</TestButton>
	</RoverProvider>
);

const TestToolbarWithIDs: React.FC<{
	flags?: Array<boolean>;
}> = ({ flags = [false, false, false] }) => (
	<RoverProvider>
		<TestButton disabled={flags[0]} id="user-id-1">
			Button One
		</TestButton>
		<div>
			<TestButton disabled={flags[1]} id="user-id-2">
				Button Two
			</TestButton>
		</div>
		<TestButton disabled={flags[2]} id="user-id-3">
			Button Three
		</TestButton>
	</RoverProvider>
);

describe("useRover", () => {
	test("displays correctly initially when no buttons are disabled", async () => {
		const flags = [false, false, false];
		render(<TestToolbar flags={flags} />);
		expect(screen.getByText("Button One").tabIndex).toEqual(0);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
	});

	test("displays correctly initially when custom IDs are used", async () => {
		const flags = [false, false, false];
		render(<TestToolbarWithIDs flags={flags} />);
		expect(screen.getByText("Button One").id).toEqual("user-id-1");
		expect(screen.getByText("Button Two").id).toEqual("user-id-2");
		expect(screen.getByText("Button Three").id).toEqual("user-id-3");
	});

	test("displays correctly initially when first button is disabled", async () => {
		const flags = [true, false, false];
		render(<TestToolbar flags={flags} />);
		expect(screen.getByText("Button One").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").tabIndex).toEqual(0);
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
	});

	test("updates correctly when a button changes to being disabled", async () => {
		let flags = [false, false, false];
		const { rerender } = render(<TestToolbar flags={flags} />);
		flags = [true, false, false];
		rerender(<TestToolbar flags={flags} />);
		expect(screen.getByText("Button One").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").tabIndex).toEqual(0);
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
	});

	describe("direction is 'horizontal'", () => {
		test("pressing arrow right key", async () => {
			render(<TestToolbar direction="horizontal" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(0);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
		});

		test("pressing arrow left key", () => {
			render(<TestToolbar direction="horizontal" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowLeft" });

			expect(screen.getByText("Button One")).toHaveAttribute("tabindex", "-1");
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(0);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowLeft" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowLeft" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
		});

		test("pressing arrow up key", async () => {
			render(<TestToolbar direction="horizontal" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		});

		test("pressing down up key", async () => {
			render(<TestToolbar direction="horizontal" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		});
	});

	describe("direction is 'vertical'", () => {
		test("pressing arrow down key", async () => {
			render(<TestToolbar direction="vertical" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(0);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
		});

		test("pressing arrow up key", async () => {
			render(<TestToolbar direction="vertical" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(0);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
		});

		test("pressing arrow right key", async () => {
			render(<TestToolbar direction="vertical" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		});

		test("pressing arrow down key", async () => {
			render(<TestToolbar direction="vertical" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowLeft" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowLeft" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowLeft" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		});
	});

	describe("direction is 'both'", () => {
		test("pressing arrow right key", async () => {
			render(<TestToolbar direction="both" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(0);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowRight" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
		});

		test("pressing arrow left key", async () => {
			render(<TestToolbar direction="both" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowLeft" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(0);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowLeft" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowLeft" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
		});

		test("pressing arrow down key", async () => {
			render(<TestToolbar direction="vertical" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(0);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowDown" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
		});

		test("pressing arrow up key", async () => {
			render(<TestToolbar direction="vertical" />);

			fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(0);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

			fireEvent.keyDown(screen.getByText("Button Three"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(-1);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Two").tabIndex).toEqual(0);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

			fireEvent.keyDown(screen.getByText("Button Two"), { key: "ArrowUp" });
			expect(screen.getByText("Button One").tabIndex).toEqual(0);
			expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
			expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
			expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
			expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
		});
	});

	test("pressing home key", async () => {
		render(<TestToolbar />);

		fireEvent.keyDown(screen.getByText("Button One"), { key: "Home" });
		expect(screen.getByText("Button One").tabIndex).toEqual(0);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

		fireEvent.keyDown(screen.getByText("Button Two"), { key: "Home" });
		expect(screen.getByText("Button One").tabIndex).toEqual(0);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

		fireEvent.keyDown(screen.getByText("Button Three"), { key: "Home" });
		expect(screen.getByText("Button One").tabIndex).toEqual(0);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
	});

	test("pressing end key", async () => {
		render(<TestToolbar />);

		fireEvent.keyDown(screen.getByText("Button One"), { key: "End" });
		expect(screen.getByText("Button One").tabIndex).toEqual(-1);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(0);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

		fireEvent.keyDown(screen.getByText("Button Two"), { key: "End" });
		expect(screen.getByText("Button One").tabIndex).toEqual(-1);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(0);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

		fireEvent.keyDown(screen.getByText("Button Three"), { key: "End" });
		expect(screen.getByText("Button One").tabIndex).toEqual(-1);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(0);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");
	});

	test("pressing home key", async () => {
		render(<TestToolbar />);

		fireEvent.keyDown(screen.getByText("Button One"), { key: "Home" });
		expect(screen.getByText("Button One").tabIndex).toEqual(0);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

		fireEvent.keyDown(screen.getByText("Button Two"), { key: "Home" });
		expect(screen.getByText("Button One").tabIndex).toEqual(0);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

		fireEvent.keyDown(screen.getByText("Button Three"), { key: "Home" });
		expect(screen.getByText("Button One").tabIndex).toEqual(0);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
	});

	test("pressing end key", async () => {
		render(<TestToolbar />);

		fireEvent.keyDown(screen.getByText("Button One"), { key: "End" });
		expect(screen.getByText("Button One").tabIndex).toEqual(-1);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(0);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

		fireEvent.keyDown(screen.getByText("Button Two"), { key: "End" });
		expect(screen.getByText("Button One").tabIndex).toEqual(-1);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(0);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");

		fireEvent.keyDown(screen.getByText("Button Three"), { key: "End" });
		expect(screen.getByText("Button One").tabIndex).toEqual(-1);
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Two").tabIndex).toEqual(-1);
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").tabIndex).toEqual(0);
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("true");
	});

	test("manages focus when switching between keyboard and mouse input", async () => {
		const flags = [false, false, false];
		render(<TestToolbar flags={flags} direction="horizontal" />);

		fireEvent.click(screen.getByText("Button One"));
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

		fireEvent.keyDown(screen.getByText("Button One"), { key: "ArrowRight" });
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");

		fireEvent.click(screen.getByText("Button One"));
		expect(screen.getByText("Button One").getAttribute("data-focused")).toEqual("true");
		expect(screen.getByText("Button Two").getAttribute("data-focused")).toEqual("false");
		expect(screen.getByText("Button Three").getAttribute("data-focused")).toEqual("false");
	});
});
