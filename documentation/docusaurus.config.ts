import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from "node:path";

const config: Config = {
	title: "react-a11y-tools",
	tagline: "Focus on Accessible Web experiences",
	favicon: "img/favicon.svg",

	// Set the production url of your site here
	url: "https://feedzai.github.io",

	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/react-a11y-tools/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "@feedzai",
	projectName: "react-a11y-tools",

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	plugins: [() => ({
		name: 'resolve-react',
		configureWebpack() {
		  const NODE_MODULES = path.join(__dirname, '../node_modules');
		  const REACT = `${NODE_MODULES}/react`;
		  const REACT_DOM = `${NODE_MODULES}/react-dom`;

		  return {
			resolve: {
			  alias: {
				react: path.resolve(REACT),
				"react-dom": path.resolve(REACT_DOM),
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

	presets: [
		[
		'classic',
		{
			docs: {
			sidebarPath: './sidebars.ts',
			// Please change this to your repo.
			// Remove this to remove the "edit this page" links.
			editUrl: "https://github.com/feedzai/react-a11y-tools/",
			},
			blog: {
			showReadingTime: true,
			// Please change this to your repo.
			// Remove this to remove the "edit this page" links.
			editUrl:
				'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
			},
			theme: {
			customCss: './src/css/custom.css',
			},
		} satisfies Preset.Options,
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
