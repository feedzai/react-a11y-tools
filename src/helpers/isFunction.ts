/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * isFunction.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */

/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: any): value is Function {
	// eslint-disable-next-line eqeqeq
	return !!(value && {}.toString.call(value) == "[object Function]");
}
