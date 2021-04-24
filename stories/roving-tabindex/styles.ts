import styled from "@emotion/styled";


export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	background: #000a12;
	color: #fff;
	padding: 2rem;
	margin: 0;
	border: 0;
	scroll-behavior: smooth;
	text-size-adjust: 100%;
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizelegibility;
	font-feature-settings: "kern";
`;

export const Button = styled.button`
	appearance: none;
	font-family: inherit;
	border: 2px solid white;
	background-color: #000a12;
	color: white;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	margin: 0;
	&:hover,
	&:focus {
		background-color: white;
		color: #000a12;
	}
`;

export const Sidenav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 20rem;
	font-family: inherit;
	background-color: #000a12;
	margin: 2rem 0;
	.sidenav__label {
		height: 1.5rem;
		margin: 0 0 1rem 0;
		padding: 0;
		border: 0;
		text-align: left;
		color: #889da9;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	.sidenav__label,
	.sidenav__list {
		width: 100%;
	}
	.sidenav__list {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0 0 1.5rem 0;
		padding: 0;
		list-style-type: none;
		gap: 0.5rem;
	}
	.sidenav__list li,
	.sidenav__link {
		height: 3rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.sidenav__link {
		flex-direction: space-between;
		appearance: none;
		border: none;
		color: white;
		background: transparent;
		padding: 0.25rem 1rem;
		border-radius: 0.25rem;
	}
	.sidenav__link:hover,
	.sidenav__link:focus {
		background: linear-gradient(145deg, #c8ffff, #a8d7dd);
		box-shadow: 0 0 0 3px #35cecc, 20px 20px 60px hsl(188deg 47% 77% / 24%),
			-20px -20px 60px hsl(180deg 100% 90% / 15%);
	}
	.sidenav__link:focus {
		outline: none;
		background: linear-gradient(145deg, #c8ffff, #a8d7dd);
		box-shadow: 0 0 0 3px #35cecc, 0 0 0 3px #35cecc, 20px 20px 60px hsl(188deg 47% 77% / 24%), -20px -20px
				60px hsl(180deg 100% 90% / 15%);
	}
	.sidenav__link[tabindex="0"] {
		background-color: #bbeff6;
		color: #000a12;
	}
	.sidenav__link[tabindex="0"] .sidenav__counter {
		background-color: #000a12;
		color: #bbeff6;
	}
	.sidenav__list li,
	.sidenav__list button,
	.sidenav__left {
		display: flex;
		width: 100%;
	}
	.sidenav__icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
	}
	.sidenav__link-text {
		margin: 0;
		padding: 0;
		border: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-right: 0.5rem;
		font-size: 1.25rem;
	}
	.sidenav__counter {
		padding: 2px 8px;
		background-color: white;
		color: #000a12;
		border-radius: 1.25rem;
		justify-self: flex-end;
	}
`;
