"use client";

import React from "react";
import { Phone, Clock, ShieldCheck, Flame } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function StickyMobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy-900/95 backdrop-blur-md border-t border-slate-700/80 px-3 py-2.5 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Left Status info */}
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5 text-accent text-[11px] font-bold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
            Live Dispatch
          </div>
          <span className="text-white font-extrabold text-sm sm:text-base">
            {siteConfig.phoneFormatted}
          </span>
          <span className="text-[10px] text-slate-400">
            Denver & Surrounding Suburbs
          </span>
        </div>

        {/* Big Tap to Call Action Button */}
        <a
          href={siteConfig.phoneTel}
          className="flex-1 max-w-[210px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-accent hover:bg-accent-dark active:scale-95 text-white font-black text-sm tracking-wide shadow-lg shadow-orange-500/40 transition transform"
        >
          <Phone className="h-4 w-4 animate-bounce" />
          <span>TAP TO CALL</span>
        </a>
      </div>
    </div>
  );
}
