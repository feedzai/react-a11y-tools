import React from "react";
import styles from "./index.module.css";

export const Subtitle: React.FC = ({ children }) => {
	return <h2 className={styles.subtitle}>{children}</h2>;
}
