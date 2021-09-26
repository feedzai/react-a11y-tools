import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

interface Props {
	children: ReactNode;
	minHeight: number;
	url: string;
}

export function BrowserWindow({ children, minHeight }: Props) {
	return (
		<div className={styles.browser} style={{ minHeight }} data-testid="fdz-js-docs-browser-window">
			<div className={styles["browser__header"]}>
				<div className={styles.buttons}>
					<span className={styles.dot} style={{ background: "#f25f58" }} />
					<span className={styles.dot} style={{ background: "#fbbe3c" }} />
					<span className={styles.dot} style={{ background: "#58cb42" }} />
				</div>
				<div className={styles["browser__address-bar"]} />
				<div className={styles["browser__menu-icon"]}>
					<div>
						<span className={styles.bar} />
						<span className={styles.bar} />
						<span className={styles.bar} />
					</div>
				</div>
			</div>

			<div className={styles["browser__body"]}>{children}</div>
		</div>
	);
}
