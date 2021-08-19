const webpack = require("webpack");
const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
const MAX_ASSETS_SIZE = 1024 * 1024;

/**
 * SCSS configurations
 */
const SCSS_CONFIG = {
	test: /\.scss$/,
	exclude: /\.module\.scss$/,
	use: [
		"style-loader",
		{
			loader: "css-loader",
			options: {
				importLoaders: 1,
				modules: {
					compileType: "icss",
				},
			},
		},
		"sass-loader",
	],
	include: path.resolve(__dirname, "../"),
};

/**
 * SCSS Modules configurations
 */
const CSS_MODULES_CONFIG = {
	test: /\.module\.scss$/,
	use: [
		"style-loader",
		{
			loader: "css-loader",
			options: {
				importLoaders: 1,
				modules: {
					mode: "local",
					compileType: "module",
					localIdentName: "fdz-[hash:base64:5]",
				},
			},
		},
		"sass-loader",
	],
	include: path.resolve(__dirname, "../"),
};

/**
 * Base Storybook Settings
 */
const { core, stories, addons, typescript } = {
	core: {
		builder: "webpack5",
	},
	stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
	addons: [
		{
			name: "@storybook/addon-docs",
			options: {
				mdxBabelOptions: {
					babelrc: true,
					configFile: true,
				},
				configureJSX: true,
			},
		},
		"@storybook/addon-links",
		"@storybook/addon-essentials",
	],
	typescript: {
		check: true,
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
		},
	},
};

module.exports = {
	core,
	stories,
	addons,
	typescript,
	webpackFinal: async (config) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				process: "process/browser",
			}),
			new webpack.DefinePlugin({
				"process.env": JSON.stringify(process.env),
			}),
		);

		config.module.rules = [
			...config.module.rules,
			{
				...CSS_MODULES_CONFIG,
			},
			{
				...SCSS_CONFIG,
			},
		];

		config.resolve.alias = {
			...config.resolve.alias,
			components: path.resolve(__dirname, "../src/components"),
			helpers: path.resolve(__dirname, "../src/helpers"),
			hooks: path.resolve(__dirname, "../src/hooks"),
			"@emotion/core": toPath("node_modules/@emotion/react"),
			"@emotion/styled": toPath("node_modules/@emotion/styled"),
			"emotion-theming": toPath("node_modules/@emotion/react"),
		};

		return {
			...config,
			optimization: {
				splitChunks: {
					chunks: "all",
					minSize: 30 * 1024,
					maxSize: MAX_ASSETS_SIZE,
				},
			},
			performance: {
				maxAssetSize: MAX_ASSETS_SIZE,
			},
		};
	},
};
