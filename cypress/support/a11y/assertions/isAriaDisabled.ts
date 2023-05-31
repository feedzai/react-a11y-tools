/// <reference types="cypress" />
/*
 * The file cannot be reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */

/**
 * Chai assert that verifies if an element has/hasn't got the `aria-disabled`
 * attribute and that it's value is set to "true"
 *
 * @see https://www.chaijs.com/guide/helpers/
 *
 * @example
 * // Assert on a test file:
 *  ```
 *  expect(element).to.be.aria-disabled()
 *  expect(element).to.not.be.aria-disabled()
 *  cy.wrap('foo').should('be.aria-disabled')
 *  cy.wrap('foo').should('not.be.aria-disabled')
 * ```
 **/
export const isAriaDisabled = (config: Chai.ChaiStatic, utils: Chai.ChaiUtils): void => {
  /**
   * @param {any} options
   * @returns {void}
   */
  function assertIsAriaDisabled(options) {
    this.assert(
      this._obj.attr("aria-disabled") === "true",
      `expected #{this} to be disabled with "aria-disabled='true'"`,
      `expected #{this} not to be disabled with "aria-disabled='true'"`,
      this._obj,
    );
  }

  config.Assertion.addMethod("aria-disabled", assertIsAriaDisabled);
};
