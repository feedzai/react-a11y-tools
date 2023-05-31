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
 * checkA11y.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import * as axe from "axe-core";

export interface Options extends axe.RunOptions {
  includedImpacts?: string[];
}

function isEmptyObjectorNull(value: any) {
  if (value == null) {
    return true;
  }
  return Object.entries(value).length === 0 && value.constructor === Object;
}

const checkA11y = (
  context?: axe.ElementContext,
  options?: Options,
  violationCallback?: (violations: axe.Result[]) => void,
  skipFailures = false,
) => {
  cy.window({ log: false })
    .then((win) => {
      if (isEmptyObjectorNull(context)) {
        context = undefined;
      }

      if (isEmptyObjectorNull(options)) {
        options = undefined;
      }

      if (isEmptyObjectorNull(violationCallback)) {
        violationCallback = undefined;
      }

      const { includedImpacts, ...axeOptions } = options || {};

      return win.axe.run(context || win.document, axeOptions).then(({ violations }) => {
        return includedImpacts && Array.isArray(includedImpacts) && Boolean(includedImpacts.length)
          ? violations.filter((v) => v.impact && includedImpacts.includes(v.impact))
          : violations;
      });
    })
    .then((violations) => {
      if (violations.length) {
        if (violationCallback) {
          violationCallback(violations);
        }

        violations.forEach((v) => {
          const selectors = v.nodes.reduce<string[]>((acc, node) => acc.concat(node.target), []).join(", ");

          Cypress.log({
            $el: Cypress.$(selectors),
            name: "a11y error!",
            consoleProps: () => v,
            message: `${v.id} on ${v.nodes.length} Node${v.nodes.length === 1 ? "" : "s"}`,
          });
        });
      }

      return cy.wrap(violations, { log: false });
    })
    .then((violations) => {
      if (!skipFailures) {
        assert.equal(
          violations.length,
          0,
          `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} ${violations.length === 1 ? "was" : "were"
          } detected`,
        );
      } else if (violations.length) {
        Cypress.log({
          name: "a11y violation summary",
          message: `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} ${violations.length === 1 ? "was" : "were"
            } detected`,
        });
      }
    });
};

export default checkA11y;
