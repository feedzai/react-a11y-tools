import React from "react";
import { Heading, Level } from "../../../../src/components/semantic-headings";
import styles from "./styles.module.scss";

export const DemoSemanticHeadings = () => {
	return (
		<article className={styles.page}>
			<Level dangerouslySetHeadingLevel={3}>
				<Heading id="the-main-page-title">Main Title</Heading>
				<img
					className={styles.page__image}
					src="https://www.themepush.com/freethemes/mediumish/assets/img/demopic/10.jpg"
					loading="lazy"
					alt=""
				/>
				<Level>
					<div className={styles.page__post}>
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
						<blockquote className={styles.page__quote}>
							Gen-z strategy long tail churn rate seed money channels user experience incubator
							startup partner network low hanging fruit direct mailing. Client backing success
							startup assets responsive web design burn rate A/B testing metrics first mover
							advantage conversion.
						</blockquote>
						<Level>
							<Heading id="final-title">And finally, another title</Heading>
							<p>
								Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP
								iteration accelerator. Strategy market ramen leverage paradigm shift seed round
								entrepreneur crowdfunding social proof angel investor partner network virality.
							</p>
						</Level>
					</div>
				</Level>
			</Level>
		</article>
	);
};
