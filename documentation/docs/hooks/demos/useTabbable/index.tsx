/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import React, { useRef, useState, HTMLAttributes, InputHTMLAttributes } from "react";
import { useTabbable } from "../../../../../src/index";
import { makeId, useAutoId } from "@feedzai/js-utilities";
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
	const { current: generatedId } = useRef(makeId("fdz-js-tabbable-button-", autoId));
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
	const { current: generatedId } = useRef(makeId("fdz-js-tabbable-", autoId));
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

export const DemoUseTabbable = () => {
	const [value, setValue] = useState("John Doe");
	return (
		<div className={styles.wrapper}>
			<div className={styles.row}>
				<Button>Enabled</Button>
				<Button focusable={false} disabled>
					Disabled
				</Button>
				<Button focusable disabled>
					Disabled, but Tabbable
				</Button>
			</div>
			<div className={styles.row}>
				<Input
					id="ebff7158-f91d-4770-97fe-fb50a1e43a25"
					label="Name"
					onChange={(event) => setValue(event.currentTarget.value)}
					name="tabbable"
					value={value}
				/>
				<Input
					type="password"
					id="be9a3567-1b65-4d2a-8f6c-77b24ef571c0"
					label="Password"
					name="tabbable"
					value="780fe320$5c9e&4425-a41b-0f8fa0594510"
					focusable
					disabled
				/>
			</div>
		</div>
	);
};
