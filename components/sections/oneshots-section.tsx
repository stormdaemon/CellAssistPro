/**
 * One-Shots Section - BEM Component
 * Block: oneshots
 * Elements: oneshots__header, oneshots__grid, oneshots__card, oneshots__card-title, oneshots__card-price, oneshots__card-features, oneshots__card-cta, oneshots__pack
 */
import { OneShotOffer, PackOffer } from '@/lib/types/offers';

interface OneShotsSectionProps {
  oneShots: OneShotOffer[];
  pack: PackOffer;
}

export function OneShotsSection({ oneShots, pack }: OneShotsSectionProps) {
  return (
    <section className="oneshots">
      <div className="oneshots__header">
        <h2 className="oneshots__title">Solutions &quot;Clés en Main&quot;</h2>
        <p className="oneshots__subtitle">Interventions ciblées pour structurer et automatiser votre activité.</p>
      </div>

      <div className="oneshots__grid">
        {/* One-shot cards */}
        {oneShots.map((offer, index) => (
          <div key={index} className="oneshots__card">
            <h3 className="oneshots__card-title">{offer.title}</h3>
            <p className="oneshots__card-price">{offer.price}</p>
            <ul className="oneshots__card-features">
              {offer.features.map((feature, idx) => (
                <li key={idx} className="oneshots__feature">
                  <svg className="oneshots__feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="oneshots__card-cta">Détails</button>
          </div>
        ))}

        {/* Pack card */}
        <div className="oneshots__pack">
          <h3 className="oneshots__pack-title">{pack.title}</h3>
          <p className="oneshots__pack-price">{pack.price}</p>
          <p className="oneshots__pack-economy">{pack.economy}</p>
          <ul className="oneshots__pack-features">
            {pack.features.map((feature, idx) => (
              <li key={idx} className="oneshots__pack-feature">
                <svg className="oneshots__pack-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="oneshots__pack-cta">Commander le pack</button>
        </div>
      </div>
    </section>
  );
}
