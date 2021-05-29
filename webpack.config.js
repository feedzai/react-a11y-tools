const webpack = require("webpack");

/**
 * @type {webpack.Configuration}
 */
module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	entry: "./src/index.tsx",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
							plugins: ["@babel/plugin-proposal-optional-chaining"],
						},
					},
				],
			},
			{
				// every time webpack sees a TS file (except for node_modules)
				// webpack will use "ts-loader" to transpile it to JavaScript
				test: /\.tsx?$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-react", "@babel/preset-typescript"],
						},
					},
				],
			},
		],
	},
};
