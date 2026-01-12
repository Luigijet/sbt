import Script from "next/script";

import HealingTypes from "./sections/healing-types";
import { HEALING_TYPES } from "./data/healing-types";
import HeroClient from "./sections/hero-client";

export default function HomePage() {
  return (
    <>
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SBT Energy Therapy Healing Sessions",
            provider: {
              "@type": "Organization",
              name: "SBT Energy Therapy",
            },
            description:
              "Certified energy healing sessions focused on physical, emotional, and spiritual wellbeing.",
            areaServed: "Worldwide",
            serviceType: "Energy Healing Therapy",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              itemListElement: HEALING_TYPES.map((t) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: t.title,
                  description: t.desc,
                },
              })),
            },
          }),
        }}
      />

      <HeroClient />
      <HealingTypes />
    </>
  );
}
