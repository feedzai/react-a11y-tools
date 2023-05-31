/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React, { HTMLAttributes, useRef } from "react";
import { useFocus } from "../../../../../src/components/roving-tabindex/use-focus-effect";

interface Props extends HTMLAttributes<HTMLButtonElement> {
	willFocus?: boolean;
}

const DemoComponent = ({
	onFocus,
	willFocus,
}: Props) => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useFocus(buttonRef, willFocus);

	return (
		<button ref={buttonRef} onFocus={onFocus} type="button">A Button</button>
	)
}


describe("useFocus", () => {
	it("does not focus on mount when false", () => {
		cy.mount(<DemoComponent onFocus={cy.stub().as("onFocus")} willFocus={false} />);

		cy.get("@onFocus").should("not.have.been.called");
	});

	it("focuses on mount when true", () => {
		cy.mount(<DemoComponent onFocus={cy.stub().as("onFocus")} willFocus={true} />);

		cy.get("@onFocus").should("have.been.called");
	});
});
