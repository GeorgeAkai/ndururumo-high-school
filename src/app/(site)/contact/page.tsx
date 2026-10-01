import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ndururumo High School in Nyahururu, Kenya.",
};

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch" intro="We'd love to hear from parents, prospective students, alumni and friends of the school." />
      <section className="py-20">
        <Container className="grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">Email</p>
            <a href={`mailto:${settings.email}`} className="mt-3 block text-2xl font-semibold break-all text-brand-800 hover:underline">
              {settings.email}
            </a>
            <p className="mt-3 text-sm text-muted">For admissions, alumni and general enquiries.</p>
          </div>
          <div className="rounded-2xl bg-brand-800 p-8 text-cream shadow-sm">
            <p className="text-sm font-semibold tracking-widest text-gold-300 uppercase">Location</p>
            <p className="mt-3 text-2xl font-semibold">{settings.city}, Kenya</p>
            <p className="mt-3 text-sm text-cream/80">Laikipia County</p>
          </div>
        </Container>
      </section>
    </>
  );
}
