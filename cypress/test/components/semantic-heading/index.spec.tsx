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
import { checkHeadingLevels } from "../../../../src/components/semantic-headings/helpers";
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
		<Level dangerouslyOverrideValue={3}>
			<Heading>A test title</Heading>
		</Level>,
	);
	cy.findByText("A test title").then(($element) => {
		expect($element.prop("tagName")).to.equal("H3");
	});
});

it("Level throws in non-production mode if level is > 6", () => {
	try {
	} catch (error) {
		expect(() =>
			render(
				<Level dangerouslyOverrideValue={7}>
					<p>A paragraph</p>
				</Level>,
			),
		).to.throw();
	}
});

it("Valid heading levels are ignored (dev mode)", () => {
	const goodHeadings = [1, 2, 3, 2];
	expect(() => checkHeadingLevels(goodHeadings)).not.to.throw();
	const goodHeadings2 = [2, 3, 2, 1, 2, 3, 2];
	expect(() => checkHeadingLevels(goodHeadings2)).not.to.throw();
	const goodHeadings3 = [1, 2, 3, 2];
	expect(() => checkHeadingLevels(goodHeadings3)).not.to.throw();
});

it("Invalid skipped headings are detected (dev mode)", () => {
	const skippedHeadings = [1, 2, 4, 2];
	const err = new Error("Invalid heading levels detected: 1,2,4,2");

	try {
	} catch (error) {
		expect(() => checkHeadingLevels(skippedHeadings)).to.throw(err);
	}
});

it("Multiple h1s are detected (dev mode)", () => {
	const multipleH1s = [1, 2, 3, 1];
	expect(() => checkHeadingLevels(multipleH1s)).to.throw();
});

describe("in production mode", () => {
	it("useHeadings returns the correct heading level", () => {
		function Test() {
			const level = useHeadings();

			expect(level).to.equal(3);

			return null;
		}

		render(
			<Level dangerouslyOverrideValue={3}>
				<Test />
			</Level>,
		);
	});

	it("Valid heading levels are ignored (prod mode)", () => {
		const goodHeadings = [1, 2, 3, 2];
		expect(checkHeadingLevels(goodHeadings).length).to.equal(0);
		const goodHeadings2 = [2, 3, 2, 1, 2, 3, 2];
		expect(checkHeadingLevels(goodHeadings2).length).to.equal(0);
		const goodHeadings3 = [1, 2, 3, 2];
		expect(checkHeadingLevels(goodHeadings3).length).to.equal(0);
	});

	it("Invalid skipped headings are detected (prod mode)", () => {
		const skippedHeadings = [1, 2, 4, 2];

		try {
			expect(checkHeadingLevels(skippedHeadings).length).to.equal(skippedHeadings.length);
		} catch (error) {
			expect(() => checkHeadingLevels(skippedHeadings)).to.throw(
				"Invalid heading levels detected: 1,2,4,2",
			);
		}
	});

	it("Multiple h1s are detected (prod mode)", () => {
		const multipleH1s = [1, 2, 3, 1];

		try {
			expect(checkHeadingLevels(multipleH1s).length).to.equal(multipleH1s.length);
		} catch (error) {
			expect(() => checkHeadingLevels(multipleH1s)).to.throw(
				"Invalid heading levels detected: 1,2,3,1",
			);
		}
	});
});
