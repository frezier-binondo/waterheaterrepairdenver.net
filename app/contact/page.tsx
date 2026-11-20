import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  FileText,
  Flame,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { locationsData } from "@/data/locations";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

export const metadata: Metadata = {
  title: "Contact Us | Water Heater Repair in Denver",
  description:
    "Request water heater repair or replacement in Denver, CO. Phone-only rapid dispatch. Speak with a licensed local plumber. Call (456) 789-0123.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-primary-light font-bold text-xs uppercase tracking-wider mb-4 border border-slate-700">
            <Phone className="h-4 w-4 text-accent" />
            Phone-Only Direct Dispatch
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Contact Denver Water Heater Service & Request a Quote
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            We operate a phone-only matching service: no confusing web forms, no delayed email callbacks. You call our local dispatch, describe your situation, and get connected directly with an independent, licensed Colorado plumber who services your specific neighborhood with upfront written pricing.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-black text-lg shadow-xl shadow-orange-500/30 transition transform hover:scale-105 active:scale-95"
            >
              <Phone className="h-6 w-6 animate-bounce" />
              <span>Call Now: {siteConfig.phoneFormatted}</span>
            </a>
            <span className="text-xs text-slate-400">
              ⚡ 24/7 Immediate Emergency Dispatch Across Denver Metro
            </span>
          </div>
        </div>
      </section>

      {/* Main Body Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Contact Details & Interactive Map Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <Image
                src="/images/technician-explaining-homeowner.jpg"
                alt="Denver water heater customer consultation and phone dispatch"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-accent">
                Direct Communication
              </span>
              <h2 className="text-2xl font-black text-navy-900">
                How to Reach Us
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Because water heater leaks and heating outages are time-sensitive, calling our direct line is the fastest path to emergency dispatch.
              </p>
            </div>

            <div className="space-y-4 pt-2 text-sm">
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="font-extrabold text-navy-900 block">Phone Dispatch:</span>
                  <a
                    href={siteConfig.phoneTel}
                    className="text-lg font-black text-primary hover:text-primary-hover hover:underline"
                  >
                    {siteConfig.phoneFormatted}
                  </a>
                  <span className="text-xs text-slate-500 block">Available 24 hours a day, 7 days a week</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <span className="font-extrabold text-navy-900 block">Central Service Office:</span>
                  <p className="text-xs text-slate-600">
                    {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </p>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Elevation: {siteConfig.geo.elevation}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Clock className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-extrabold text-navy-900 block">Dispatch Availability:</span>
                  <p className="text-xs text-slate-600">
                    Emergency calls: 24/7/365 priority routing. Standard appointments scheduled Monday through Saturday.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-extrabold text-navy-900 block">Plumbing Verification:</span>
                  <p className="text-xs text-slate-600">
                    All plumbers are licensed by the State of Colorado and maintain full commercial liability coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Map Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                  Metropolitan Coverage
                </span>
                <h3 className="text-2xl font-black text-navy-900">
                  Denver Service Area Map
                </h3>
              </div>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-50 text-primary hover:bg-sky-100 text-xs font-bold transition"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <p className="text-xs text-slate-600">
              Our network covers all residential and commercial addresses throughout Denver, <Link href="/service-areas/aurora/" className="body-link">Aurora</Link>, <Link href="/service-areas/lakewood/" className="body-link">Lakewood</Link>, <Link href="/service-areas/arvada/" className="body-link">Arvada</Link>, <Link href="/service-areas/westminster/" className="body-link">Westminster</Link>, <Link href="/service-areas/centennial/" className="body-link">Centennial</Link>, <Link href="/service-areas/littleton/" className="body-link">Littleton</Link>, <Link href="/service-areas/thornton/" className="body-link">Thornton</Link>, and <Link href="/service-areas/highlands-ranch/" className="body-link">Highlands Ranch</Link>.
            </p>

            {/* Embedded Google Map */}
            <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              <iframe
                title="Denver Water Heater Service Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.5646194723!2d-105.02102179999999!3d39.7392358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-150"
              />
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" />
                Denver, Colorado and the surrounding 20-mile radius
              </span>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </section>

        {/* On-Site Inspection Visual Card (Alternated: Image on Right) */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-3 lg:order-1">
            <span className="text-xs font-black uppercase tracking-wider text-primary bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Clear &amp; Transparent Dispatch
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-navy-900 leading-tight">
              What Happens When You Call (456) 789-0123
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              You speak immediately with our Denver intake coordinator rather than filling out an impersonal web form. We collect your water heater type (gas, electric, or tankless) and symptoms, and promptly route your call to an independent, insured Colorado plumber operating in your immediate neighborhood.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs font-bold text-navy-900">
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> No Automated Wait Loops
              </span>
              <span className="flex items-center gap-1 text-primary">
                <CheckCircle2 className="h-4 w-4" /> Direct Contact with Local Pros
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 relative h-56 sm:h-64 w-full overflow-hidden lg:order-2">
            <Image
              src="/images/technician-inspection-clipboard.jpg"
              alt="Licensed technician completing safety check and written estimate in Denver"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Safety First Alert */}
        <section className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-red-800 font-extrabold text-sm uppercase tracking-wide">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
            Safety First: Situations That Cannot Wait
          </div>
          <div className="prose-content text-xs sm:text-sm text-red-900 leading-relaxed space-y-2">
            <p>
              <strong>If you smell natural gas or rotten eggs:</strong> Leave your residence immediately. Do not touch electrical light switches, do not use garage door openers, and do not use a phone inside. Call your natural gas utility (Xcel Energy at 1-800-895-2999) or dial 911 from outside.
            </p>
            <p>
              <strong>If water is gushing from your heater:</strong> Turn off the cold water shutoff valve on top of the tank clockwise immediately, turn off the 240V breaker or gas valve, and call our emergency line at <a href={siteConfig.phoneTel} className="font-bold underline text-red-900">{siteConfig.phoneFormatted}</a>.
            </p>
          </div>
        </section>

        {/* What Callers Should Prepare */}
        <WhatCallersShouldPrepare />

        {/* Internal Link Matrix */}
        <InternalLinkMatrix
          heading="Recommended Services & Regional Resources"
          internalLinks={[
            {
              anchor: "Water Heater Repair in Denver",
              url: "/water-heater-repair-denver/",
              desc: "Fast diagnosis and same-day repair for gas, electric, and tankless units.",
            },
            {
              anchor: "Emergency Water Heater Repair (24/7)",
              url: "/emergency-water-heater-repair-denver/",
              desc: "Immediate priority dispatch for leaking tanks and winter freeze outages.",
            },
            {
              anchor: "Water Heater Replacement (Planned Swaps)",
              url: "/water-heater-replacement-denver/",
              desc: "Upfront pricing for 40, 50, and 75-gallon high-recovery tanks.",
            },
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
          externalLink={{
            anchor: "U.S. Consumer Product Safety Commission Carbon Monoxide Safety Center",
            url: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center",
          }}
        />

        {/* Final CTA */}
        <PhoneCTASection
          title="Speak Directly With a Denver Water Heater Specialist"
          subtitle="No forms, no waiting. Call (456) 789-0123 to describe your issue and receive an honest assessment, same-day scheduling, and clear upfront pricing."
        />
      </div>
    </div>
  );
}
