/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React, { FunctionComponent } from "react";
import { KeyboardOnly } from "../../../../../../src/components/keyboard-only";

export const images = [
	{
		id: "0",
		author: "Alejandro Escamilla",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/0/640/480",
	},
	{
		id: "1",
		author: "Alejandro Escamilla",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/1/640/480",
	},
	{
		id: "10",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/10/640/480",
	},
	{
		id: "100",
		author: "Tina Rataj",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/100/640/480",
	},
	{
		id: "1000",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/1000/640/480",
	},
	{
		id: "1001",
		author: "Danielle MacInnes",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/1001/640/480",
	},
	{
		id: "1002",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/1002/640/480",
	},
	{
		id: "1003",
		author: "E+N Photographies",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/1003/640/480",
	},
	{
		id: "1004",
		author: "Greg Rakozy",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/1004/640/480",
	},
	{
		id: "1005",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/1005/640/480",
	},
	{
		id: "1006",
		author: "Vladimir Kudinov",
		width: 640,
		height: 480,
		download_url: "https://picsum.photos/id/1006/640/480",
	},
];

export const AuditInPage: FunctionComponent = () => {
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
