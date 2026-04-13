import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://videorep.co";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/511-funnel`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ads`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/results`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/coaching`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/case-study-financial-advisory`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
