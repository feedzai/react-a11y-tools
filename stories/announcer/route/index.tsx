/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import React, { useEffect } from "react";
import { createHistory, LocationProvider, Router, Link } from "@reach/router";
import { RouteAnnouncer } from "../../../src/components/announcer/route-announcer";
import * as Styles from "../styles";

export const history = createHistory(window);

export const Home = (): JSX.Element => (
	<Styles.Page>
		<Styles.Wrapper>
			<Styles.Container>
				<Styles.Title>Blog</Styles.Title>
			</Styles.Container>
			<Styles.Container>
				<Styles.FeaturedArticles>
					<article className="card">
						<div className="card__container">
							<img
								alt="7 Steps to Get Professional Facial Results At Home"
								className="card__image"
								src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							/>
							<div className="card__content">
								<p className="card__tag">Fashion</p>
								<h3 className="card__heading">
									<Link to="/article-1" className="card__heading__link">
										7 Steps to Get Professional Facial Results At Home
									</Link>
								</h3>
								<p className="card__summary">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua
								</p>
								<div className="card__metadata">
									<p className="card__author">By Segun Adebayo</p>
									<Link className="card__duration" to="/article-1">
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											className="showcase-1o95znz"
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
									</Link>
								</div>
							</div>
						</div>
					</article>
					<article className="card">
						<div className="card__container">
							<img
								alt="The Best Excuses To Spend A Cozy Valentine’s Day In"
								className="card__image"
								src="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							/>
							<div className="card__content">
								<p className="card__tag">Valentine</p>
								<h3 className="card__heading">
									<Link to="/article-2" className="card__heading__link">
										The Best Excuses To Spend A Cozy Valentine’s Day In
									</Link>
								</h3>
								<p className="card__summary">
									As much as I love an over-the-top, romantic Valentine’s date, part of me is
									looking
								</p>
								<div className="card__metadata">
									<p className="card__author">By Segun Adebayo</p>
									<Link to="/article-2" className="card__duration">
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											className="showcase-1o95znz"
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
									</Link>
								</div>
							</div>
						</div>
					</article>
					<article className="card">
						<div className="card__container">
							<img
								alt="Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"
								className="card__image"
								src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							/>
							<div className="card__content">
								<p className="card__tag">My Style</p>
								<h3 className="card__heading">
									<Link to="/product" className="card__heading__link">
										Top 5 Best-Sellers, Most-Loved &amp; Favorite Buys of 2020
									</Link>
								</h3>
								<p className="card__summary">
									HAAAAPPY 2021! It’s the first Monday of the year and I have never been so ready
									for
								</p>
								<div className="card__metadata">
									<p className="card__author">By Segun Adebayo</p>
									<p className="card__duration">
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											className="showcase-1o95znz"
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
				</Styles.FeaturedArticles>
			</Styles.Container>
		</Styles.Wrapper>
	</Styles.Page>
);

export const ArticleOne = (): JSX.Element => {
	useEffect(() => {
		document.title = "";
	}, []);
	return (
		<Styles.Page>
			<Styles.Wrapper>
				<Styles.Container>
					<Styles.Title as="h2">7 Steps to Get Professional Facial Results At Home</Styles.Title>
					<Styles.Metadata>
						<Styles.DescriptionList>
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
								<a href="#0" rel="author">
									Segun Adebayo
								</a>
							</dd>
						</Styles.DescriptionList>
						<div>
							<Styles.Intro>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ullam accusamus
								voluptate! Accusantium aperiam totam voluptatum at fugiat doloribus odit dolore
								fuga.
							</Styles.Intro>
							<Styles.Intro>
								<Styles.ReadMore to="/">
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
								</Styles.ReadMore>
							</Styles.Intro>
						</div>
					</Styles.Metadata>
				</Styles.Container>
				<Styles.Container>
					<Styles.Cover
						src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=60"
						width="640"
						alt="Image description"
						loading="lazy"
					/>
				</Styles.Container>
			</Styles.Wrapper>
		</Styles.Page>
	);
};

export const ArticleTwo = (): JSX.Element => (
	<Styles.Page>
		<Styles.Wrapper>
			<Styles.Container>
				<Styles.Title>The Best Excuses To Spend A Cozy Valentine’s Day In</Styles.Title>
				<Styles.Metadata>
					<Styles.DescriptionList>
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
					</Styles.DescriptionList>
					<div>
						<Styles.Intro>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ullam accusamus
							voluptate! Accusantium aperiam totam voluptatum at fugiat doloribus odit dolore fuga.
						</Styles.Intro>
						<Styles.Intro>
							<Styles.ReadMore to="/">
								<span>Go Back</span>
								<svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
									<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
										<circle cx={16} cy={16} r="15.5" />
										<line x1={10} y1={18} x2={16} y2={12} />
										<line x1={16} y1={12} x2={22} y2={18} />
									</g>
								</svg>
							</Styles.ReadMore>
						</Styles.Intro>
					</div>
				</Styles.Metadata>
			</Styles.Container>
			<Styles.Container>
				<Styles.Cover
					src="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&h=360&q=60"
					width="640"
					height="360"
					alt="Image description"
					loading="lazy"
				/>
			</Styles.Container>
		</Styles.Wrapper>
	</Styles.Page>
);

