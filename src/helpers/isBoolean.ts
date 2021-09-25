/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * isBoolean.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */

/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */
export function isBoolean(value: any): value is boolean {
	return typeof value === "boolean";
}

/**
 * Returns if value is a true boolean value or is a string boolean
 *
 * @export
 * @param {*} value
 * @returns {(value is "true" | true)}
 */
export function boolOrBoolString(value: any): value is "true" | true {
	return value === "true" ? true : isBoolean(value) ? value : false;
}
