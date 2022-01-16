/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * make-id.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */

/**
 * Joins strings to format IDs for compound components.
 *
 * @example
 *
 * // Custom generated id by using the `useAutoId` hook and the `makeId` function
 * // to join the auto-generated id with a custom string
 * const autoId = useAutoId(id);
 * const { current: generatedId } = useRef(makeId("fdz-js-tabbable-button-", autoId));
 *
 * @param args
 * @returns {string}
 */
export function makeId(...args: (string | number | null | undefined)[]) {
	return args.filter((val) => val !== null).join("--");
}
