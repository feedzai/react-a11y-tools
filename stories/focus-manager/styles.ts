import styled from "@emotion/styled";

export const Button = styled.button`
	appearance: none;
	padding: 0.5rem 1rem;
	background: hsl(265, 100%, 47%);
	border: none;
	color: white;
	cursor: pointer;
	&:focus {
		outline: 1px solid white;
		outline-offset: 4px;
	}
`;

export const Popover = styled.div`
	font-family: inherit;
	position: fixed;
	z-index: 15;
	width: 100%;
	max-width: 25rem;
	height: 100%;
	top: 0;
	right: 0;
	visibility: visible;
	.popover__footer {
		margin-top: calc(100% + 4.5rem);
		height: 4.5rem;
		width: 100%;
	}
	.popover__footer__wrapper {
		padding: 2rem;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.popover__footer__input {
		margin: 0;
		color: inherit;
		appearance: none;
		font-size: 1em;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		padding-left: 0.75em;
		padding-right: 2.5rem;
		border-radius: 0.25em;
		line-height: 1.2;
		background-color: white;
		border: 2px solid #d3d3d4;
		transition: 0.2s;
		width: 100%;
		height: 2.5rem;
	}
	.popover__footer__icon {
		background-color: transparent;
		padding: 0;
		border: 0;
		border-radius: 0;
		color: inherit;
		line-height: inherit;
		appearance: none;
		position: absolute;
		right: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.5rem;
		height: 2.5rem;
	}
	.popover__footer__icon .icon {
		fill: currentColor;
		line-height: 1;
		flex-shrink: 0;
		max-width: initial;
		display: block;
		width: 1.5rem;
		height: 1.5rem;
		margin-left: auto;
		margin-right: auto;
		color: #79797c;
		transition: 0.2s;
	}
`;

export const PopoverWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	background-color: #ecfffd;
	color: #263238;
	box-shadow: 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08),
		0 14px 25px rgba(0, 0, 0, 0.12);
`;

export const PopoverBody = styled.div`
	margin: 0;
	padding: 0;
	border: 0;
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	overscroll-behavior: contain;
`;

export const PopoverHeader = styled.header`
	width: 100%;
	height: 4.5rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	.popover__header__title {
		width: 100%;
		color: #1c1c21;
		line-height: 1.2;
		font-size: 1.2rem;
		font-weight: 700;
		padding: 0 2rem;
		margin: 0;
	}
	.popover__header__button {
		background-color: #ecfffd;
		color: #1c1c21;
		margin-right: 2rem;
		appearance: none;
		border: 1px solid #1c1c21;
		border-radius: 4px;
		padding: 0.5rem 1rem;
		&:hover,
		&:focus {
			background-color: #b9f6ca;
			box-shadow: 20px 20px 60px #9dd1ac, -20px -20px 60px #d5ffe8;
		}
		&:focus {
			outline: none;
			box-shadow: 20px 20px 60px #9dd1ac, -20px -20px 60px #d5ffe8, 0 0 0 1px #263238;
		}
	}
`;

export const PopoverContent = styled.nav`
	padding: 2rem;
	.popover__content__list {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0;
		padding: 0;
		list-style-type: none;
		gap: 0.5rem;
	}
	.popover__content__list li {
		width: 100%;
		height: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
`;

export const PopoverLink = styled.a`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	color: #1c1c21;
	text-decoration: none;
	font-size: 1.125rem;
	padding: 4px 8px;
	border-radius: 4px;
	&:hover,
	&:focus {
		background-color: #b9f6ca;
		width: 100%;
		text-decoration: underline;
		box-shadow: 20px 20px 60px #9dd1ac, -20px -20px 60px #d5ffe8;
	}
	&:focus {
		outline: none;
		box-shadow: 20px 20px 60px #9dd1ac, -20px -20px 60px #d5ffe8, 0 0 0 1px #263238;
	}
`;
