"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HelpCircle,
  ChevronDown,
  Phone,
  ShieldCheck,
  Flame,
  Wrench,
  AlertTriangle,
  Clock,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { faqsData, FAQItem } from "@/data/faqs";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Cost & Pricing", "Emergency", "Technical & High-Altitude", "Maintenance"];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqsData
      : faqsData.filter((f) => f.category === selectedCategory);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-primary-light font-bold text-xs uppercase tracking-wider mb-4 border border-slate-700">
            <HelpCircle className="h-4 w-4 text-accent" />
            Clear Answers for Denver Property Owners
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Frequently Asked Water Heater Questions
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Straight talk about water heater repairs, permits, upfront costs, sediment flushing, high-altitude burner safety, and emergency flood prevention in Denver, CO.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-extrabold text-base shadow-lg transition"
            >
              <Phone className="h-5 w-5" />
              <span>Have a Question? Call {siteConfig.phoneFormatted}</span>
            </a>
            <span className="text-xs text-slate-400">
              ⚡ Licensed Colorado Plumbers on Call 24/7
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Diagnostic Testing Visual Highlight (Alternated: Image on Right) */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-8 p-6 sm:p-8 space-y-2 md:order-1">
            <span className="text-xs font-black uppercase tracking-wider text-accent bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
              Diagnostic Testing First
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-navy-900 leading-tight">
              We Answer Questions With Data &amp; On-Site Testing
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Before recommending any repair or tank replacement, plumbers in our network test voltage, thermostat continuity, flame signal millivoltage, and system water pressure. Explore our comprehensive answers below or call directly for immediate assistance.
            </p>
          </div>
          <div className="md:col-span-4 relative h-48 sm:h-56 w-full overflow-hidden md:order-2">
            <Image
              src="/images/multimeter-testing-tankless.jpg"
              alt="Plumber testing electrical heating elements with digital multimeter in Denver"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                >
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-sky-50 text-primary text-[11px] font-extrabold uppercase mt-0.5">
                      {faq.category}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-navy-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* What Callers Should Prepare */}
        <WhatCallersShouldPrepare />

        {/* Internal Link Matrix (5 Internal Links, 1 External Link) */}
        <InternalLinkMatrix
          heading="Top Recommended Water Heater Services & Regional Colorado Resources"
          internalLinks={[
            {
              anchor: "Water Heater Repair in Denver, CO",
              url: "/water-heater-repair-denver/",
              desc: "Fast diagnosis and same-day component repairs.",
            },
            {
              anchor: "Emergency Water Heater Repair (24/7)",
              url: "/emergency-water-heater-repair-denver/",
              desc: "Immediate help for flooding tanks and gas smells.",
            },
            {
              anchor: "Water Heater Replacement (Planned Swaps)",
              url: "/water-heater-replacement-denver/",
              desc: "Upfront pricing for 40, 50, and 75-gallon high-recovery tanks.",
            },
            {
              anchor: "Water Heater Flushing & Descaling",
              url: "/water-heater-flushing-denver/",
              desc: "Remove calcified mineral sediment and quiet noisy tanks.",
            },
            {
              anchor: "Denver Metro Service Areas Directory",
              url: "/service-areas/",
              desc: "Explore local service in Aurora, Lakewood, Arvada, Westminster & Centennial.",
            },
          ]}
          externalLink={{
            anchor: "Colorado DORA: State Plumbing Board Licensing Board",
            url: "https://dpo.colorado.gov/Plumbing",
          }}
        />

        {/* Reassurance Visual Card */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-4 relative h-48 sm:h-56 w-full overflow-hidden">
            <Image
              src="/images/plumber-with-wrench-standing.jpg"
              alt="Friendly licensed plumbing technician in Denver"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-8 p-6 sm:p-8 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-primary bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
              Direct Phone Assistance
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-navy-900 leading-tight">
              Don&apos;t Spend Hours Guessing What Failed
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every hot water system is unique. If your issue isn&apos;t covered below or you are dealing with lukewarm water, popping noises, or leaking valves, call our local line. We explain your options clearly with upfront written pricing.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <PhoneCTASection
          title="Have More Questions? Speak to a Denver Specialist"
          subtitle="Don't spend hours guessing what is wrong with your water heater. Call (456) 789-0123 to talk directly with an experienced local plumbing professional."
        />
      </div>
    </div>
  );
}
