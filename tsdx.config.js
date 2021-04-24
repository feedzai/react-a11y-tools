/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me, No Rights Reserved.
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
