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
 * inRange.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

/**
 * Checks if `n` is between `start` and up to, but not including, `end`.
 *
 * If `end` is not specified, it’s set to start with `start` then set to 0. If `start` is greater than `end` the params are swapped to support negative ranges.
 *
 * @param num
 * @param rangeStart
 * @param rangeEnd
 * @returns {boolean}
 */
export const inRange = (num: number, rangeStart: number, rangeEnd = 0) =>
	(rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart);
