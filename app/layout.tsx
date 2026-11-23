import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCallBar from "@/components/StickyMobileCallBar";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Water Heater Repair Denver, CO",
    template: "%s",
  },
  description:
    "Denver water heater repair, installation and replacement from licensed local plumbers. Gas, electric and tankless. Upfront pricing. 24/7 emergency dispatch.",
  keywords: [
    "water heater repair Denver",
    "emergency water heater repair Denver",
    "tankless water heater repair Denver",
    "Denver water heater replacement",
    "water heater plumber Denver CO",
    "gas water heater repair Denver",
  ],
  authors: [{ name: "Water Heater Repair in Denver" }],
  creator: "Water Heater Repair in Denver",
  publisher: "Water Heater Repair in Denver",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Water Heater Repair Denver, CO",
    description:
      "24/7 Emergency water heater repair, replacement, and tankless installation in Denver, CO. Licensed local plumbers, upfront pricing.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "GovZ37xDJ0MOl39DF65lJEz7pdHtK_MDu5EgSmQre_M",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": siteConfig.name,
    "image": `${siteConfig.domain}/images/plumber-with-wrench-standing.jpg`,
    "@id": siteConfig.domain,
    "url": siteConfig.domain,
    "telephone": "+14567890123",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zip,
      "addressCountry": siteConfig.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.geo.latitude,
      "longitude": siteConfig.geo.longitude,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.rating.score.toString(),
      "reviewCount": siteConfig.rating.reviewCount.toString(),
    },
    "areaServed": [
      "Denver",
      "Aurora",
      "Lakewood",
      "Arvada",
      "Westminster",
      "Centennial",
      "Littleton",
      "Thornton",
      "Highlands Ranch",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="GovZ37xDJ0MOl39DF65lJEz7pdHtK_MDu5EgSmQre_M"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileCallBar />
      </body>
    </html>
  );
}
