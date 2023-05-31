/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React from "react";
import { AuditInPage } from "./mocks/AuditInPage";

describe("<Audit>", () => {
	it("should render the KeyboardOnly component", () => {
		cy.mount(<AuditInPage />);

		cy.findByTestId("js-audit").should("have.class", "");
		cy.root().should("have.class", "css-no-mouse");
	});
});
