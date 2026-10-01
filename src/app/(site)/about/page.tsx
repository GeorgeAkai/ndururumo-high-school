import type { Metadata } from "next";
import { Container, PageHero, SchoolImage, SectionHeading } from "@/components/ui";
import { getSettings, getStaff } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "The history, mission, vision and values of Ndururumo High School, Nyahururu — founded in 1951.",
};

const timeline = [
  {
    year: "1951",
    title: "Jan van Riebeeck School",
    text: "Dutch settlers build a school for their children on the outskirts of Thomson's Falls (now Nyahururu), managed by the Dutch Reformed Church.",
  },
  {
    year: "1963",
    title: "Thompson Falls High School",
    text: "On 8th March the school is bought by the Christian Churches Educational Association (CCEA), a group of Protestant churches, and renamed C.C.E.A. Thompson Falls High School.",
  },
  {
    year: "1964",
    title: "Doors open to African students",
    text: "On 12th February the school opens with 25 boys, 25 girls and four missionary teachers under its first Principal, Mr. Shimal Gmeir — one of the first two co-educational schools in Kenya, alongside Nakuru High School.",
  },
  {
    year: "1975",
    title: "Ndururumo High School",
    text: "The school adopts its current name, Ndururumo High School.",
  },
  {
    year: "Today",
    title: "Marching to Excellence",
    text: "An extra-county mixed boarding school with more than 1,400 students on a 50-acre campus, now welcoming learners into senior school under the Competency Based Curriculum.",
  },
];

const values = [
  "Professionalism",
  "Integrity",
  "Hard work",
  "Excellent team spirit",
  "Efficiency",
  "Courtesy",
  "Confidentiality",
  "Gender equity",
];

export default async function AboutPage() {
  const [settings, staff] = await Promise.all([getSettings(), getStaff()]);

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Seven decades of shaping lives"
        intro="From a settler school in 1951 to one of Kenya's pioneering co-educational schools, Ndururumo has a proud story."
      />

      {/* Mission & vision */}
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-brand-800 p-8 text-cream">
            <p className="text-sm font-semibold tracking-widest text-gold-300 uppercase">Motto</p>
            <p className="mt-3 font-serif text-3xl italic">“{settings.motto}”</p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-8">
            <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">Vision</p>
            <p className="mt-3 text-lg text-ink">To be the most preferred centre of academic excellence in Kenya.</p>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-8">
            <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">Mission</p>
            <p className="mt-3 text-lg text-ink">
              To excel in providing quality education, develop talents and produce an all-round individual equipped with knowledge,
              skills, values, right attitude and self-discipline.
            </p>
          </div>
        </Container>
      </section>

      {/* History */}
      <section id="history" className="scroll-mt-24 bg-white py-20">
        <Container>
          <SectionHeading eyebrow="Our history" title="From Thompson Falls to Ndururumo" />
          <ol className="relative mt-12 space-y-10 border-l-2 border-gold-400 pl-8 sm:ml-4">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute top-1 -left-[2.6rem] h-4 w-4 rounded-full border-4 border-cream bg-brand-600 ring-2 ring-gold-400" />
                <p className="font-serif text-2xl font-semibold text-gold-600">{item.year}</p>
                <h3 className="mt-1 text-xl font-semibold text-brand-800">{item.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Values */}
      <section id="values" className="scroll-mt-24 py-20">
        <Container>
          <SectionHeading eyebrow="Core values" title="What we stand for" />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {values.map((v) => (
              <li key={v} className="rounded-xl border border-brand-100 bg-white px-5 py-4 font-semibold text-brand-800">
                <span className="mr-2 text-gold-500" aria-hidden>
                  ◆
                </span>
                {v}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Principal */}
      <section id="principal" className="scroll-mt-24 bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <SchoolImage
            image={settings.principalPhoto}
            alt={`${settings.principalName}, Principal`}
            label={settings.principalName}
            className="aspect-[4/5] rounded-2xl lg:col-span-2"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Leadership" title="Principal's message" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {settings.principalMessage.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-semibold text-brand-800">
              {settings.principalName}
              <span className="block text-sm font-normal text-muted">Principal</span>
            </p>
          </div>
        </Container>
      </section>

      {staff.length > 1 && (
        <section className="py-20">
          <Container>
            <SectionHeading eyebrow="Our team" title="School leadership" />
            <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {staff.map((member) => (
                <li key={member._id}>
                  <SchoolImage image={member.photo} alt={member.name} className="aspect-square rounded-2xl" sizes="(min-width: 1024px) 25vw, 50vw" />
                  <p className="mt-3 font-semibold text-brand-800">{member.name}</p>
                  <p className="text-sm text-muted">{member.role}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
