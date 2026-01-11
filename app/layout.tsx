import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "SBT Energy Therapy",
    template: "%s | SBT Energy Therapy",
  },
  description:
    "Connect with certified energy healers and transform your physical, emotional, and spiritual wellbeing.",
  metadataBase: new URL("https://www.sbtenergytherapy.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
        <main>{children}</main>
      </body>
    </html>
  );
}
