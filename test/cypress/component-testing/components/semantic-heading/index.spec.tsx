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
import { Heading, Level } from "../../../../../src/components/semantic-headings";
import { useHeadings } from "../../../../../src/components/semantic-headings/useHeadings";

it("Heading renders an H1 by default", () => {
	cy.mount(<Heading>A test title</Heading>);
	cy.findByText("A test title").then(($element) => {
		expect($element.prop("tagName")).to.equal("H1");
	});
});

it("Heading respects the offset prop", () => {
	cy.mount(<Heading offset={1}>A test title</Heading>);
	cy.findByText("A test title").then(($element) => {
		expect($element.prop("tagName")).to.equal("H2");
	});
});

it("Level increments the level rendered by Heading", () => {
	cy.mount(
		<Level>
			<Heading>A test title</Heading>
		</Level>,
	);
	cy.findByText("A test title").then(($element) => {
		expect($element.prop("tagName")).to.equal("H2");
	});
});

it("Level allows overriding the level", () => {
	cy.mount(
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

		cy.mount(
			<Level dangerouslySetHeadingLevel={3}>
				<Test />
			</Level>,
		);
	});

	it("Level does not throw in production mode if level is > 6", () => {
		cy.mount(<Level dangerouslySetHeadingLevel={7}>{""}</Level>);
	});

	it("Heading is clamped to a valid range", () => {
		cy.mount(
			<Level dangerouslySetHeadingLevel={7}>
				<Heading>A test title</Heading>
			</Level>,
		);

		cy.findAllByRole("heading", {
			level: 6,
		}).should("exist").and("have.text", "A test title");
	});

	it("Heading is clamped to a valid range in another case", () => {
		cy.mount(
			<Level dangerouslySetHeadingLevel={6}>
				<Heading offset={1}>A test title</Heading>
			</Level>,
		);

		cy.findAllByRole("heading", {
			level: 6
		}).first().should("exist").and("have.text", "A test title");
	});
});
