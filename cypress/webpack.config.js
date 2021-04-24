/**
 * webpack.config.js
 *
 * Webpack configuration used in Cypress
 *
 * @author João Dias <contacto@joaodias.me>
 * @since 0.0.1
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
