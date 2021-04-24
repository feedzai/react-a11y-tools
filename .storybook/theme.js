/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import { color } from "@storybook/theming";
import { create, themes } from "@storybook/theming/create";

color.lightest = "#000a12";

export default create({
	...themes.dark,
	base: "dark",

	colorPrimary: "hsl(265, 100%, 47%)",
	colorSecondary: "#35cecc",

	// UI
	appBg: "#000a12",
	appContentBg: "#000a12",
	appBorderColor: "#3C3F48",
	appBorderRadius: 4,

	// Toolbar default and active colors
	barTextColor: "#FFFFFF",
	barSelectedColor: "#35cecc",
	barBg: "#000a12",

	// Brand
	brandTitle: "react-a11y-tools",
	brandUrl: "https://www.npmjs.com/package/react-a11y-tools",
});
