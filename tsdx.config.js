/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * tsdx.config.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const analyze = require("rollup-plugin-analyzer");

module.exports = {
	rollup(config, options) {
		config.plugins.push(
			analyze(),
			postcss({
				modules: true,
				plugins: [
					autoprefixer(),
					cssnano({
						preset: "default",
					}),
				],
				inject: false,
				// only write out CSS for the first bundle (avoids pointless extra files):
				extract: !!options.writeMeta,
			}),
		);
		return config;
	},
};
