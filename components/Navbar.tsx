"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Flame, MapPin, Clock, ShieldCheck, Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top emergency announcement bar */}
      <div className="bg-navy-900 text-slate-100 text-xs py-2 px-4 border-b border-navy-700">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-accent font-semibold">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              24/7 Rapid Emergency Dispatch
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-primary-light" />
              Serving Denver Metro & Suburbs (Elev. 5,280 ft)
            </span>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Licensed Colorado Master Plumbers
            </span>
            <a
              href={siteConfig.phoneTel}
              className="font-bold text-white bg-accent hover:bg-accent-dark px-2.5 py-0.5 rounded transition flex items-center gap-1"
            >
              <Phone className="h-3 w-3" />
              Call 24/7: {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-navy-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Flame className="h-6 w-6 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-navy-900 leading-tight tracking-tight">
                Water Heater Repair
              </span>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                in Denver, CO
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-primary transition py-2">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/water-heater-services/"
                className="flex items-center gap-1 hover:text-primary transition"
              >
                Services
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </Link>
              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 py-3 px-2 grid grid-cols-1 gap-1 z-50">
                  <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Solutions
                  </div>
                  <Link
                    href="/water-heater-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Water Heater Repair (Gas & Electric)
                  </Link>
                  <Link
                    href="/emergency-water-heater-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-accent transition text-xs font-bold text-accent"
                  >
                    🚨 Emergency Water Heater Repair (24/7)
                  </Link>
                  <Link
                    href="/tankless-water-heater-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Tankless Water Heater Repair
                  </Link>
                  <Link
                    href="/gas-water-heater-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Gas Water Heater Repair
                  </Link>
                  <Link
                    href="/electric-water-heater-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Electric Water Heater Repair
                  </Link>
                  <Link
                    href="/water-heater-installation-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Water Heater Installation & Sizing
                  </Link>
                  <Link
                    href="/water-heater-replacement-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Water Heater Replacement (Same-Day)
                  </Link>
                  <Link
                    href="/tankless-water-heater-installation-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Tankless Water Heater Installation
                  </Link>
                  <Link
                    href="/water-heater-maintenance-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Annual Tune-Ups & Maintenance
                  </Link>
                  <Link
                    href="/water-heater-flushing-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Water Heater Flushing & Descaling
                  </Link>
                  <Link
                    href="/leaking-water-heater-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Leaking Water Heater Diagnosis
                  </Link>
                  <Link
                    href="/water-heater-pilot-light-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Pilot Light & Thermocouple Repair
                  </Link>
                  <Link
                    href="/commercial-water-heater-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Commercial Hot Water Systems
                  </Link>
                  <Link
                    href="/hybrid-water-heater-repair-denver/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800"
                  >
                    Hybrid Heat Pump Repair
                  </Link>
                  <div className="border-t border-slate-100 pt-2 mt-1">
                    <Link
                      href="/water-heater-services/"
                      className="block text-center text-xs font-bold text-primary hover:underline"
                    >
                      View All 14 Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <Link
                href="/service-areas/"
                className="flex items-center gap-1 hover:text-primary transition"
              >
                Service Areas
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </Link>
              {locationsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-3 px-2 grid grid-cols-1 gap-1 z-50">
                  <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Front Range Metro
                  </div>
                  <Link
                    href="/service-areas/aurora/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800 flex justify-between"
                  >
                    <span>Aurora, CO</span>
                    <span className="text-slate-400 text-[10px]">E. Metro</span>
                  </Link>
                  <Link
                    href="/service-areas/lakewood/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800 flex justify-between"
                  >
                    <span>Lakewood, CO</span>
                    <span className="text-slate-400 text-[10px]">W. Foothills</span>
                  </Link>
                  <Link
                    href="/service-areas/arvada/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800 flex justify-between"
                  >
                    <span>Arvada, CO</span>
                    <span className="text-slate-400 text-[10px]">NW Metro</span>
                  </Link>
                  <Link
                    href="/service-areas/westminster/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800 flex justify-between"
                  >
                    <span>Westminster, CO</span>
                    <span className="text-slate-400 text-[10px]">North</span>
                  </Link>
                  <Link
                    href="/service-areas/centennial/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800 flex justify-between"
                  >
                    <span>Centennial, CO</span>
                    <span className="text-slate-400 text-[10px]">South</span>
                  </Link>
                  <Link
                    href="/service-areas/littleton/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800 flex justify-between"
                  >
                    <span>Littleton, CO</span>
                    <span className="text-slate-400 text-[10px]">SW Metro</span>
                  </Link>
                  <Link
                    href="/service-areas/thornton/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800 flex justify-between"
                  >
                    <span>Thornton, CO</span>
                    <span className="text-slate-400 text-[10px]">NE Metro</span>
                  </Link>
                  <Link
                    href="/service-areas/highlands-ranch/"
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-primary transition text-xs font-medium text-slate-800 flex justify-between"
                  >
                    <span>Highlands Ranch, CO</span>
                    <span className="text-slate-400 text-[10px]">Douglas Co.</span>
                  </Link>
                  <div className="border-t border-slate-100 pt-2 mt-1">
                    <Link
                      href="/service-areas/"
                      className="block text-center text-xs font-bold text-primary hover:underline"
                    >
                      All Denver Coverage →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog/" className="hover:text-primary transition py-2">
              Guides & Blog
            </Link>

            <Link href="/faq/" className="hover:text-primary transition py-2">
              FAQ
            </Link>

            <Link href="/about/" className="hover:text-primary transition py-2">
              About
            </Link>

            <Link href="/contact/" className="hover:text-primary transition py-2">
              Contact
            </Link>
          </div>

          {/* Right Phone CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={siteConfig.phoneTel}
              className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-accent-dark text-white font-bold shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5 animate-bounce" />
              <div className="text-left leading-none">
                <span className="block text-[10px] uppercase font-bold text-orange-200 tracking-wider">
                  Need Help Fast? Call
                </span>
                <span className="text-base font-extrabold tracking-tight">
                  {siteConfig.phoneFormatted}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-900 hover:bg-slate-100 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/water-heater-services/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-primary"
          >
            All Water Heater Services (14 Silos)
          </Link>
          <div className="pl-4 space-y-1 text-sm text-slate-600">
            <Link
              href="/water-heater-repair-denver/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-xs hover:text-primary"
            >
              • Water Heater Repair
            </Link>
            <Link
              href="/emergency-water-heater-repair-denver/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-xs text-accent font-bold"
            >
              • 🚨 Emergency Repair (24/7)
            </Link>
            <Link
              href="/tankless-water-heater-repair-denver/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-xs hover:text-primary"
            >
              • Tankless Repair
            </Link>
            <Link
              href="/water-heater-replacement-denver/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-xs hover:text-primary"
            >
              • Water Heater Replacement
            </Link>
            <Link
              href="/water-heater-flushing-denver/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-xs hover:text-primary"
            >
              • Flushing & Descaling
            </Link>
          </div>

          <Link
            href="/service-areas/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-primary"
          >
            Service Areas (8 Cities)
          </Link>
          <div className="pl-4 grid grid-cols-2 gap-1 text-xs text-slate-600">
            <Link href="/service-areas/aurora/" onClick={() => setMobileMenuOpen(false)}>
              • Aurora
            </Link>
            <Link href="/service-areas/lakewood/" onClick={() => setMobileMenuOpen(false)}>
              • Lakewood
            </Link>
            <Link href="/service-areas/arvada/" onClick={() => setMobileMenuOpen(false)}>
              • Arvada
            </Link>
            <Link href="/service-areas/westminster/" onClick={() => setMobileMenuOpen(false)}>
              • Westminster
            </Link>
            <Link href="/service-areas/centennial/" onClick={() => setMobileMenuOpen(false)}>
              • Centennial
            </Link>
            <Link href="/service-areas/littleton/" onClick={() => setMobileMenuOpen(false)}>
              • Littleton
            </Link>
            <Link href="/service-areas/thornton/" onClick={() => setMobileMenuOpen(false)}>
              • Thornton
            </Link>
            <Link href="/service-areas/highlands-ranch/" onClick={() => setMobileMenuOpen(false)}>
              • Highlands Ranch
            </Link>
          </div>

          <Link
            href="/blog/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-primary"
          >
            Troubleshooting Guides & Blog
          </Link>
          <Link
            href="/faq/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-primary"
          >
            Homeowner FAQs
          </Link>
          <Link
            href="/about/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-primary"
          >
            About Our Network
          </Link>
          <Link
            href="/contact/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-slate-800 hover:text-primary"
          >
            Contact & Location Map
          </Link>

          <div className="pt-2">
            <a
              href={siteConfig.phoneTel}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-xl font-extrabold text-base shadow-lg transition"
            >
              <Phone className="h-5 w-5" />
              CALL NOW: {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
