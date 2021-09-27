const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: "react-a11y-tools",
		tagline: "Dinosaurs are cool",
		url: "https://your-docusaurus-test-site.com",
		baseUrl: "/",
		onBrokenLinks: "throw",
		onBrokenMarkdownLinks: "warn",
		favicon: "img/favicon.ico",
		organizationName: "feedzai", // Usually your GitHub org/user name.
		projectName: "react-a11y-tools", // Usually your repo name.

		presets: [
			[
				"@docusaurus/preset-classic",
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve("./sidebars.js"),
						// Please change this to your repo.
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
					// pass in a single string or an array of strings
					src: ["../src/**/*.tsx"],
					global: true,
					parserOptions: {
						// pass parserOptions to react-docgen-typescript
						// here is a good starting point which filters out all
						// types from react
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
						alt: "My Site Logo",
						src: "img/logo.svg",
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
	}
);
