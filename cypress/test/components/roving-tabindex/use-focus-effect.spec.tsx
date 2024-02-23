/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
import { useCallback, useRef, useState } from "react";
import { useFocus } from "../../../../src/components/roving-tabindex/use-focus-effect";

function Demo({ isFocused = false, onFocus }: { isFocused?: boolean; onFocus: () => void }) {
	const [focused, setFocused] = useState(isFocused);

	const buttonRef = useRef(null);

	useFocus(buttonRef, focused);

	const handleOnClick = useCallback(() => {
		setFocused(true);
	}, [setFocused]);

	return (
		<button ref={buttonRef} onFocus={onFocus} onClick={handleOnClick}>
			Demo Button
		</button>
	);
}

it("does not focus on mount when false", () => {
	cy.mount(<Demo isFocused={false} onFocus={cy.stub().as("onFocus")} />);

	cy.get("@onFocus").should("not.have.been.called");
});

it("focuses on mount when true", () => {
	cy.mount(<Demo isFocused={true} onFocus={cy.stub().as("onFocus")} />);

	cy.get("@onFocus").should("have.been.called");
});

it("focuses when focus value changes to true", () => {
	cy.mount(<Demo isFocused={false} onFocus={cy.stub().as("onFocus")} />);

	cy.get("@onFocus").should("not.have.been.called");

	cy.get("button").click();

	cy.get("@onFocus").should("have.been.called");
});
