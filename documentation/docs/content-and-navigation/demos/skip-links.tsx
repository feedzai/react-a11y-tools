import React from "react";
import { options } from "./mocks";
import { SkipLinks, Heading } from "../../../../src";
import { ISkipLink } from "../../../../src/components/skip-links/link";
import styles from "./styles.module.scss";

export const DemoSkipLinks = () => {
	return (
		<>
			<button className={styles.skipLinks__button} data-testid="fdz-js-skip-links-target-button">
				Hey, start here!
			</button>
			<div className={styles.skipLinks__page}>
				<SkipLinks items={options.multiple as ISkipLink[]} />
				<div className={styles.skipLinks__container}>
					<header className={styles.skipLinks__header}>
						<h1>Skip Links Demo</h1>
						<nav
							className={styles.skipLinks__target}
							id="navigation-menu"
							tabIndex={-1}
							data-testid="fdz-js-skip-links-nav"
						>
							<ul className={styles.skipLinks__list}>
								<li>
									<a className={styles.skipLinks__anchor} href="#website">
										Link 1
									</a>
								</li>
								<li>
									<a className={styles.skipLinks__anchor} href="#documentation">
										Link 2
									</a>
								</li>
								<li>
									<a className={styles.skipLinks__anchor} href="#gitlab">
										Link 3
									</a>
								</li>
							</ul>
						</nav>
					</header>
					<main
						className={styles.skipLinks__target}
						id="content"
						tabIndex={-1}
						data-testid="fdz-js-skip-links-main"
					>
						<Heading className={styles["skipLinks__main-title"]}>Bacon Ipsum</Heading>
						<p className={styles.skipLinks__paragraph}>
							<span className={styles["skipLinks__first-letter"]}>B</span> eef ribs leberkas
							capicola cow swine turducken tri-tip meatball drumstick short ribs. Meatball boudin
							ribeye tri-tip pancetta, filet mignon kevin venison turducken pork loin. Porchetta
							buffalo kevin capicola tail pancetta shank corned beef bacon tongue beef ribs cow.
							Picanha ham hock ribeye sausage.
							<br />
							<br />
							Chislic cupim pig, hamburger jerky ribeye andouille sausage buffalo. Tenderloin t-bone
							beef pancetta boudin short ribs pork loin kevin, spare ribs corned beef picanha filet
							mignon hamburger frankfurter ham hock. Prosciutto chuck chislic hamburger, pork loin
							meatloaf biltong tongue ham hock strip steak pork belly turkey venison boudin kevin.
							Sirloin capicola kevin ham spare ribs tri-tip swine leberkas pork loin cupim chislic
							jowl. Shoulder short loin pork loin, filet mignon biltong venison beef spare ribs
							tongue sausage. T-bone porchetta sausage picanha landjaeger shank venison beef bacon
							shankle rump.
						</p>
						<a
							className={styles.skipLinks__anchor}
							id="website"
							href="https://github.com/feedzai/react-a11y-tools/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Repository on Github
						</a>
						<a
							className={styles.skipLinks__anchor}
							id="documentation"
							href="https://www.npmjs.com/package/@feedzai/react-a11y-tools/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Package on npm
						</a>
					</main>
				</div>
			</div>
		</>
	);
};
