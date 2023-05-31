/*
 * The file cannot be reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
export type Modality = "keyboard" | "pointer" | "virtual";
export type HandlerEvent = PointerEvent | MouseEvent | KeyboardEvent | FocusEvent;
export type Handler = (modality: Modality, event: HandlerEvent | null) => void;
export type FocusVisibleHandler = (isFocusVisible: boolean) => void;
export interface FocusVisibleProps {
	/** Whether the element is a text input. */
	isTextInput?: boolean,
	/** Whether the element will be auto focused. */
	autoFocus?: boolean
}

export interface FocusVisibleResult {
	/** Whether keyboard focus is visible globally. */
	isFocusVisible: boolean
}
