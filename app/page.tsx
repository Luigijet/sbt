import Script from "next/script";

import Hero from "./sections/hero";
import HealingTypes from "./sections/healing-types";

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
          }),
        }}
      />

      <Hero />
      <HealingTypes />
    </>
  );
}
