/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { FunctionComponent } from "react";
import { ISetMessage } from "../../../src/components/announcer/messages";
import {
	MessagesAnnouncer,
	useMessagesAnnouncer,
} from "../../../src/components/announcer/messages/index";

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
		<div>
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
		const component = renderWithContext(
			<App {...props}>
				<p>children content</p>
			</App>,
		);

		expect(component).toMatchSnapshot();
	});

	it("should update the announcer with a new message", () => {
		renderWithContext(<App {...props} />);

		const button = screen.getByText("Send Message");

		userEvent.click(button);

		const announcer = screen.getByTestId("rat-announcer");
		expect(announcer).toHaveTextContent(props.text);
		expect(announcer).toHaveAttribute("aria-live", props.politeness);
	});

	it("should update the announcer with a new message", () => {
		const customProps: ISetMessage = {
			text: "this is a custom message",
			politeness: "assertive",
		};
		renderWithContext(<App {...customProps} />);

		const button = screen.getByText("Send Message");

		userEvent.click(button);

		const announcer = screen.getByTestId("rat-announcer");
		expect(announcer).toHaveTextContent(customProps.text);
		expect(announcer).toHaveAttribute("aria-live", customProps.politeness);
	});
});
