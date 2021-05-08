/// <reference types="cypress" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.js
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
const injectDevServer = require("@cypress/react/plugins/load-webpack");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	injectDevServer(on, config, { webpackFilename: "./webpack.config.js" });
	require("@cypress/code-coverage/task")(on, config);

	return config;
};
