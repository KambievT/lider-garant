import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date().toISOString();

  const routes = [
    { url: "/", priority: 1, changeFrequency: "weekly" as const },
    {
      url: "/bankovskie-garantii",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: "/kredity-dlya-biznesa",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: "/lising-dlya-urlic",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: "/factoring-dlya-biznesa",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    { url: "/rko", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/deposity", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/strahovanie", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/ved", priority: 0.9, changeFrequency: "weekly" as const },
    {
      url: "/tendernoe-soprovojdenie",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: "/proverka-contragentov",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { url: "/o-proekte", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/novosti", priority: 0.8, changeFrequency: "daily" as const },
    { url: "/vacansii", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/agents", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/partneram", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/documenty", priority: 0.5, changeFrequency: "yearly" as const },
    {
      url: "/privacy-policy",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    { url: "/karta-saita", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