export const Shop = (): JSX.Element => {
	useEffect(() => {
		document.title = "Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020";
	}, []);

	return (
		<Styles.Page>
			<Styles.Wrapper>
				<Styles.Product>
					<Styles.ImagesList className="images__list">
						<li className="image__item">
							<figure className="image__figure">
								<img
									src="https://images.unsplash.com/photo-1610177635157-90812f61c5a5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480"
									width={560}
									height={560}
									alt="A kitchen table"
									className="image"
									loading="lazy"
								/>
							</figure>
						</li>
						<li className="image__item">
							<figure className="image__figure">
								<img
									src="https://images.unsplash.com/photo-1610415958517-e320250c90d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480"
									width={560}
									height={560}
									alt="A basket of tropical fruits"
									className="image"
									loading="lazy"
								/>
							</figure>
						</li>
						<li className="image__item">
							<figure className="image__figure">
								<img
									src="https://images.unsplash.com/photo-1612155690984-dd460cf41838?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixlib=rb-1.2.1&q=80&w=480"
									width={560}
									height={560}
									alt="A woman wearing a backpack in the snow"
									className="image"
									loading="lazy"
								/>
							</figure>
						</li>
					</Styles.ImagesList>
					<Styles.ProductDetailWrapper>
						<Styles.ProductDetail>
							<Styles.Title as="h2">
								Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020
							</Styles.Title>
							<Styles.Rating className="rating">
								<div className="rating__wrapper">
									<Styles.VisuallyHidden className="sr-only">
										The rating of this product is <span className="rating__value">4.5</span> out of
										5
									</Styles.VisuallyHidden>
									<div className="rating__container">
										<ul className="rating__list">
											<li className="rating__item">
												<div className="rating__icon">
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
											<li className="rating__item">
												<div className="rating__icon">
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
											<li className="rating__item">
												<div className="rating__icon">
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
											<li className="rating__item">
												<div className="rating__icon">
													<svg width="24" height="24" viewBox="0 0 24 24">
														<polygon
															points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
															fill="currentColor"
														></polygon>
													</svg>
												</div>
											</li>
											<li className="rating__item">
												<div className="rating__icon">
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
								<a href="#0" className="rating__link">
									65 reviews
								</a>
							</Styles.Rating>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae sapiente
								eaque!
							</p>
							<Styles.CallToAction className="rating__cta">
								<div className="rating__range">
									<Styles.VisuallyHidden as="label" className="sr-only" htmlFor="product-qty-input">
										Quantity:
									</Styles.VisuallyHidden>
									<div className="rating__input__wrapper">
										<input
											className="rating__range__input"
											type="number"
											name="product-qty-input"
											id="product-qty-input"
											min={0}
											max={10}
											step={1}
											defaultValue={1}
										/>
										<div className="rating__range__left">
											<button type="button" aria-label="Increase Number">
												<svg className="icon" viewBox="0 0 12 12" aria-hidden="true">
													<path d="M11,5H7V1A1,1,0,0,0,5,1V5H1A1,1,0,0,0,1,7H5v4a1,1,0,0,0,2,0V7h4a1,1,0,0,0,0-2Z" />
												</svg>
											</button>
										</div>
										<div className="rating__range__right">
											<button type="button" aria-label="Decrease Number">
												<svg className="icon" viewBox="0 0 12 12" aria-hidden="true">
													<path d="M11,7H1A1,1,0,0,1,1,5H11a1,1,0,0,1,0,2Z" />
												</svg>
											</button>
										</div>
									</div>
								</div>
								<button className="rating__button">Add to Cart - $49</button>
							</Styles.CallToAction>
						</Styles.ProductDetail>
					</Styles.ProductDetailWrapper>
				</Styles.Product>
			</Styles.Wrapper>
		</Styles.Page>
	);
};

export const DemoWithRouter = (): JSX.Element => {
	return (
		<LocationProvider history={history}>
			{(context) => {
				return (
					<Styles.Page>
						<RouteAnnouncer pathname={context.location.pathname}>
							<header>
								<Styles.Nav className="nav">
									<Styles.Anchor to="/">Blog</Styles.Anchor>
									<Styles.Anchor to="/article-1">Article 1</Styles.Anchor>
									<Styles.Anchor to="/article-2">Article 2</Styles.Anchor>
									<Styles.Anchor to="/product">Product</Styles.Anchor>
								</Styles.Nav>
							</header>
							<main>
								<Router>
									<Home path="/" />
									<ArticleOne path="/article-1" />
									<ArticleTwo path="/article-2" />
									<Shop path="/product" />
								</Router>
							</main>
						</RouteAnnouncer>
					</Styles.Page>
				);
			}}
		</LocationProvider>
	);
};
