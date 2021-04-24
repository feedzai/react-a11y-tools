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

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	require("@cypress/code-coverage/task")(on, config);
	on("file:preprocessor", require("@cypress/code-coverage/use-browserify-istanbul"));
	return config;
};
