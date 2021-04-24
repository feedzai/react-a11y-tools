/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * AuditInPage.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React, { FunctionComponent } from "react";
import { KeyboardOnly } from "../../../../src/components/keyboard-only";
import images from "./images";

const AuditInPage: FunctionComponent = () => {
	function renderImages() {
		const list = images.map((image) => {
			const alt = image.author ? `Photo by ${image.author}` : undefined;
			return (
				<figure className="images__wrapper" key={image.id} id={image.id}>
					<img
						src={image.download_url}
						width={image.width}
						height={image.height}
						loading="lazy"
						alt={alt}
					/>
				</figure>
			);
		});
		return <section className="images">{list}</section>;
	}

	return (
		<div className="layout">
			<KeyboardOnly />
			<h2>Sample page</h2>
			<a>Link without href</a>
			<button type="button" tabIndex={1}>
				Button with higher tabindex
			</button>
			<section className="checkboxes-section">
				<fieldset>
					<div className="checkbox column">
						<input id="bell" type="checkbox" name="scientist" value="bell" />
						<label htmlFor="bell">Alexander Graham Bell</label>
						<input id="curry" type="checkbox" name="scientist" value="curry" />
						<label htmlFor="curry">Marie Curie</label>
						<input id="lovelace" type="checkbox" name="scientist" value="lovelace" />
						<label htmlFor="lovelace">Ada Lovelace</label>
						<input id="nobel" type="checkbox" name="scientist" value="nobel" />
						<label htmlFor="nobel">Alfred Nobel</label>
						<input id="pasteur" type="checkbox" name="scientist" value="pasteur" />
						<label htmlFor="pasteur">Louis Pasteur</label>
						<input id="tesla" type="checkbox" name="scientist" value="tesla" />
						<label htmlFor="tesla">Nikola Tesla</label>
					</div>
				</fieldset>
			</section>
			<section className="checkboxes-section">
				<fieldset>
					<div className="checkbox column">
						<input id="bell" type="checkbox" name="scientist" value="bell" />
						<label htmlFor="bell">Alexander Graham Bell</label>
						<input id="curry" type="checkbox" name="scientist" value="curry" />
						<label htmlFor="curry">Marie Curie</label>
						<input id="lovelace" type="checkbox" name="scientist" value="lovelace" />
						<label htmlFor="lovelace">Ada Lovelace</label>
						<input id="nobel" type="checkbox" name="scientist" value="nobel" />
						<label htmlFor="nobel">Alfred Nobel</label>
						<input id="pasteur" type="checkbox" name="scientist" value="pasteur" />
						<label htmlFor="pasteur">Louis Pasteur</label>
						<input id="tesla" type="checkbox" name="scientist" value="tesla" />
						<label htmlFor="tesla">Nikola Tesla</label>
					</div>
					<legend>Invalid fieldset</legend>
				</fieldset>
			</section>
			{renderImages()}
		</div>
	);
};

export default AuditInPage;
