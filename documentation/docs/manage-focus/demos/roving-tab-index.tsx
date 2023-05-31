import React, { useRef } from "react";
import { callIfExists } from "@jtmdias/js-utilities";
import {
	RoverProvider,
	useRover,
	useFocus,
} from "../../../../src/components/roving-tabindex/index";
import styles from "./styles.module.scss";

const SidenavLink = ({
	disabled,
	children,
	onClick,
}: Pick<React.HTMLProps<HTMLButtonElement>, "disabled" | "children" | "onClick">) => {
	const ref = useRef(null);
	const [tabIndex, focused, handleKeyDown, handleClick] = useRover(ref, disabled);
	useFocus(ref, focused);
	return (
		<button
			className={styles.rover__sidenav__link}
			ref={ref}
			onKeyDown={handleKeyDown}
			onClick={() => {
				handleClick();
				callIfExists(onClick);
			}}
			tabIndex={tabIndex}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export const DemoRovingTabIndex = () => {
	return (
		<div className={styles.rover__page}>
			<button className={styles.rover__button} type="button">
				A Button
			</button>
			<RoverProvider direction="vertical">
				<nav
					className={styles.rover__sidenav}
					id="sidenav"
					data-testid="js-roving-tabindex-sidenav"
				>
					<span className={styles.rover__sidenav__label}>Menu</span>
					<ul className={styles.rover__sidenav__list}>
						<li>
							<SidenavLink disabled={false} onClick={() => console.log("Button One clicked")}>
								<div className={styles.rover__sidenav__left}>
									<svg
										className={styles.rover__sidenav__icon}
										viewBox="0 0 16 16"
										aria-hidden="true"
									>
										<g
											fill="none"
											strokeWidth="1"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polyline points="10.5,3.5 10.5,9.5 8,7.5 5.5,9.5 5.5,3.5" />
											<rect x="0.5" y="0.5" width="15" height="3"></rect>
											<polyline points="14.5,5.5 14.5,14.5 1.5,14.5 1.5,5.5" />
										</g>
									</svg>
									<span className={styles["rover__sidenav__link-text"]}>Orders</span>
								</div>
								<span className={styles.rover__sidenav__counter}>10</span>
							</SidenavLink>
						</li>
						<li>
							<SidenavLink disabled={false} onClick={() => console.log("Button Two clicked")}>
								<div className={styles.rover__sidenav__left}>
									<svg
										className={styles.rover__sidenav__icon}
										viewBox="0 0 16 16"
										aria-hidden="true"
									>
										<path
											fill="none"
											stroke="currentColor"
											strokeWidth="1"
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.328,2.672 c-1.562-1.562-4.095-1.562-5.657,0C8.391,2.952,8.18,3.27,8,3.601c-0.18-0.331-0.391-0.65-0.672-0.93 c-1.562-1.562-4.095-1.562-5.657,0c-1.562,1.562-1.562,4.095,0,5.657L8,14.5l6.328-6.172C15.891,6.766,15.891,4.234,14.328,2.672z"
										></path>
									</svg>
									<span className={styles["rover__sidenav__link-text"]}>Wishlist</span>
								</div>
								<span className={styles.rover__sidenav__counter}>12</span>
							</SidenavLink>
						</li>
						<li>
							<SidenavLink disabled={false} onClick={() => console.log("Button Three clicked")}>
								<div className={styles.rover__sidenav__left}>
									<svg
										className={styles.rover__sidenav__icon}
										viewBox="0 0 16 16"
										aria-hidden="true"
									>
										<g
											fill="none"
											strokeWidth="1"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polyline points=" 15.5,7.5 8,0.5 0.5,7.5" />
											<polyline points="2.5,8.5 2.5,15.5 6.5,15.5 6.5,11.5 9.5,11.5 9.5,15.5 13.5,15.5 13.5,8.5" />
										</g>
									</svg>
									<span className={styles["rover__sidenav__link-text"]}>Addresses</span>
								</div>
							</SidenavLink>
						</li>
						<li>
							<SidenavLink disabled={false} onClick={() => console.log("Button Four clicked")}>
								<div className={styles.rover__sidenav__left}>
									<svg
										className={styles.rover__sidenav__icon}
										viewBox="0 0 16 16"
										aria-hidden="true"
									>
										<g
											fill="none"
											strokeWidth="1"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<line x1="0.5" y1="4.5" x2="15.5" y2="4.5"></line>
											<path d="M5.5,12.5h-4 c-0.552,0-1-0.448-1-1v-10c0-0.552,0.448-1,1-1h13c0.552,0,1,0.448,1,1v5"></path>
											<polygon points="11,15 8.5,15.5 9,13 13.5,8.5 15.5,10.5 "></polygon>
										</g>
									</svg>
									<span className={styles["rover__sidenav__link-text"]}>Payment Methods</span>
								</div>
							</SidenavLink>
						</li>
					</ul>
					<span className={styles.rover__sidenav__label}>Other</span>
					<ul className={styles.rover__sidenav__list}>
						<li>
							<SidenavLink disabled={false} onClick={() => console.log("Button Five clicked")}>
								<div className={styles.rover__sidenav__left}>
									<svg
										className={styles.rover__sidenav__icon}
										viewBox="0 0 16 16"
										aria-hidden="true"
									>
										<g
											fill="none"
											strokeWidth="1"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M4.318,9A5,5,0,0,0,1.5,13.5h0s2,2,6.5,2,6.5-2,6.5-2h0A5,5,0,0,0,11.681,9"></path>
											<path d="M11.5,4c0,1.933-1.567,4.5-3.5,4.5S4.5,5.933,4.5,4a3.5,3.5,0,0,1,7,0Z"></path>
										</g>
									</svg>
									<span className={styles["rover__sidenav__link-text"]}>Profile Settings</span>
								</div>
							</SidenavLink>
						</li>
						<li>
							<SidenavLink disabled={false} onClick={() => console.log("Button Six clicked")}>
								<div className={styles.rover__sidenav__left}>
									<svg
										className={styles.rover__sidenav__icon}
										viewBox="0 0 16 16"
										aria-hidden="true"
									>
										<g
											fill="none"
											strokeWidth="1"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M6.5,5.5v-3 c0-0.552,0.448-1,1-1h7c0.552,0,1,0.448,1,1v12c0,0.552-0.448,1-1,1h-7c-0.552,0-1-0.448-1-1v-3"></path>
											<line x1="11.5" y1="8.5" x2="0.5" y2="8.5"></line>
											<polyline points="3.5,5.5 0.5,8.5 3.5,11.5" />
										</g>
									</svg>
									<span className={styles["rover__sidenav__link-text"]}>Log Out</span>
								</div>
							</SidenavLink>
						</li>
					</ul>
				</nav>
			</RoverProvider>
			<button className={styles.rover__button} type="button">
				Another Button
			</button>
		</div>
	);
};
