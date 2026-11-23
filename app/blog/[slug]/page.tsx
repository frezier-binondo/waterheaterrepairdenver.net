import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  Tag,
  Phone,
  ArrowLeft,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { blogPosts, BlogPost } from "@/data/blogs";
import WhatCallersShouldPrepare from "@/components/WhatCallersShouldPrepare";
import InternalLinkMatrix from "@/components/InternalLinkMatrix";
import PhoneCTASection from "@/components/PhoneCTASection";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Guide Not Found" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Ensure body image is distinct from hero
  const inArticleImage =
    post.image === "/images/plumber-kneeling-service.jpg"
      ? "/images/wrench-pipe-fitting.jpg"
      : "/images/plumber-kneeling-service.jpg";

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.domain}/favicon.ico`,
      },
    },
    "datePublished": post.publishedAt,
    "description": post.metaDescription,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-12 sm:py-16 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-light hover:text-white transition mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Guides & Blog
          </Link>

          <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 flex-wrap">
            <span className="px-2.5 py-1 rounded-md bg-accent/20 border border-accent/40 text-accent font-bold">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary-light" />
              <span>Written by {post.author}</span>
            </div>
            <a
              href={siteConfig.phoneTel}
              className="font-bold text-accent hover:underline flex items-center gap-1"
            >
              <Phone className="h-3.5 w-3.5" />
              Need Emergency Help? Call {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm prose-content text-slate-700 leading-relaxed text-sm sm:text-base space-y-6">
          {/* Format markdown headers and paragraphs */}
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("# ")) {
              return (
                <h1
                  key={idx}
                  className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight pt-4 pb-2 border-b border-slate-100"
                >
                  {trimmed.replace("# ", "")}
                </h1>
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight pt-6 pb-1 text-slate-900 border-l-4 border-primary pl-3"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-lg sm:text-xl font-bold text-navy-900 pt-4 pb-1"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("---")) {
              return <hr key={idx} className="my-8 border-slate-200" />;
            }
            if (trimmed.startsWith("|")) {
              // Simple table rendering
              const rows = trimmed.split("\n").filter((r) => !r.includes("---"));
              return (
                <div key={idx} className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <tbody className="divide-y divide-slate-200">
                      {rows.map((row, rIdx) => {
                        const cols = row
                          .split("|")
                          .map((c) => c.trim())
                          .filter((c) => c.length > 0);
                        if (rIdx === 0) {
                          return (
                            <tr key={rIdx} className="bg-navy-900 text-white font-bold">
                              {cols.map((col, cIdx) => (
                                <th key={cIdx} className="px-4 py-3 text-left">
                                  {col.replace(/\*\*/g, "")}
                                </th>
                              ))}
                            </tr>
                          );
                        }
                        return (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                            {cols.map((col, cIdx) => (
                              <td key={cIdx} className="px-4 py-3">
                                {col.replace(/\*\*/g, "")}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
              const items = trimmed.split("\n");
              return (
                <ul key={idx} className="space-y-2 my-4 pl-4 list-disc list-inside">
                  {items.map((item, iIdx) => (
                    <li key={iIdx} className="text-slate-700">
                      {item.replace(/^[-*] /, "").replace(/^\d+\.\s*/, "")}
                    </li>
                  ))}
                </ul>
              );
            }

            // Standard Paragraph
            return (
              <p key={idx} className="leading-relaxed">
                {trimmed}
              </p>
            );
          })}

          {/* In-Article Field Service Photo Callout (Alternated: Image on Left) */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 items-center bg-slate-50">
            <div className="md:col-span-5 relative h-56 sm:h-64 w-full">
              <Image
                src={inArticleImage}
                alt={`Technical water heater diagnosis in Denver for ${post.title}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7 p-5 sm:p-6 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-accent bg-orange-100/80 px-2.5 py-0.5 rounded-full">
                Colorado Licensed Practice
              </span>
              <h4 className="font-bold text-navy-900 text-sm sm:text-base">
                On-Site Field Testing &amp; Diagnostic Standards
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Denver plumbers verify water pressure, high-altitude gas combustion ratios, and electrical continuity before recommending part replacements. If you suspect your water heater is failing, call for an immediate on-site inspection.
              </p>
            </div>
          </div>
        </article>

        {/* What Callers Should Prepare */}
        <WhatCallersShouldPrepare />

        {/* Internal Link Matrix (5 Internal Links, 1 External Link) */}
        <InternalLinkMatrix
          heading="Services & Suburbs Mentioned in this Denver Guide"
          internalLinks={[
            ...post.relatedServices.slice(0, 3).map((rs) => ({
              anchor: rs.name,
              url: `/${rs.slug}/`,
              desc: `Dedicated Denver service guide for ${rs.name}.`,
            })),
            ...post.relatedLocations.slice(0, 2).map((rl) => ({
              anchor: `Water Heater Services in ${rl.name}, CO`,
              url: `/service-areas/${rl.slug}/`,
              desc: `Local municipal repair, replacement and flushing in ${rl.name}.`,
            })),
          ]}
          externalLink={post.externalLink}
        />

        {/* Call CTA */}
        <PhoneCTASection
          title="Need Professional Water Heater Help in Denver?"
          subtitle="Don't waste time troubleshooting complicated high-voltage or natural gas systems alone. Call (303) 386-0029 to reach an independent licensed Colorado plumber today."
        />
      </div>
    </div>
  );
}
