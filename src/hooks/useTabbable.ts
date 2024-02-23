/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * useTabbable.ts
 *
 * An abstract hook that makes elements perceivable for keyboard users.
 *
 * @author João Dias <contacto@joaodias.me>
 * @since 1.0.0
 */
import { useMemo, HTMLAttributes } from "react";
import { useDisableEvent, UseDisableEventReturns } from "./useDisableEvent";

type HTMLElementsSupportDisable =
	| HTMLButtonElement
	| HTMLInputElement
	| HTMLTextAreaElement
	| HTMLSelectElement;
type TabbableComponent<Props> = Props & {
	/**
	 * Same as the HTML attribute.
	 */
	disabled?: boolean;

	/**
	 * When an element is `disabled`, it may still be `focusable`. It works
	 * similarly to `readOnly` on form elements. In this case, only
	 * `aria-disabled` will be set.
	 *
	 *
	 * @type {boolean}
	 * @memberof HTMLTabbableElement
	 */
	focusable?: boolean;
};
export type HTMLTabbableElement<Props> = HTMLAttributes<HTMLElementsSupportDisable> &
	TabbableComponent<Props>;
interface TabRelatedAttributes {
	disabled?: boolean;
	"aria-disabled"?: HTMLAttributes<HTMLElement>["aria-disabled"];
}
type UseTabbableHTMLProps<Props> = HTMLTabbableElement<Props> &
	TabRelatedAttributes & {
		onClickCapture: UseDisableEventReturns;
		onMouseDownCapture: UseDisableEventReturns;
		onKeyPressCapture: UseDisableEventReturns;
	};

/**
 * Defines the disabled state of an HTML element.
 *
 * Its heuristics are:
 *
 * Given that a button should be focusable with the keyboard:
 * - When the `disabled` and the `focusable` props are both `true`, then the `disabled` attribute will remain `undefined`
 * and the `aria-disabled` prop wil be `true` instead;
 * - When the `disabled` prop is `true` and the `focusable` prop is `false`, then only the `disabled` attribute will be rendered onto the HTML.
 *
 * This way an assistive technology can still access the contents of an HTML element button without allowing the user to trigger any unintended
 * actions, such as activating a button or typing on a text input.
 *
 * @param {boolean} disabled
 * @param {boolean} [focusable]
 * @returns {TabRelatedAttributes} disabled attributes that make a DOM element either disabled or enabled.
 */
function getDisabledState(disabled?: boolean, focusable?: boolean): TabRelatedAttributes {
	const isFocusableAndDisabled = focusable && disabled;
	const isNativelyDisabled = !focusable && disabled;

	switch (true) {
		case isNativelyDisabled:
			return {
				disabled: true,
				"aria-disabled": undefined,
			};

		case isFocusableAndDisabled:
			return {
				"aria-disabled": true,
				disabled: undefined,
			};

		case !disabled:
		default:
			return {
				"aria-disabled": undefined,
				disabled: false,
			};
	}
}

/**
 * An abstract hook that makes elements perceivable for keyboard users.
 * If the element is disabled, then it also disables any mouse or keyboard events to bubble up.
 *
 * @export
 * @param {HTMLTabbableElement} htmlProps
 * @returns {UseTabbableHTMLProps}
 */
export function useTabbable<GenericProps>(
	htmlProps: HTMLTabbableElement<GenericProps>,
): UseTabbableHTMLProps<GenericProps> {
	const disabledState = useMemo(
		() => getDisabledState(htmlProps.disabled, htmlProps.focusable),
		[htmlProps.disabled, htmlProps.focusable],
	);
	const onClickCapture = useDisableEvent(htmlProps.disabled);
	const onMouseDownCapture = useDisableEvent(htmlProps.disabled);
	const onKeyPressCapture = useDisableEvent(htmlProps.disabled);

	return {
		...htmlProps,
		...disabledState,
		onClickCapture,
		onMouseDownCapture,
		onKeyPressCapture,
	};
}
