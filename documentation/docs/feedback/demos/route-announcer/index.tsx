import React, { useEffect } from "react";
import { HashRouter, Route, useLocation, Switch, NavLink } from "react-router-dom";
import { RouteAnnouncer } from "../../../../../src/components/announcer/route-announcer";
import styles from "./styles.module.scss";

const Home = (): JSX.Element => (
	<div className={styles.page}>
		<article className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Blog</h1>
			</div>
			<div className={styles.container}>
				<div className={styles["featured-articles"]}>
					<article className={styles.card}>
						<div className={styles["card__container"]}>
							<img
								alt="7 Steps to Get Professional Facial Results At Home"
								className={styles["card__image"]}
								src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							/>
							<div className={styles["card__content"]}>
								<p className={styles["card__tag"]}>Fashion</p>
								<h3 className={styles["card__heading"]}>
									<NavLink
										to="/article-1"
										className={styles["card__heading__link"]}
										data-testid="js-route-announcer-card-link"
									>
										7 Steps to Get Professional Facial Results At Home
									</NavLink>
								</h3>
								<p className={styles["card__summary"]}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua
								</p>
								<div className={styles["card__metadata"]}>
									<p className={styles["card__author"]}>By Segun Adebayo</p>
									<NavLink className={styles["card__duration"]} to="/article-1">
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"
												clipRule="evenodd"
											/>
										</svg>
										3 min read
									</NavLink>
								</div>
							</div>
						</div>
					</article>
					<article className={styles.card}>
						<div className={styles["card__container"]}>
							<img
								alt="The Best Excuses To Spend A Cozy Valentine’s Day In"
								className={styles["card__image"]}
								src="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							/>
							<div className={styles["card__content"]}>
								<p className={styles["card__tag"]}>Valentine</p>
								<h3 className={styles["card__heading"]}>
									<NavLink to="/article-2" className={styles["card__heading__link"]}>
										The Best Excuses To Spend A Cozy Valentine’s Day In
									</NavLink>
								</h3>
								<p className={styles["card__summary"]}>
									As much as I love an over-the-top, romantic Valentine’s date, part of me is
									looking
								</p>
								<div className={styles["card__metadata"]}>
									<p className={styles["card__author"]}>By Segun Adebayo</p>
									<NavLink to="/article-2" className={styles["card__duration"]}>
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"
												clipRule="evenodd"
											/>
										</svg>
										3 min read
									</NavLink>
								</div>
							</div>
						</div>
					</article>
					<article className={styles.card}>
						<div className={styles["card__container"]}>
							<img
								alt="Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"
								className={styles["card__image"]}
								src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							/>
							<div className={styles["card__content"]}>
								<p className={styles["card__tag"]}>My Style</p>
								<h3 className={styles["card__heading"]}>
									<NavLink to="/product" className={styles["card__heading__link"]}>
										Top 5 Best-Sellers, Most-Loved &amp; Favorite Buys of 2020
									</NavLink>
								</h3>
								<p className={styles["card__summary"]}>
									HAAAAPPY 2021! It’s the first Monday of the year and I have never been so ready
									for
								</p>
								<div className={styles["card__metadata"]}>
									<p className={styles["card__author"]}>By Segun Adebayo</p>
									<p className={styles["card__duration"]}>
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"
												clipRule="evenodd"
											/>
										</svg>
										3 min read
									</p>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</article>
	</div>
);

const ArticleOne = (): JSX.Element => {
	useEffect(() => {
		document.title = "";
	}, []);
	return (
		<div className={styles.page}>
			<article className={styles.wrapper}>
				<div className={styles.container}>
					<h2 className={styles.title}>7 Steps to Get Professional Facial Results At Home</h2>
					<div className={styles.metadata}>
						<dl className={styles["description-list"]}>
							<dt>
								<strong>Date</strong>
							</dt>
							<dd>
								<time dateTime="2020-06-17">June 17, 2020</time>
							</dd>
							<dt>
								<strong>Author</strong>
							</dt>
							<dd>
								<a href="/0" rel="author">
									Segun Adebayo
								</a>
							</dd>
						</dl>
						<div>
							<p className={styles.intro}>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ullam accusamus
								voluptate! Accusantium aperiam totam voluptatum at fugiat doloribus odit dolore
								fuga.
							</p>
							<p className={styles.intro}>
								<NavLink
									className={styles["read-more"]}
									to="/"
									data-testid="js-route-announer-go-back"
								>
									<span>Go Back</span>
									<svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
										<g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<circle cx={16} cy={16} r="15.5" />
											<line x1={10} y1={18} x2={16} y2={12} />
											<line x1={16} y1={12} x2={22} y2={18} />
										</g>
									</svg>
								</NavLink>
							</p>
						</div>
					</div>
				</div>
				<div className={styles.container}>
					<img
						className={styles.cover}
						src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=60"
						width="640"
						alt=""
						loading="lazy"
					/>
				</div>
			</article>
		</div>
	);
};

