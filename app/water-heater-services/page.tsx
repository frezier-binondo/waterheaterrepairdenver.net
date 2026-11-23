import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Wrench,
  Flame,
  Zap,
  Droplets,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

export const metadata: Metadata = {
  title: "Water Heater Services in Denver, CO",
  description:
    "Explore every water heater service in Denver: repair, emergency, tankless, gas, electric, installation, replacement and maintenance. Free phone quotes.",
};

export default function ServicesHubPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-primary-light font-bold text-xs uppercase tracking-wider mb-4 border border-slate-700">
            <Wrench className="h-4 w-4 text-accent" />
            Complete Denver Water Heating Silo
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Comprehensive Water Heater Services in Denver, CO
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Water heaters come in several distinct fuel sources and designs, and each type requires specialized diagnostic knowledge. This directory is your complete guide to every water heater service we offer across Denver and the surrounding Front Range metro area.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-extrabold text-base shadow-lg transition"
            >
              <Phone className="h-5 w-5" />
              <span>Call For Diagnosis: {siteConfig.phoneFormatted}</span>
            </a>
            <span className="text-xs text-slate-400">
              ⚡ Same-Day Priority Dispatch Available Metro-Wide
            </span>
          </div>
        </div>
      </section>

      {/* Main Content (1000+ words) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Intro Overview: Three Core Groups */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Diagnostic Structure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Organized into Three Specialized Service Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To help Denver property owners quickly find the exact solution for their equipment, we structure our network into three primary groups: <strong>Diagnostic & Repair Services</strong> for existing systems with broken components; <strong>Installation & Planned Replacement</strong> for aging or failing units requiring code-compliant upgrades; and <strong>Preventive Maintenance & Flushing</strong> to remove mineral scale and maximize equipment longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-navy-900">1. Repair Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Covers component issues with existing water heaters: burned-out electric elements, failed thermostats, extinguished gas pilot lights, bad thermocouples, leaking valves, and flashing tankless error codes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-accent text-white flex items-center justify-center font-bold">
                <Flame className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-navy-900">2. Installation & Swaps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Turnkey same-day tank replacements, conversions from tank to high-efficiency on-demand tankless, hybrid heat pump setups, and commercial boiler installations with full Denver permitting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Droplets className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-navy-900">3. Flushing & Maintenance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Annual sediment purging, virgin food-grade chemical tankless descaling, sacrificial anode rod replacements, and comprehensive safety inspections that add 5+ years to equipment life.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Benchmark Banner (Image on Left) */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative h-64 sm:h-72 w-full overflow-hidden">
            <Image
              src="/images/technician-explaining-homeowner.jpg"
              alt="Complete residential basement water heater plumbing installation in Denver"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Complete Denver Coverage
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
              Front Range Technical Standards for Tank &amp; Tankless Systems
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every home and commercial building along the Front Range has distinct hot water requirements based on gas meter supply pressure, local municipal plumbing codes, incoming water hardness, and basement mechanical ventilation. Browse our 14 dedicated service categories below to find specific guidance.
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs font-bold text-navy-900">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> 14 Specialized Silos
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <CheckCircle2 className="h-4 w-4" /> Full Metro Municipal Permitting
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown of All 14 Services */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Explore The Silos
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Detailed Service Directory
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click any service below to review common causes, troubleshooting warning signs, pricing factors, and localized Denver climate considerations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
                    <Image
                      src={service.heroImage}
                      alt={`${service.name} in Denver, CO`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-navy-900 font-extrabold text-xs">
                      Silo #{index + 1}
                    </span>
                    <span className="text-xs font-bold text-accent">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy-900">
                    <Link
                      href={`/${service.slug}/`}
                      className="hover:text-primary transition"
                    >
                      {service.name} in Denver, CO
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.leadParagraph}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1.5 text-xs">
                    <span className="font-bold text-navy-900 block">Typical Repairs Handled:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-600">
                      {service.commonProblems.slice(0, 4).map((p, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                          <span className="truncate">{p.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${service.slug}/`}
                    className="body-link text-xs font-bold"
                  >
                    Read Dedicated {service.name} Guide →
                  </Link>
                  <a
                    href={siteConfig.phoneTel}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-primary text-white text-xs font-bold transition"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: How to Choose Which Service You Need */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Diagnostic Decision Tree
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              If you aren’t sure whether your water heater needs a minor repair, a pressurized flush, or a full replacement, use this quick checklist:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-navy-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Scenario A: Tank is Under 8 Years Old
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your heater is relatively new and simply stopped producing hot water or has an extinguished pilot flame, start with general <Link href="/water-heater-repair-denver/" className="body-link">Water Heater Repair</Link> or <Link href="/gas-water-heater-repair-denver/" className="body-link">Gas Water Heater Repair</Link>. Replacing a single worn electrical element or thermocouple is fast and inexpensive.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-navy-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Scenario B: Popping Sounds or Scaled Fixtures
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your hot water works but makes loud rumbling noises or runs out faster than it used to, schedule a <Link href="/water-heater-flushing-denver/" className="body-link">Water Heater Flushing</Link> or comprehensive <Link href="/water-heater-maintenance-denver/" className="body-link">Water Heater Maintenance</Link> visit to eliminate mineral sediments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-navy-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Scenario C: Water on the Floor or 10+ Years Old
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If water is leaking from the lower body seams or the heater is past a decade in age, jump directly to <Link href="/emergency-water-heater-repair-denver/" className="body-link">Emergency Water Heater Repair</Link> or schedule a same-day <Link href="/water-heater-replacement-denver/" className="body-link">Water Heater Replacement</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* What Callers Should Prepare */}
        <WhatCallersShouldPrepare />

        {/* Internal Link Matrix */}
        <InternalLinkMatrix
          heading="Top Recommended Water Heater Service Pillars & Authority Links"
          internalLinks={[
            {
              anchor: "Water Heater Repair in Denver, CO",
              url: "/water-heater-repair-denver/",
              desc: "Same-day diagnosis for gas, electric, and tankless units across Denver.",
            },
            {
              anchor: "Emergency Water Heater Repair (24/7)",
              url: "/emergency-water-heater-repair-denver/",
              desc: "Immediate dispatch for leaking tanks, gas odors, and cold water freezes.",
            },
            {
              anchor: "Tankless Water Heater Installation",
              url: "/tankless-water-heater-installation-denver/",
              desc: "High-altitude gas sizing and continuous on-demand hot water.",
            },
            {
              anchor: "Water Heater Replacement (Same-Day Swaps)",
              url: "/water-heater-replacement-denver/",
              desc: "Upfront pricing for 40, 50, and 75-gallon high-recovery storage tanks.",
            },
            {
              anchor: "Water Heater Service Areas Around Denver",
              url: "/service-areas/",
              desc: "Local municipality coverage for Aurora, Lakewood, Arvada, Westminster & more.",
            },
          ]}
          externalLink={{
            anchor: "U.S. Department of Energy: Water Heating Best Practices",
            url: "https://www.energy.gov/energysaver/water-heating",
          }}
        />

        {/* Final CTA */}
        <PhoneCTASection
          title="Ready to Schedule Your Water Heater Service?"
          subtitle="Call our local Denver team at (303) 386-0029. We match you with an independent, licensed Colorado plumber with same-day availability and transparent written pricing."
        />
      </div>
    </div>
  );
}
