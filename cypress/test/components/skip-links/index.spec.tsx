/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
/**
 * index.spec.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React from "react";
import { mount as render } from "@cypress/react";
import {
	SkipLinks,
	SKIP_LINK_ITEMS_DEFAULT_PROPS,
} from "../../../../src/components/skip-links/index";
import { ISkipLinksProps } from "../../../../src/components/skip-links";
import { SkipLink } from "../../../../src/components/skip-links/link";

const DemoContent = (props: ISkipLinksProps) => {
	return (
		<div
			style={{
				display: "grid",
				placeItems: "center",
				height: "200px",
				width: "100%",
			}}
		>
			<SkipLinks {...props} />
			<main
				id="main-content"
				tabIndex={-1}
				style={{
					backgroundColor: "lightgray",
					color: "black",
					padding: "2rem",
					outlineColor: "blue",
				}}
			>
				<p>Main Content Area</p>
			</main>
		</div>
	);
};

describe("<SkipLinks>", () => {
	let props = SKIP_LINK_ITEMS_DEFAULT_PROPS;

	it("should render a link by default", () => {
		render(<SkipLinks />);
		cy.findAllByRole("link", { name: props.items[0].text })
			.should("exist")
			.within(($links) => {
				cy.wrap($links).snapshot("default skip links");
			});
	});

	it("should render a link even if items is undefined", () => {
		render(<SkipLinks items={[]} />);
		cy.findByRole("link", { name: props.items[0].text }).should("exist");
	});

	it("should render a list of skip links", () => {
		render(<SkipLinks {...props} />);
		cy.findAllByRole("link", { name: props.items[0].text }).should("exist");
	});

	describe("<SkipLink>", () => {
		beforeEach(() => {
			props = {
				items: [
					{
						target: "#main-content",
						text: "Skip to Main Content",
						as: "button",
					},
					{
						target: "#sidebar",
						text: "Skip to Side Menu",
					},
				],
			};
		});

		it("should render without error", () => {
			render(<SkipLink text={props.items[0].text} target={props.items[0].target} />);
			cy.findByRole("link", { name: props.items[0].text }).within(($link) => {
				cy.wrap($link).snapshot();
			});
		});

		describe("Placing focus on target", () => {
			beforeEach(() => {
				// Render the demo content
				render(<DemoContent {...props} />);
			});

			describe("Should place Focus", () => {
				it("when using the ENTER key", () => {
					// Press enter on the first skip link
					cy.get("body").tab().type("{enter}");
					cy.findByRole("main").should("have.focus");
				});

				it("when using the SPACE key", () => {
					// Press space on the first skip link
					cy.get("body").tab().type(" ");
					cy.findByRole("main").should("have.focus");
				});
			});

			it("should not place focus, when pressing any other key on a skip link", () => {
				// Press a number of keys on the first skip link
				cy.get("body").tab().type("a random sentence");
				cy.get("body").tab().type("{backspace}");
				cy.get("body").tab().type("{del}");
				cy.get("body").tab().type("{downarrow}");
				cy.findByRole("main").should("not.have.focus");
			});
		});
	});
});
