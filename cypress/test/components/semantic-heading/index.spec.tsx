/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */

import React from "react";
import { mount as render } from "@cypress/react";
import { Heading, Level } from "../../../../src/components/semantic-headings";
import { useHeadings } from "../../../../src/components/semantic-headings/useHeadings";

it("Heading renders an H1 be default", () => {
	render(<Heading>A test title</Heading>);
	cy.findByText("A test title").then(($element) => {
		expect($element.prop("tagName")).to.equal("H1");
	});
});

it("Heading respects the offset prop", () => {
	render(<Heading offset={1}>A test title</Heading>);
	cy.findByText("A test title").then(($element) => {
		expect($element.prop("tagName")).to.equal("H2");
	});
});

it("Level increments the level rendered by Heading", () => {
	render(
		<Level>
			<Heading>A test title</Heading>
		</Level>,
	);
	cy.findByText("A test title").then(($element) => {
		expect($element.prop("tagName")).to.equal("H2");
	});
});

it("Level allows overriding the level", () => {
	render(
		<Level dangerouslySetHeadingLevel={3}>
			<Heading>A test title</Heading>
		</Level>,
	);
	cy.findByText("A test title").then(($element) => {
		expect($element.prop("tagName")).to.equal("H3");
	});
});

describe("in production mode", () => {
	it("useHeadings returns the correct heading level", () => {
		function Test() {
			const level = useHeadings();

			expect(level).to.equal(3);

			return null;
		}

		render(
			<Level dangerouslySetHeadingLevel={3}>
				<Test />
			</Level>,
		);
	});
});
