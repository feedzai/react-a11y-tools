/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
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
