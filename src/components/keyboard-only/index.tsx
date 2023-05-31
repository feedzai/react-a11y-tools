/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
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
		addClass("css-no-mouse");

		return () => {
			removeClass("css-no-mouse");
		};
	}, []);

	return <div data-testid="js-audit" />;
};
