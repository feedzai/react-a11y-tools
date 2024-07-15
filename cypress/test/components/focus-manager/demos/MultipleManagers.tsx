/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 Feedzai, Rights Reserved.
 */
import React from "react";
import { useState } from "react";
import { FocusManager } from "src/components";
import styles from "./MultipleManagers.module.scss";

export function MultipleManagers() {
	const [isOpen, setIsOpen] = useState(false);
	const [isSecondOpen, setIsSecondOpen] = useState(false);
	return (
		<div>
			<button type="button">I don't do anything</button>
			<table className={styles.table}>
				<tr>
					<th>Company</th>
					<th>Contact</th>
					<th>Country</th>
				</tr>
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>
						<button type="button">I don't do anything</button>
					</td>
				</tr>
				<tr>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>
						<button type="button">I don't do anything</button>
					</td>
				</tr>
				<tr>
					<td>Ernst Handel</td>
					<td>Roland Mendel</td>
					<td>
						<button type="button">I don't do anything</button>
					</td>
				</tr>
				<tr>
					<td>Island Trading</td>
					<td>Helen Bennett</td>
					<td>
						<button type="button" onClick={() => setIsOpen(true)}>
							Open Dialog
						</button>
					</td>
				</tr>
				<tr>
					<td>Laughing Bacchus Winecellars</td>
					<td>Yoshi Tannamuri</td>
					<td>
						{" "}
						<button type="button">I don't do anything</button>
					</td>
				</tr>
				<tr>
					<td>Magazzini Alimentari Riuniti</td>
					<td>Giovanni Rovelli</td>
					<td>
						{" "}
						<button type="button">I don't do anything</button>
					</td>
				</tr>
			</table>
			{isOpen ? (
				<div role="dialog" className={styles.dialog}>
					<FocusManager>
						<button type="button" onClick={() => setIsOpen(false)}>
							Close Dialog
						</button>
						<input data-testid="fdz-js-input-1" />
						<input data-testid="fdz-js-input-2" />
						<input data-testid="fdz-js-input-3" />
						<button type="button" onClick={() => setIsSecondOpen(!isSecondOpen)}>
							Open Second Dialog
						</button>
					</FocusManager>
				</div>
			) : null}
			{isSecondOpen ? (
				<div role="dialog" className={styles.dialog}>
					<FocusManager>
						<button type="button" onClick={() => setIsSecondOpen(false)}>
							Close Second Dialog
						</button>
						<input data-testid="fdz-js-input-4" />
						<input data-testid="fdz-js-input-5" />
						<input data-testid="fdz-js-input-6" />
					</FocusManager>
				</div>
			) : null}
		</div>
	);
}
