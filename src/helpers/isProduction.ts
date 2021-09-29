/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * isProduction.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

/**
 * Verifies if the app is running on a dev or production environment
 *
 * @export
 * @returns {boolean}
 */
export function isProduction() {
	return !process || !process.env || process.env.NODE_ENV === "production";
}
