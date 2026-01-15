import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import { futuraLT } from "./fonts/futura";
import { cormorant } from "./fonts/google";
import Nav from "./components/ui/nav";
import { avenirLT } from "./fonts/avenir";
import Footer from "./components/ui/footer";

export const metadata: Metadata = {
  title: {
    default: "SBT Energy Therapy",
    template: "%s | SBT Energy Therapy",
  },
  description:
    "Connect with certified energy healers and transform your physical, emotional, and spiritual wellbeing.",
  metadataBase: new URL("https://sbthealer.netlify.app"),

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "SBT Energy Therapy",
    description:
      "Connect with certified energy healers and transform your physical, emotional, and spiritual wellbeing.",
    url: "https://sbthealer.netlify.app",
    siteName: "SBT Energy Therapy",
    images: [
      {
        url: "/logo/sbt-app-logo.webp",
        width: 1200, // logical size for preview
        height: 630,
        alt: "SBT Energy Therapy Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo/sbt-app-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${futuraLT.variable} ${cormorant.variable} ${avenirLT.variable}`}
    >
      <body className="overflow-x-hidden">
        {/* Organization JSON-LD */}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SBT Energy Therapy",
              url: "https://www.sbtenergytherapy.com",
              logo: "https://www.sbtenergytherapy.com/images/logo.png",
            }),
          }}
        />
        <Nav />
        <main className="mt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
