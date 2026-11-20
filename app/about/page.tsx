import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Flame,
  Award,
  Users,
  MapPin,
  Clock,
  HelpCircle,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how we connect Denver-area homeowners with licensed, insured water heater plumbers, with clear diagnosis, upfront pricing and local expertise.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-primary-light font-bold text-xs uppercase tracking-wider mb-4 border border-slate-700">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Licensed • Local • Transparent
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            About Our Denver Water Heater Service Network
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            We started with a simple observation: when a water heater fails, homeowners want three things quickly. They want to reach someone who can actually help, they want to understand what is wrong, and they want a fair, upfront price.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-extrabold text-base shadow-lg transition"
            >
              <Phone className="h-5 w-5" />
              <span>Call For Local Plumber: {siteConfig.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Principles & What We Do */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-wider">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                What We Do & How We Vet Providers
              </h2>
              <div className="prose-content text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Too often, the search for a plumber turns into a frustrating string of unreturned calls, vague arrival windows, and high-pressure sales pitches to buy expensive replacements you do not need. Our service exists to make the process faster, clearer, and honest for Denver-area homeowners and businesses.
                </p>
                <p>
                  We are a specialized water heater matching and referral network. We are not a generic call center. When you dial <a href={siteConfig.phoneTel} className="body-link">{siteConfig.phoneFormatted}</a>, we match you with an independent, licensed Colorado plumber who services your specific neighborhood and specializes in your type of equipment (gas, electric, tankless, hybrid, or commercial).
                </p>
                <p>
                  Providers in our network are required to hold the mandatory licensing issued by the State of Colorado Plumbing Board, maintain active commercial liability insurance, and communicate diagnoses in plain language. If a repair makes more sense than a replacement, or vice versa, you will hear that plainly with written figures.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/technician-inspection-clipboard.jpg"
                  alt="Certified water heater technician conducting inspection in Denver"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-900 to-slate-900 text-white space-y-4 shadow-xl border border-slate-700">
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Our Core Commitments
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Honest Diagnosis First</strong>: We never push replacement if a simple element or thermocouple repair will do.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Safety Is Not Negotiable</strong>: Immediate priority for gas odors, carbon monoxide warnings, and active leaks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Upfront Written Pricing</strong>: Firm quotes presented before any wrench turns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Local Colorado Knowledge</strong>: 5,280 ft altitude calibration, cold winter snowmelt, and municipal permit expertise.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="bg-slate-100/80 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Diverse Client Base
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Who We Serve Across the Denver Metropolitan Area
            </h2>
            <p className="text-slate-600 text-sm">
              Our network handles properties of all sizes and configurations:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="font-extrabold text-navy-900 text-base">Single-Family Homeowners</h4>
              <p className="text-xs text-slate-600">
                Planned replacements, leaking tanks, cold showers, and conversions to endless on-demand tankless hot water.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="font-extrabold text-navy-900 text-base">Landlords & Property Managers</h4>
              <p className="text-xs text-slate-600">
                Rapid turnaround for rental homes, townhouses, and multi-family units to keep tenants happy and compliant.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="font-extrabold text-navy-900 text-base">Restaurants & Commercial</h4>
              <p className="text-xs text-slate-600">
                High-capacity dishwashing sanitization (180°F), salon wash stations, hotels, and office facility systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h4 className="font-extrabold text-navy-900 text-base">Remodelers & Custom Builders</h4>
              <p className="text-xs text-slate-600">
                Hydraulic flow calculations, gas line upsizing, and multi-zone recirculation loops for luxury bathrooms.
              </p>
            </div>
          </div>
        </section>

        {/* Local Verification Guarantee Banner */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative h-64 sm:h-72 w-full overflow-hidden">
            <Image
              src="/images/plumber-with-wrench-standing.jpg"
              alt="Licensed Colorado plumber with pipe wrench ready for dispatch"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Vetted Professional Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
              Direct Phone Access to Real Local Technicians
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We believe homeowners deserve immediate answers rather than generic web inquiry forms and pushy automated callbacks. When you call us, our goal is simple: listen to your water heater symptoms, connect you with the closest qualified technician, and get your hot water restored safely with full state and municipal code compliance.
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs font-bold text-navy-900">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> State of Colorado Licensed
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <CheckCircle2 className="h-4 w-4" /> Fully Insured Local Crews
              </span>
            </div>
          </div>
        </div>

        {/* What Callers Should Prepare */}
        <WhatCallersShouldPrepare />

        {/* Internal Link Matrix */}
        <InternalLinkMatrix
          heading="Recommended Services & Regional Resources"
          internalLinks={[
            {
              anchor: "Denver Water Heater Services Hub",
              url: "/water-heater-services/",
              desc: "Complete directory of all 14 water heating specializations.",
            },
            {
              anchor: "Water Heater Repair in Denver, CO",
              url: "/water-heater-repair-denver/",
              desc: "Fast diagnosis and same-day component repairs.",
            },
            {
              anchor: "Emergency Water Heater Repair (24/7)",
              url: "/emergency-water-heater-repair-denver/",
              desc: "Immediate priority dispatch for leaking tanks and winter freeze outages.",
            },
            {
              anchor: "Water Heater Service Areas Directory",
              url: "/service-areas/",
              desc: "Explore coverage across Aurora, Lakewood, Arvada, Westminster & Centennial.",
            },
            {
              anchor: "Contact & Phone-Only Dispatch",
              url: "/contact/",
              desc: "Speak directly with local dispatch to confirm appointment windows.",
            },
          ]}
          externalLink={{
            anchor: "Colorado Department of Regulatory Agencies (DORA) Plumbing Board",
            url: "https://dpo.colorado.gov/Plumbing",
          }}
        />

        {/* Call CTA */}
        <PhoneCTASection
          title="Connect With a Trusted Denver Plumber Today"
          subtitle="Call (456) 789-0123. Tell us your water heater's age, brand, and symptoms. We will connect you with a licensed local plumber who arrives with upfront written pricing."
        />
      </div>
    </div>
  );
}
