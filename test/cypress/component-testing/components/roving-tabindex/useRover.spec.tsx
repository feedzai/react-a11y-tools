/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * use-rover.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React from "react";
import {
	RoverProvider,
	useRover,
	useFocus,
} from "../../../../../src/components/roving-tabindex/index";

const TestButton: React.FC<{
	disabled: boolean;
	id?: string;
	children: React.ReactNode;
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
	it("displays correctly initially when no buttons are disabled", () => {
		const flags = [false, false, false];
		cy.mount(<TestToolbar flags={flags} />);

		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");

		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");

		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
	});

	it("displays correctly initially when custom IDs are used", () => {
		const flags = [false, false, false];
		cy.mount(<TestToolbarWithIDs flags={flags} />);

		cy.findByText("Button One").invoke("attr", "id").should("equal", "user-id-1");
		cy.findByText("Button Two").invoke("attr", "id").should("equal", "user-id-2");
		cy.findByText("Button Three").invoke("attr", "id").should("equal", "user-id-3");
	});

	it("displays correctly initially when first button is disabled", () => {
		const flags = [true, false, false];
		cy.mount(<TestToolbar flags={flags} />);
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
	});

	it("updates correctly when a button changes to being disabled", () => {
		let flags = [false, false, false];
		cy.mount(<TestToolbar flags={flags} />).then(({ rerender }) => {
			flags = [true, false, false];
			rerender(<TestToolbar flags={flags} />);

			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
		});
	});

	describe("direction is 'horizontal'", () => {
		it("pressing arrow right key", () => {
			cy.mount(<TestToolbar direction="horizontal" />);

			cy.findByText("Button One").type("{rightarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

			cy.findByText("Button Two").type("{rightarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

			cy.findByText("Button Three").type("{rightarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
		});

		it("pressing arrow left key", () => {
			cy.mount(<TestToolbar direction="horizontal" />);

			cy.findByText("Button One").type("{leftarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

			cy.findByText("Button Three").type("{leftarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

			cy.findByText("Button Two").type("{leftarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
		});

		it("pressing arrow up key", () => {
			cy.mount(<TestToolbar direction="horizontal" />);

			cy.findByText("Button One")
				.type("{uparrow}")
				.then(() => {
					cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
					cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
					cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
				});
		});

		it("pressing down up key", () => {
			cy.mount(<TestToolbar direction="horizontal" />);

			cy.findByText("Button One")
				.type("{downarrow}")
				.then(() => {
					cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
					cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
					cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
				});
		});
	});

	describe("direction is 'vertical'", () => {
		it("pressing arrow down key", () => {
			cy.mount(<TestToolbar direction="vertical" />);

			cy.findByText("Button One").type("{downarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

			cy.findByText("Button Two").type("{downarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

			cy.findByText("Button Three").type("{downarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
		});

		it("pressing arrow up key", () => {
			cy.mount(<TestToolbar direction="vertical" />);

			cy.findByText("Button One").type("{uparrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

			cy.findByText("Button Three").type("{uparrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

			cy.findByText("Button Two").type("{uparrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
		});

		it("pressing arrow right key", () => {
			cy.mount(<TestToolbar direction="vertical" />);

			cy.findByText("Button One")
				.type("{rightarrow}")
				.then(() => {
					cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
					cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
					cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
				});
		});

		it("pressing arrow down key", () => {
			cy.mount(<TestToolbar direction="vertical" />);

			cy.findByText("Button One")
				.type("{leftarrow}")
				.then(() => {
					cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
					cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
					cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
				});
		});
	});

	describe("direction is 'both'", () => {
		it("pressing arrow right key", () => {
			cy.mount(<TestToolbar direction="both" />);

			cy.findByText("Button One").type("{rightarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

			cy.findByText("Button Two").type("{rightarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

			cy.findByText("Button Three").type("{rightarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
		});

		it("pressing arrow left key", () => {
			cy.mount(<TestToolbar direction="both" />);

			cy.findByText("Button One").type("{leftarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

			cy.findByText("Button Three").type("{leftarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

			cy.findByText("Button Two").type("{leftarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
		});

		it("pressing arrow down key", () => {
			cy.mount(<TestToolbar direction="vertical" />);

			cy.findByText("Button One").type("{downarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

			cy.findByText("Button Two").type("{downarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

			cy.findByText("Button Three").type("{downarrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
		});

		it("pressing arrow up key", () => {
			cy.mount(<TestToolbar direction="vertical" />);

			cy.findByText("Button One").type("{uparrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

			cy.findByText("Button Three").type("{uparrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

			cy.findByText("Button Two").type("{uparrow}");
			cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
			cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
			cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
			cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
			cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
		});
	});

	it("pressing home key", () => {
		cy.mount(<TestToolbar />);

		cy.findByText("Button One").type("{home}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

		cy.findByText("Button Two").type("{home}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

		cy.findByText("Button Three").type("{home}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
	});

	it("pressing end key", () => {
		cy.mount(<TestToolbar />);

		cy.findByText("Button One").type("{end}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

		cy.findByText("Button Two").type("{end}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

		cy.findByText("Button Three").type("{end}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");
	});

	it("pressing home key", () => {
		cy.mount(<TestToolbar />);

		cy.findByText("Button One").type("{home}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

		cy.findByText("Button Two").type("{home}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

		cy.findByText("Button Three").type("{home}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
	});

	it("pressing end key", () => {
		cy.mount(<TestToolbar />);

		cy.findByText("Button One").type("{end}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

		cy.findByText("Button Two").type("{end}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");

		cy.findByText("Button Three").type("{end}");
		cy.findByText("Button One").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Two").invoke("attr", "tabindex").should("equal", "-1");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "tabindex").should("equal", "0");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "true");
	});

	it("manages focus when switching between keyboard and mouse input", () => {
		const flags = [false, false, false];
		cy.mount(<TestToolbar flags={flags} direction="horizontal" />);

		cy.findByText("Button One").click();
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

		cy.findByText("Button One").type("{rightarrow}");
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");

		cy.findByText("Button One").click();
		cy.findByText("Button One").invoke("attr", "data-focused").should("equal", "true");
		cy.findByText("Button Two").invoke("attr", "data-focused").should("equal", "false");
		cy.findByText("Button Three").invoke("attr", "data-focused").should("equal", "false");
	});
});
