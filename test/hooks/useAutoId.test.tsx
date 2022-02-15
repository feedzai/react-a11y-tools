/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * useAutoId.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { useAutoId } from "../../src/hooks/useAutoId";

function DemoComponent({ value = null, prefix }: { value?: string | null; prefix?: string }) {
	const firstId = useAutoId(value, prefix);
	const secondId = useAutoId();
	return (
		<div>
			<p id={firstId}>A paragraph</p>
			<span id={secondId}>An inline span element</span>
		</div>
	);
}

function FallbackDemo({
	value = "fdz-fallback-id",
	prefix,
}: {
	value?: string | null;
	prefix?: string;
}) {
	const id = useAutoId(value, prefix);
	return <h1 id={id}>Feedzai</h1>;
}

describe("useAutoId", () => {
	it("should generate a unique ID value", () => {
		render(<DemoComponent />);
		const idOne = Number(screen.getByText("A paragraph").id);
		const idTwo = Number(screen.getByText("An inline span element").id);

		expect(idTwo).not.toEqual(idOne);
	});

	it("should generate a prefixed unique ID value", () => {
		const expected = "fdz-js-a-prefix";
		render(<DemoComponent value={undefined} prefix={expected} />);
		const idOne = screen.getByText("A paragraph").id;

		expect(idOne).toContain(expected);
	});

	it("uses a fallback ID", () => {
		render(<FallbackDemo />);
		expect(screen.getByText("Feedzai").id).toEqual("fdz-fallback-id");
	});

	it("should return a prefixed fallback ID", () => {
		render(<FallbackDemo prefix="fdz-js-prefix" value="423696e5" />);
		expect(screen.getByText("Feedzai").id).toEqual("fdz-js-prefix--423696e5");
	});
});
