import React from "react";
import { Phone, CheckCircle2, AlertTriangle, HelpCircle, FileText, Wrench } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function WhatCallersShouldPrepare() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-700 my-12 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs uppercase tracking-wider">
            <Phone className="h-3.5 w-3.5" />
            Phone-Only Fast Dispatch
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            What Callers Should Have Ready
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            We don't make you wait on slow web forms. When you call{" "}
            <a href={siteConfig.phoneTel} className="text-accent font-bold hover:underline">
              {siteConfig.phoneFormatted}
            </a>
            , having these 5 quick details helps our licensed Colorado plumbers arrive with the exact replacement components or new tank for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {siteConfig.whatToHaveReady.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl border transition-all ${
                index === 4
                  ? "md:col-span-2 bg-red-950/40 border-red-800/80 text-red-100"
                  : "bg-slate-800/60 border-slate-700/80 hover:border-primary/60 text-slate-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-xl mt-0.5 ${
                    index === 4 ? "bg-red-900/60 text-red-300" : "bg-primary/20 text-primary-light"
                  }`}
                >
                  {index === 4 ? (
                    <AlertTriangle className="h-5 w-5 text-accent" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-base text-white mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Immediate Call Banner */}
        <div className="bg-navy-800/90 border border-slate-700 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-white text-base">
              Ready to restore your hot water?
            </h4>
            <p className="text-xs text-slate-400">
              Live technicians dispatched across Denver, Aurora, Lakewood, Arvada, Westminster & more.
            </p>
          </div>
          <a
            href={siteConfig.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-black text-base shadow-lg shadow-orange-500/30 transition transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now: {siteConfig.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
