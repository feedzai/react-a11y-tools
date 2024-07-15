/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import React from "react";
import { FocusManager } from "src/components/focus-manager/index";
import { MultipleManagers, RestoreFocus } from "./demos";

describe("FocusManager", () => {
	describe("focus containment", () => {
		it("should contain focus within the scope", () => {
			cy.mount(
				<FocusManager>
					<fieldset>
						<legend>Group of Inputs</legend>
						<label htmlFor="input-1"></label>
						<input id="input-1" data-testid="fdz-js-input-1" />
						<label htmlFor="input-2"></label>
						<input id="input-2" data-testid="fdz-js-input-2" />
						<label htmlFor="input-3"></label>
						<input id="input-3" data-testid="fdz-js-input-3" />
					</fieldset>
				</FocusManager>,
			);

			// Should contain the focus travelling forward
			cy.findByTestId("fdz-js-input-1").should("have.focus").tab();
			cy.tabUntil(() => cy.findByTestId("fdz-js-input-1"));

			// As well at travelling backwards
			cy.findByTestId("fdz-js-input-1").tab({ shift: true });
			cy.tabUntil(() => cy.findByTestId("fdz-js-input-1"), true);
		});

		it("should work with nested elements", () => {
			cy.mount(
				<FocusManager>
					<fieldset>
						<legend>Group of Inputs</legend>
						<label htmlFor="input-1"></label>
						<input id="input-1" data-testid="fdz-js-input-1" />
						<div>
							<label htmlFor="input-2"></label>
							<input id="input-2" data-testid="fdz-js-input-2" />
							<label htmlFor="input-3"></label>
							<input id="input-3" data-testid="fdz-js-input-3" />
						</div>
					</fieldset>
				</FocusManager>,
			);

			// Should contain the focus travelling forward
			cy.findByTestId("fdz-js-input-1").should("have.focus").tab();
			cy.tabUntil(() => cy.findByTestId("fdz-js-input-1"));

			// As well at travelling backwards
			cy.findByTestId("fdz-js-input-1").tab({ shift: true });
			cy.tabUntil(() => cy.findByTestId("fdz-js-input-1"), true);
		});

		it("should skip non-tabbable elements", () => {
			cy.mount(
				<FocusManager>
					<fieldset>
						<legend>Group of Inputs</legend>
						<label htmlFor="input-1"></label>
						<input id="input-1" data-testid="fdz-js-input-1" />
						<label htmlFor="input-2"></label>
						<div />
						<input id="input-2" data-testid="fdz-js-input-2" />
						<div tabIndex={-1} />
						<label htmlFor="input-3"></label>
						<input id="input-3" data-testid="fdz-js-input-3" />
					</fieldset>
				</FocusManager>,
			);

			// Should contain the focus travelling forward
			cy.findByTestId("fdz-js-input-1").should("have.focus").tab();
			cy.tabUntil(() => cy.findByTestId("fdz-js-input-1"));

			// As well at travelling backwards
			cy.findByTestId("fdz-js-input-1").tab({ shift: true });
			cy.tabUntil(() => cy.findByTestId("fdz-js-input-1"), true);
		});

		it("should do nothing if a modifier key is pressed", () => {
			cy.mount(
				<FocusManager>
					<fieldset>
						<legend>Group of Inputs</legend>
						<label htmlFor="input-1"></label>
						<input id="input-1" data-testid="fdz-js-input-1" />
						<label htmlFor="input-2"></label>
						<input id="input-2" data-testid="fdz-js-input-2" />
						<label htmlFor="input-3"></label>
						<input id="input-3" data-testid="fdz-js-input-3" />
					</fieldset>
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-1").focus();
			cy.findByTestId("fdz-js-input-1").should("have.focus").realPress(["Alt", "Meta", "P"]);
			cy.findByTestId("fdz-js-input-1").should("have.focus");
		});

		it("should work with multiple focus scopes", () => {
			cy.mount(<MultipleManagers />);

			// Open the first dialog
			cy.findByRole("button", { name: "Open Dialog" }).focus();
			cy.findByRole("button", { name: "Open Dialog" }).realPress("Space");

			// The focus is trapped inside the dialog whether travelling forward or backwards
			cy.findByRole("button", { name: "Close Dialog" }).as("closeDialog");
			cy.findByRole("button", { name: "Open Second Dialog" }).as("openSecondDialog");
			cy.get("@closeDialog").should("have.focus").tab();
			cy.tabUntil(() => cy.get("@closeDialog")).tab({ shift: true });
			cy.get("@openSecondDialog").should("have.focus");
			cy.tabUntil(() => cy.get("@closeDialog"), true);

			// Open the second dialog
			cy.get("@openSecondDialog").focus();
			cy.get("@openSecondDialog").realPress("Space");

			// The focus is then trapped on the second dialog, also wether travelling forward or backwards
			cy.findByRole("button", { name: "Close Second Dialog" }).as("closeSecondDialog");
			cy.get("@closeSecondDialog").should("have.focus").tab();
			cy.tabUntil(() => cy.get("@closeSecondDialog")).tab({ shift: true });
			cy.findByTestId("fdz-js-input-6").should("have.focus");
			cy.tabUntil(() => cy.get("@closeSecondDialog"), true);

			// Closing the second dialog should restore the focus back to the last button on the dialog that triggered
			cy.get("@closeSecondDialog").click();
			cy.get("@openSecondDialog").should("have.focus");

			// Closing the first dialog should restore the focus back to the first button of all.
			cy.tabUntil(() => cy.get("@closeDialog")).realPress("Space");
			cy.findByRole("button", { name: "Open Dialog" }).should("have.focus");
		});

		it("uses document.activeElement instead of e.relatedTarget on blur to determine if focus is still in scope", () => {
			cy.mount(
				<div>
					<FocusManager>
						<fieldset>
							<legend>Group of Inputs</legend>

							<label htmlFor="input-1"></label>
							<input id="input-1" data-testid="fdz-js-input-1" />
							<label htmlFor="input-2"></label>
							<input id="input-2" data-testid="fdz-js-input-2" />
						</fieldset>
					</FocusManager>
				</div>,
			);

			cy.findByTestId("fdz-js-input-1").focus();
			cy.findByTestId("fdz-js-input-1")
				.should("have.focus")
				.then(() => {
					expect(document.activeElement).to.have.attr("data-testid", "fdz-js-input-1");
				});

			cy.findByTestId("fdz-js-input-2").focus();
			cy.findByTestId("fdz-js-input-2")
				.should("have.focus")
				.then(() => {
					expect(document.activeElement).to.have.attr("data-testid", "fdz-js-input-2");
				});
		});
	});

	describe("focus restoration", () => {
		it("should restore focus to the previously focused node on unmount", () => {
			cy.mount(<RestoreFocus />);

			// Open the dialog
			cy.findByRole("button", { name: "Open Dialog" }).click();

			cy.findByRole("button", { name: "Close Dialog" }).should("have.focus").click();

			cy.findByRole("button", { name: "Open Dialog" }).focus();
		});

		it("should move focus to the next element after the previously focused node on Tab", () => {
			function Test({ show }: { show?: boolean }) {
				return (
					<div>
						<input data-testid="before" />
						<button data-testid="trigger">Trigger</button>
						{show && (
							<FocusManager contain="paused">
								<fieldset>
									<legend>Group of Inputs</legend>
									<label htmlFor="input-1"></label>
									<input id="input-1" data-testid="fdz-js-input-1" />
									<label htmlFor="input-2"></label>
									<input id="input-2" data-testid="fdz-js-input-2" />
									<label htmlFor="input-3"></label>
									<input id="input-3" data-testid="fdz-js-input-3" />
								</fieldset>
							</FocusManager>
						)}
						<input data-testid="after" />
					</div>
				);
			}

			cy.mount(<Test />).then(({ rerender }) => {
				cy.findByTestId("trigger").focus();

				rerender(<Test show />);

				cy.findByTestId("fdz-js-input-1").should("have.focus");
				cy.findByTestId("fdz-js-input-3").focus();
				cy.findByTestId("fdz-js-input-3").tab();
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
							<FocusManager contain="paused">
								{" "}
								<fieldset>
									<legend>Group of Inputs</legend>

									<label htmlFor="input-1"></label>
									<input id="input-1" data-testid="fdz-js-input-1" />
									<label htmlFor="input-2"></label>
									<input id="input-2" data-testid="fdz-js-input-2" />
									<label htmlFor="input-3"></label>
									<input id="input-3" data-testid="fdz-js-input-3" />
								</fieldset>
							</FocusManager>
						)}
					</div>
				);
			}

			cy.mount(<Test />).then(({ rerender }) => {
				cy.findByTestId("trigger").focus();

				rerender(<Test show />);

				cy.findByTestId("fdz-js-input-1").should("have.focus").tab({ shift: true });
				cy.findByTestId("after").should("have.focus");
			});
		});

		it("should skip over elements within the scope when moving focus to the next element", () => {
			function Test({ show }: { show?: boolean }) {
				return (
					<div>
						<input data-testid="before" />
						<button data-testid="trigger" />
						{show && (
							<FocusManager contain={false}>
								{" "}
								<fieldset>
									<legend>Group of Inputs</legend>
									<label htmlFor="input-1"></label>
									<input id="input-1" data-testid="fdz-js-input-1" />
									<label htmlFor="input-2"></label>
									<input id="input-2" data-testid="fdz-js-input-2" />
									<label htmlFor="input-3"></label>
									<input id="input-3" data-testid="fdz-js-input-3" />
								</fieldset>
							</FocusManager>
						)}
						<input data-testid="after" />
					</div>
				);
			}

			cy.mount(<Test />).then(({ rerender }) => {
				cy.findByTestId("trigger").focus();

				rerender(<Test show />);

				cy.findByTestId("fdz-js-input-1").should("have.focus");
				cy.findByTestId("fdz-js-input-3").focus();
				cy.findByTestId("fdz-js-input-3").tab();
				cy.findByTestId("after").should("have.focus");
			});
		});
	});

	describe("auto focus", () => {
		it("should auto focus the first tabbable element in the scope on mount", () => {
			cy.mount(
				<FocusManager autoFocus>
					<div />{" "}
					<fieldset>
						<legend>Group of Inputs</legend>
						<label htmlFor="input-1"></label>
						<input id="input-1" data-testid="fdz-js-input-1" />
						<label htmlFor="input-2"></label>
						<input id="input-2" data-testid="fdz-js-input-2" />
						<label htmlFor="input-3"></label>
						<input id="input-3" data-testid="fdz-js-input-3" />
					</fieldset>
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-1").should("have.focus");
		});

		it("should do nothing if something is already focused in the scope", () => {
			cy.mount(
				<FocusManager autoFocus>
					<div />
					<fieldset>
						<legend>Group of Inputs</legend>
						<label htmlFor="input-1"></label>
						<input id="input-1" data-testid="fdz-js-input-1" />
						<label htmlFor="input-2"></label>
						<input id="input-2" data-testid="fdz-js-input-2" autoFocus />
						<label htmlFor="input-3"></label>
						<input id="input-3" data-testid="fdz-js-input-3" />
					</fieldset>
				</FocusManager>,
			);

			cy.findByTestId("fdz-js-input-2").should("have.focus");
		});
	});
});
