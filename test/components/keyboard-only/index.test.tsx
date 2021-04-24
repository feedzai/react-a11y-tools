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
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import AuditInPage from "./mocks/AuditInPage";

describe("<Audit>", () => {
	it("should render the KeyboardOnly component", () => {
		const component = render(<AuditInPage />);
		expect(component).toMatchSnapshot();
	});
});
