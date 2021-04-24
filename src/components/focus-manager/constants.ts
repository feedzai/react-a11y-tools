/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
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
