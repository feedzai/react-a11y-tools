/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React from "react";
import classNames from "clsx";
import { MessagesAnnouncer, useMessagesAnnouncer } from "../../../../../src";
import styles from "./styles.module.scss";

const Form = ({ hasSubmitted, onSubmit }: { hasSubmitted: boolean; onSubmit: () => void }) => {
	const { setMessage } = useMessagesAnnouncer();

	return (
		<form className={styles["card__form"]} onSubmit={(event) => event.preventDefault()}>
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
				<button
					type="button"
					className="lg-input"
					disabled={hasSubmitted}
					onClick={() => {
						onSubmit();
						setMessage({
							message: "The money it's on the way! Thank you!",
							politeness: "assertive",
						});
					}}
				>
					Pay 9.99€
				</button>
			</fieldset>
			{hasSubmitted && (
				<fieldset>
					<p className={classNames(styles["error-message"], "lg-input")}>Sent!</p>
				</fieldset>
			)}
		</form>
	);
};

export const DemoMessagesAnnouncer = () => {
	const [hasSubmitted, setHasSubmitted] = React.useState(false);

	return (
		<div className={styles["page-wrapper"]}>
			<div className={styles["card"]}>
				<div className={styles["card__inputs"]}>
					<MessagesAnnouncer>
						<Form hasSubmitted={hasSubmitted} onSubmit={() => setHasSubmitted(true)} />
					</MessagesAnnouncer>
				</div>
			</div>
		</div>
	);
};

export default DemoMessagesAnnouncer;
