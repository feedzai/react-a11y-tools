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
 * callIfExists.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

import { isFunction } from "./index";

/**
 * Executes the given callback function, if present.
 *
 * @example
 *
 * // Calling a function with several arguments
 * callIfExists(functionName, arg1, arg2);
 *
 * // Calling a function without any argument
 * callIfExists(functionName);
 *
 * @param {Function|undefined} callback Holds the callback to be executed.
 * @param {any[]} args Holds a list of arguments to be passed to the callback.
 * @private
 */
export function callIfExists<T>(callback: T, ...args: any[]): T | void {
	if (isFunction(callback)) {
		// eslint-disable-next-line prefer-spread
		callback.apply(undefined, args);
	}
}
