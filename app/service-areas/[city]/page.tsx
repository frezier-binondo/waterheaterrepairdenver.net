import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Wrench,
  Clock,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { locationsData, LocationItem } from "@/data/locations";
import { servicesData } from "@/data/services";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const location = locationsData.find((l) => l.slug === citySlug);

  if (!location) {
    return { title: "Service Area Not Found" };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: [location.primaryKeyword, ...location.secondaryKeywords],
  };
}

export default async function CityHubPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const location = locationsData.find((l) => l.slug === citySlug);

  if (!location) {
    notFound();
  }

  // Ensure body images are completely distinct from hero and each other
  const candidatePool = [
    "/images/outdoor-tankless-service-truck.jpg",
    "/images/standing-tank-water-heater.jpg",
    "/images/plumber-kneeling-service.jpg",
    "/images/wrench-pipe-fitting.jpg",
    "/images/technician-inspection-clipboard.jpg",
  ];
  const localConditionImg = candidatePool.find((img) => img !== location.heroImage) || "/images/outdoor-tankless-service-truck.jpg";
  const dispatchImage = candidatePool.find((img) => img !== location.heroImage && img !== localConditionImg) || "/images/standing-tank-water-heater.jpg";

  // Schema for Local Business in City
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": `${siteConfig.name} - ${location.name}`,
    "telephone": "+14567890123",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": "CO",
      "addressCountry": "US",
    },
    "areaServed": {
      "@type": "City",
      "name": location.name,
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-400 mb-4 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/service-areas/" className="hover:text-white transition">
              Service Areas
            </Link>
            <span>/</span>
            <span className="text-primary-light font-semibold">{location.name}, CO</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-accent font-bold text-xs uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                {location.name}, CO • Elevation: {location.elevation}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {location.h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Looking for an honest, licensed water heater plumber in {location.name}? Our network connects {location.name} homeowners and businesses with local professionals who handle fast diagnosis, emergency leak repair, tankless installations, and upfront written pricing.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={siteConfig.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-extrabold text-lg shadow-xl shadow-orange-500/30 transition transform hover:scale-105 active:scale-95"
                >
                  <Phone className="h-5 w-5 animate-bounce" />
                  <span>Call {siteConfig.phoneFormatted}</span>
                </a>
                <span className="text-xs text-slate-300">
                  Same-Day Priority Arrival Across {location.name}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
                <Image
                  src={location.heroImage}
                  alt={`${location.name} Colorado residential plumbing`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Local Housing & Conditions Overview */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 lg:order-2">
              <span className="text-primary font-bold text-xs uppercase tracking-wider">
                Local Mechanical Conditions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                Water Heater Performance in {location.name}, CO
              </h2>
              <div className="prose-content text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p><strong>Housing &amp; Utility Spaces:</strong> {location.housingOverview}</p>
                <p><strong>Water Chemistry &amp; Sediment Risk:</strong> {location.waterCharacteristics}</p>
                <p><strong>Front Range Microclimate:</strong> {location.weatherNotes}</p>
                <p><strong>Permits &amp; Inspections:</strong> {location.permitInfo}</p>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 relative group">
                <Image
                  src={localConditionImg}
                  alt={`${location.name} Colorado residential plumbing and heating`}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-navy-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-[11px] font-bold text-center">
                  Local Service Across {location.name}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <span className="font-bold text-navy-900 block text-sm mb-1">Elevation:</span>
              <span className="text-slate-600">{location.elevation} (high-altitude burner calibration required)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <span className="font-bold text-navy-900 block text-sm mb-1">County Jurisdiction:</span>
              <span className="text-slate-600">{location.county}</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <span className="font-bold text-navy-900 block text-sm mb-1">Neighborhoods Covered:</span>
              <span className="text-slate-600">{location.neighborhoods.join(", ")}</span>
            </div>
          </div>
        </section>

        {/* Every Water Heater Service in This City (14 Sub-Pages) */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              {location.name} Service Directory
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Every Water Heater Service Available in {location.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Each service below is backed by licensed local plumbers equipped with truck inventory for {location.name} homes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-primary font-extrabold text-[11px] uppercase tracking-wider">
                    {location.name} Local
                  </span>
                  <h3 className="font-bold text-base text-navy-900">
                    <Link
                      href={`/${service.slug}/${location.slug}/`}
                      className="hover:text-primary transition"
                    >
                      {service.name} in {location.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${service.slug}/${location.slug}/`}
                    className="body-link text-xs font-bold"
                  >
                    View Local Service Page →
                  </Link>
                  <a
                    href={siteConfig.phoneTel}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-accent hover:text-white text-slate-700 transition"
                  >
                    <Phone className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Technician Dispatch Card (Alternated: Image on Right) */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-3 lg:order-1">
            <span className="text-xs font-black uppercase tracking-wider text-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Same-Day Dispatch in {location.name}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-navy-900 leading-tight">
              Rapid Arrival &amp; Upfront Pricing Across All {location.name} Neighborhoods
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Whether you are experiencing a ruptured storage tank, cold morning showers, or an unlit pilot, our network connects you with verified independent plumbers who know {location.county} permit codes and high-altitude venting requirements. You receive an itemized quote before any work starts.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs font-bold text-navy-900">
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> DORA-Licensed Plumbers
              </span>
              <span className="flex items-center gap-1 text-primary">
                <CheckCircle2 className="h-4 w-4" /> Emergency Phone Routing
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 relative h-56 sm:h-64 w-full overflow-hidden lg:order-2">
            <Image
              src={dispatchImage}
              alt={`Licensed plumber providing water heater repair in ${location.name}`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Local City FAQs */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              {location.name} Homeowner Q&A
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Frequently Asked Questions in {location.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {location.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2"
              >
                <h4 className="font-bold text-navy-900 flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What Callers Should Prepare */}
        <WhatCallersShouldPrepare />

        {/* Internal Link Matrix (5 Internal Links, 1 External Link) */}
        <InternalLinkMatrix
          heading={`Explore Related Water Heater Services & Resources in ${location.name}`}
          internalLinks={[
            {
              anchor: `Water Heater Repair in ${location.name}`,
              url: `/water-heater-repair-denver/${location.slug}/`,
              desc: `Fast diagnosis for gas and electric water heaters in ${location.name}.`,
            },
            {
              anchor: `Emergency Water Heater Repair in ${location.name}`,
              url: `/emergency-water-heater-repair-denver/${location.slug}/`,
              desc: `Urgent leak containment and 24/7 emergency dispatch.`,
            },
            {
              anchor: `Water Heater Replacement in ${location.name}`,
              url: `/water-heater-replacement-denver/${location.slug}/`,
              desc: `Same-day replacement of aging storage tanks with upfront pricing.`,
            },
            {
              anchor: "Denver Water Heater Services Hub",
              url: "/water-heater-services/",
              desc: "Complete directory of all 14 water heating specializations.",
            },
            {
              anchor: "All Denver Metro Service Areas",
              url: "/service-areas/",
              desc: "Explore coverage across Aurora, Lakewood, Arvada, Westminster & Centennial.",
            },
          ]}
          externalLink={location.externalLink}
        />

        {/* Final CTA */}
        <PhoneCTASection
          title={`Call for Water Heater Service in ${location.name}, CO`}
          subtitle={`Need emergency or scheduled water heater help in ${location.name}? Call (456) 789-0123. We match you with an independent, licensed Colorado plumber with same-day availability and transparent written pricing.`}
        />
      </div>
    </div>
  );
}
