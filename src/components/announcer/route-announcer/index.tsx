/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { usePrevious } from "../../../hooks";
import { Announcer } from "../announcer";
import { GenericComponentPropsWithChildren } from "@jtmdias/js-utilities";

export interface IRouteAnnouncerActions {
	/**
	 * The action predicate.
	 * @default "Navigated To"
	 */
	navigation: string;

	/**
	 * The fallback predicate for actions.
	 */
	fallback: string;
}
export interface IRouteAnnouncerProps {
	/**
	 * An optional id for the `focus wrapper` HTML element.
	 */
	id?: string;

	/**
	 * History-based Location pathnme
	 */
	pathname?: string;

	/**
	 * Content to be read by the screen-reader on the `aria-live` announcer
	 */
	action?: IRouteAnnouncerActions;
}

const DEFAULT_WRAPPER_ID = "content-focus-wrapper";

export const defaultProps: Partial<IRouteAnnouncerProps> = {
	id: DEFAULT_WRAPPER_ID,
	action: {
		navigation: "Navigated to",
		fallback: "new page at",
	},
};

/**
 * Queries the HTML Head to find the `title` tag
 *
 * @returns {boolean}
 */
export function hasDocumentTitle(): boolean {
	return !!document.title;
}

/**
 * Queries the DOM in order to find the first h1.
 *
 * @param {string} id
 * @returns {string | undefined}
 */
export function getHeadingText(id: string): string | undefined {
	const element: HTMLHeadingElement | null = document.querySelector(`#${id} h1`);

	return element && element.textContent ? element.textContent : undefined;
}

/**
 * The `RouteAnnouncer` is a wrapper for the app's content,
 * as well as the `Announcer` component.
 *
 * It listens for a change in the `pathname` prop, so that it passes a new text
 * for the `Announcer` to read.
 *
 * @example
 * // Passing a new pathname as prop
 * <RouteAnnouncer pathname="/create-account"></RouteAnnouncer>
 *
 * // The screen reader outputs:
 * "Navigated to Create Account"
 *
 * @param {IRouteAnnouncerProps} props
 * @returns {JSX.Element}
 */
export const RouteAnnouncer: FunctionComponent<IRouteAnnouncerProps> = ({
	id = defaultProps.id,
	pathname,
	action = defaultProps.action,
	children,
}: GenericComponentPropsWithChildren & IRouteAnnouncerProps) => {
	const [text, setText] = useState("");
	const previousPathname = usePrevious(pathname);

	/**
	 * Creates the string to be read by the `Announcer` component
	 * It depends on the existance of:
	 * 1. The location pathname.
	 * 2. A title in the document head.
	 * 3. The first h1 it finds on the DOM.
	 *
	 * Updates the state with whatever comes last.
	 *
	 * @returns {void}
	 */
	const setAnnouncerText = useCallback(() => {
		const hasTitle = hasDocumentTitle();
		/* istanbul ignore next */
		const firstHeading = getHeadingText(id || DEFAULT_WRAPPER_ID);

		let pageName = `${(action as IRouteAnnouncerActions).fallback} ${pathname}`;

		if (hasTitle) {
			pageName = document.title;
		}

		if (typeof firstHeading === "string" && firstHeading.length > 1) {
			pageName = firstHeading;
		}

		const newMessage = `${(action as IRouteAnnouncerActions).navigation} ${pageName}`;

		setText(newMessage);
	}, [action, id, pathname]);

	useEffect(() => {
		if (previousPathname && previousPathname !== pathname) {
			setAnnouncerText();
		}
	}, [pathname, previousPathname, setAnnouncerText]);

	return (
		<div
			id={id}
			style={{
				outline: "none",
			}}
			tabIndex={-1}
		>
			{children}
			<Announcer message={text} />
		</div>
	);
};
