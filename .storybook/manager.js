/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
import { addons } from "@storybook/addons";
import theme from "./theme";

addons.setConfig({
	initialActive: "docs",
	panelPosition: "bottom",
	viewMode: "docs",
	theme,
});
