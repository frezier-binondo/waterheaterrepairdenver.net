import React from "react";
import Link from "next/link";
import { Link2, ExternalLink, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface InternalLinkItem {
  anchor: string;
  url: string;
  desc?: string;
}

interface ExternalLinkItem {
  anchor: string;
  url: string;
}

interface InternalLinkMatrixProps {
  internalLinks: InternalLinkItem[];
  externalLink: ExternalLinkItem;
  heading?: string;
}

export default function InternalLinkMatrix({
  internalLinks,
  externalLink,
  heading = "Related Denver Water Heater Services & Resources",
}: InternalLinkMatrixProps) {
  // Ensure at least 5 internal links
  const links = internalLinks.slice(0, 5);

  return (
    <div className="my-10 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
        <Link2 className="h-5 w-5 text-primary" />
        <h3 className="font-extrabold text-lg sm:text-xl text-navy-900 tracking-tight">
          {heading}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {links.map((link, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-sky-50/60 border border-slate-100 transition-colors"
          >
            <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <div>
              <Link href={link.url} className="body-link text-sm font-bold block">
                {link.anchor}
              </Link>
              {link.desc && (
                <p className="text-xs text-slate-500 mt-0.5">{link.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* External Reference Link */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Verified Colorado Authority Reference:</span>
        </div>
        <a
          href={externalLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="body-link inline-flex items-center gap-1 font-semibold"
        >
          <span>{externalLink.anchor}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
