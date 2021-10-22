import React from "react";
import styles from "./index.module.css";

export function Subtitle({ children }) {
	return <h2 className={styles.subtitle}>{children}</h2>;
}
