/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */

type AsProp<GenericComponent extends React.ElementType> = {
	/**
	 * An override of the default HTML tag.
	 * Can also be another React component.
	 */
	as?: GenericComponent
}

/**
 * Common HTML Element types.
 *
 * Accepts a type of element tag, like `"div"`, `"span"`, `"p"`
 */
export type CommonElement<GenericElement extends React.ElementType = "div"> = React.HTMLAttributes<HTMLElement> & {
	/**
	 * A `data-attribute` identifier for testing purposes
	 *
	 * @type {string}
	 * @memberof CommonElement
	 */
	"data-testid"?: string;
} & AsProp<GenericElement>
