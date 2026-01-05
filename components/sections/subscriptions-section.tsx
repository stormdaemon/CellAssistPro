/**
 * Subscriptions Section - BEM Component
 * Block: subscriptions
 * Elements: subscriptions__header, subscriptions__grid, subscriptions__card, subscriptions__badge, subscriptions__type, subscriptions__desc, subscriptions__price, subscriptions__cta
 */
import Image from "next/image";
import { SubscriptionOffer } from '@/lib/types/offers';

interface SubscriptionsSectionProps {
  subs: SubscriptionOffer[];
}

export function SubscriptionsSection({ subs }: SubscriptionsSectionProps) {
  return (
    <section className="subscriptions">
      <div className="subscriptions__header">
        <h2 className="subscriptions__title">
          <span className="whitespace-nowrap">Accompagnement</span>{" "}
          <span className="whitespace-nowrap">Personnalisé</span>
        </h2>
        <p className="subscriptions__subtitle">Une solution sur mesure adaptée à vos besoins spécifiques.</p>
      </div>

      <div className="subscriptions__grid">
        {subs.map((sub, index) => (
          <div key={index} className="subscriptions__card">
            <div className="subscriptions__badge-wrapper">
              <Image
                src={sub.badge}
                alt={sub.level}
                width={48}
                height={48}
                className="subscriptions__badge"
              />
            </div>
            <p className="subscriptions__type">{sub.type}</p>
            <p className="subscriptions__desc">{sub.desc}</p>
            <div className="subscriptions__quote-cta">
              <p className="subscriptions__quote-badge">Tarif personnalisé</p>
              <a
                href="https://calendly.com/celassistpro/15min"
                target="_blank"
                rel="noreferrer"
                className="subscriptions__cta"
              >
                Obtenir un Devis
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
