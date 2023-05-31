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
 * index.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

import checkA11y from "./checkA11y";
import configureAxe from "./configureAxe";
import injectAxe from "./injectAxe";

Cypress.Commands.add("injectAxe", injectAxe);
Cypress.Commands.add("configureAxe", configureAxe);
Cypress.Commands.add("checkA11y", checkA11y);
