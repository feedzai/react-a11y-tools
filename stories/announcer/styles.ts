/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import { Link } from "@reach/router";
import { color } from "@storybook/theming";
import styled from "@emotion/styled";

export const VisuallyHidden = styled.p`
	border: 0;
	clip: rect(0 0 0 0);
	height: auto;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: absolute !important;
	width: 1px;
	white-space: nowrap;
`;

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	background: #ffffff;
	color: #000a12;
	padding: 2rem;
	margin: 0;
	border: 0;
	scroll-behavior: smooth;
	text-size-adjust: 100%;
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizelegibility;
	font-feature-settings: "kern";
`;

export const Wrapper = styled.article`
	width: 100%;
	max-width: 1168px;
	padding: 1.5rem 0;
	margin: 0 auto;
`;

export const Container = styled.div`
	width: 100%;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`;

export const Product = styled.div`
	--columns: 1fr;
	width: 100%;
	margin: 0 auto;
	display: grid;
	grid-gap: 2rem;
	position: relative;
	grid-template-columns: var(--columns);

	@media all and (min-width: 480px) {
		--columns: repeat(2, 1fr);
	}

	@media all and (min-width: 480px) {
		--columns: 45% 55%;
	}

	@media all and (min-width: 1200px) {
		--columns: minmax(33.3333%, 35rem) 1fr;
	}

	p {
		font-size: 1rem;
		line-height: 1.618;
	}
`;

export const ProductDetailWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: sticky;
`;

export const ProductDetail = styled.div`
	width: 100%;
	position: sticky;
	top: 1.25rem;
	left: 0;
`;

export const Rating = styled.div`
	width: auto;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;

	.rating {
		&__wrapper,
		&__container,
		&__list {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
		}

		&__container {
			flex-direction: row;
		}

		&__list {
			width: auto;
			flex-direction: row;
			margin: 0;
			padding: 0;
			list-style-type: none;
		}

		&__item {
			width: auto;
			height: 1.5rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			color: #346aea;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: currentColor;
				border-radius: 50%;
				opacity: 0;
				transform: scale(0);
				transition: 0.2s;
			}
		}

		&__link {
			color: black;
		}
	}
`;

export const CallToAction = styled.div`
	width: 100%;
	height: 3.5rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;

	.rating {
		&__range {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;

			&__input,
			input[type="number"] {
				border: 2px solid #ccc;
				transition: 0.2s;
				display: block;
				margin: 0;
				width: 4.5rem;
				order: 1;
				text-align: center;
				height: 3rem;
				-moz-appearance: textfield;
				appearance: none;

				&:-webkit-outer-spin-button,
				&::-webkit-inner-spin-button {
					appearance: none;
					margin: 0;
				}
			}

			&__right,
			&__left {
				width: 3rem;
				height: 3rem;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				button {
					margin: 0;
					padding: 0;
					border: 0;
					color: inherit;
					line-height: inherit;
					appearance: none;
					display: flex;
					width: 1.75rem;
					height: 1.75rem;
					border-radius: 50%;
					flex-shrink: 0;
					justify-content: center;
					align-items: center;
					background-color: lightgray;
					cursor: pointer;

					&::hover,
					&::focus {
						background-color: #2364d2;
						color: white;
					}
				}

				svg {
					width: 0.875rem;
					height: 0.875rem;
				}
			}

			&__right {
				order: -1;
			}

			&__left {
				order: 2;
			}
		}

		&__input__wrapper {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.25rem;
		}

		&__button {
			background: #2364d2;
			border: none;
			border-radius: 0.5rem;
			font-size: 22px;
			font-weight: 500;
			font-family: inherit;
			box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
			color: #fff;
			padding: 1rem 2rem;
			cursor: pointer;
			transition: all 0.3s ease-in-out;
			margin: 0;
		}
	}
`;

export const ImagesList = styled.ul`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;

	.image {
		aspect-ratio: 1 / 1;
		width: 100%;
		height: auto;

		&__item,
		&__figure {
			display: flex;
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
		}
	}
`;

export const Title = styled.h1`
	width: 100%;
	margin: 0 auto 2rem auto;
	font-size: 5ch;
	border: 0;
	text-decoration: underline;
	color: #000a12;
	text-decoration-color: hsla(207, 100%, 4%, 0.2);
	scroll-margin-top: 5rem;
`;

