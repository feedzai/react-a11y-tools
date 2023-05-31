/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * route-announcer.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import {
	Link,
	RouteComponentProps,
	Router,
	useLocation,
	createHistory,
	createMemorySource,
	LocationProvider,
	History,
} from "@reach/router";
import React, { FunctionComponent, useEffect } from "react";
import { defaultProps, RouteAnnouncer } from "../../../../src/components/announcer/route-announcer";
import { IRouteAnnouncerProps } from "../../../../src/components/announcer/route-announcer";

export interface RenderWithRouterOptions {
	route?: string;
	history?: History;
}

export interface IRenderWithRouter {
	ui: React.ReactElement;
	options?: RenderWithRouterOptions;
}

export interface IRenderWithRouter {
	history: History;
}

/**
 * Renders a component wrapped inside a `@reach/router` instance.
 * Adds `history` to the returned utilities to allow us to reference it in our tests
 *
 * @param {React.ReactElement} ui
 * @param {IRenderWithRouter} [options]
 */
export function renderWithRouter(
	ui: React.ReactElement,
	{ route = "/", history = createHistory(createMemorySource(route)) }: RenderWithRouterOptions = {},
) {
	cy.mount(<LocationProvider history={history}>{ui}</LocationProvider>);
}

/**
 * `renderWithRouter` with a Router wrapper from `@reach/router`
 *
 * @param {React.ReactElement} ui
 * @param {RenderWithRouterOptions} [options]
 */
export function renderWithRouterWrapper(
	ui: React.ReactElement,
	{ route = "/", history = createHistory(createMemorySource(route)) }: RenderWithRouterOptions = {},
) {
	cy.mount(
		<LocationProvider history={history}>
			<Router>{ui}</Router>
		</LocationProvider>,
	);
}

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

	it("should find the heading on the document", () => {
		renderWithRouter(<App />);
		cy.get("#content-focus-wrapper h1").should("have.text", "Home");
	});

	it("should not update the announcer on the first location", () => {
		// 0. Render the app with the `router`
		renderWithRouter(<App />);

		// 2. Expect the new heading and paragraphs to exist
		cy.findByRole("heading", { level: 1 }).should("have.text", "Home");
		cy.findByText("You are on the initial page").should("be.visible");

		// 3. The Announcer should not have any text
		cy.findByTestId("fdz-js-announcer").should("not.have.text", "Navigated to Home");
	});

	describe("should update the announcer when the location changes", () => {
		it("By it's heading", () => {
			// 0. Render the app with the `router`
			renderWithRouter(<App />);

			// 1. Transition to another page
			cy.findByRole("link", { name: "About" }).click();

			// 2. Expect the new heading and paragraphs to exist
			cy.findByRole("heading", { level: 1 }).should("have.text", "About");
			cy.findByText("You are on the about page").should("be.visible");

			// 3. The Announcer should have new text
			cy.findByText("Navigated to About").should("exist");
		});

		it("By it's location", () => {
			// 0. Render the app with the `router`
			renderWithRouter(<App />);

			// 1. Transition to another page
			cy.findByRole("link", { name: "Contacts" }).click();

			// 2. Expect the new heading and paragraphs to exist
			cy.findByText("You are on the contacts page").should("be.visible");

			// 3. The Announcer should have new text
			cy.findByText(`${defaultProps.action?.navigation} Components App`).should("exist");
		});

		it("By it's page title", () => {
			// 0. Render the app with the `router`
			renderWithRouter(<App />);

			// 1. Expect the heading and paragraph to exist
			cy.findByRole("heading", { level: 1 }).should("have.text", "Home");
			cy.findByText("You are on the initial page").should("be.visible");

			// 2. Transition to a new page
			cy.findByRole("link", { name: "Work" }).click();

			// 3. Expect the new paragraph to exist
			cy.findByText("You are on the work page").should("be.visible");

			// 4. The Announcer should have new text set by the page's title.
			cy.findByText(`${defaultProps.action?.navigation} Work`).should("exist");
		});
	});
});
