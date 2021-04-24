/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * skip-links.mocks.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { ISkipLink } from "../../src/components/skip-links/link";

/**
 * @type {ILinkOption[]} options
 */
const single: ISkipLink[] = [
	{
		target: "#content",
		text: "Skip to main content",
	},
];

const multiple = [
	{
		target: "#content",
		text: "Skip to main content",
		as: "button",
	},
	{
		target: "#navigation-menu",
		text: "Go to navigation menu",
		as: "button",
	},
];

export const options = {
	single,
	multiple,
};
