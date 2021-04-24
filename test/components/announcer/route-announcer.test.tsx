/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import { Link, RouteComponentProps, Router, useLocation } from "@reach/router";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React, { FunctionComponent, useEffect } from "react";
import {
	defaultProps,
	RouteAnnouncer,
	getHeadingText,
} from "../../../src/components/announcer/route-announcer";
import { IRouteAnnouncerProps } from "../../../src/components/announcer/route-announcer";
import { renderWithRouter } from "../../helpers/renderWithRouter";

const Home: FunctionComponent<RouteComponentProps> = () => {
	return (
		<div>
			<h1>Home</h1>
			<p>You are on the initial page</p>
		</div>
	);
};

const About: FunctionComponent<RouteComponentProps> = () => {
	return (
		<div>
			<h1>About</h1>
			<p>You are on the about page</p>
		</div>
	);
};

const Contacts: FunctionComponent<RouteComponentProps> = () => {
	return (
		<div>
			<p>You are on the contacts page</p>
		</div>
	);
};

const Work: FunctionComponent<RouteComponentProps> = () => {
	useEffect(() => {
		document.title = "Work";
	}, []);
	return (
		<div>
			<p>You are on the work page</p>
		</div>
	);
};
const NoMatch: FunctionComponent<RouteComponentProps> = () => {
	return (
		<div>
			<p>404: No Match</p>
		</div>
	);
};

const App = (): JSX.Element => {
	const location = useLocation();
	return (
		<RouteAnnouncer {...defaultProps} pathname={location.pathname}>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/work">Work</Link>
			<Link to="/contacts">Contacts</Link>
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Contacts path="/contacts" />
				<Work path="/work" />
				<NoMatch default />
			</Router>
		</RouteAnnouncer>
	);
};

describe("<RouteAnnouncer />", () => {
	let props: IRouteAnnouncerProps;

	beforeEach(() => {
		props = {
			...defaultProps,
			pathname: "/",
		};
	});

	it("should render without errors", () => {
		const component = render(<RouteAnnouncer id="app-focus-wrapper" {...props} />);

		expect(component).toMatchSnapshot();
	});

	it("should find the heading on the document", () => {
		renderWithRouter(<App />);
		expect(getHeadingText("content-focus-wrapper")).toEqual("Home");
	});

	it("should not update the announcer on the first location", async () => {
		// 0. Render the app with the `router`
		renderWithRouter(<App />);

		// 2. Expect the new heading and paragraphs to exist
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Home");
		expect(screen.getByText("You are on the initial page")).toBeVisible();

		// 3. The Announcer should not have any text
		expect(screen.getByTestId("rat-announcer")).not.toHaveTextContent("Navigated to Home");
	});

	describe("should update the announcer when the location changes", () => {
		it("By it's heading", async () => {
			// 0. Render the app with the `router`
			const {
				history: { navigate },
			} = renderWithRouter(<App />);

			// 1. Transition to another page
			await navigate("/about");

			// 2. Expect the new heading and paragraphs to exist
			expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("About");
			expect(screen.getByText("You are on the about page")).toBeVisible();

			// 3. The Announcer should have new text
			await waitFor(() => {
				expect(screen.getByText("Navigated to About")).toBeInTheDocument();
			});
		});

		it("By it's location", async () => {
			// 0. Render the app with the `router`
			const {
				history: { navigate },
			} = renderWithRouter(<App />);

			// 1. Transition to another page
			await navigate("/contacts");

			// 2. Expect the new heading and paragraphs to exist
			expect(screen.getByText("You are on the contacts page")).toBeVisible();

			// 3. The Announcer should have new text
			await waitFor(() => {
				expect(
					screen.getByText(
						`${defaultProps.action?.navigation} ${defaultProps.action?.fallback} /contacts`,
					),
				).toBeInTheDocument();
			});
		});

		it("By it's page title", async () => {
			// 0. Render the app with the `router`
			const {
				history: { navigate },
			} = renderWithRouter(<App />);

			// 1. Expect the heading and paragraph to exist
			expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Home");
			expect(screen.getByText("You are on the initial page")).toBeVisible();

			// 2. Transition to a new page
			await navigate("/work");

			// 3. Expect the new paragraph to exist
			expect(screen.getByText("You are on the work page")).toBeVisible();

			// 4. The Announcer should have new text set by the page's title.
			await waitFor(() => {
				expect(screen.getByText("Navigated to Work")).toBeInTheDocument();
			});
		});
	});
});
