/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
import theme from "./theme";

export const parameters = {
	viewMode: "docs",
	a11y: {
		element: "#root",
		config: {},
		options: {},
		manual: true,
	},
	actions: { argTypesRegex: "^on.*" },
	docs: {
		theme,
	},
};
