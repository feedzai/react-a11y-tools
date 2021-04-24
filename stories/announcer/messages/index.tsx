/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2021 joaodias.me
 */
import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import {
	MessagesAnnouncer,
	useMessagesAnnouncer,
} from "../../../src/components/announcer/messages";

export const PageWrapper = styled.div`
	background: #ddeefc;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	font-size: 16px;
	* {
		box-sizing: border-box;
	}
`;

export const Card = styled.div`
	max-width: 620px;
	min-width: 490px;
	margin: 0 auto;
	padding-top: 50px;
	padding-bottom: 70px;
	width: 100%;
`;

export const CardInputs = styled.div`
	background: #fff;
	box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
	border-radius: 10px;
`;

export const CardForm = styled.form`
	margin: 0 auto;
	padding: 40px;
	fieldset {
		border: none;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr 2fr 1fr;
		width: 100%;
		margin: 0 auto;
	}
	legend {
		font-size: 24px;
		font-weight: bold;
		width: 100%;
		grid-column: 1/4;
	}
	.lg-input {
		grid-column: 1 / 4;
	}
	.med-input {
		grid-column: 1 / 3;
	}
	.sm-input {
		grid-column: 3 / 4;
	}
	label {
		display: block;
		font-size: 14px;
		margin-bottom: 5px;
		font-weight: 500;
		color: #1a3b5d;
		width: 100%;
		display: block;
		user-select: none;
		position: relative;
		&:after {
			content: "";
			position: absolute;
			top: 0;
			right: 0.5rem;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%2333691E' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E");
			background-size: 1rem 1rem;
			width: 1rem;
			height: 1rem;
		}
	}
	.name-input,
	.number-input,
	.cvv-input {
		width: 100%;
	}
	.month-input,
	.year-input {
		width: 44%;
	}
	.month-input {
		margin-right: 1rem;
	}
	.year-input {
		margin-left: 1rem;
	}
	input,
	select {
		height: 50px;
		border-radius: 5px;
		border: 1px solid #ced6e0;
		box-shadow: none;
		font-size: 18px;
		padding: 5px 16px;
		background: none;
		color: #1a3b5d;
		font-family: inherit;
		transition: all 0.3s ease-in-out;
		letter-spacing: 1px;
		&:hover,
		&:focus {
			border-color: #3d9cff;
		}
		&:focus {
			box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
		}
	}
	select {
		appearance: none;
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC");
		background-size: 12px;
		background-position: 90% center;
		background-repeat: no-repeat;
		padding-right: 30px;
	}
	button {
		height: 55px;
		background: #2364d2;
		border: none;
		border-radius: 5px;
		font-size: 22px;
		font-weight: 500;
		font-family: inherit;
		box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
		color: #fff;
		margin-top: 20px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}
`;

export const ErrorMessage = styled.p`
	width: 100%;
	background-color: hsla(134deg 57% 45% / 28%);
	border: 2px solid hsl(134deg 54% 34%);
	color: #0a1818;
	margin: 2rem auto 0 auto;
	border-radius: 5px;
	padding: 0.5rem 1.5rem;
	text-align: center;
`;

export const DemoMessagesAnnouncer = (): JSX.Element => {
	const [hasSubmitted, setHasSubmitted] = useState(false);
	function handleOnSubmit() {
		setHasSubmitted(true);
	}
	return (
		<MessagesAnnouncer>
			<PageWrapper>
				<Card className="card-form">
					<CardInputs className="card-inputs">
						<DemoForm hasSubmitted={hasSubmitted} onSubmit={handleOnSubmit} />
					</CardInputs>
				</Card>
			</PageWrapper>
		</MessagesAnnouncer>
	);
};

/** */
export const DemoForm = ({
	hasSubmitted,
	onSubmit,
}: {
	hasSubmitted: boolean;
	onSubmit: (status: boolean) => void;
}): JSX.Element => {
	const setMessage = useMessagesAnnouncer();
	function handleOnSubmit(event) {
		event.preventDefault();
		setTimeout(() => {
			onSubmit(true);
			setMessage({
				text: "The money it's on the way! Thank you!",
				politeness: "assertive",
			});
		}, 1000);
	}
	return (
		<CardForm onSubmit={handleOnSubmit}>
			<fieldset>
				<legend>Credit Card Form</legend>
				<div className="lg-input">
					<label htmlFor="cardNumber">Card Number</label>
					<input
						className="number-input"
						id="cardNumber"
						maxLength={19}
						style={{
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "scroll",
							backgroundSize: "16px 18px",
							backgroundPosition: "98% 50%",
							cursor: "auto",
						}}
						type="text"
						defaultValue="4111111111111111"
					/>
				</div>
				<div className="lg-input">
					<label htmlFor="cardName">Card Holder's Name</label>
					<input
						className="name-input"
						id="cardName"
						maxLength={24}
						type="text"
						defaultValue="João Dias"
					/>
				</div>
				<div className="med-input">
					<label htmlFor="cardMonth">Expiration Date</label>
					<select aria-label="Month" className="month-input" id="cardMonth">
						<option disabled value={8}>
							Month
						</option>
						<option value={1}>01 - January</option>
						<option value={2}>02 - February</option>
						<option value={3}>03 - March</option>
						<option value={4}>04 - April</option>
						<option value={5}>05 - May</option>
						<option value={6}>06 - June</option>
						<option value={7}>07 - July</option>
						<option value={8}>08 - August</option>
						<option value={9}>09 - September</option>
						<option value={10}>10 - October</option>
						<option value={11}>11 - November</option>
						<option value={12}>12 - December</option>
					</select>
					<select aria-label="Year" className="year-input" id="cardYear">
						<option disabled value={0}>
							Year
						</option>
						<option value={2021}>2021</option>
						<option value={2022}>2022</option>
						<option value={2023}>2023</option>
						<option value={2024}>2024</option>
						<option value={2025}>2025</option>
						<option value={2026}>2026</option>
						<option value={2027}>2027</option>
						<option value={2028}>2028</option>
						<option value={2029}>2029</option>
						<option value={2030}>2030</option>
						<option value={2031}>2031</option>
						<option value={2032}>2032</option>
						<option value={2033}>2033</option>
					</select>
				</div>
				<div className="sm-input">
					<label htmlFor="cardCvv">CVV</label>
					<input className="cvv-input" id="cardCvv" maxLength={3} defaultValue="123" />
				</div>
				<button type="submit" className="lg-input" disabled={hasSubmitted}>
					Pay 9.99€
				</button>
			</fieldset>
			{hasSubmitted && (
				<fieldset>
					<ErrorMessage className="lg-input">Sent!</ErrorMessage>
				</fieldset>
			)}
		</CardForm>
	);
};
