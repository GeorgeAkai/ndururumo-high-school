import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import {
  fallbackGallery,
  fallbackNews,
  fallbackSettings,
  fallbackStaff,
  getFallbackEvents,
} from "./fallback";
import type { GalleryItem, NewsPost, SchoolEvent, SiteSettings, StaffMember } from "./types";

/** How often (seconds) pages re-check Sanity for new content. */
const REVALIDATE = 60;

async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, { next: { revalidate: REVALIDATE } });
  } catch (error) {
    console.error("Sanity fetch failed, using built-in content.", error);
    return null;
  }
}

/** Use CMS content when there is some, otherwise the built-in content. */
function orFallback<T>(items: T[] | null, fallback: T[]): T[] {
  return items && items.length > 0 ? items : fallback;
}

const settingsQuery = defineQuery(`*[_id == "siteSettings"][0]{
  schoolName, motto, email, city, principalName, principalPhoto,
  principalMessage, enrollment, heroImage
}`);

export async function getSettings(): Promise<SiteSettings> {
  const data = await fetchSanity<Partial<SiteSettings> | null>(settingsQuery);
  if (!data) return fallbackSettings;
  // Fill in any field the school hasn't set yet.
  const merged = { ...fallbackSettings };
  for (const [key, value] of Object.entries(data)) {
    const empty = value == null || value === "" || (Array.isArray(value) && value.length === 0);
    if (!empty) Object.assign(merged, { [key]: value });
  }
  return merged;
}

const newsFields = `title, "slug": slug.current, publishedAt, excerpt, coverImage`;

const newsListQuery = defineQuery(`*[_type == "newsPost" && defined(slug.current)]
  | order(publishedAt desc)[0...$limit]{ ${newsFields} }`);

export async function getNews(limit = 50): Promise<NewsPost[]> {
  const data = await fetchSanity<NewsPost[]>(newsListQuery, { limit });
  return orFallback(data, fallbackNews).slice(0, limit);
}

const newsPostQuery = defineQuery(`*[_type == "newsPost" && slug.current == $slug][0]{ ${newsFields}, body }`);

export async function getNewsPost(slug: string): Promise<NewsPost | null> {
  const data = await fetchSanity<NewsPost | null>(newsPostQuery, { slug });
  return data ?? fallbackNews.find((post) => post.slug === slug) ?? null;
}

const newsSlugsQuery = defineQuery(`*[_type == "newsPost" && defined(slug.current)].slug.current`);

export async function getNewsSlugs(): Promise<string[]> {
  const data = await fetchSanity<string[]>(newsSlugsQuery);
  return orFallback(data, fallbackNews.map((post) => post.slug));
}

const eventsQuery = defineQuery(`*[_type == "event" && coalesce(endDate, date) >= $today]
  | order(date asc){ _id, title, date, endDate, location, description }`);

export async function getUpcomingEvents(): Promise<SchoolEvent[]> {
  const today = new Date().toISOString().slice(0, 10);
  const data = await fetchSanity<SchoolEvent[]>(eventsQuery, { today });
  return orFallback(data, getFallbackEvents());
}

const galleryQuery = defineQuery(`*[_type == "galleryImage" && defined(image)]
  | order(coalesce(takenAt, _createdAt) desc){ _id, caption, category, image }`);

export async function getGallery(): Promise<GalleryItem[]> {
  const data = await fetchSanity<GalleryItem[]>(galleryQuery);
  return orFallback(data, fallbackGallery);
}

const staffQuery = defineQuery(`*[_type == "staffMember"] | order(order asc){ _id, name, role, photo }`);

export async function getStaff(): Promise<StaffMember[]> {
  const data = await fetchSanity<StaffMember[]>(staffQuery);
  return orFallback(data, fallbackStaff);
}
