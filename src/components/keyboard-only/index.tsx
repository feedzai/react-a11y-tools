/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me, No Rights Reserved.
 */
import React, { FunctionComponent } from "react";
import { useSafeLayoutEffect } from "../../hooks/index";
import "./styles.css";

const addClass = (className: string) => document.documentElement.classList.add(className);
const removeClass = (className: string) => document.documentElement.classList.remove(className);

/**
 * Accessibility Keyboard-only component
 * Eables the developer to use the interface without a mouse pointer.
 *
 * @param {IAuditProps} props
 */
export const KeyboardOnly: FunctionComponent = () => {
	useSafeLayoutEffect(() => {
		addClass("no-mouse");

		return () => {
			removeClass("no-mouse");
		};
	}, []);

	return <div data-testid="audit" />;
};
