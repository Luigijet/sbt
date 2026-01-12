import Image from "next/image";
import Script from "next/script";

const TYPES = [
  {
    title: "physical healing",
    desc: `Identify & release the energy imbalance causing your pain to heal your body.`,
    img: "/icon/physical-healing.webp",
  },
  {
    title: "emotional healing",
    desc: `Pinpoint & transmute trauma energy stored in the heart & body to reclaim your power.`,
    img: "/icon/emotional-healing.webp",
  },
  {
    title: "healing relationships",
    desc: `End toxic behavior patterns causing self sabotage to create loving relationships of trust.`,
    img: "/icon/relationship-healing.webp",
  },
];

export default function HealingTypes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Energy Healing",
    provider: {
      "@type": "Organization",
      name: "Our Network of Healers",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      itemListElement: TYPES.map((t) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: t.title,
          description: t.desc,
        },
      })),
    },
  };

  return (
    <>
      <section className="relative flex flex-col items-center gap-4 py-22 px-6 text-center">
        <h2 className="font-heading font-semibold text-4xl">
          What is Your Pain Costing You?
        </h2>
        <p className="text-xl leading-7 max-w-2xl">
          How much more will you spend doing things the old way? It has cost
          many their relationships, jobs, hope, time, energy and more.
        </p>
        <h3 className="mt-8 mb-4 text-2xl text-primary font-heading font-semibold">
          Our Network of Healers™ helps you try something new:
        </h3>
        <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
          {TYPES.map((type, idx) => (
            <article
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={type.img}
                alt={`${type.title} logo`}
                width={160}
                height={160}
                className="h-40 w-40 object-contain"
              />
              <h4 className="uppercase text-primary tracking-widest text-lg leading-6">
                {type.title}
              </h4>
              <p className="leading-6 text-primary mt-5 flex-1">{type.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
        strategy="afterInteractive"
      />
    </>
  );
}
