import HealingTypes from "./home/healing-types";
import { HEALING_TYPES } from "./data/static-data";
import HeroClient from "./home/hero-client";
import GetStarted from "./home/get-started";
import Testimonials from "./home/testimonials";
import Background from "./home/background";
import Healers from "./home/healers";
import Retreats from "./home/retreats";
import Advertise from "./home/advertise";
import FadeInSection from "./components/ui/fade-in-section";

export default function HomePage() {
  return (
    <>
      {/* Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SBT Energy Therapy Healing Sessions",
            description:
              "Certified energy healing sessions focused on physical, emotional, and spiritual wellbeing.",
            serviceType: "Energy Healing Therapy",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Worldwide",
            },
            provider: {
              "@type": "ProfessionalService",
              name: "SBT Energy Therapy",
              url: "https://sbthealer.netlify.app",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Healing Services",
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

      <FadeInSection>
        <HeroClient />
      </FadeInSection>

      <FadeInSection>
        <HealingTypes />
      </FadeInSection>

      <FadeInSection>
        <GetStarted />
      </FadeInSection>

      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      <FadeInSection>
        <Background />
      </FadeInSection>

      <FadeInSection>
        <Healers />
      </FadeInSection>

      <FadeInSection>
        <Retreats />
      </FadeInSection>

      <FadeInSection>
        <Advertise />
      </FadeInSection>
    </>
  );
}
