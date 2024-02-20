/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2022 Feedzai, Rights Reserved.
 */

/**
 * injectAxe.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

/**
 * This will inject the `axe-core` runtime into the page under test. You must run this after a call to ` cy.visit()` and before you run the `checkA11y` command.
 * You can run this command with `cy.injectAxe()` either in your test, or in a `beforeEach`, as long as the visit comes first
 *
 * @example
 *
 * beforeEach(() => {
 *  cy.visit('http://localhost:9000');
 *  cy.injectAxe();
 * })
 */
const injectAxe = () => {
  let fileName;
  try {
    fileName = require.resolve('axe-core/axe.min.js');
  } catch {
    fileName = 'node_modules/axe-core/axe.min.js';
  }
  cy.readFile<string>(fileName).then((source) =>
    cy.window({ log: false }).then((window) => {
      window.eval(source);
    })
  );
};

export default injectAxe;
