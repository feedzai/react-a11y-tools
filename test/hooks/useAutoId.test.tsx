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
import { render, screen } from "@testing-library/react";
import { useAutoId } from "../../src/hooks/useAutoId";

function DemoComponent() {
	const value = null;
	const firstId = useAutoId(value);
	const secondId = useAutoId();
	return (
		<div>
			<p id={firstId}>A paragraph</p>
			<span id={secondId}>An inline span element</span>
		</div>
	);
}

function FallbackDemo() {
	const id = useAutoId("fdz-fallback-id");
	return <h1 id={id}>Feedzai</h1>;
}

describe("useAutoId", () => {
	it("should generate a unique ID value", () => {
		render(<DemoComponent />);
		const idOne = Number(screen.getByText("A paragraph").id);
		const idTwo = Number(screen.getByText("An inline span element").id);

		expect(idTwo).not.toEqual(idOne);
	});

	it("uses a fallback ID", () => {
		render(<FallbackDemo />);
		expect(screen.getByText("Feedzai").id).toEqual("fdz-fallback-id");
	});
});
