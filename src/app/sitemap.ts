import type { MetadataRoute } from "next";
import { navigation } from "@/components/nav";
import { getNews } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await getNews();
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    ...navigation.map((item) => ({ url: `${siteUrl}${item.href}`, changeFrequency: "weekly" as const })),
    ...news.map((post) => ({ url: `${siteUrl}/news/${post.slug}`, lastModified: post.publishedAt })),
  ];
}
