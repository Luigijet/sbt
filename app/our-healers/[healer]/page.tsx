import type { Metadata } from "next";
import { notFound } from "next/navigation";

const healers = {
  "john-doe": {
    name: "John Doe",
    specialty: "Energy Healing",
    description:
      "John Doe is a certified energy healer specializing in holistic energy healing sessions.",
  },
  "maria-smith": {
    name: "Maria Smith",
    specialty: "Spiritual Therapy",
    description:
      "Maria Smith is a spiritual therapist helping clients restore emotional and spiritual balance.",
  },
};

type HealerKey = keyof typeof healers;

type PageProps = {
  params: Promise<{
    healer: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(healers).map((healer) => ({
    healer,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { healer } = await params;

  const healerData = healers[healer as HealerKey];
  if (!healerData) return {};

  return {
    title: `${healerData.name} | SBT Energy Therapy`,
    description: healerData.description,
    openGraph: {
      title: `${healerData.name} | SBT Energy Therapy`,
      description: healerData.description,
      url: `https://www.sbtenergytherapy.com/our-healers/${healer}`,
      type: "profile",
    },
  };
}

export default async function HealerProfilePage({ params }: PageProps) {
  const { healer } = await params;

  const healerData = healers[healer as HealerKey];
  if (!healerData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: healerData.name,
    jobTitle: healerData.specialty,
    description: healerData.description,
    url: `https://www.sbtenergytherapy.com/our-healers/${healer}`,
    worksFor: {
      "@type": "Organization",
      name: "SBT Energy Therapy",
      url: "https://www.sbtenergytherapy.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <h1>{healerData.name}</h1>
      <p>{healerData.specialty}</p>
      <p>{healerData.description}</p>
    </>
  );
}