export const Metadata = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 1.5rem;
`;

export const DescriptionList = styled.dl`
	width: 100%;
	dt,
	dd {
		width: 100%;
		margin-left: 0;
	}
	dd + dt {
		margin-top: 1rem;
	}
	dd {
		color: #000a12;
	}
	a {
		text-decoration: underline;
		color: #000a12;
	}
`;

export const Intro = styled.p`
	width: 100%;
	text-align: left;
	font-size: 1.25rem;
	line-height: 1.618;
`;

export const ReadMore = styled(Link)`
	box-sizing: inherit;
	margin: 0;
	border: 0;
	color: inherit;
	position: relative;
	display: flex;
	align-items: center;
	height: 2rem;
	padding: 0 0.5rem;
	text-decoration: underline;
	text-decoration-color: hsla(207, 100%, 4%, 0.2);

	svg {
		width: 1.5rem;
		height: 1.5rem;
		transform: rotate(0.25turn);
		margin-left: 0.5rem;
		circle {
			opacity: 0;
		}
	}
	&:hover {
		svg circle {
			opacity: 1;
		}
	}
`;

export const Cover = styled.img`
	width: 100%;
	height: auto;
	aspect-ratio: 16/9;
	background-color: hsl(207, 100%, 4%, 0.05);
`;

export const Anchor = styled(Link)`
	color: #000a12;
	text-decoration: none;
	outline-offset: 8px;
	&[aria-current="page"] {
		text-decoration: underline;
		text-decoration-color: hsl(207, 100%, 4%);
	}
	&:focus {
		outline: 1px solid ${color.secondary};
	}
`;

export const Nav = styled.nav`
	padding: 2rem 4rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	width: 100%;
	max-width: 1168px;
	margin: 0 auto;
`;

export const FeaturedArticles = styled.div`
	--columns: 1fr;
	--gap: 1rem;
	display: grid;
	gap: var(--gap);
	margin: 2.5rem 0;
	grid-template-columns: var(--columns);
	width: 100%;

	@media all and (min-width: 480px) {
		--columns: repeat(2, 1fr);
		--gap: 2rem;
	}

	@media all and (min-width: 960px) {
		--columns: repeat(3, 1fr);
	}

	.card {
		line-height: 1.5;
		border-width: 0px;
		border-style: solid;
		border-color: rgb(226, 232, 240);
		box-sizing: border-box;
		overflow-wrap: break-word;
		position: relative;
		overflow: hidden;
		transition: all 0.2s ease 0s;
		background: rgb(255, 255, 255);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
		border-radius: 0.375rem;

		&__container {
			display: flex;
			flex-direction: column;
		}

		&__image {
			max-width: 100%;
			height: 15rem;
			object-fit: cover;
		}

		&__content {
			display: flex;
			flex-direction: column;
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		&__tag {
			margin: 0px;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			font-size: 0.75rem;
			font-weight: 600;
			margin-bottom: 0.5rem;
			color: rgb(113, 128, 150);
		}

		&__heading {
			color: rgb(26, 32, 44);
			margin: 0px;
			font-weight: 700;
			font-size: 1rem;
			line-height: 1.5;
			margin-bottom: 0.5rem;

			&__link {
				font-weight: 700;
				font-size: 1rem;
				line-height: 1.5;
				border-width: 0px;
				border-style: solid;
				border-color: rgb(226, 232, 240);
				box-sizing: border-box;
				overflow-wrap: break-word;
				background-color: transparent;
				color: inherit;
				text-decoration: inherit;
				position: static;

				&::before {
					content: "";
					cursor: inherit;
					display: block;
					position: absolute;
					top: 0px;
					left: 0px;
					z-index: 0;
					width: 100%;
					height: 100%;
				}
			}
		}

		&__summary {
			line-height: 1.5;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			margin-bottom: 2rem;
			color: rgb(74, 85, 104);
		}

		&__metadata {
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			font-size: 0.875rem;
		}

		&__author,
		&__duration {
			line-height: 1.5;
			font-size: 0.875rem;
			color: rgb(74, 85, 104);
		}
	}
`;
