import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, Flame, ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-28 lg:pb-16 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Call-to-Action Bar */}
        <div className="bg-gradient-to-r from-navy-800 to-slate-900 border border-slate-700/60 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              Immediate Front Range Dispatch
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Woke Up to No Hot Water or a Leaking Tank?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              We connect you with independent, licensed Colorado plumbers who service your Denver neighborhood with upfront written pricing. No lead forms—call directly for immediate assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href={siteConfig.phoneTel}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-extrabold text-lg shadow-lg shadow-orange-500/30 transition transform hover:-translate-y-0.5"
            >
              <Phone className="h-6 w-6" />
              <span>Call {siteConfig.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md">
                <Flame className="h-6 w-6 text-accent" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block leading-tight">
                  Water Heater Repair
                </span>
                <span className="text-xs font-bold text-primary-light uppercase tracking-wider">
                  in Denver, CO
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Denver's premier water heater matching and lead-generation network. We connect homeowners and commercial facilities with independent, licensed Colorado plumbers who specialize in gas, electric, tankless, and hybrid water heating systems.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>24/7 Rapid Emergency Response</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-light" />
                <span>Denver, CO 80203 (Elevation 5,280 ft)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Licensed Plumbers • Upfront Pricing</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Water Heater Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/water-heater-repair-denver/" className="hover:text-primary-light transition">
                  Water Heater Repair in Denver
                </Link>
              </li>
              <li>
                <Link href="/emergency-water-heater-repair-denver/" className="text-accent hover:underline font-semibold">
                  🚨 Emergency Water Heater Repair
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair-denver/" className="hover:text-primary-light transition">
                  Tankless Water Heater Repair
                </Link>
              </li>
              <li>
                <Link href="/gas-water-heater-repair-denver/" className="hover:text-primary-light transition">
                  Gas Water Heater Repair
                </Link>
              </li>
              <li>
                <Link href="/electric-water-heater-repair-denver/" className="hover:text-primary-light transition">
                  Electric Water Heater Repair
                </Link>
              </li>
              <li>
                <Link href="/water-heater-installation-denver/" className="hover:text-primary-light transition">
                  Water Heater Installation & Sizing
                </Link>
              </li>
              <li>
                <Link href="/water-heater-replacement-denver/" className="hover:text-primary-light transition">
                  Water Heater Replacement
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-installation-denver/" className="hover:text-primary-light transition">
                  Tankless Water Heater Installation
                </Link>
              </li>
              <li>
                <Link href="/water-heater-flushing-denver/" className="hover:text-primary-light transition">
                  Water Heater Flushing & Descaling
                </Link>
              </li>
              <li>
                <Link href="/leaking-water-heater-repair-denver/" className="hover:text-primary-light transition">
                  Leaking Water Heater Repair
                </Link>
              </li>
              <li>
                <Link href="/commercial-water-heater-repair-denver/" className="hover:text-primary-light transition">
                  Commercial Hot Water Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Denver Metro Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/service-areas/aurora/" className="hover:text-primary-light transition flex justify-between">
                  <span>Aurora, CO</span>
                  <span className="text-slate-500">Arapahoe Co.</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas/lakewood/" className="hover:text-primary-light transition flex justify-between">
                  <span>Lakewood, CO</span>
                  <span className="text-slate-500">Jefferson Co.</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas/arvada/" className="hover:text-primary-light transition flex justify-between">
                  <span>Arvada, CO</span>
                  <span className="text-slate-500">Olde Town/NW</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas/westminster/" className="hover:text-primary-light transition flex justify-between">
                  <span>Westminster, CO</span>
                  <span className="text-slate-500">Adams Co.</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas/centennial/" className="hover:text-primary-light transition flex justify-between">
                  <span>Centennial, CO</span>
                  <span className="text-slate-500">South Metro</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas/littleton/" className="hover:text-primary-light transition flex justify-between">
                  <span>Littleton, CO</span>
                  <span className="text-slate-500">Historic/South</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas/thornton/" className="hover:text-primary-light transition flex justify-between">
                  <span>Thornton, CO</span>
                  <span className="text-slate-500">North Metro</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas/highlands-ranch/" className="hover:text-primary-light transition flex justify-between">
                  <span>Highlands Ranch, CO</span>
                  <span className="text-slate-500">Douglas Co.</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/service-areas/" className="text-primary-light font-bold hover:underline">
                  View All Coverage Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Visible Google Map per Prompt Requirement */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" />
                Denver Service Map
              </span>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:underline text-[11px] inline-flex items-center gap-0.5"
              >
                Open Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Serving central Denver and the entire 20-mile metropolitan radius.
            </p>

            {/* Embedded interactive Google Map iframe */}
            <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-700 shadow-md relative bg-slate-800">
              <iframe
                title="Denver Water Heater Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.5646194723!2d-105.02102179999999!3d39.7392358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-150 contrast-105"
              />
            </div>

            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" />
              <span>View Verified Denver Location on Maps</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/about/" className="hover:text-slate-300 transition">
              About Our Network
            </Link>
            <span>•</span>
            <Link href="/contact/" className="hover:text-slate-300 transition">
              Phone-Only Dispatch
            </Link>
            <span>•</span>
            <Link href="/faq/" className="hover:text-slate-300 transition">
              FAQ
            </Link>
            <span>•</span>
            <a
              href="https://dpo.colorado.gov/Plumbing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition inline-flex items-center gap-0.5"
            >
              Verify Colorado DORA Plumbing License <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-4 text-[11px] text-slate-500 text-center leading-relaxed max-w-4xl mx-auto">
          Notice: {siteConfig.name} is an independent plumbing matching and referral service. We connect Colorado property owners with independent, licensed, and insured plumbing contractors who service their specific neighborhood. All diagnostic quotes, warranties, permits, and guarantees are issued directly by the servicing plumbing contractor prior to work commencement. If you smell natural gas, evacuate immediately and dial 911 or Xcel Energy at 1-800-895-2999.
        </div>
      </div>
    </footer>
  );
}
