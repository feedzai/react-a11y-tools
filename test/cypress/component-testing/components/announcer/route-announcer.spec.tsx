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
import React, { useEffect } from "react";
import { defaultProps, RouteAnnouncer } from "../../../../../src/components/announcer/route-announcer";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { renderWithRouter } from "../../helpers/renderWithRouter";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<p>You are on the initial page</p>
		</div>
	);
};

const About = () => {
	return (
		<div>
			<h1>About</h1>
			<p>You are on the about page</p>
		</div>
	);
};

const Contacts = () => {
	return (
		<div>
			<p>You are on the contacts page</p>
		</div>
	);
};

const Work = () => {
	useEffect(() => {
		document.title = "Work";
	}, []);
	return (
		<div>
			<p>You are on the work page</p>
		</div>
	);
};
const NoMatch = () => {
	return (
		<div>
			<p>404: No Match</p>
		</div>
	);
};

const App = (): JSX.Element => {
	const location = useLocation();
	return (
		<RouteAnnouncer id={defaultProps.id} action={defaultProps.action} pathname={location.pathname}>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/work">Work</Link>
				<Link to="/contacts">Contacts</Link>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/work" element={<Work />} />
					<Route errorElement element={<NoMatch />} />
				</Routes>
			</div>
		</RouteAnnouncer>
	);
};

describe("<RouteAnnouncer />", () => {
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
