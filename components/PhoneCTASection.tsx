import React from "react";
import { Phone, Clock, ShieldAlert, Award, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface PhoneCTASectionProps {
  title?: string;
  subtitle?: string;
  urgentNotice?: string;
}

export default function PhoneCTASection({
  title = "Don't Suffer Through an Ice-Cold Denver Morning",
  subtitle = "Our matching service immediately connects you with an independent, licensed Colorado plumber who services your specific neighborhood with upfront written pricing.",
  urgentNotice = "Smell gas or see active flooding? Shut off the supply valve and call immediately.",
}: PhoneCTASectionProps) {
  return (
    <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border-2 border-primary/40 text-center relative overflow-hidden my-12">
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/50 text-accent font-extrabold text-xs uppercase tracking-wider">
          <Clock className="h-4 w-4" />
          Average Response Window: Same-Day Dispatch
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>

        {urgentNotice && (
          <div className="inline-flex items-center gap-2 bg-red-950/70 border border-red-700/60 px-4 py-2 rounded-xl text-xs text-red-200">
            <ShieldAlert className="h-4 w-4 text-accent flex-shrink-0" />
            <span>{urgentNotice}</span>
          </div>
        )}

        <div className="pt-2">
          <a
            href={siteConfig.phoneTel}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-accent hover:bg-accent-dark text-white font-black text-xl sm:text-2xl shadow-xl shadow-orange-500/40 transition-all transform hover:scale-105 active:scale-95"
          >
            <Phone className="h-7 w-7 animate-bounce" />
            <span>Call Now: {siteConfig.phoneFormatted}</span>
          </a>
          <p className="text-xs text-slate-400 mt-3">
            Phone-only matching service • Licensed & Insured Plumbers • Upfront Written Estimates
          </p>
        </div>
      </div>
    </div>
  );
}
