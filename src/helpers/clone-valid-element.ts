/* istanbul ignore file */
/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * clone-valid-element.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */

import { cloneElement, isValidElement, ReactElement, Attributes, ReactNode } from "react";

/**
 * Type-safe clone element
 *
 * @export
 * @template Props
 * @param {(React.ReactElement<Props> | React.ReactNode)} element
 * @param {(Partial<Props> & React.Attributes)} [props]
 * @param {...React.ReactNode[]} children
 * @returns {(React.ReactElement<Props> | React.ReactNode)}
 */
export function cloneValidElement<Props>(
	element: ReactElement<Props> | ReactNode,
	props?: Partial<Props> & Attributes,
	...children: ReactNode[]
): ReactElement<Props> | ReactNode {
	return isValidElement(element)
		? cloneElement(element, props, ...children)
		: element;
}
