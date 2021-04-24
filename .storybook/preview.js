/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me, No Rights Reserved.
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