const ArticleTwo = (): JSX.Element => (
	<div className={styles.page}>
		<article className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>The Best Excuses To Spend A Cozy Valentine’s Day In</h1>
				<div className={styles.metadata}>
					<dl className={styles["description-list"]}>
						<dt>
							<strong>Date</strong>
						</dt>
						<dd>
							<time dateTime="2020-06-17">June 17, 2020</time>
						</dd>
						<dt>
							<strong>Author</strong>
						</dt>
						<dd>
							<a href="/article" rel="author">
								Olivia Gribben
							</a>
						</dd>
					</dl>
					<div>
						<p className={styles.intro}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ullam accusamus
							voluptate! Accusantium aperiam totam voluptatum at fugiat doloribus odit dolore fuga.
						</p>
						<p className={styles.intro}>
							<NavLink
								className={styles["read-more"]}
								to="/"
								data-testid="js-route-announer-go-back"
							>
								<span>Go Back</span>
								<svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
									<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
										<circle cx={16} cy={16} r="15.5" />
										<line x1={10} y1={18} x2={16} y2={12} />
										<line x1={16} y1={12} x2={22} y2={18} />
									</g>
								</svg>
							</NavLink>
						</p>
					</div>
				</div>
			</div>
			<div className={styles.container}>
				<img
					className={styles.cover}
					src="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&h=360&q=60"
					width="640"
					height="360"
					alt=""
					loading="lazy"
				/>
			</div>
		</article>
	</div>
);

const Shop = (): JSX.Element => {
	useEffect(() => {
		document.title = "Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020";
	}, []);

	return (
		<div className={styles.page}>
			<article className={styles.wrapper}>
				<div className={styles.product}>
					<ul className={styles["images-list"]}>
						<li className={styles["image__item"]}>
							<figure className={styles["image__figure"]}>
								<img
									src="https://images.unsplash.com/photo-1610177635157-90812f61c5a5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480"
									width={560}
									height={560}
									alt="A kitchen table"
									className={styles.image}
									loading="lazy"
								/>
							</figure>
						</li>
						<li className={styles["image__item"]}>
							<figure className={styles["image__figure"]}>
								<img
									src="https://images.unsplash.com/photo-1610415958517-e320250c90d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480"
									width={560}
									height={560}
									alt="A basket of tropical fruits"
									className={styles.image}
									loading="lazy"
								/>
							</figure>
						</li>
						<li className={styles["image__item"]}>
							<figure className={styles["image__figure"]}>
								<img
									src="https://images.unsplash.com/photo-1612155690984-dd460cf41838?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480"
									width={560}
									height={560}
									alt="A woman wearing a backpack in the snow"
									className={styles.image}
									loading="lazy"
								/>
							</figure>
						</li>
					</ul>
					<div className={styles["product__detail__wrapper"]}>
						<div className={styles["product__detail"]}>
							<h2 className={styles.title}>
								Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020
							</h2>
							<div className={styles.rating}>
								<div className={styles["rating__wrapper"]}>
									<p className={styles["visually-hidden"]}>
										The rating of this product is{" "}
										<span className={styles["rating__value"]}>4.5</span> out of 5
									</p>
									<div className={styles["rating__container"]}>
										<ul className={styles["rating__list"]}>
											<li className={styles["rating__item"]}>
												<div className={styles["rating__icon"]}>
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
											<li className={styles["rating__item"]}>
												<div className={styles["rating__icon"]}>
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
											<li className={styles["rating__item"]}>
												<div className={styles["rating__icon"]}>
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
											<li className={styles["rating__item"]}>
												<div className={styles["rating__icon"]}>
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
											<li className={styles["rating__item"]}>
												<div className={styles["rating__icon"]}>
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<a href="/0" className={styles["rating__link"]}>
									65 reviews
								</a>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae sapiente
								eaque!
							</p>
							<div className={styles["rating__cta"]}>
								<div className={styles["rating__range"]}>
									<label className={styles["visually-hidden"]} htmlFor="product-qty-input">
										Quantity:
									</label>
									<div className={styles["rating__input__wrapper"]}>
										<input
											className={styles["rating__range__input"]}
											type="number"
											name="product-qty-input"
											id="product-qty-input"
											min={0}
											max={10}
											step={1}
											defaultValue={1}
										/>
										<div className={styles["rating__range__left"]}>
											<button type="button" aria-label="Increase Number">
												<svg className="icon" viewBox="0 0 12 12" aria-hidden="true">
													<path d="M11,5H7V1A1,1,0,0,0,5,1V5H1A1,1,0,0,0,1,7H5v4a1,1,0,0,0,2,0V7h4a1,1,0,0,0,0-2Z" />
												</svg>
											</button>
										</div>
										<div className={styles["rating__range__right"]}>
											<button type="button" aria-label="Decrease Number">
												<svg className="icon" viewBox="0 0 12 12" aria-hidden="true">
													<path d="M11,7H1A1,1,0,0,1,1,5H11a1,1,0,0,1,0,2Z" />
												</svg>
											</button>
										</div>
									</div>
								</div>
								<button className={styles["rating__button"]}>Add to Cart - $49</button>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

const Content = () => {
	const { pathname } = useLocation();

	return (
		<RouteAnnouncer pathname={pathname}>
			<div className={styles.page}>
				<header>
					<nav className={styles.nav}>
						<NavLink className={styles.anchor} to="/">
							Blog
						</NavLink>
						<NavLink className={styles.anchor} to="/article-1">
							Article 1
						</NavLink>
						<NavLink className={styles.anchor} to="/article-2">
							Article 2
						</NavLink>
						<NavLink className={styles.anchor} to="/product">
							Product
						</NavLink>
					</nav>
				</header>
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/article-1" component={ArticleOne} />
						<Route exact path="/article-2" component={ArticleTwo} />
						<Route exact path="/product" component={Shop} />
					</Switch>
				</main>
			</div>
		</RouteAnnouncer>
	);
};

export const DemoWithRouter = (): JSX.Element => {
	return (
		<HashRouter basename="/">
			<Content />
		</HashRouter>
	);
};
