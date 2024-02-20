/*
 * The file cannot be reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React, { useRef, HTMLAttributes, InputHTMLAttributes } from "react";
import { useAutoId, useTabbable } from "../../../../../src/index";
import { makeId } from "../../../../../src/helpers";
import styles from "./index.modules.scss";

type Tabbable = {
	focusable?: boolean;
	disabled?: boolean;
};

type Button = HTMLAttributes<HTMLButtonElement> & Tabbable;
type Input = InputHTMLAttributes<HTMLInputElement> &
	Tabbable & {
		label: string;
	};

const Button = ({ id, disabled, ...props }: Button) => {
	const autoId = useAutoId(id);
	const { current: generatedId } = useRef(makeId("js-tabbable-button-", autoId));
	const { focusable, ...htmlProps } = useTabbable<Button>({
		...props,
		disabled,
	});

	return (
		<button id={generatedId} className={styles.button} data-focusable={focusable} {...htmlProps}>
			{props.children}
		</button>
	);
};

const Input = ({ id, disabled, ...props }: Input) => {
	const autoId = useAutoId(id);
	const { current: generatedId } = useRef(makeId("js-tabbable-", autoId));
	const { label, focusable, ...htmlProps } = useTabbable<Input>({
		...props,
		disabled,
	});

	return (
		<fieldset className={styles.fieldset}>
			<label htmlFor={generatedId} className={styles.label}>
				{label}
			</label>
			<input id={generatedId} className={styles.input} data-focusable={focusable} {...htmlProps} />
		</fieldset>
	);
};

export const DemoUseAutoId = () => {
	const autoId = useAutoId();
	const autoId2 = useAutoId(null, "js-component");
	const autoId3 = useAutoId("f23104a4-ea6c-49bf-9156-5759037e388d", "js-component");

	return (
		<div className={styles.wrapper}>
			<p>
				Auto Id: <strong>{autoId}</strong>
			</p>
			<p>
				Auto Id, with a prefix: <strong>{autoId2}</strong>
			</p>
			<p>
				Props Id, with a prefix: <strong>{autoId3}</strong>
			</p>
		</div>
	);
};
