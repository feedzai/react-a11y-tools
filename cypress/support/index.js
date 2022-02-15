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
import "@cypress/code-coverage/support";
import "./commands";
import { register } from "@cypress/snapshot";

register();
