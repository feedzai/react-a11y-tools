/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
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
