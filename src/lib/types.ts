import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "next-sanity";

export type SanityImage = SanityImageSource & { alt?: string };

export interface SiteSettings {
  schoolName: string;
  motto: string;
  email: string;
  city: string;
  principalName: string;
  principalPhoto?: SanityImage;
  principalMessage: string[];
  enrollment: number;
  heroImage?: SanityImage;
}

export interface NewsPost {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  coverImage?: SanityImage;
  body: PortableTextBlock[];
}

export interface SchoolEvent {
  _id: string;
  title: string;
  date: string;
  endDate?: string;
  location?: string;
  description?: string;
}

export interface GalleryItem {
  _id: string;
  caption: string;
  category?: string;
  image?: SanityImage;
}

export interface StaffMember {
  _id: string;
  name: string;
  role: string;
  photo?: SanityImage;
}
