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

export function RestoreFocus() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
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
						<button type="button">I don't do anything</button>
					</td>
				</tr>
				<tr>
					<td>Magazzini Alimentari Riuniti</td>
					<td>Giovanni Rovelli</td>
					<td>
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
					</FocusManager>
				</div>
			) : null}
		</div>
	);
}
