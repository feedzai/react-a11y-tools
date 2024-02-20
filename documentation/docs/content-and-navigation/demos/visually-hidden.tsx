import React, { useEffect, useRef, useState } from "react";
import { VisuallyHidden } from "../../../../src";
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from "./styles.module.scss";

const ELEMENT_ID = "064a70e8-5c1e-43e6-8eee-9ab069b094fc";

export const DemoVisuallyHidden = () => {
	const [buttonText, setButtonText] = useState("");
	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (ref.current && ref.current.textContent) {
			setButtonText(ref.current.textContent);
		}
	}, [setButtonText]);
	return (
		<BrowserOnly>
			{() =>(
				<>
					<button
						ref={ref}
						id={ELEMENT_ID}
						className={styles.skipLinks__button}
						data-testid="js-skip-links-target-button"
					>
						<VisuallyHidden>Press Enter to </VisuallyHidden>
						<span>Return to Navigation</span>
					</button>
					<br />
					<br />
					<div>
						<h4>Button content:</h4>
						<p>"{buttonText}"</p>
					</div>
				</>
			)}
		</BrowserOnly>
	);
};
