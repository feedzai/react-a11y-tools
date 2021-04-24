/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { screen, render, fireEvent, within, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { SkipLinks } from "../../../src/components/skip-links/index";
import { ISkipLink } from "../../../src/components/skip-links/link";
import { ISkipLinksProps } from "../../../src/components/skip-links";
import { SkipLink, SKIP_LINK_DEFAULT_PROPS } from "../../../src/components/skip-links/link";

const DemoContent = (props: ISkipLinksProps) => {
	return (
		<div className="wrapper">
			<SkipLinks {...props} />
			<main id="main-content" tabIndex={-1}>
				<p>Main Content Area</p>
			</main>
		</div>
	);
};

const defaultItems: ISkipLink[] = [
	{
		target: "#main-content",
		text: "Skip to Main Content",
		as: "button",
	},
	{
		target: "#sidebar",
		text: "Skip to Side Menu",
	},
];

describe("<SkipLinks>", () => {
	let props: ISkipLinksProps;

	beforeEach(() => {
		props = {
			items: defaultItems,
		};
	});

	it("should render a link by default", () => {
		const component = render(<SkipLinks />);
		expect(component).toMatchSnapshot();
	});

	it("should render a link even if items is undefined", () => {
		const component = render(<SkipLinks items={[]} />);
		expect(component).toMatchSnapshot();
	});

	it("should render a list of skip links", () => {
		const component = render(<SkipLinks {...props} />);
		expect(component).toMatchSnapshot();
	});

	describe("<SkipLink>", () => {
		it("should render without error", () => {
			const component = render(<SkipLink {...SKIP_LINK_DEFAULT_PROPS} />);
			expect(component).toMatchSnapshot();
		});

		describe("Placing focus on target", () => {
			let link: HTMLElement;

			beforeEach(() => {
				// Render the demo content
				const buttonName = props.items ? props.items[0].text : "";
				render(<DemoContent {...props} />);

				// Press the tab key on the body
				fireEvent.keyPress(document.body, { key: "Tab", code: 9, charCode: 9 });

				// Should show the first skip link
				const links = screen.getByTestId("skip-links");
				link = within(links).getByRole("link", { name: buttonName });
				expect(link).toBeVisible();
			});

			describe("Should place Focus", () => {
				afterEach(async () => {
					// The target should have focus
					await waitFor(() => {
						expect(screen.getByRole("main")).toHaveFocus();
					});
				});

				it("when using the ENTER key", () => {
					// Press enter on the first skip link
					fireEvent.keyUp(link, { key: "Enter", code: "Enter", charCode: 13 });
				});

				it("when using the SPACE key", () => {
					// Press space on the first skip link
					fireEvent.keyUp(link, { key: " ", code: "Space", charCode: 32 });
				});
			});

			it("should not place focus, when pressing any other key on a skip link", async () => {
				// Press a number of keys on the first skip link
				fireEvent.keyUp(link, { key: "a", code: "KeyA", charCode: 65 });
				fireEvent.keyUp(link, { key: "Control", code: "ControlLeft", charCode: 17 });
				fireEvent.keyUp(link, { key: "ArrowDown", code: "ArrowDown", charCode: 40 });

				// The target should not have focus, because the key isn't recognized as valid
				await waitFor(() => {
					expect(screen.getByRole("main")).not.toHaveFocus();
				});
			});
		});
	});
});
