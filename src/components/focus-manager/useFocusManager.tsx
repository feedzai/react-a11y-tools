/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
import { MutableRefObject, RefObject, useMemo, useRef } from "react";
import { createFocusTrap } from "focus-trap";
import { FocusManagerProps, UseFocusManagerAsProps, UseFocusManagerWithRef } from "./types";
import { getFallbackFocus, getInitialFocus, getReturnFocusProps } from "./helpers";

/**
 * Returns an FocusManager interface for the parent FocusManager.
 * A FocusManager can be used to programmatically move focus within
 * a FocusManager, e.g. in response to user events like keyboard navigation.
 *
 * @example
 * ```tsx
 * import { useFocusManager } from "@feedzai/react-a11y-tools";
 * ...
 * const elementRef = useRef(null);
 *
 * useFocusManager(elementRef)
 *
 * return (
 *  <div ref={elementRef}>
 *   <input data-testid="fdz-js-input-1" />
 *   <input data-testid="fdz-js-input-2" />
 *   <input data-testid="fdz-js-input-3" />
 *  </div>
 * )
 * ```
 *
 */
export function useFocusManager<GenericElement extends HTMLElement | SVGElement>(
	props: Omit<FocusManagerProps, "children">,
	ref: RefObject<GenericElement> | MutableRefObject<GenericElement>,
): UseFocusManagerWithRef;
export function useFocusManager(
	props: Omit<FocusManagerProps, "children">,
	ref?: never,
): UseFocusManagerAsProps;
export function useFocusManager<GenericElement extends HTMLElement | SVGElement>(
	props: Omit<FocusManagerProps, "children">,
	ref?: RefObject<GenericElement> | MutableRefObject<GenericElement>,
): UseFocusManagerWithRef | UseFocusManagerAsProps {
	const fallbackRef = useRef<HTMLDivElement>(null);

	/**
	 * Returns the correct prop value for the return focus functionality.
	 */
	const returnFocusOptions = useMemo(() => {
		if (!props.restoreFocus) {
			return {
				returnFocusOnDeactivate: true,
			};
		}

		return getReturnFocusProps(props.restoreFocus);
	}, [props.restoreFocus]);

	/**
	 * Sets the fallback focus element to a:
	 * 1. Defined option as prop
	 * 2. A fallback ref element
	 */
	const fallbackFocus = useMemo(() => {
		return getFallbackFocus(fallbackRef.current, props.options?.fallbackFocus);
	}, [props.options?.fallbackFocus]);

	/**
	 * Sets the initial focus element.
	 */
	const initialFocus = useMemo(() => {
		return getInitialFocus(props.autoFocus, props.options?.initialFocus);
	}, [props]);

	const FOCUS_TRAP_OPTIONS: FocusManagerProps["options"] = {
		...props.options,
		...returnFocusOptions,
		fallbackFocus,
		initialFocus,
	};

	if (ref?.current) {
		return createFocusTrap(ref.current, FOCUS_TRAP_OPTIONS);
	}

	return {
		fallbackRef,
		paused: !!(props.contain === "paused" || props.contain === false),
		focusTrapOptions: FOCUS_TRAP_OPTIONS,
	} as UseFocusManagerAsProps;
}
