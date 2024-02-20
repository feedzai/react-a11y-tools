/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
export const FOCUSABLE_HTML_ELEMENTS = [
	"input:not([disabled]):not([type=hidden])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]",
];
export const FOCUSABLE_ELEMENT_SELECTOR = FOCUSABLE_HTML_ELEMENTS.join(",") + ",[tabindex]";
FOCUSABLE_HTML_ELEMENTS.push('[tabindex]:not([tabindex="-1"])');
export const TABBABLE_ELEMENT_SELECTOR = FOCUSABLE_HTML_ELEMENTS.join(':not([tabindex="-1"]),');
