/**
 * One-Shots Section - BEM Component
 * Block: oneshots
 * Elements: oneshots__header, oneshots__grid, oneshots__card, oneshots__card-title, oneshots__card-price, oneshots__card-features, oneshots__card-cta
 */
import { OneShotOffer } from '@/lib/types/offers';

interface OneShotsSectionProps {
  oneShots: OneShotOffer[];
}

export function OneShotsSection({ oneShots }: OneShotsSectionProps) {
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
      </div>
    </section>
  );
}
