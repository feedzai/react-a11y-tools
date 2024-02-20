/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.test.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React from "react";
import { AuditInPage } from "./mocks/AuditInPage";

describe("<Audit>", () => {
	it("should render the KeyboardOnly component", () => {
		cy.mount(<AuditInPage />);

		cy.findByTestId("fdz-js-audit").should("have.class", "");
		cy.root().should("have.class", "fdz-css-no-mouse");
	});
});
