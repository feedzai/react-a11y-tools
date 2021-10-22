import React, { useState } from "react";
import { FocusManager } from "../../../../src/index";
import styles from "./styles.module.scss";

export const DemoFocusManager = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<div>
			<button
				className={styles.focusManager__button}
				type="button"
				onClick={() => setIsVisible(true)}
			>
				Show Menu
			</button>
			{isVisible && (
				<FocusManager {...props}>
					<div className={styles.focusManager__popover} id="popover" tabIndex={-1}>
						<div
							className={styles.focusManager__container}
							role="dialog"
							aria-labelledby="popover-title"
						>
							<div className={styles.focusManager__body}>
								<header className={styles.focusManager__header}>
									<h4 className={styles.focusManager__header__title} id="popover-title">
										Menu
									</h4>
									<button
										type="button"
										className={styles.focusManager__header__button}
										onClick={() => setIsVisible(false)}
									>
										Close
									</button>
								</header>
								<nav className={styles.focusManager__navigation} aria-label="Main">
									<ul className={styles.focusManager__navigation__list}>
										<li>
											<a className={styles.focusManager__link} href="#0">
												<span>Home</span>
												<span>35</span>
											</a>
										</li>
										<li>
											<a className={styles.focusManager__link} href="#0">
												<span>Trending</span>
												<span>17</span>
											</a>
										</li>
										<li>
											<a className={styles.focusManager__link} href="#0">
												<span>Subscriptions</span>
												<span>12</span>
											</a>
										</li>
										<li>
											<a className={styles.focusManager__link} href="#0">
												<span>Library</span>
												<span>24</span>
											</a>
										</li>
										<li>
											<a className={styles.focusManager__link} href="#0">
												<span>History</span>
												<span>18</span>
											</a>
										</li>
									</ul>
								</nav>
								<footer className={styles.focusManager__footer}>
									<div className={styles.focusManager__footer__wrapper}>
										<input
											className={styles.focusManager__footer__input}
											type="search"
											placeholder="Search..."
											aria-label="Search"
										/>
										<button className={styles.focusManager__footer__icon}>
											<svg className="icon" viewBox="0 0 24 24">
												<g
													fill="none"
													stroke="currentColor"
													strokeLinecap="square"
													strokeLinejoin="miter"
													strokeMiterlimit="10"
													strokeWidth="2"
												>
													<path d="M22 22L15.656 15.656" />
													<circle cx="10" cy="10" r="8" />
												</g>
											</svg>
										</button>
									</div>
								</footer>
							</div>
						</div>
					</div>
				</FocusManager>
			)}
		</div>
	);
};
