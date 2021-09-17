import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						Docusaurus Tutorial - 5min ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<div className={styles.header__container}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={64}
						height={64}
						className={styles.header__logo}
						fill="none"
						role="presentation"
						focusable="false"
						viewBox="0 0 64 64"
					>
						<path
							fill="url(#paint0_linear)"
							d="M52.07 23.012c-2.548.74-12.56.09-14.051 4.09-2.61 6.997 2.04 20.316 3.94 26.964.983 3.43-4.471 4.663-4.991 1.092-1.005-6.912-3.343-11.683-4.187-12.608-.372-.409-.72-.409-1.086.009-.842.953-3.18 5.708-4.182 12.6-.52 3.57-5.972 2.337-4.992-1.093 1.903-6.648 6.55-19.967 3.942-26.964-1.49-4-11.504-3.35-14.05-4.09-2.694-.782-1.72-4.873 1.342-4.03 5.554 1.526 18.486 1.509 18.486 1.509s12.931.017 18.485-1.51c3.063-.842 4.038 3.25 1.344 4.031zM32.24 8.342a5.264 5.264 0 015.265 5.264 5.264 5.264 0 11-10.53 0 5.264 5.264 0 015.266-5.264zm0-7.517C14.569.825.242 15.15.242 32.825c0 17.673 14.327 32 32 32 17.674 0 32-14.327 32-32 0-17.674-14.326-32-32-32"
						></path>
						<path
							stroke="#fff"
							strokeMiterlimit={10}
							strokeWidth="0.265"
							d="M62.322 32.824c0-16.612-13.468-30.079-30.081-30.079-16.612 0-30.081 13.467-30.081 30.079 0 16.614 13.469 30.08 30.08 30.08 16.614 0 30.081-13.467 30.081-30.08v0z"
						></path>
						<defs>
							<linearGradient
								id="paint0_linear"
								x1={15}
								x2={57}
								y1={8}
								y2={53}
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.005" stopColor="var(--color-primary)" />
								<stop offset={1} stopColor="var(--color-primary-dark)" />
							</linearGradient>
						</defs>
					</svg>
					<h1 className={styles.header__title}>@feedzai/react-a11y-tools</h1>
				</div>
			</header>
			<main className={styles["main-content"]}>
				<h2 className={styles.page__title}>
					Focus on <span className={styles.page__title__highlight}>accessible web experiences</span>
				</h2>
				<p className={styles.page__subheading}>
					A small React component library that aims to ease the process of creating <wbr />
					design systems, web apps or websites.
				</p>
				<nav className={styles.page__nav}>
					<Link className={clsx(styles.link, styles["link--primary"])} to="/docs/intro">
						<span className={styles.link__text}>Get Started</span>
						<span className={styles.link__icon}>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth={0}
								viewBox="0 0 448 512"
								fontSize="0.8em"
								role="presentation"
								focusable="false"
								height={16}
								width={16}
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
							</svg>
						</span>
					</Link>
					<a
						className={clsx(styles.link, styles.github)}
						href="https://github.com/feedzai/react-a11y-tools"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className={styles.link__icon}>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth={0}
								version="1.1"
								viewBox="0 0 32 32"
								role="presentation"
								focusable="false"
								height={32}
								width={32}
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"></path>
							</svg>
						</span>
						<span className={styles.link__text}>Code on Github</span>
					</a>
					<a
						className={clsx(styles.link, styles.npm)}
						href="https://www.npmjs.com/package/@feedzai/react-a11y-tools"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className={styles.link__icon}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								fill="none"
								viewBox="0 0 32 32"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M32 0H0v32h32V0zM16 28H4V4h24v24h-6V10h-6v18z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
						<span className={styles.link__text}>Package on NPM</span>
					</a>
				</nav>
			</main>
			<footer className={styles.footer}>
				<p>
					Open-source library built at
					<a href="https://feedzai" target="_blank" rel="noopener noreferrer">
						Feedzai
					</a>
				</p>
			</footer>
		</div>
	);
}
