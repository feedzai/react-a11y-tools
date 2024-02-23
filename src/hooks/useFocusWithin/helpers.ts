/* istanbul ignore file */
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
 * helpers.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import { FocusEvent as ReactFocusEvent, useCallback, useRef } from "react";
import { useSafeLayoutEffect } from "../index";

export class SyntheticFocusEvent implements ReactFocusEvent {
	nativeEvent: FocusEvent;
	target: Element;
	currentTarget: Element;
	relatedTarget: Element;
	bubbles: boolean;
	cancelable: boolean;
	defaultPrevented: boolean;
	eventPhase: number;
	isTrusted: boolean;
	timeStamp: number;
	type: string;

	constructor(type: string, nativeEvent: FocusEvent) {
		this.nativeEvent = nativeEvent;
		this.target = nativeEvent.target as Element;
		this.currentTarget = nativeEvent.currentTarget as Element;
		this.relatedTarget = nativeEvent.relatedTarget as Element;
		this.bubbles = nativeEvent.bubbles;
		this.cancelable = nativeEvent.cancelable;
		this.defaultPrevented = nativeEvent.defaultPrevented;
		this.eventPhase = nativeEvent.eventPhase;
		this.isTrusted = nativeEvent.isTrusted;
		this.timeStamp = nativeEvent.timeStamp;
		this.type = type;
	}

	isDefaultPrevented(): boolean {
		return this.nativeEvent.defaultPrevented;
	}

	preventDefault(): void {
		this.defaultPrevented = true;
		this.nativeEvent.preventDefault();
	}

	stopPropagation(): void {
		this.nativeEvent.stopPropagation();
		this.isPropagationStopped = () => true;
	}

	isPropagationStopped(): boolean {
		return false;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	persist() {}
}

export function useSyntheticBlurEvent(onBlur: (e: ReactFocusEvent) => void) {
	const stateRef = useRef({
		isFocused: false,
		onBlur,
		observer: null as MutationObserver | null,
	});
	stateRef.current.onBlur = onBlur;

	// Clean up MutationObserver on unmount. See below.
	// eslint-disable-next-line arrow-body-style
	useSafeLayoutEffect(() => {
		const state = stateRef.current;
		return () => {
			if (state.observer) {
				state.observer.disconnect();
				state.observer = null;
			}
		};
	}, []);

	// This function is called during a React onFocus event.
	return useCallback((event: ReactFocusEvent) => {
		// React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
		// Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
		// MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
		// For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
		if (
			event.target instanceof HTMLButtonElement ||
			event.target instanceof HTMLInputElement ||
			event.target instanceof HTMLTextAreaElement ||
			event.target instanceof HTMLSelectElement
		) {
			stateRef.current.isFocused = true;

			const target = event.target;
			const onBlurHandler = (event: FocusEvent) => {
				stateRef.current.isFocused = false;

				if (target.disabled) {
					// For backward compatibility, dispatch a (fake) React synthetic event.
					stateRef.current.onBlur?.(new SyntheticFocusEvent("blur", event));
				}

				// We no longer need the MutationObserver once the target is blurred.
				if (stateRef.current.observer) {
					stateRef.current.observer.disconnect();
					stateRef.current.observer = null;
				}
			};

			target.addEventListener("focusout", onBlurHandler as EventListenerOrEventListenerObject, {
				once: true,
			});

			stateRef.current.observer = new MutationObserver(() => {
				if (stateRef.current.isFocused && target.disabled) {
					stateRef.current.observer?.disconnect();
					target.dispatchEvent(new FocusEvent("blur"));
					target.dispatchEvent(new FocusEvent("focusout", { bubbles: true }));
				}
			});

			stateRef.current.observer.observe(target, {
				attributes: true,
				attributeFilter: ["disabled"],
			});
		}
	}, []);
}
