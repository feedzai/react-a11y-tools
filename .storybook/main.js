const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
const MAX_ASSETS_SIZE = 1024 * 1024;

module.exports = {
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
	webpackFinal: async (config) => {
		config.resolve.plugins.push(new TsconfigPathsPlugin({}));
		config.resolve.alias = {
			...config.resolve.alias,
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
