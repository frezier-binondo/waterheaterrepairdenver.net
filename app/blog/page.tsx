import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  Phone,
  Flame,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { blogPosts } from "@/data/blogs";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

export const metadata: Metadata = {
  title: "Denver Water Heater Blog & Guides | Troubleshooting & Tips",
  description:
    "Expert homeowner guides on Denver water heater troubleshooting, high-altitude performance, sediment flushing, anode rods, and leak prevention.",
};

export default function BlogHubPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-primary-light font-bold text-xs uppercase tracking-wider mb-4 border border-slate-700">
            <BookOpen className="h-4 w-4 text-accent" />
            Homeowner Knowledgebase & Diagnostics
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Denver Water Heater Troubleshooting & Advisory Guides
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Written by experienced Colorado master plumbers. Explore in-depth 1,000+ word guides covering altitude combustion, sediment noises, emergency leak shutoff, anode rod maintenance, and repair vs. replacement economics.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-extrabold text-base shadow-lg transition"
            >
              <Phone className="h-5 w-5" />
              <span>Call For Diagnosis: {siteConfig.phoneFormatted}</span>
            </a>
            <span className="text-xs text-slate-400">
              ⚡ Available 24/7 Across the Denver Metropolitan Area
            </span>
          </div>
        </div>
      </section>

      {/* Main Blog Post Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Featured Post (Post 1) */}
        {blogPosts.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                  Featured Guide
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {blogPosts[0].publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {blogPosts[0].readTime}
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-navy-900 font-semibold">
                    {blogPosts[0].category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
                  <Link href={`/blog/${blogPosts[0].slug}/`} className="hover:text-primary transition">
                    {blogPosts[0].title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blog/${blogPosts[0].slug}/`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-primary text-white text-xs font-bold transition"
                  >
                    <span>Read Full 1,500+ Word Guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 11 Remaining Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <h3 className="text-2xl font-black text-navy-900">
              All Denver Homeowner Water Heating Guides
            </h3>
            <span className="text-xs font-bold text-slate-500">
              {blogPosts.length} Comprehensive Articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-md text-[11px] font-bold">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-extrabold text-lg text-navy-900 leading-snug">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="hover:text-primary transition"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="body-link text-xs font-bold"
                  >
                    Read Guide →
                  </Link>
                  <span className="text-[11px] text-slate-400">
                    1,000+ Words
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Internal Link Matrix */}
        <InternalLinkMatrix
          heading="Top Service Silos Referenced in Our Denver Guides"
          internalLinks={[
            {
              anchor: "Water Heater Flushing & Descaling",
              url: "/water-heater-flushing-denver/",
              desc: "Prevent calcified mineral sediment and quiet noisy tanks.",
            },
            {
              anchor: "Tankless Water Heater Installation",
              url: "/tankless-water-heater-installation-denver/",
              desc: "Continuous hot water on demand sized for Denver winter groundwater.",
            },
            {
              anchor: "Emergency Water Heater Repair (24/7)",
              url: "/emergency-water-heater-repair-denver/",
              desc: "Rapid response for bursting tanks and winter freeze heat loss.",
            },
            {
              anchor: "Gas Water Heater High-Altitude Repair",
              url: "/gas-water-heater-repair-denver/",
              desc: "Thermocouple, draft venting, and 5,280 ft altitude calibrations.",
            },
            {
              anchor: "Water Heater Services Directory",
              url: "/water-heater-services/",
              desc: "Complete directory of all 14 water heater services in Denver.",
            },
          ]}
          externalLink={{
            anchor: "U.S. Department of Energy: Water Heating Efficiency Guidelines",
            url: "https://www.energy.gov/energysaver/water-heating",
          }}
        />

        {/* Final CTA */}
        <PhoneCTASection
          title="Have a Water Heater Problem Not Covered Here?"
          subtitle="Call our local Denver dispatch line at (456) 789-0123. Describe your symptoms and get matched with an independent licensed Colorado plumber with same-day availability."
        />
      </div>
    </div>
  );
}
