/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * common.ts
 *
 * Common extra typings for HTML Elements
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.1.0
 */

export interface CommonElement {
	/**
	 * A `data-attribute` identifier for testing purposes
	 *
	 * @type {string}
	 * @memberof CommonElement
	 */
	"data-testid"?: string;

	/**
	 * Custom CSS Styles
	 *
	 * @type {React.CSSProperties}
	 * @memberof CommonElement
	 */
	styles?: React.CSSProperties;
}
