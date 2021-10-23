/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * docusaurus.config.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 * */
module.exports = {
	title: "react-a11y-tools",
	tagline: "Focus on Accessible Web experiences",
	url: "https://feedzai.github.io",
	baseUrl: "/react-a11y-tools/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.svg",
	organizationName: "@feedzai",
	projectName: "react-a11y-tools",

	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: "https://github.com/feedzai/react-a11y-tools/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	plugins: [
		"docusaurus-plugin-sass",
		[
			"docusaurus-plugin-react-docgen-typescript",
			{
				src: ["../src/**/*.tsx"],
				global: true,
				parserOptions: {
					propFilter: (prop, component) => {
						if (prop.parent) {
							return !prop.parent.fileName.includes("@types/react");
						}

						return true;
					},
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "React a11y tools",
				logo: {
					alt: "",
					src: "img/favicon.svg",
				},
				items: [
					{
						href: "https://www.npmjs.com/package/@feedzai/react-a11y-tools",
						label: "NPM",
						position: "right",
					},
					{
						href: "https://github.com/feedzai/react-a11y-tools",
						label: "GitHub",
						position: "right",
					},
				],
			},
			prism: {
				theme: darkCodeTheme,
				lightTheme: lightCodeTheme,
			},
		}),
};
