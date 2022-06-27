/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2022 Feedzai, Rights Reserved.
 */

import { HTMLAttributes } from "react";

/**
 * types.ts
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
export interface UseFocusWithinProps {
	/** Handler that is called when the target element or a descendant receives focus. */
	onFocusWithin?: (e: FocusEvent) => void;
	/** Handler that is called when the target element and all descendants lose focus. */
	onBlurWithin?: (e: FocusEvent) => void;
	/** Handler that is called when the the focus within state changes. */
	onFocusWithinChange?: (isFocusWithin: boolean) => void;
}

export interface UseFocusWithinReturns {
	/** Props to spread onto the target element. */
	focusWithinProps: HTMLAttributes<HTMLElement>;
}
