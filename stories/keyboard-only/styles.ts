import styled from "@emotion/styled";

export const Layout = styled.div`
		background-color: white;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

export const Menu = styled.nav`
	height:100%;
	width:200px;
	background-color:#fff;
	position:fixed!important;
	z-index:1;
	overflow:auto;
`;

export const Button = styled.button`
	background-color: #1a227d;
	color: white;
	padding: 8px 16px;
	font-size: 14px;
	display: grid;
	place-items: center;
	appearance: none;
	border: none;
	border-radius: 48px;
	outline: none;
`;
