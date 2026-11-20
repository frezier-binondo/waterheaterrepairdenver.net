import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { blogPosts } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;
  const now = new Date();

  // Core Pages
  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/water-heater-services/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/service-areas/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Service Pillar Pages (14)
  const servicePillars: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${baseUrl}/${s.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // City Hub Pages (8)
  const cityHubs: MetadataRoute.Sitemap = locationsData.map((l) => ({
    url: `${baseUrl}/service-areas/${l.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Service x City Pages (112)
  const serviceCityPages: MetadataRoute.Sitemap = [];
  servicesData.forEach((s) => {
    locationsData.forEach((l) => {
      serviceCityPages.push({
        url: `${baseUrl}/${s.slug}/${l.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.75,
      });
    });
  });

  // Blog Posts (12)
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...corePages, ...servicePillars, ...cityHubs, ...serviceCityPages, ...blogUrls];
}
