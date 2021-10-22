import * as React from "react";
import { useDynamicImport } from "./useDynamicImport";
import styles from "./styles.module.scss";

export const PropsTable = ({ name }: { name: string }) => {
	const { props } = useDynamicImport(name);

	if (!props || Object.keys(props).length <= 0) {
		return null;
	}
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Default Value</th>
					<th>Required</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{Object.keys(props).map((key) => {
					return (
						<tr key={key}>
							<td>
								<code>{key}</code>
							</td>
							<td>
								<code>{props[key].type?.name}</code>
							</td>
							<td>
								{props[key].defaultValue ? (
									<code>{props[key].defaultValue.value}</code>
								) : (
									<span>-</span>
								)}
							</td>
							<td>{props[key].required ? "Yes" : "No"}</td>
							<td>{props[key].description}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
