import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Phone,
  Wrench,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  Flame,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

interface ServiceCityPageProps {
  params: Promise<{ serviceSlug: string; citySlug: string }>;
}

export async function generateStaticParams() {
  const params: { serviceSlug: string; citySlug: string }[] = [];
  servicesData.forEach((service) => {
    locationsData.forEach((city) => {
      params.push({
        serviceSlug: service.slug,
        citySlug: city.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: ServiceCityPageProps): Promise<Metadata> {
  const { serviceSlug, citySlug } = await params;
  const service = servicesData.find((s) => s.slug === serviceSlug);
  const city = locationsData.find((l) => l.slug === citySlug);

  if (!service || !city) {
    return { title: "Service Location Not Found" };
  }

  const metaTitle = `${service.name} ${city.name}, CO`;
  const metaDescription = `${service.name} in ${city.name}, CO by licensed local plumbers. Fast diagnosis, upfront pricing, and same-day dispatch. Call (303) 386-0029.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      `${service.name.toLowerCase()} ${city.name}`,
      `${service.primaryKeyword} ${city.name}`,
      `water heater plumber ${city.name} CO`,
    ],
  };
}

export default async function ServiceCityPage({ params }: ServiceCityPageProps) {
  const { serviceSlug, citySlug } = await params;
  const service = servicesData.find((s) => s.slug === serviceSlug);
  const city = locationsData.find((l) => l.slug === citySlug);

  if (!service || !city) {
    notFound();
  }

  // Ensure body images are always distinct from city hero and each other
  const candidatePool = [
    "/images/technician-inspection-clipboard.jpg",
    "/images/wrench-pipe-fitting.jpg",
    "/images/plumber-kneeling-service.jpg",
    "/images/standing-tank-water-heater.jpg",
    "/images/outdoor-tankless-service-truck.jpg",
  ];
  const localConditionImage = candidatePool.find((img) => img !== city.heroImage) || "/images/plumber-kneeling-service.jpg";
  const dispatchImage = candidatePool.find((img) => img !== city.heroImage && img !== localConditionImage) || "/images/wrench-pipe-fitting.jpg";

  const serviceCitySchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": `${service.name} in ${city.name}, CO`,
    "telephone": "+13033860029",
    "serviceType": service.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "CO",
      "addressCountry": "US",
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCitySchema) }}
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
            <Link href="/water-heater-services/" className="hover:text-white transition">
              Services
            </Link>
            <span>/</span>
            <Link href={`/${service.slug}/`} className="hover:text-white transition">
              {service.name}
            </Link>
            <span>/</span>
            <span className="text-primary-light font-semibold">{city.name}, CO</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-accent font-bold text-xs uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                {city.name}, CO Local Service • Elevation: {city.elevation}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {service.name} in {city.name}, CO
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                When your hot water stops or your tank begins leaking in {city.name}, our matching network connects you directly with independent, licensed Colorado plumbers who service {city.name} neighborhoods daily with upfront written pricing.
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
                  Same-Day Priority Dispatch in {city.name}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
                <Image
                  src={city.heroImage}
                  alt={`${service.name} in ${city.name}, CO`}
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
        
        {/* City-Specific Plumbing & Housing Details */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 lg:order-2">
              <span className="text-primary font-bold text-xs uppercase tracking-wider">
                Local Conditions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                {service.name} for {city.name} Homeowners
              </h2>
              <div className="prose-content text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                <p>{city.housingOverview}</p>
                <p>{city.waterCharacteristics}</p>
                <p>{city.weatherNotes}</p>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 relative group">
                <Image
                  src={localConditionImage}
                  alt={`${service.name} service van in ${city.name}, CO`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-navy-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-[11px] font-bold text-center">
                  Local {city.name} Service Route
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="font-bold text-navy-900 block mb-1">Local Permit Jurisdiction:</span>
              <span className="text-slate-600">{city.permitInfo}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="font-bold text-navy-900 block mb-1">Elevation & High Altitude:</span>
              <span className="text-slate-600">{city.name} sits at {city.elevation}, requiring proper high-altitude derating and draft checks.</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="font-bold text-navy-900 block mb-1">Neighborhood Coverage:</span>
              <span className="text-slate-600">{city.neighborhoods.join(", ")}</span>
            </div>
          </div>
        </section>

        {/* Common Problems for this Service */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Diagnostic Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Common {service.name} Issues We Fix in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
              >
                <div className="flex items-center gap-2 font-bold text-base text-navy-900">
                  <Wrench className="h-4 w-4 text-primary flex-shrink-0" />
                  <h4>{prob.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Technician Guarantee (Alternated: Image on Right) */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-3 lg:order-1">
            <span className="text-xs font-black uppercase tracking-wider text-primary bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Licensed &amp; Insured Plumbers
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-navy-900 leading-tight">
              On-Site Written Diagnosis for {city.name} Properties
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              When you call our direct dispatch line, an independent local plumber who knows {city.name} water chemistry arrives with fully stocked trucks. We test heating elements, gas valves, thermocouples, and safety relief valves to fix the issue on the first visit with zero hidden charges.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs font-bold text-navy-900">
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> Clear Upfront Pricing
              </span>
              <span className="flex items-center gap-1 text-primary">
                <CheckCircle2 className="h-4 w-4" /> Full Municipal Code Compliance
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 relative h-56 sm:h-64 w-full overflow-hidden lg:order-2">
            <Image
              src={dispatchImage}
              alt={`${service.name} technician diagnostic in ${city.name}`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* What Callers Should Prepare */}
        <WhatCallersShouldPrepare />

        {/* Local FAQs */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Homeowner FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              {service.name} Questions in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {city.faqs.map((faq, idx) => (
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
            {service.faqs.slice(0, 2).map((faq, idx) => (
              <div
                key={idx + 10}
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

        {/* Internal Link Matrix (5 Internal Links, 1 External Link) */}
        <InternalLinkMatrix
          heading={`Related ${city.name} Water Heater Services & Official Resources`}
          internalLinks={[
            {
              anchor: `${service.name} in Denver (Main Pillar)`,
              url: `/${service.slug}/`,
              desc: `Complete Denver pillar guide for ${service.name}.`,
            },
            {
              anchor: `Water Heater Services in ${city.name}, CO`,
              url: `/service-areas/${city.slug}/`,
              desc: `Full directory of all water heating options in ${city.name}.`,
            },
            {
              anchor: "Denver Water Heater Services Overview",
              url: "/water-heater-services/",
              desc: "Explore all 14 service specializations across Denver.",
            },
            {
              anchor: "Denver Metro Service Areas Hub",
              url: "/service-areas/",
              desc: "Browse local coverage across 8 Front Range municipalities.",
            },
            {
              anchor: "Emergency Water Heater Repair (24/7 Dispatch)",
              url: "/emergency-water-heater-repair-denver/",
              desc: "Immediate emergency help for leaking tanks and winter freeze outages.",
            },
          ]}
          externalLink={city.externalLink}
        />

        {/* Final CTA */}
        <PhoneCTASection
          title={`Call for ${service.name} in ${city.name}, CO`}
          subtitle={`Need fast help in ${city.name}? Call (303) 386-0029. We match you with an independent, licensed Colorado plumber with same-day availability and transparent written pricing.`}
        />
      </div>
    </div>
  );
}
