/// <reference types="@testing-library/cypress" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React from "react";
import {
	VisuallyHidden,
	VisuallyHiddenProps,
	DEFAULT_PROPS,
} from "../../../../../src/components/visually-hidden";

const DemoContent = <GenericElement extends React.ElementType>(
	props: VisuallyHiddenProps<GenericElement>,
) => {
	return (
		<div
			style={{
				display: "grid",
				placeItems: "center",
				height: "200px",
				width: "100%",
			}}
		>
			<button id="064a70e8-5c1e-43e6-8eee-9ab069b094fc" type="button">
				<VisuallyHidden {...props}>Press Enter to </VisuallyHidden>Return to Navigation
			</button>
		</div>
	);
};

describe("<VisuallyHidden>", () => {
	let props = DEFAULT_PROPS;

	it("should render the text visually hidden", () => {
		cy.mount(<DemoContent {...props} />);

		cy.findByRole("button").should("have.text", "Press Enter to Return to Navigation");
		cy.findByTestId("js-visually-hidden")
			.should("exist")
			.and("have.css", "position", "absolute")
			.and("have.css", "clip", "rect(0px, 0px, 0px, 0px)")
			.and("have.css", "overflow", "hidden");
	});

	it("should render the component with a different tagname", () => {
		props = {
			...props,
			as: "div",
		};

		cy.mount(<DemoContent {...props} />);

		cy.findByTestId("js-visually-hidden").should("have.prop", "tagName").should("eq", "DIV");
	});

	it("should render a set of html attributes", () => {
		props = {
			...props,
			id: "60007f76-6d72-4a94-8161-16a7ea22e62b",
			className: "a-custom-classname",
			"data-custom-attribute": "custom-value",
			style: {
				accentColor: "hotpink",
				cursor: "pointer",
			},
		};

		cy.mount(<DemoContent {...props} />);

		cy.findByTestId("js-visually-hidden")
			.and("have.class", "a-custom-classname")
			.and("have.css", "cursor", "pointer")
			.and("have.css", "accent-color", "rgb(255, 105, 180)")
			.and("have.attr", "data-custom-attribute", "custom-value");
	});
});
