/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * webpack.config.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import path from "path";

module.exports = {
	resolve: {
		alias: {
			fixtures: path.resolve(__dirname, "./fixtures"),
			mocks: path.resolve(__dirname, "./mocks"),
			plugins: path.resolve(__dirname, "./plugins"),
			selectors: path.resolve(__dirname, "./selectors"),
			support: path.resolve(__dirname, "./support"),
		},
	},
};
