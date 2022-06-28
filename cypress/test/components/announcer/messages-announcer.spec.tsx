/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * messages-announcer.spec.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React, { FunctionComponent } from "react";
import { Announcement } from "../../../../src/components/announcer/messages";
import {
	MessagesAnnouncer,
	useMessagesAnnouncer,
} from "../../../../src/components/announcer/messages/index";

/**
 * Renders a component inside a `MessagesAnnouncer` context provider.
 *
 * @param {React.ReactElement} ui
 */
function renderWithContext(ui: React.ReactElement) {
	cy.mount(<MessagesAnnouncer>{ui}</MessagesAnnouncer>);
}

const App: FunctionComponent<Announcement> = ({ message, politeness, children }): JSX.Element => {
	const { setMessage } = useMessagesAnnouncer();

	function onClick() {
		setMessage({
			message,
			politeness,
		});
	}
	return (
		<div data-testid="fdz-js-messages-announcer">
			<button type="button" onClick={onClick}>
				Send Message
			</button>
			{children}
		</div>
	);
};

describe("<MessagesAnnouncer />", () => {
	let props: Announcement;

	beforeEach(() => {
		props = {
			message: "this is a test message",
			politeness: "polite",
		};
	});

	it("should update the announcer with a new message", () => {
		renderWithContext(<App {...props} />);

		cy.findByText("Send Message").click();
		cy.findByTestId("fdz-js-announcer")
			.should("have.text", props.message)
			.and("have.attr", "aria-live", props.politeness);
	});

	it("should update the announcer with a new message", () => {
		const customProps: Announcement = {
			message: "this is a custom message",
			politeness: "assertive",
		};
		renderWithContext(<App {...customProps} />);

		cy.findByText("Send Message").click();
		cy.findByTestId("fdz-js-announcer")
			.should("have.text", customProps.message)
			.and("have.attr", "aria-live", customProps.politeness);
	});
});
