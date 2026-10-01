import type { Metadata } from "next";
import { ButtonLink, Container, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Academics",
  description: "Senior school pathways under CBC, KCSE subjects, departments and co-curricular activities at Ndururumo High School.",
};

const pathways = [
  {
    name: "STEM",
    text: "Science, Technology, Engineering and Mathematics — for learners headed towards medicine, engineering, computing, agriculture and the sciences.",
  },
  {
    name: "Social Sciences",
    text: "Languages, humanities, business and religious studies — for future lawyers, economists, journalists, teachers and leaders.",
  },
  {
    name: "Arts & Sports Science",
    text: "Performing and visual arts and sports science — for learners with creative and athletic talent.",
  },
];

const departments = [
  { name: "Languages", subjects: ["English", "Kiswahili", "Literature", "Fasihi", "Foreign languages"] },
  { name: "Mathematics", subjects: ["Mathematics", "Applied mathematics"] },
  { name: "Sciences", subjects: ["Biology", "Chemistry", "Physics"] },
  { name: "Humanities", subjects: ["History & Government", "Geography", "Christian Religious Education"] },
  { name: "Technical & Applied", subjects: ["Agriculture", "Business Studies", "Computer Studies", "Home Science"] },
  { name: "Guidance & Counselling", subjects: ["Career guidance", "Mentorship", "Pastoral care"] },
];

const coCurricular = [
  { group: "Games & sports", items: ["Football", "Volleyball", "Basketball", "Handball", "Netball", "Rugby", "Athletics", "Hockey"] },
  { group: "Performing arts", items: ["Music festival", "Drama festival", "Choir"] },
  { group: "Clubs & societies", items: ["Science & engineering fair", "Debate", "Journalism", "Environmental club", "Christian Union", "Scouts & Girl Guides"] },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Learning that opens doors"
        intro="Committed teachers, strong departments and a culture of hard work prepare our learners for national examinations, further education and life."
      />

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Curriculum" title="Two curricula, one standard of excellence">
            As Kenya transitions to the Competency Based Curriculum (CBC), Ndururumo is a Senior School welcoming Grade 10 learners,
            while guiding our final 8-4-4 classes to the KCSE examination.
          </SectionHeading>

          <h3 className="mt-14 text-2xl font-semibold text-brand-800">Senior school pathways (CBC)</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {pathways.map((p) => (
              <div key={p.name} className="rounded-2xl border-t-4 border-gold-500 bg-white p-6 shadow-sm">
                <h4 className="font-serif text-xl font-semibold text-brand-800">{p.name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            The specific subject combinations offered at Ndururumo are communicated to parents on admission. Contact the school office
            for details.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow="Departments" title="Subjects we teach" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <div key={d.name} className="rounded-2xl bg-cream p-6">
                <h3 className="font-sans text-lg font-semibold text-brand-800">{d.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {d.subjects.map((s) => (
                    <li key={s} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700 ring-1 ring-brand-100">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="co-curricular" className="scroll-mt-24 py-20">
        <Container>
          <SectionHeading eyebrow="Beyond the classroom" title="Co-curricular activities">
            Every learner is encouraged to take part in sports, clubs, leadership and community service, so that each child develops
            their unique potential.
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {coCurricular.map((c) => (
              <div key={c.group} className="rounded-2xl bg-brand-800 p-6 text-cream">
                <h3 className="font-serif text-xl font-semibold text-gold-300">{c.group}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/admissions">How to join Ndururumo</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
