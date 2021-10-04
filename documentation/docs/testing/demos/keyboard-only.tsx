import React, { useState } from "react";
import { KeyboardOnly } from "../../../../src/components/keyboard-only/index";
import styles from "./styles.module.scss";

export const DemoKeyboardOnly = () => {
	const [disableMouse, setDisableMouse] = useState(false);
	return (
		<div className={styles.layout}>
			{disableMouse && <KeyboardOnly />}
			<header className={styles.header}>
				<div className={styles.header__container}>
					<div title="this is some weird ass innacessible button" className={styles.header__menu}>
						☰
					</div>
					<div className={styles.header__title}>My Food</div>
					<button
						type="button"
						onClick={() => setDisableMouse(!disableMouse)}
						className={styles.button}
					>
						{disableMouse ? "Enable Mouse" : "Disable Mouse"}
					</button>
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.main__row} id="food">
					<div className={styles.main__item}>
						<img
							src="https://www.w3schools.com/w3images/sandwich.jpg"
							loading="lazy"
							alt="Sandwich"
							style={{ width: "100%" }}
						/>
						<h3 className={styles.main__item__title}>The Perfect Sandwich, A Real NYC Classic</h3>
						<p className={styles.main__item__description}>
							Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.
						</p>
					</div>
					<div className={styles.main__item}>
						<img
							src="https://www.w3schools.com/w3images/steak.jpg"
							loading="lazy"
							alt="Steak"
							style={{ width: "100%" }}
						/>
						<h3 className={styles.main__item__title}>Let Me Tell You About This Steak</h3>
						<p className={styles.main__item__description}>
							Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt
							ipsum lipsum.
						</p>
					</div>
					<div className={styles.main__item}>
						<img
							src="https://www.w3schools.com/w3images/cherries.jpg"
							loading="lazy"
							alt="Cherries"
							style={{ width: "100%" }}
						/>
						<h3 className={styles.main__item__title}>Cherries, interrupted</h3>
						<p className={styles.main__item__description}>
							Lorem ipsum text praesent tincidunt ipsum lipsum.
						</p>
						<p className={styles.main__item__description}>What else?</p>
					</div>
					<div className={styles.main__item}>
						<img
							src="https://www.w3schools.com/w3images/wine.jpg"
							loading="lazy"
							alt="Pasta and Wine"
							style={{ width: "100%" }}
						/>
						<h3 className={styles.main__item__title}>
							Once Again, Robust Wine and Vegetable Pasta
						</h3>
						<p className={styles.main__item__description}>
							Lorem ipsum text praesent tincidunt ipsum lipsum.
						</p>
					</div>
				</div>
				<div className={styles.main__row}>
					<div className={styles.main__item}>
						<img
							src="https://www.w3schools.com/w3images/popsicle.jpg"
							loading="lazy"
							alt="Popsicle"
							style={{ width: "100%" }}
						/>
						<h3 className={styles.main__item__title}>All I Need Is a Popsicle</h3>
						<p className={styles.main__item__description}>
							Lorem ipsum text praesent tincidunt ipsum lipsum.
						</p>
					</div>
					<div className={styles.main__item}>
						<img
							src="https://www.w3schools.com/w3images/salmon.jpg"
							loading="lazy"
							alt="Salmon"
							style={{ width: "100%" }}
						/>
						<h3 className={styles.main__item__title}>Salmon For Your Skin</h3>
						<p className={styles.main__item__description}>
							Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt
							ipsum lipsum.
						</p>
					</div>
					<div className={styles.main__item}>
						<img
							src="https://www.w3schools.com/w3images/sandwich.jpg"
							loading="lazy"
							alt="Sandwich"
							style={{ width: "100%" }}
						/>
						<h3 className={styles.main__item__title}>The Perfect Sandwich, A Real Classic</h3>
						<p className={styles.main__item__description}>
							Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.
						</p>
					</div>
					<div className={styles.main__item}>
						<img
							src="https://www.w3schools.com/w3images/croissant.jpg"
							loading="lazy"
							alt="Croissant"
							style={{ width: "100%" }}
						/>
						<h3 className={styles.main__item__title}>Le French</h3>
						<p className={styles.main__item__description}>
							Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.
						</p>
					</div>
				</div>
				<div className={styles.main__row}>
					<div className={styles.pagination}>
						<a href="#" className={styles.pagination__item}>
							«
						</a>
						<a href="#" className={styles.pagination__item} aria-current="true">
							1
						</a>
						<a href="#" className={styles.pagination__item}>
							2
						</a>
						<a href="#" className={styles.pagination__item}>
							3
						</a>
						<a href="#" className={styles.pagination__item}>
							4
						</a>
						<a href="#" className={styles.pagination__item}>
							»
						</a>
					</div>
				</div>
				<hr className={styles.divider} id="about" />
				<div className={styles.main__row}>
					<h3 className={styles.main__item__title}>About Me, The Food Man</h3>
					<br />
					<img
						src="https://www.w3schools.com/w3images/chef.jpg"
						alt="Me"
						className={styles.image}
						style={{ display: "block", margin: "auto" }}
						width={800}
						height={533}
						loading="lazy"
					/>
					<div className={styles.article}>
						<h4>
							<b>I am Who I Am!</b>
						</h4>
						<h6>
							<i>With Passion For Real, Good Food</i>
						</h6>
						<p className={styles.main__item__description}>
							Just me, myself and I, exploring the universe of unknownment. I have a heart of love
							and an interest of lorem ipsum and mauris neque quam blog. I want to share my world
							with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
							lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed
							tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
							gravida diam non fringilla.
						</p>
					</div>
				</div>
				<hr className={styles.divider} />
			</main>
		</div>
	);
};
