import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { locationsData } from "@/data/locations";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

export const metadata: Metadata = {
  title: "Water Heater Service Areas",
  description:
    "We connect Denver, Aurora, Lakewood, Arvada, Westminster, Centennial, Littleton, Thornton and Highlands Ranch homes with licensed local water heater pros.",
};

export default function ServiceAreasHubPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-primary-light font-bold text-xs uppercase tracking-wider mb-4 border border-slate-700">
            <MapPin className="h-4 w-4 text-accent" />
            20-Mile Metropolitan Radius
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Water Heater Service Areas Around Denver, CO
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Our network of licensed, insured Colorado plumbers covers the City and County of Denver and every major suburban community across Arapahoe, Jefferson, Adams, and Douglas counties. Local knowledge matters in water heater work—elevation, municipal water hardness, and building inspection rules change from one city to the next.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-extrabold text-base shadow-lg transition"
            >
              <Phone className="h-5 w-5" />
              <span>Call For Local Dispatch: {siteConfig.phoneFormatted}</span>
            </a>
            <span className="text-xs text-slate-400">
              ⚡ Same-Day Service Dispatched by Neighborhood ZIP Code
            </span>
          </div>
        </div>
      </section>

      {/* Main Content (2000+ words across comprehensive municipality guides) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Denver Core City Profile */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-primary font-bold text-xs uppercase tracking-wider">
                Hub Market • Denver Proper
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Denver, CO: Historic Architecture & Mile-High Combustion
              </h2>
              <div className="prose-content text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Denver is a city of architectural contrasts, and its domestic plumbing systems reflect over a century of varied construction styles. Historic neighborhoods such as Capitol Hill, Highland (LoHi), Baker, and Park Hill are filled with early twentieth-century brick bungalows, Queen Anne Victorians, and Craftsman homes. These residences frequently feature tight, low-ceiling basement utility spaces, older 1/2-inch black iron gas supply piping, and vertical chimney flues that predate current venting codes.
                </p>
                <p>
                  In contrast, newer master-planned developments in Central Park (Stapleton), Lowry, Green Valley Ranch, and downtown LoDo feature modern high-density lofts, townhomes, and single-family houses with compact mechanical closets, high-efficiency power-vent heaters, or tankless on-demand units.
                </p>
                <p>
                  Sitting at exactly 5,280 feet above sea level, Denver experiences lower atmospheric oxygen levels that require calibrated high-altitude burner orifices to prevent incomplete gas combustion, soot accumulation, and hazardous carbon monoxide backdrafting. Furthermore, sub-40°F winter incoming mountain groundwater requires water heaters to deliver an 80°F temperature rise, necessitating annual maintenance to clear heat-robbing mineral sediment.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/water-heater-services/"
                  className="body-link text-sm font-bold"
                >
                  Explore All Water Heater Services in Denver →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/standing-tank-water-heater.jpg"
                  alt="Denver Colorado skyline and residential homes"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Suburb-by-Suburb Detailed Guides */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">
              Surrounding Municipalities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Metropolitan Suburbs Within 20 Miles of Denver
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Each municipality has unique water hardness profiles, building inspection divisions, and microclimates. Click any city to view all 14 specialized services available there:
            </p>
          </div>

          <div className="space-y-8">
            {locationsData.map((city, idx) => (
              <div
                key={city.slug}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm hover:border-primary/40 transition-all space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-extrabold text-accent uppercase tracking-wider">
                      {city.county} • Elev. {city.elevation}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                      <Link
                        href={`/service-areas/${city.slug}/`}
                        className="hover:text-primary transition"
                      >
                        {city.name}, CO Water Heater Services
                      </Link>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/service-areas/${city.slug}/`}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-primary text-white text-xs font-bold transition flex items-center gap-1"
                    >
                      <span>City Hub</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={siteConfig.phoneTel}
                      className="p-2 rounded-xl bg-accent hover:bg-accent-dark text-white transition"
                      title={`Call for service in ${city.name}`}
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 prose-content text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3">
                    <p><strong>Housing & Mechanical Context:</strong> {city.housingOverview}</p>
                    <p><strong>Water Chemistry & Hardness:</strong> {city.waterCharacteristics}</p>
                    <p><strong>Front Range Microclimate:</strong> {city.weatherNotes}</p>
                    <p><strong>Municipal Permitting:</strong> {city.permitInfo}</p>
                  </div>

                  <div className="lg:col-span-4 space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-xs">
                    <span className="font-extrabold text-navy-900 block text-sm">
                      Neighborhoods & ZIPs Served:
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-slate-700">
                      {city.neighborhoods.map((n, nIdx) => (
                        <span
                          key={nIdx}
                          className="bg-white px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 text-slate-500 font-mono text-[11px]">
                      ZIP Codes: {city.zipCodes.join(", ")}
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <Link
                        href={`/water-heater-repair-denver/${city.slug}/`}
                        className="body-link font-bold text-xs"
                      >
                        Water Heater Repair in {city.name} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rapid Suburban Dispatch Visual Card */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative h-64 sm:h-72 w-full overflow-hidden">
            <Image
              src="/images/outdoor-tankless-service-truck.jpg"
              alt="Mobile water heater service truck dispatched across Denver Front Range suburbs"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Direct Phone Dispatch
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
              Fully Equipped Trucks Stationed Throughout the 20-Mile Metro Radius
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              When emergency water heater failures happen during a Colorado winter storm, waiting days for parts is not an option. Technicians in our referral network carry universal thermocouples, 240V high-wattage electric heating elements, modern digital thermostats, and high-altitude pilot assemblies right on their vehicles for single-visit restorations.
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs font-bold text-navy-900">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> Average Arrival Under 90 Min
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <CheckCircle2 className="h-4 w-4" /> Fully Stocked Mobile Inventory
              </span>
            </div>
          </div>
        </div>

        {/* What Callers Should Prepare */}
        <WhatCallersShouldPrepare />

        {/* Internal Link Matrix (5 Internal Links, 1 External Link) */}
        <InternalLinkMatrix
          heading="Top Regional Municipalities & Official Colorado Resources"
          internalLinks={[
            {
              anchor: "Water Heater Services in Aurora, CO",
              url: "/service-areas/aurora/",
              desc: "Complete coverage across Original Aurora, Southlands, and Saddle Rock.",
            },
            {
              anchor: "Water Heater Services in Lakewood, CO",
              url: "/service-areas/lakewood/",
              desc: "Foothills service across Belmar, Green Mountain, and Bear Creek.",
            },
            {
              anchor: "Water Heater Services in Arvada, CO",
              url: "/service-areas/arvada/",
              desc: "Olde Town and Northwest Arvada tankless and storage services.",
            },
            {
              anchor: "Water Heater Services in Westminster, CO",
              url: "/service-areas/westminster/",
              desc: "North metro residential and commercial plumbing dispatch.",
            },
            {
              anchor: "Water Heater Services in Highlands Ranch, CO",
              url: "/service-areas/highlands-ranch/",
              desc: "Douglas County master-planned community tankless conversions.",
            },
          ]}
          externalLink={{
            anchor: "Colorado DORA: State Plumbing Board Licensing Verification",
            url: "https://dpo.colorado.gov/Plumbing",
          }}
        />

        {/* Final CTA */}
        <PhoneCTASection
          title="Looking for a Water Heater Plumber in Your Neighborhood?"
          subtitle="Call (303) 386-0029. Tell us your address and what you are seeing—no hot water, a leak, or an aging tank. We connect you with an independent, licensed Colorado plumber with same-day availability."
        />
      </div>
    </div>
  );
}
