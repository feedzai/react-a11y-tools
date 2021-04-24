/* eslint-disable @typescript-eslint/ban-ts-comment */
/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me, No Rights Reserved.
 */
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { IFocusManagerProps } from "../../../src/components/focus-manager";
import { FocusManager } from "../../../src/components/focus-manager/index";

describe("FocusManager", () => {
	beforeEach(() => {
		// @ts-ignore
		jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => cb());
	});

	afterEach(() => {
		// @ts-ignore
		window.requestAnimationFrame.mockRestore();
	});

	describe("focus containment", () => {
		it("should contain focus within the scope", () => {
			render(
				<FocusManager contain>
					<input data-testid="input1" />
					<input data-testid="input2" />
					<input data-testid="input3" />
				</FocusManager>,
			);

			const input1 = screen.getByTestId("input1");
			const input2 = screen.getByTestId("input2");
			const input3 = screen.getByTestId("input3");

			act(() => {
				input1.focus();
			});
			expect(input1).toHaveFocus();

			userEvent.tab();
			expect(input2).toHaveFocus();

			userEvent.tab();

			expect(input3).toHaveFocus();

			userEvent.tab();

			expect(input1).toHaveFocus();

			userEvent.tab({
				shift: true,
			});
			expect(input3).toHaveFocus();

			userEvent.tab({
				shift: true,
			});

			expect(input2).toHaveFocus();

			userEvent.tab({
				shift: true,
			});

			expect(input1).toHaveFocus();
		});

		it("should work with nested elements", () => {
			const { getByTestId } = render(
				<FocusManager contain>
					<input data-testid="input1" />
					<div>
						<input data-testid="input2" />
						<div>
							<input data-testid="input3" />
						</div>
					</div>
				</FocusManager>,
			);

			const input1 = getByTestId("input1");
			const input2 = getByTestId("input2");
			const input3 = getByTestId("input3");

			act(() => {
				input1.focus();
			});
			expect(input1).toHaveFocus();

			userEvent.tab();
			expect(input2).toHaveFocus();

			userEvent.tab();
			expect(input3).toHaveFocus();

			userEvent.tab();
			expect(input1).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input3).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input2).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input1).toHaveFocus();
		});

		it("should skip non-tabbable elements", () => {
			const { getByTestId } = render(
				<FocusManager contain>
					<input data-testid="input1" />
					<div />
					<input data-testid="input2" />
					<div tabIndex={-1} />
					<input data-testid="input3" />
				</FocusManager>,
			);

			const input1 = getByTestId("input1");
			const input2 = getByTestId("input2");
			const input3 = getByTestId("input3");

			act(() => {
				input1.focus();
			});
			expect(input1).toHaveFocus();

			userEvent.tab();
			expect(input2).toHaveFocus();

			userEvent.tab();
			expect(input3).toHaveFocus();

			userEvent.tab();
			expect(input1).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input3).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input2).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input1).toHaveFocus();
		});

		it("should do nothing if a modifier key is pressed", () => {
			const { getByTestId } = render(
				<FocusManager contain>
					<input data-testid="input1" />
					<input data-testid="input2" />
					<input data-testid="input3" />
				</FocusManager>,
			);

			const input1 = getByTestId("input1");

			act(() => {
				input1.focus();
			});
			expect(input1).toHaveFocus();

			fireEvent.keyDown(input1, { key: "Tab", altKey: true });
			expect(input1).toHaveFocus();
		});

		it("should work with multiple focus scopes", () => {
			const { getByTestId } = render(
				<div>
					<FocusManager contain>
						<input data-testid="input1" />
						<input data-testid="input2" />
						<input data-testid="input3" />
					</FocusManager>
					<FocusManager contain>
						<input data-testid="input4" />
						<input data-testid="input5" />
						<input data-testid="input6" />
					</FocusManager>
				</div>,
			);

			const input1 = getByTestId("input1");
			const input2 = getByTestId("input2");
			const input3 = getByTestId("input3");
			const input4 = getByTestId("input4");
			const input5 = getByTestId("input5");
			const input6 = getByTestId("input6");

			act(() => {
				input1.focus();
			});
			expect(input1).toHaveFocus();

			userEvent.tab();
			expect(input2).toHaveFocus();

			userEvent.tab();
			expect(input3).toHaveFocus();

			userEvent.tab();
			expect(input1).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input3).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input2).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input1).toHaveFocus();

			act(() => {
				input4.focus();
			});
			expect(input4).toHaveFocus();

			userEvent.tab();
			expect(input5).toHaveFocus();

			userEvent.tab();
			expect(input6).toHaveFocus();

			userEvent.tab();
			expect(input4).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input6).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input5).toHaveFocus();

			userEvent.tab({ shift: true });
			expect(input4).toHaveFocus();
		});

		it("uses document.activeElement instead of e.relatedTarget on blur to determine if focus is still in scope", () => {
			const { getByTestId } = render(
				<div>
					<FocusManager contain>
						<input data-testid="input1" />
						<input data-testid="input2" />
					</FocusManager>
				</div>,
			);

			const input1 = getByTestId("input1");
			const input2 = getByTestId("input2");

			act(() => {
				input1.focus();
			});
			fireEvent.focusIn(input1); // jsdom doesn't fire this automatically
			expect(document.activeElement).toBe(input1);

			act(() => {
				// set document.activeElement to input2
				input2.focus();
				// if onBlur didn't fallback to checking document.activeElement, this would reset focus to input1
				fireEvent.blur(input1, { relatedTarget: null });
			});

			expect(document.activeElement).toBe(input2);
		});
	});

	describe("focus restoration", () => {
		it("should restore focus to the previously focused node on unmount", async () => {
			const Test: React.FunctionComponent<IFocusManagerProps> = (props) => {
				const [isVisible, setIsVisible] = React.useState(false);
				return (
					<div>
						<button type="button" data-testid="show-button" onClick={() => setIsVisible(true)}>
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
													data-testid="close-button"
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

			render(<Test contain={false} restoreFocus autoFocus />);

			userEvent.tab();
			userEvent.click(screen.getByTestId("show-button"));

			expect(screen.getByTestId("close-button")).toHaveFocus();

			userEvent.click(screen.getByTestId("close-button"));

			await waitFor(() => {
				expect(screen.getByTestId("show-button")).toHaveFocus();
			});
		});

		it("should move focus to the next element after the previously focused node on Tab", () => {
			function Test({ show }: { show?: boolean }) {
				return (
					<div>
						<input data-testid="before" />
						<button data-testid="trigger" />
						<input data-testid="after" />
						{show && (
							<FocusManager contain={false} restoreFocus autoFocus>
								<input data-testid="input1" />
								<input data-testid="input2" />
								<input data-testid="input3" />
							</FocusManager>
						)}
					</div>
				);
			}

			const { getByTestId, rerender } = render(<Test />);

			const trigger = getByTestId("trigger");
			act(() => {
				trigger.focus();
			});

			rerender(<Test show />);

			const input1 = getByTestId("input1");
			expect(document.activeElement).toBe(input1);

			const input3 = getByTestId("input3");
			act(() => {
				input3.focus();
			});

			fireEvent.keyDown(input3, { key: "Tab" });
			expect(getByTestId("after")).toHaveFocus();
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
								<input data-testid="input1" />
								<input data-testid="input2" />
								<input data-testid="input3" />
							</FocusManager>
						)}
					</div>
				);
			}

			const { getByTestId, rerender } = render(<Test />);

			const trigger = getByTestId("trigger");
			act(() => {
				trigger.focus();
			});

			rerender(<Test show />);

			const input1 = getByTestId("input1");
			expect(document.activeElement).toBe(input1);

			fireEvent.keyDown(input1, { key: "Tab", shiftKey: true });
			expect(getByTestId("before")).toHaveFocus();
		});

		it("should skip over elements within the scope when moving focus to the next element", () => {
			function Test({ show }: { show?: boolean }) {
				return (
					<div>
						<input data-testid="before" />
						<button data-testid="trigger" />
						{show && (
							<FocusManager contain={false} restoreFocus autoFocus>
								<input data-testid="input1" />
								<input data-testid="input2" />
								<input data-testid="input3" />
							</FocusManager>
						)}
						<input data-testid="after" />
					</div>
				);
			}

			const { getByTestId, rerender } = render(<Test />);

			const trigger = getByTestId("trigger");
			act(() => {
				trigger.focus();
			});

			rerender(<Test show />);

			const input1 = getByTestId("input1");
			expect(document.activeElement).toBe(input1);

			const input3 = getByTestId("input3");
			act(() => {
				input3.focus();
			});

			fireEvent.keyDown(input3, { key: "Tab" });
			expect(getByTestId("after")).toHaveFocus();
		});
	});

	describe("auto focus", () => {
		it("should auto focus the first tabbable element in the scope on mount", () => {
			const { getByTestId } = render(
				<FocusManager autoFocus>
					<div />
					<input data-testid="input1" />
					<input data-testid="input2" />
					<input data-testid="input3" />
				</FocusManager>,
			);

			const input1 = getByTestId("input1");
			expect(document.activeElement).toBe(input1);
		});

		it("should do nothing if something is already focused in the scope", () => {
			const { getByTestId } = render(
				<FocusManager autoFocus>
					<div />
					<input data-testid="input1" />
					<input data-testid="input2" autoFocus />
					<input data-testid="input3" />
				</FocusManager>,
			);

			const input2 = getByTestId("input2");
			expect(document.activeElement).toBe(input2);
		});
	});
});
