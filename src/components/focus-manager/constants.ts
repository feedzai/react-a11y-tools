/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * constant.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
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
