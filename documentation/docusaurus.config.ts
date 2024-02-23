import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { join, resolve } from 'path';

const config: Config = {
	title: "react-a11y-tools",
	tagline: "Focus on Accessible Web experiences",
	favicon: "img/favicon.svg",
	url: "https://feedzai.github.io",
	baseUrl: "/react-a11y-tools/",
	organizationName: "@feedzai",
	projectName: "react-a11y-tools",
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	presets: [
		[
		'classic',
		{
			docs: {
			sidebarPath: './sidebars.ts',
			editUrl: "https://github.com/feedzai/react-a11y-tools/",
			},
			theme: {
			customCss: './src/css/custom.css',
			},
		} satisfies Preset.Options,
		],
	],
	plugins: [
		() => ({
			name: "resolve-react",
			configureWebpack() {
				const NODE_MODULES = join(__dirname, "../node_modules");
				const REACT = `${NODE_MODULES}/react`;
				const REACT_DOM = `${NODE_MODULES}/react-dom`;

				return {
					resolve: {
						alias: {
							react: resolve(REACT),
							"react-dom": resolve(REACT_DOM),
						},
					},
				};
			},
		}),
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
	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
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
		theme: prismThemes.github,
		darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
