import type { Metadata } from "next";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Reconnect with Ndururumo High School. Join the alumni network, mentor students and support school projects.",
};

const ways = [
  {
    title: "Reconnect",
    text: "Share your name, year of completion and what you do today so we can keep you informed about reunions and school news.",
    subject: "Alumni registration",
  },
  {
    title: "Mentor & inspire",
    text: "Speak at a career day, host students for attachment, or mentor learners choosing their senior school pathways.",
    subject: "Alumni mentorship",
  },
  {
    title: "Give back",
    text: "Support bursaries for needy students, library and laboratory equipment, sports kits or infrastructure projects.",
    subject: "Supporting the school",
  },
  {
    title: "Share memories",
    text: "Send us old photos and stories from your time at Ndururumo to help us preserve the school's history.",
    subject: "Alumni photos and memories",
  },
];

export default async function AlumniPage() {
  const settings = await getSettings();

  return (
    <>
      <PageHero
        eyebrow="Alumni"
        title="Once Ndururumo, always Ndururumo"
        intro="Since 1964, thousands of students have marched from these grounds into every field. This website itself is a gift from an alumnus."
      />

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Get involved" title="Ways to stay connected">
            Whether you completed in the 1960s or last year, there is a place for you in the Ndururumo story.
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ways.map((w) => (
              <div key={w.title} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-brand-800">{w.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{w.text}</p>
                <a
                  href={`mailto:${settings.email}?subject=${encodeURIComponent(w.subject)}`}
                  className="mt-6 font-semibold text-brand-600 hover:underline"
                >
                  Email the school →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-800 py-20 text-cream">
        <Container className="max-w-3xl text-center">
          <p className="font-serif text-3xl leading-snug italic sm:text-4xl">
            “The best way to honour where we came from is to light the way for those coming after us.”
          </p>
          <p className="mt-6 text-gold-300">— A message to every Ndururumo alumnus</p>
        </Container>
      </section>
    </>
  );
}
