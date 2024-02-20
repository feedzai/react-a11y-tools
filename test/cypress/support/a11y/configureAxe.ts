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
 * configureAxe.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

/**
 * Its purpose is to configure the format of the data used by aXe.
 * This can be used to add new rules, which must be registered with the library to execute.
 *
 * User specifies the format of the JSON structure passed to the callback of axe.run
 *
 * {@link https://www.deque.com/axe/documentation/api-documentation/#api-name-axeconfigure|aXe Docs: axe.configure}
 *
 * @example
 * it('Has no detectable a11y violations on load (custom configuration)', () => {
 *  // Configure aXe and test the page at initial load
 *    cy.configureAxe({
 *      branding: {
 *        brand: String,
 *        application: String
 *      },
 *      reporter: 'option',
 *      checks: [Object],
 *      rules: [Object],
 *      locale: Object
 *    });
 *    cy.checkA11y();
 * })
 */
const configureAxe = (configurationOptions = {}) => {
  cy.window({ log: false }).then((win) => {
    return win.axe.configure(configurationOptions);
  });
};

export default configureAxe;
