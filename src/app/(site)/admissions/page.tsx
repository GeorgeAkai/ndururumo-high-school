import type { Metadata } from "next";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description: "How to join Ndururumo High School: Grade 10 placement, reporting requirements and fees.",
};

const steps = [
  {
    title: "Placement",
    text: "Learners are placed in Grade 10 at Ndururumo by the Ministry of Education through the national senior school selection process. Check your placement on the Ministry's official portal.",
  },
  {
    title: "Download your admission letter",
    text: "Placed learners download their admission letter, which includes the reporting date, fee structure and list of requirements.",
  },
  {
    title: "Prepare for reporting",
    text: "Gather the documents and items listed in the admission letter, and pay fees through the official school bank account only.",
  },
  {
    title: "Report to school",
    text: "Report on the date given with a parent or guardian. Our staff will guide you through registration and settling into boarding life.",
  },
];

const documents = [
  "Admission letter",
  "Copy of birth certificate",
  "Junior school leaving certificate / assessment results slip",
  "Passport-size photographs",
  "Medical / NHIF (SHA) details",
  "Proof of fee payment",
];

export default async function AdmissionsPage() {
  const settings = await getSettings();

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join the Ndururumo family"
        intro="We welcome learners from across Kenya into our mixed boarding community."
      />

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="How it works" title="Admission steps" />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-serif text-lg font-semibold text-brand-900">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-sans text-lg font-semibold text-brand-800">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Checklist" title="What to bring" />
            <ul className="mt-8 space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="mt-1 text-gold-500" aria-hidden>
                    ✓
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">The full list of requirements is included with the admission letter.</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl bg-brand-800 p-8 text-cream">
              <h3 className="text-2xl font-semibold">Fees</h3>
              <p className="mt-3 text-cream/85">
                Ndururumo is a public school, and fees follow the guidelines set by the Ministry of Education. The current fee
                structure is attached to the admission letter.
              </p>
              <p className="mt-3 text-sm text-gold-300">
                Pay fees only to the official school bank account shown on the fee structure — never to an individual.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-cream p-8">
              <h3 className="text-2xl font-semibold text-brand-800">Transfers & enquiries</h3>
              <p className="mt-3 text-muted">
                For transfer requests, vacancies in other classes, or any admissions question, email the school office.
              </p>
              <a href={`mailto:${settings.email}?subject=Admissions%20enquiry`} className="mt-4 inline-block font-semibold text-brand-600 hover:underline">
                {settings.email}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
