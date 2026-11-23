import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Phone,
  Clock,
  ShieldCheck,
  Flame,
  Wrench,
  AlertTriangle,
  Award,
  ChevronRight,
  Star,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

export const metadata: Metadata = {
  title: "Water Heater Repair Denver, CO",
  description:
    "Denver water heater repair, installation and replacement from licensed local plumbers. Gas, electric and tankless. Upfront pricing. 24/7 emergency dispatch.",
};

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      {/* HERO SECTION - Inspired by Drainhaus theme with rich blue shade & faded background image */}
      <section className="relative bg-[#0B1528] text-white overflow-hidden py-16 sm:py-24 border-b-4 border-primary">
        {/* Faded Hero Background Image with Rich Blue Shade (Visible & Elegant) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/basement-tankless-maintenance.jpg"
            alt="Denver professional water heater installation background"
            fill
            priority
            className="object-cover object-center opacity-50 filter contrast-110 brightness-105"
            sizes="100vw"
          />
          {/* Smooth Faded Blue Overlays: deep solid blue behind text on left, clearly visible image on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/80 to-[#082855]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/90 via-transparent to-[#0B1528]/60" />
        </div>

        {/* Ambient Blue Glowing Orbs for extra depth and vibrant blue tone */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-accent font-bold text-xs uppercase tracking-wider shadow-inner">
                <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
                Denver Metro 24/7 Rapid Emergency Dispatch
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Water Heater Repair & Replacement in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary-light to-blue-300">
                  Denver, CO
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A broken water heater does not wait for a convenient time. Whether you woke up to an ice-cold shower, discovered water pooling around the tank in your basement, or need to replace an aging system before winter, we connect you with independent, licensed Colorado plumbers who service your specific neighborhood with upfront, written pricing.
              </p>

              {/* Verified Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Licensed CO Plumbers</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Upfront Written Pricing</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Gas, Electric & Tankless</span>
                </div>
              </div>

              {/* Primary Call Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={siteConfig.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-accent hover:bg-accent-dark text-white font-black text-xl shadow-2xl shadow-orange-500/40 transition transform hover:scale-105 active:scale-95"
                >
                  <Phone className="h-6 w-6 animate-bounce" />
                  <div className="text-left leading-none">
                    <span className="block text-[11px] font-bold uppercase text-orange-200">
                      Emergency or Scheduled
                    </span>
                    <span className="text-xl sm:text-2xl font-black">
                      Call {siteConfig.phoneFormatted}
                    </span>
                  </div>
                </a>

                <div className="text-slate-400 text-xs text-center sm:text-left">
                  <span className="block text-white font-bold text-sm">
                    ⚡ Same-Day Service Available
                  </span>
                  <span>No forms required • Speak directly to local dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Card / Graphic Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-800/90 to-navy-900/95 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700/80 backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-accent">
                      Local Diagnostic Network
                    </span>
                    <h3 className="text-lg font-black text-white">Denver Fast Dispatch</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-500/40">
                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-bold text-amber-300">4.9 / 5.0</span>
                  </div>
                </div>

                <div className="space-y-4 py-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <Flame className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">High-Altitude Specialists</strong>
                      <span>Calibrated for 5,280 ft oxygen density to prevent carbon monoxide and flame failure.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <Wrench className="h-5 w-5 text-primary-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Truck-Stocked Parts</strong>
                      <span>Thermocouples, 4500W elements, dual thermostats, gas valves, and relief valves on site.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <Clock className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Urgent Leak Prioritization</strong>
                      <span>Active flooding and gas odors routed immediately to the front of the queue.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={siteConfig.phoneTel}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md transition"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Dial (456) 789-0123 for Assistance</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY SAFETY STRIP */}
      <section className="bg-red-600 text-white py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <AlertTriangle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
            <span>
              <strong>EMERGENCY WARNING:</strong> If you smell natural gas or rotten eggs, evacuate immediately and call Xcel Energy or 911 from outside.
            </span>
          </div>
          <a
            href={siteConfig.phoneTel}
            className="bg-white text-red-700 hover:bg-slate-100 px-3.5 py-1.5 rounded-lg font-black text-xs uppercase tracking-wider flex-shrink-0"
          >
            Call Dispatch: {siteConfig.phoneFormatted}
          </a>
        </div>
      </section>

      {/* MAIN LOCALIZED CONTENT CONTAINER (2000+ words across sections) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Denver's Unique Climate & Plumbing Reality */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-wider">
                Local Climate & Elevation Factors
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Why Denver Homes Put Water Heaters Through Extreme Stress
              </h2>
              <div className="prose-content text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Denver homes put water heaters through demanding physical punishment. Sitting at an exact elevation of about a mile above sea level (5,280 feet), atmospheric air contains roughly 17% less oxygen than at sea level. This atmospheric thinning directly affects how natural gas appliances burn. Without precise high-altitude burner calibration, atmospheric water heaters burn rich, producing soot, delayed ignition "whooshes," and elevated carbon monoxide risks.
                </p>
                <p>
                  Furthermore, Colorado’s bitter winters mean municipal intake groundwater drops to a frigid 38°F to 42°F as high mountain snowmelt enters our reservoirs. To achieve a standard comfortable hot water output of 120°F, your water heater must overcome an enormous 80°F temperature rise. Storage tanks must burn gas or draw 240-volt electric element power for prolonged heating cycles, while undersized tankless units struggle to maintain sufficient flow rate.
                </p>
                <p>
                  Many of the Denver metro area’s homes are decades old—from historic brick bungalows in Capitol Hill, Highland, and Park Hill with tight, low-ceiling basement utility closets and older venting flues, to postwar homes in <Link href="/service-areas/lakewood/" className="body-link">Lakewood</Link> and mid-century ranches in <Link href="/service-areas/arvada/" className="body-link">Arvada</Link>. Our verified network of licensed Colorado plumbers understands these exact micro-conditions and brings specialized equipment to every service call.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/technician-explaining-homeowner.jpg"
                  alt="Denver water heater plumbing service"
                  width={800}
                  height={600}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy-900 text-white p-4 rounded-xl shadow-lg border border-slate-700 text-xs max-w-xs">
                <div className="font-bold text-accent mb-0.5">Elevation: 5,280 ft</div>
                <div>Requires certified high-altitude burner derating and flue draft testing.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Complete Service Silos Grid (14 Services) */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Comprehensive Front Range Coverage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Water Heater Services in Denver & Metro Suburbs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every specialized service below has its own dedicated guide with local diagnosis details, cost factors, and troubleshooting checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-sky-50 text-primary font-bold text-xs">
                      {service.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Denver, CO
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-navy-900 leading-snug">
                    <Link
                      href={`/${service.slug}/`}
                      className="hover:text-primary transition"
                    >
                      {service.name}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${service.slug}/`}
                    className="body-link text-xs font-bold"
                  >
                    Explore Service Guide →
                  </Link>
                  <a
                    href={siteConfig.phoneTel}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-accent hover:text-white text-slate-700 transition"
                    title={`Call for ${service.name}`}
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/water-heater-services/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition"
            >
              <span>Explore All 14 Dedicated Water Heater Services Hub</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Section 3: Suburb & Location Coverage */}
        <section className="bg-gradient-to-br from-slate-900 to-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700">
          <div className="space-y-4 mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs uppercase tracking-wider">
              <MapPin className="h-3.5 w-3.5" />
              20-Mile Metropolitan Radius
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Serving Denver and Surrounding Colorado Municipalities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
              In addition to central Denver neighborhoods, our network connects homeowners with licensed plumbers stationed throughout the metro area. Local municipal codes, water hardness, and elevation vary significantly between cities—choose your city below for dedicated local guidance:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationsData.map((loc) => (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}/`}
                className="p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-primary transition group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{loc.county}</span>
                    <span className="font-mono text-primary-light">{loc.elevation}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-white group-hover:text-primary-light transition mb-1.5">
                    {loc.name}, CO
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {loc.housingOverview}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-primary-light font-bold">
                  <span>View Local Services</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-3">
            <span>Also covering Denver neighborhoods:</span>
            <span className="text-slate-200">Capitol Hill</span> •
            <span className="text-slate-200">Highland / LoHi</span> •
            <span className="text-slate-200">Wash Park</span> •
            <span className="text-slate-200">Park Hill</span> •
            <span className="text-slate-200">Central Park (Stapleton)</span> •
            <span className="text-slate-200">Cherry Creek</span> •
            <span className="text-slate-200">Green Valley Ranch</span> •
            <span className="text-slate-200">Baker</span>
          </div>
        </section>

        {/* High Altitude & Colorado Code Visual Highlight */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative h-64 sm:h-80 w-full overflow-hidden">
            <Image
              src="/images/standing-tank-water-heater.jpg"
              alt="Denver Colorado residential water heater installation with expansion tank"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              High Altitude Compliance (5,280 FT)
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
              Built & Calibrated for Denver&apos;s Cold Climate &amp; Thin Air
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Water heaters along Colorado&apos;s Front Range endure extreme winter groundwater temperatures (often dropping below 40°F) and low atmospheric oxygen. Licensed plumbers in our network verify proper altitude burner derating, gas supply line sizing, thermal expansion tanks, and sealed-flue draft safety to ensure reliable, code-compliant hot water all year.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-bold text-navy-900">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> Expansion Tanks Standard
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <CheckCircle2 className="h-4 w-4" /> DORA-Licensed Technicians
              </span>
            </div>
          </div>
        </div>

        {/* Section 4: What Callers Should Have Ready (Component) */}
        <WhatCallersShouldPrepare />

        {/* Section 5: Why Homeowners Choose Our Network (Speed, Clarity, Trust) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-primary font-bold text-xs uppercase tracking-wider">
                Transparency First
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                Why Denver Homeowners Use Our Referral Network
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                People come to us for three simple reasons: speed, clarity, and trust. Searching for an honest plumber often turns into unanswered voicemails, vague arrival windows, and pushy sales tactics. We make the process simple and stress-free.
              </p>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 relative group">
                <Image
                  src="/images/plumber-with-wrench-standing.jpg"
                  alt="Vetted licensed Denver plumbing technician"
                  width={600}
                  height={400}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-navy-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-[11px] font-bold text-center">
                  Vetted Colorado Plumbing Licensees
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-sky-100 text-primary flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-lg text-navy-900">1. Instant Routing by Location</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your request is instantly routed to an independent licensed plumber who already services your specific ZIP code, avoiding delays and cross-town traffic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-orange-100 text-accent flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-lg text-navy-900">2. Upfront Written Pricing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before any wrench touches your pipe, the technician performs an on-site diagnosis and provides a firm written estimate. No bait-and-switch or surprise fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-lg text-navy-900">3. Licensed Colorado Vetting</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every provider holds mandatory licensing through the Colorado State Plumbing Board and maintains active commercial liability insurance. You stay in control of every hiring decision.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How Our Water Heater Service Works (5 Steps) */}
        <section className="bg-slate-100/80 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Step-by-Step Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              How Our Water Heater Service Works in Denver
            </h2>
            <p className="text-slate-600 text-sm">
              Getting reliable hot water back in your home takes just five straightforward steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-accent font-black text-xs uppercase">Step 01</div>
              <h4 className="font-bold text-sm text-navy-900">Call Dispatch</h4>
              <p className="text-xs text-slate-600">
                Call (456) 789-0123 and describe your issue: leaking tank, no hot water, or pilot outage.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-accent font-black text-xs uppercase">Step 02</div>
              <h4 className="font-bold text-sm text-navy-900">Local Matching</h4>
              <p className="text-xs text-slate-600">
                We match you with an independent licensed plumber in your area and confirm an arrival window.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-accent font-black text-xs uppercase">Step 03</div>
              <h4 className="font-bold text-sm text-navy-900">Diagnosis</h4>
              <p className="text-xs text-slate-600">
                The technician tests electrical supply, burner, thermocouple, safety relief valves, and tank integrity.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-accent font-black text-xs uppercase">Step 04</div>
              <h4 className="font-bold text-sm text-navy-900">Written Quote</h4>
              <p className="text-xs text-slate-600">
                You receive a clear, upfront written price detailing parts and labor before any work begins.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-accent font-black text-xs uppercase">Step 05</div>
              <h4 className="font-bold text-sm text-navy-900">Testing & Permit</h4>
              <p className="text-xs text-slate-600">
                Work is completed, tested for safety, and required city permits and inspections are managed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Common Questions (FAQs) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider">
                Homeowner Knowledgebase
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                Frequently Asked Water Heater Questions
              </h2>
            </div>
            <Link
              href="/faq/"
              className="text-xs font-bold text-primary hover:text-accent transition flex items-center gap-1"
            >
              View All 10+ FAQs →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                How do I know if my water heater needs repair or replacement?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Age, leaks, rust-colored water, repeated breakdowns and rising energy bills are the main clues. Storage tanks often last 8 to 12 years in Denver. If the steel tank itself is leaking from the bottom, replacement is mandatory. A plumber will compare repair costs versus a new high-efficiency unit.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                Are the plumbers licensed and insured?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yes. We connect you with independent plumbers who hold mandatory Colorado state plumbing licenses and carry full commercial liability insurance. You can verify credentials anytime through the Colorado Department of Regulatory Agencies (DORA).
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                How much does a typical water heater service call cost?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pricing depends on the fuel source, component failure, and time of visit. Minor repairs (elements, thermostats, thermocouples) range from $150 to $350. You will always receive a written price before work commences.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                How fast can a technician arrive in an emergency?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Same-day appointments are standard, and urgent calls (active water leaks, gas odors, freezing conditions) are prioritized for fast dispatch across Denver and all eight surrounding suburbs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Internal Links Matrix & External Authority Link */}
        <InternalLinkMatrix
          heading="Recommended Water Heater Services & Regional Colorado Resources"
          internalLinks={[
            {
              anchor: "Water Heater Repair in Denver",
              url: "/water-heater-repair-denver/",
              desc: "Complete diagnostic and repair solutions for gas and electric storage systems.",
            },
            {
              anchor: "Emergency Water Heater Repair (24/7)",
              url: "/emergency-water-heater-repair-denver/",
              desc: "Urgent prioritization for flooding tanks, gas smells, and total winter outages.",
            },
            {
              anchor: "Tankless Water Heater Installation",
              url: "/tankless-water-heater-installation-denver/",
              desc: "High-altitude sizing and continuous hot water on demand.",
            },
            {
              anchor: "Water Heater Services in Aurora, CO",
              url: "/service-areas/aurora/",
              desc: "Dedicated repair, replacement, and flushing across Arapahoe County.",
            },
            {
              anchor: "Water Heater Services in Lakewood, CO",
              url: "/service-areas/lakewood/",
              desc: "Foothills microclimate service for Green Mountain, Belmar, and Bear Creek.",
            },
          ]}
          externalLink={{
            anchor: "U.S. Department of Energy: Water Heating Standards",
            url: "https://www.energy.gov/energysaver/water-heating",
          }}
        />

        {/* Section 9: Primary Call-to-Action */}
        <PhoneCTASection
          title="Get Hot Water Back in Your Denver Home Today"
          subtitle="Speak directly to our local dispatch team at (456) 789-0123. We match you with an independent, licensed Colorado plumber who provides honest diagnosis, written pricing, and same-day scheduling."
          urgentNotice="Active leak or gas smell? Shut off supply valves immediately and call without delay."
        />
      </div>
    </div>
  );
}
