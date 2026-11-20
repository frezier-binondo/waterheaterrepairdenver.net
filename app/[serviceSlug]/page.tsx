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
  Star,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData, ServiceItem } from "@/data/services";
import { locationsData } from "@/data/locations";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

interface ServicePageProps {
  params: Promise<{ serviceSlug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = servicesData.find((s) => s.slug === serviceSlug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
  };
}

export default async function ServicePillarPage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = servicesData.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  // Ensure body images are completely distinct from hero and each other
  const candidatePool = [
    "/images/multimeter-testing-tankless.jpg",
    "/images/wrench-pipe-fitting.jpg",
    "/images/technician-inspection-clipboard.jpg",
    "/images/standing-tank-water-heater.jpg",
  ];
  const diagnosticImage = candidatePool.find((img) => img !== service.heroImage) || "/images/multimeter-testing-tankless.jpg";
  const codeFittingImage = candidatePool.find((img) => img !== service.heroImage && img !== diagnosticImage) || "/images/wrench-pipe-fitting.jpg";

  // Schema markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "serviceType": service.name,
    "provider": {
      "@type": "PlumbingService",
      "name": siteConfig.name,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Denver",
        "addressRegion": "CO",
      },
    },
    "areaServed": locationsData.map((loc) => ({
      "@type": "City",
      "name": loc.name,
    })),
    "description": service.metaDescription,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-400 mb-4 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/water-heater-services/" className="hover:text-white transition">
              Services
            </Link>
            <span>/</span>
            <span className="text-primary-light font-semibold">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-accent font-bold text-xs uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                Denver Metro • {service.badge}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {service.h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.leadParagraph}
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
                  Upfront Written Pricing • No Lead Forms Required
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
                <Image
                  src={service.heroImage}
                  alt={service.h1}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Common Problems & Diagnostics (Alternated: Image on Left) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image on Left side */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 relative group">
                <Image
                  src={diagnosticImage}
                  alt={`${service.name} electrical and component diagnostics in Denver`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-navy-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-[11px] font-bold text-center">
                  Precision On-Site Testing
                </div>
              </div>
            </div>

            {/* Content on Right side */}
            <div className="lg:col-span-8 space-y-2">
              <span className="text-primary font-bold text-xs uppercase tracking-wider">
                Diagnostic Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                Common {service.name} Problems We Repair in Denver
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Most repair calls fall into a familiar set of mechanical and electrical failures. A certified local technician tests before replacing components so you only pay for parts that actually failed:
              </p>
            </div>
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

        {/* Section 2: Warning Signs & Cost Factors */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Warning Signs */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="h-4 w-4" />
              Early Warning Indicators
            </div>
            <h3 className="text-xl font-extrabold text-navy-900">
              Signs Your Unit Demands Attention
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {service.warningSigns.map((sign, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cost Factors */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              Upfront Transparent Quotes
            </div>
            <h3 className="text-xl font-extrabold text-navy-900">
              What Affects {service.name} Pricing
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {service.costFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              You will always receive a clear, itemized written quote before any work begins.
            </p>
          </div>
        </section>

        {/* Section 3: Repair vs Replace & High Altitude Denver Factors */}
        <section className="bg-gradient-to-br from-slate-900 to-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light font-bold text-xs uppercase tracking-wider">
                    Decision Framework
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Repair or Replace: How to Decide
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.repairVsReplace}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider">
                    Front Range Microclimate
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Denver High-Altitude Factors (5,280 ft)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.denverClimateFactors}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 relative">
                <Image
                  src={codeFittingImage}
                  alt="Colorado code compliant pipe connections and valves"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold">
                    Code-Approved Brass Valves &amp; Thermal Expansion Protection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Available In Every Denver Suburb (Links to Child Location Pages) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Regional Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              {service.name} in Nearby Denver Suburbs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We provide this exact specialized service across every major city in the Denver metropolitan area. Select your municipality for hyper-local notes on water hardness, municipal permits, and neighborhood dispatch times:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationsData.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${service.slug}/${loc.slug}/`}
                className="p-4 rounded-xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/80 transition group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">
                    {service.name} in
                  </span>
                  <span className="text-sm font-bold text-navy-900 group-hover:text-primary transition">
                    {loc.name}, CO
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* Section 5: Service Specific FAQs */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              {service.name} FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {service.faqs.map((faq, idx) => (
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
          heading={`Explore Related Water Heater Services & Resources for ${service.name}`}
          internalLinks={[
            ...service.relatedServices.slice(0, 3).map((rs) => ({
              anchor: rs.name,
              url: `/${rs.slug}/`,
              desc: `Complementary service frequently needed alongside ${service.name}.`,
            })),
            {
              anchor: "Denver Water Heater Services Hub",
              url: "/water-heater-services/",
              desc: "Complete directory of all 14 water heating specializations.",
            },
            {
              anchor: "Denver Metro Service Areas Hub",
              url: "/service-areas/",
              desc: "Explore coverage across Aurora, Lakewood, Arvada, Westminster & Centennial.",
            },
          ]}
          externalLink={service.externalLink}
        />

        {/* Call to Action Section */}
        <PhoneCTASection
          title={`Request ${service.name} in Denver Today`}
          subtitle={`Speak directly to our local dispatch at (456) 789-0123. We match you with an independent, licensed Colorado plumber with same-day availability and transparent written pricing.`}
        />
      </div>
    </div>
  );
}
