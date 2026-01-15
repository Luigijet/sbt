import HealingTypes from "./home/healing-types";
import { HEALERS, HEALING_TYPES } from "./data/static-data";
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
              "@id": "https://sbthealer.netlify.app/#organization",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://sbthealer.netlify.app/#homepage",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Network of Healers",
            itemListElement: HEALERS.map((healer, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Person",
                name: healer.name,
                description: healer.desc.trim().slice(0, 500),
                image: `https://sbthealer.netlify.app${healer.img}`,
                affiliation: {
                  "@id": "https://sbthealer.netlify.app/#organization",
                },
                hasOccupation: {
                  "@type": "Occupation",
                  name: healer.group,
                },
                knowsAbout: healer.specialties,
              },
            })),
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

      <Retreats />

      <FadeInSection>
        <Advertise />
      </FadeInSection>
    </>
  );
}
