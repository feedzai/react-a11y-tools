/* eslint-disable @typescript-eslint/ban-ts-comment */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/**
 * index.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React from "react";
import { mount } from "@cypress/react";
import { IFocusManagerProps } from "../../../../src/components/focus-manager";
import { FocusManager } from "../../../../src/components/focus-manager/index";

describe("FocusManager", () => {
	describe("focus containment", () => {
		it("should contain focus within the scope", () => {
			mount(
				<FocusManager contain>
					<input data-testid="fdz-js-input-1" />
					<input data-testid="fdz-js-input-2" />
					<input data-testid="fdz-js-input-3" />
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-1").focus().should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-2").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-3").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-1").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-3").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-2").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-1").focus().should("have.focus");
		});

		it("should work with nested elements", () => {
			mount(
				<FocusManager contain>
					<input data-testid="fdz-js-input-1" />
					<div>
						<input data-testid="fdz-js-input-2" />
						<div>
							<input data-testid="fdz-js-input-3" />
						</div>
					</div>
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-1").focus().should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-2").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-3").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-1").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-3").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-2").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-1").should("have.focus");
		});

		it("should skip non-tabbable elements", () => {
			mount(
				<FocusManager contain>
					<input data-testid="fdz-js-input-1" />
					<div />
					<input data-testid="fdz-js-input-2" />
					<div tabIndex={-1} />
					<input data-testid="fdz-js-input-3" />
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-1").focus().should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-2").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-3").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-1").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-3").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-2").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-1").should("have.focus");
		});

		it("should do nothing if a modifier key is pressed", () => {
			mount(
				<FocusManager contain>
					<input data-testid="fdz-js-input-1" />
					<input data-testid="fdz-js-input-2" />
					<input data-testid="fdz-js-input-3" />
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-1")
				.focus()
				.should("have.focus")
				.realPress(["Alt", "Meta", "P"]);
			cy.findByTestId("fdz-js-input-1").should("have.focus");
		});

		it("should work with multiple focus scopes", () => {
			mount(
				<div>
					<FocusManager contain>
						<input data-testid="fdz-js-input-1" />
						<input data-testid="fdz-js-input-2" />
						<input data-testid="fdz-js-input-3" />
					</FocusManager>
					<FocusManager contain>
						<input data-testid="fdz-js-input-4" />
						<input data-testid="fdz-js-input-5" />
						<input data-testid="fdz-js-input-6" />
					</FocusManager>
				</div>,
			);

			cy.findByTestId("fdz-js-input-1").focus().should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-2").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-3").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-1").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-3").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-2").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-1").should("have.focus");

			cy.findByTestId("fdz-js-input-4").focus().should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-5").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-6").should("have.focus").realPress("Tab");
			cy.findByTestId("fdz-js-input-4").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-6").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-5").should("have.focus").realPress(["Shift", "Tab"]);
			cy.findByTestId("fdz-js-input-4").should("have.focus");
		});

		it("uses document.activeElement instead of e.relatedTarget on blur to determine if focus is still in scope", () => {
			mount(
				<div>
					<FocusManager contain>
						<input data-testid="fdz-js-input-1" />
						<input data-testid="fdz-js-input-2" />
					</FocusManager>
				</div>,
			);

			cy.findByTestId("fdz-js-input-1")
				.focus()
				.should("have.focus")
				.then(() => {
					expect(document.activeElement).to.have.attr("data-testid", "fdz-js-input-1");
				});

			cy.findByTestId("fdz-js-input-2")
				.focus()
				.should("have.focus")
				.then(() => {
					expect(document.activeElement).to.have.attr("data-testid", "fdz-js-input-2");
				});
		});
	});

	describe("focus restoration", () => {
		it("should restore focus to the previously focused node on unmount", () => {
			const Test: React.FunctionComponent<IFocusManagerProps> = (props) => {
				const [isVisible, setIsVisible] = React.useState(false);
				return (
					<div>
						<button
							type="button"
							data-testid="fdz-js-show-button"
							onClick={() => setIsVisible(true)}
						>
							Show Menu
						</button>
						{isVisible && (
							<FocusManager {...props}>
								<div className="popover" id="popover-id" tabIndex={-1}>
									<div className="popover__wrapper" role="dialog" aria-labelledby="popover-title">
										<div className="popover__body">
											<header className="popover__header">
												<h4 className="popover__header__title" id="popover-title">
													Menu
												</h4>
												<button
													type="button"
													data-testid="fdz-js-close-button"
													className="popover__header__button"
													onClick={() => setIsVisible(false)}
												>
													Close
												</button>
											</header>
											<nav className="popover__content" aria-label="Main">
												<ul className="popover__content__list">
													<li>
														<a className="popover__link" href="#0">
															<span>Home</span>
															<span>35</span>
														</a>
													</li>
													<li>
														<a className="popover__link" href="#0">
															<span>Trending</span>
															<span>17</span>
														</a>
													</li>
													<li>
														<a className="popover__link" href="#0">
															<span>Subscriptions</span>
															<span>12</span>
														</a>
													</li>
													<li>
														<a className="popover__link" href="#0">
															<span>Library</span>
															<span>24</span>
														</a>
													</li>
													<li>
														<a className="popover__link" href="#0">
															<span>History</span>
															<span>18</span>
														</a>
													</li>
												</ul>
											</nav>
											<footer className="popover__footer">
												<div className="popover__footer__wrapper">
													<input
														className="popover__footer__input"
														type="search"
														placeholder="Search..."
														aria-label="Search"
													/>
													<button className="popover__footer__icon">
														<svg className="icon" viewBox="0 0 24 24">
															<g
																fill="none"
																stroke="currentColor"
																strokeLinecap="square"
																strokeLinejoin="miter"
																strokeMiterlimit="10"
																strokeWidth="2"
															>
																<path d="M22 22L15.656 15.656" />
																<circle cx="10" cy="10" r="8" />
															</g>
														</svg>
													</button>
												</div>
											</footer>
										</div>
									</div>
								</div>
							</FocusManager>
						)}
					</div>
				);
			};

			mount(<Test contain={false} restoreFocus autoFocus />);

			cy.realPress("Tab");
			cy.findByTestId("fdz-js-show-button").click();

			cy.findByTestId("fdz-js-close-button").should("have.focus").click();
			cy.findByTestId("fdz-js-show-button").should("have.focus");
		});

		it("should move focus to the next element after the previously focused node on Tab", () => {
			function Test({ show }: { show?: boolean }) {
				return (
					<div>
						<input data-testid="before" />
						<button data-testid="trigger">Trigger</button>
						<input data-testid="after" />
						{show && (
							<FocusManager contain={false} restoreFocus autoFocus>
								<input data-testid="fdz-js-input-1" />
								<input data-testid="fdz-js-input-2" />
								<input data-testid="fdz-js-input-3" />
							</FocusManager>
						)}
					</div>
				);
			}

			mount(<Test />).then(({ rerender }) => {
				cy.findByTestId("trigger").focus();

				rerender(<Test show />);

				cy.findByTestId("fdz-js-input-1").should("have.focus");
				cy.findByTestId("fdz-js-input-3").focus().realPress("Tab");
				cy.findByTestId("after").should("have.focus");
			});
		});

		it("should move focus to the previous element after the previously focused node on Shift+Tab", () => {
			function Test({ show }: { show?: boolean }) {
				return (
					<div>
						<input data-testid="before" />
						<button data-testid="trigger" />
						<input data-testid="after" />
						{show && (
							<FocusManager contain={false} restoreFocus autoFocus>
								<input data-testid="fdz-js-input-1" />
								<input data-testid="fdz-js-input-2" />
								<input data-testid="fdz-js-input-3" />
							</FocusManager>
						)}
					</div>
				);
			}

			mount(<Test />).then(({ rerender }) => {
				cy.findByTestId("trigger").focus();

				rerender(<Test show />);

				cy.findByTestId("fdz-js-input-1").should("have.focus").realPress(["Shift", "Tab"]);
				cy.findByTestId("before").should("have.focus");
			});
		});

		it("should skip over elements within the scope when moving focus to the next element", () => {
			function Test({ show }: { show?: boolean }) {
				return (
					<div>
						<input data-testid="before" />
						<button data-testid="trigger" />
						{show && (
							<FocusManager contain={false} restoreFocus autoFocus>
								<input data-testid="fdz-js-input-1" />
								<input data-testid="fdz-js-input-2" />
								<input data-testid="fdz-js-input-3" />
							</FocusManager>
						)}
						<input data-testid="after" />
					</div>
				);
			}

			mount(<Test />).then(({ rerender }) => {
				cy.findByTestId("trigger").focus();

				rerender(<Test show />);

				cy.findByTestId("fdz-js-input-1").should("have.focus");
				cy.findByTestId("fdz-js-input-3").focus().realPress("Tab");
				cy.findByTestId("after").should("have.focus");
			});
		});
	});

	describe("auto focus", () => {
		it("should auto focus the first tabbable element in the scope on mount", () => {
			mount(
				<FocusManager autoFocus>
					<div />
					<input data-testid="fdz-js-input-1" />
					<input data-testid="fdz-js-input-2" />
					<input data-testid="fdz-js-input-3" />
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-1").should("have.focus");
		});

		it("should do nothing if something is already focused in the scope", () => {
			mount(
				<FocusManager autoFocus>
					<div />
					<input data-testid="fdz-js-input-1" />
					<input data-testid="fdz-js-input-2" autoFocus />
					<input data-testid="fdz-js-input-3" />
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-2").should("have.focus");
		});
	});
});
