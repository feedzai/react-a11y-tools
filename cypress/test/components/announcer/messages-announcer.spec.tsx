/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/**
 * messages-announcer.spec.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { mount as render } from "@cypress/react";
import React, { FunctionComponent } from "react";
import { ISetMessage } from "../../../../src/components/announcer/messages";
import {
	MessagesAnnouncer,
	useMessagesAnnouncer,
} from "../../../../src/components/announcer/messages/index";

/**
 * Renders a component inside a `MessagesAnnouncer` context provider.
 *
 * @param {React.ReactElement} ui
 * @returns {IRenderWithRouterReturns}
 */
function renderWithContext(ui: React.ReactElement) {
	return render(<MessagesAnnouncer>{ui}</MessagesAnnouncer>);
}

const App: FunctionComponent<ISetMessage> = ({ text, politeness, children }): JSX.Element => {
	const setMessage = useMessagesAnnouncer();

	function onClick() {
		setMessage({
			text,
			politeness,
		});
	}
	return (
		<div data-testid="messages-announcer">
			<button type="button" onClick={onClick}>
				Send Message
			</button>
			{children}
		</div>
	);
};

describe("<MessagesAnnouncer />", () => {
	let props: ISetMessage;

	beforeEach(() => {
		props = {
			text: "this is a test message",
			politeness: "polite",
		};
	});

	it("should render without errors", () => {
		renderWithContext(
			<App {...props}>
				<p>children content</p>
			</App>,
		);

		cy.findByTestId("messages-announcer").snapshot("should render without errors");
	});

	it("should update the announcer with a new message", () => {
		renderWithContext(<App {...props} />);

		cy.findByText("Send Message").click();
		cy.findByTestId("fdz-rat-announcer")
			.should("have.text", props.text)
			.and("have.attr", "aria-live", props.politeness);
	});

	it("should update the announcer with a new message", () => {
		const customProps: ISetMessage = {
			text: "this is a custom message",
			politeness: "assertive",
		};
		renderWithContext(<App {...customProps} />);

		cy.findByText("Send Message").click();
		cy.findByTestId("fdz-rat-announcer")
			.should("have.text", customProps.text)
			.and("have.attr", "aria-live", customProps.politeness);
	});
});
