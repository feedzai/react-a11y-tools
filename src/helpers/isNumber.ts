/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * isNumber.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */

/**
 * Checks whether or not a value is a number.
 *
 * @param value
 */
export function isNumber(value: any): value is number {
	return typeof value === "number" && !isNaN(value);
}
