import React from "react";
import styled from "@emotion/styled";
import { Heading, Level } from "../../src/components/semantic-headings";

export const Page = styled.div`
	width: auto;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-family: sans-serif;
	background-color: white;
	color: #000a12;

	h2,
	h3 {
		font-family: sans-serif;
		font-weight: 700;
		margin-bottom: 1rem;
		line-height: 1.1;
	}

	h2 {
		font-size: 4rem;
	}

	h3 {
		font-size: 2.5rem;
	}

	h4 {
		font-size: 1.25rem;
		font-family: serif;
		margin-bottom: 0.25rem;
	}
`;

const Image = styled.img`
	max-width: 100%;
	height: auto;
	display: block;
	margin: 0 auto;
	margin-bottom: 1.5rem;
`;

const Post = styled.div`
	font-weight: 400;
	font-family: Merriweather, serif;
	font-size: 1.2rem;
	line-height: 1.8;
	color: rgba(0, 0, 0, 0.8);

	p {
		font-weight: 400;
		font-family: Merriweather, serif;
		font-size: 1.2rem;
		line-height: 1.8;
		color: rgba(0, 0, 0, 0.8);
		margin: 0 0 1.5rem 0;
	}
`;

const Quote = styled.blockquote`
	font-weight: 400;
	font-family: Merriweather, sans-serif;
	font-size: 1.2rem;
	line-height: 1.8;
	box-sizing: inherit;
	border-left: 4px solid #00ab6b;
	padding: 0 20px;
	font-style: italic;
	color: rgba(0, 0, 0, 0.5);
	margin: 0 0 1.5rem 0;
`;

const HeadingsDemo = () => {
	return (
		<Page as="article">
			<Level>
				<Heading id="the-main-page-title">Main Title</Heading>
				<Image
					src="https://www.themepush.com/freethemes/mediumish/assets/img/demopic/10.jpg"
					loading="lazy"
				/>
				<Level>
					<Post>
						<p>
							Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem.
							Beta crowdfunding iteration assets business plan paradigm shift stealth mass market
							seed money rockstar niche market marketing buzz market.
						</p>
						<p>
							Burn rate release facebook termsheet equity technology. Interaction design rockstar
							network effects handshake creative startup direct mailing. Technology influencer
							direct mailing deployment return on investment seed round.
						</p>
						<Heading id="first-h2">A title</Heading>
						<p>
							Termsheet business model canvas user experience churn rate low hanging fruit backing
							iteration buyer seed money. Virality release launch party channels validation learning
							curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup
							business-to-business accelerator market.
						</p>
						<Heading id="second-h2">Another title</Heading>
						<Quote>
							Gen-z strategy long tail churn rate seed money channels user experience incubator
							startup partner network low hanging fruit direct mailing. Client backing success
							startup assets responsive web design burn rate A/B testing metrics first mover
							advantage conversion.
						</Quote>
						<Level>
							<Heading id="final-title">And finally, another title</Heading>
							<p>
								Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP
								iteration accelerator. Strategy market ramen leverage paradigm shift seed round
								entrepreneur crowdfunding social proof angel investor partner network virality.
							</p>
						</Level>
					</Post>
				</Level>
			</Level>
		</Page>
	);
};

export default HeadingsDemo;
