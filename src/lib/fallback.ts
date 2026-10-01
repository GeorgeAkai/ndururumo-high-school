import type { PortableTextBlock } from "next-sanity";
import type { GalleryItem, NewsPost, SchoolEvent, SiteSettings, StaffMember } from "./types";

/**
 * Built-in content shown until a Sanity project is connected (or when a
 * Sanity document is missing). Once the school starts publishing in the
 * Studio at /studio, CMS content takes over automatically.
 */

function paragraphs(...texts: string[]): PortableTextBlock[] {
  return texts.map((text, i) => ({
    _type: "block",
    _key: `p${i}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `s${i}`, text, marks: [] }],
  }));
}

export const fallbackSettings: SiteSettings = {
  schoolName: "Ndururumo High School",
  motto: "Marching to Excellence",
  email: "ndururumo@gmail.com",
  city: "Nyahururu",
  principalName: "Mr. Wilson Kamunya",
  principalMessage: [
    "Welcome to Ndururumo High School. Ndururumo is more than an institution of learning — it is a family dedicated to shaping the minds and character of young people.",
    "Since our doors opened to African students in 1964 as one of the first co-educational schools in Kenya, we have believed that every learner carries a unique potential. Our teachers work to bring out that potential through rigorous academics, sports, clubs, leadership opportunities and service to the community.",
    "We invite parents, alumni and friends of the school to walk with us as we continue marching to excellence.",
  ],
  enrollment: 1451,
};

export const fallbackStaff: StaffMember[] = [
  { _id: "principal", name: "Mr. Wilson Kamunya", role: "Principal" },
];

export const fallbackNews: NewsPost[] = [
  {
    title: "Welcome to the new Ndururumo High School website",
    slug: "welcome-to-our-new-website",
    publishedAt: "2026-10-01",
    excerpt:
      "Built and donated by an alumnus, this website is a home for school news, events, admissions information and our growing alumni community.",
    body: paragraphs(
      "We are proud to launch the official website of Ndururumo High School. The site was built and donated by an alumnus who wanted to give back to the school that shaped them.",
      "Here you will find information about our history, academics and admissions, as well as the latest news, upcoming events and photos from school life.",
      "Alumni are warmly invited to reconnect with the school. Visit the Alumni page to find out how you can get involved, mentor students or support school projects.",
    ),
  },
  {
    title: "Ndururumo transitions to a Senior School under CBC",
    slug: "transition-to-senior-school",
    publishedAt: "2026-01-12",
    excerpt:
      "As Kenya rolls out the Competency Based Curriculum, Ndururumo is now a Senior School welcoming Grade 10 learners alongside our final 8-4-4 classes.",
    body: paragraphs(
      "With the national rollout of the Competency Based Curriculum (CBC), Ndururumo has been designated a Senior School, now known in official listings as Ndururumo Senior School.",
      "The school continues to support its remaining 8-4-4 students through to the KCSE examination, while welcoming learners into Grade 10 under the new senior school pathways.",
      "Parents with questions about pathways, subject combinations or reporting should contact the school office by email.",
    ),
  },
  {
    title: "Celebrating our heritage: from Thompson Falls High School to Ndururumo",
    slug: "celebrating-our-heritage",
    publishedAt: "2025-02-12",
    excerpt:
      "On 12th February 1964 the school opened its doors to African students as one of the first two co-educational schools in Kenya.",
    body: paragraphs(
      "Our story began in 1951, when Dutch settlers built a school for their children and named it Jan van Riebeeck School, managed by the Dutch Reformed Church.",
      "On 8th March 1963 the school was bought by the Christian Churches Educational Association (CCEA), a group of Protestant churches, and renamed Thompson Falls High School. On 12th February 1964 it opened to African students with 25 boys, 25 girls and four missionary teachers.",
      "In 1975 the school took its current name, Ndururumo High School. Today it is a mixed boarding school serving more than 1,400 students on a 50-acre campus just outside Nyahururu town.",
    ),
  },
];

function ordinal(n: number): string {
  const suffix = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}

/** The school opened to African students on 12 February 1964. */
function nextAnniversary(): SchoolEvent {
  const now = new Date();
  let year = now.getFullYear();
  if (now > new Date(`${year}-02-12T23:59:59`)) year += 1;
  const years = year - 1964;
  return {
    _id: "anniversary",
    title: `${ordinal(years)} anniversary of the school's 1964 opening`,
    date: `${year}-02-12`,
    location: "Ndururumo High School",
    description:
      "Marking the day in 1964 when the school opened its doors to African students with 25 boys, 25 girls and four teachers.",
  };
}

export function getFallbackEvents(): SchoolEvent[] {
  return [nextAnniversary()];
}

export const fallbackGallery: GalleryItem[] = [
  { _id: "g1", caption: "The main campus", category: "Campus" },
  { _id: "g2", caption: "Students in class", category: "Academics" },
  { _id: "g3", caption: "Science laboratories", category: "Academics" },
  { _id: "g4", caption: "Games and athletics", category: "Sports" },
  { _id: "g5", caption: "Clubs and societies", category: "Clubs" },
  { _id: "g6", caption: "Prize giving day", category: "Events" },
  { _id: "g7", caption: "Alumni reunion", category: "Alumni" },
  { _id: "g8", caption: "Thomson's Falls, Nyahururu", category: "Campus" },
];
