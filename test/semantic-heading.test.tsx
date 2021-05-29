import React from "react";
import { render } from "@testing-library/react";
import { Heading, Level } from "../src/components/semantic-headings";

describe("in production mode", () => {
	let oldEnv: NodeJS.ProcessEnv;

	beforeEach(() => {
		oldEnv = process.env;
		process.env = { ...oldEnv, NODE_ENV: "production" };
	});

	afterEach(() => {
		process.env = oldEnv;
	});

	test("Level does not throw in production mode if level is > 6", () => {
		render(<Level dangerouslyOverrideValue={7}>{""}</Level>);
	});

	test("Heading is clamped to a valid range", () => {
		const { getByText } = render(
			<Level dangerouslyOverrideValue={7}>
				<Heading>A test title</Heading>
			</Level>,
		);
		const headingElement = getByText("A test title");

		expect(headingElement.tagName).toBe("H6");
	});

	test("Heading is clamped to a valid range in another case", () => {
		const { getByText } = render(
			<Level dangerouslyOverrideValue={6}>
				<Heading offset={1}>A test title</Heading>
			</Level>,
		);
		const headingElement = getByText("A test title");

		expect(headingElement.tagName).toBe("H6");
	});
});
