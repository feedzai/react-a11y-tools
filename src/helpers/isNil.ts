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
 * isNil.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

const isUndefined = <GenericValue>(value: GenericValue): boolean => typeof value === 'undefined';
const isNull = <GenericValue>(value: GenericValue): boolean => typeof value === null;

/**
 * Checks if a certain value is `null` or `undefined`.
 *
 * @example
 *
 * isNil(3) // false
 * isNil(null) // true
 * isNil(undefined) // true
 *
 * @export
 * @template GenericValue
 * @param {GenericValue} value
 * @returns {boolean} result
 */
export const isNil = <GenericValue>(value: GenericValue): boolean => isUndefined(value) || isNull(value);

