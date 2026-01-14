import Script from "next/script";

import HealingTypes from "./home/healing-types";
import { HEALING_TYPES } from "./data/static-data";
import HeroClient from "./home/hero-client";
import GetStarted from "./home/get-started";
import Testimonials from "./home/testimonials";
import Background from "./home/background";
import Healers from "./home/healers";
import Retreats from "./home/retreats";
import Advertise from "./home/advertise";

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
      <GetStarted />
      <Testimonials />
      <Background />
      <Healers />
      <Retreats />
      <Advertise />
    </>
  );
}
