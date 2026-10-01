import Link from "next/link";
import { EventList } from "@/components/EventList";
import { NewsCard } from "@/components/NewsCard";
import { ButtonLink, Container, Hills, SchoolImage, SectionHeading } from "@/components/ui";
import { getNews, getSettings, getUpcomingEvents } from "@/lib/content";

const pillars = [
  {
    title: "Academic excellence",
    text: "Dedicated teachers, well-equipped laboratories and a culture of hard work prepare our students for KCSE and the new CBC senior school pathways.",
    href: "/academics",
  },
  {
    title: "Talent & co-curriculars",
    text: "Games, athletics, music, drama, clubs and societies give every learner room to discover and grow their gifts.",
    href: "/academics#co-curricular",
  },
  {
    title: "Character & values",
    text: "Integrity, hard work, team spirit and gender equity are at the heart of a Ndururumo education.",
    href: "/about#values",
  },
  {
    title: "A home away from home",
    text: "A safe, caring boarding community on a 50-acre campus just outside Nyahururu town.",
    href: "/about",
  },
];

export default async function HomePage() {
  const [settings, news, events] = await Promise.all([getSettings(), getNews(3), getUpcomingEvents()]);

  const stats = [
    { value: "1951", label: "Founded" },
    { value: "1964", label: "Among Kenya's first co-ed schools" },
    { value: `${settings.enrollment.toLocaleString("en-KE")}+`, label: "Students" },
    { value: "50", label: "Acre campus" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-cream">
        {settings.heroImage ? (
          <>
            <SchoolImage image={settings.heroImage} alt="Ndururumo High School" className="absolute inset-0 -z-10" sizes="100vw" priority />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/90 via-brand-900/60 to-brand-900/20" />
          </>
        ) : (
          <HeroArt />
        )}
        <Container className="relative py-24 sm:py-32 lg:py-40">
          <p className="text-sm font-semibold tracking-widest text-gold-300 uppercase">{settings.city}, Laikipia County · Est. 1951</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight font-semibold sm:text-6xl">{settings.schoolName}</h1>
          <p className="mt-4 font-serif text-2xl text-gold-300 italic">“{settings.motto}”</p>
          <p className="mt-6 max-w-xl text-lg text-cream/85">
            A mixed boarding school nurturing knowledgeable, skilled and disciplined young people for over six decades.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/admissions">Admissions</ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Discover our story
            </ButtonLink>
          </div>
        </Container>
        <Hills className="absolute inset-x-0 -bottom-px h-16 w-full sm:h-24" />
      </section>

      {/* Stats */}
      <section className="bg-brand-900 text-cream">
        <Container className="grid grid-cols-2 gap-6 pb-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-gold-500 pl-4">
              <p className="font-serif text-4xl font-semibold text-gold-300">{s.value}</p>
              <p className="mt-1 text-sm text-cream/75">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Welcome */}
      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-5">
          <SchoolImage
            image={settings.principalPhoto}
            alt={`${settings.principalName}, Principal`}
            label={settings.principalName}
            className="aspect-[4/5] rounded-2xl shadow-xl lg:col-span-2"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Welcome" title="A message from the Principal" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {settings.principalMessage.slice(0, 2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-semibold text-brand-800">
              {settings.principalName}
              <span className="block text-sm font-normal text-muted">Principal</span>
            </p>
            <Link href="/about#principal" className="mt-6 inline-block font-semibold text-brand-600 hover:underline">
              Read the full message →
            </Link>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow="Why Ndururumo" title="Educating the whole person">
            Our mission is to provide quality education, develop talents and produce all-round individuals equipped with knowledge,
            skills, values, the right attitude and self-discipline.
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group rounded-2xl border border-brand-100 bg-cream p-6 transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg"
              >
                <div className="h-1 w-10 rounded bg-gold-500 transition-all group-hover:w-16" />
                <h3 className="mt-5 text-xl font-semibold text-brand-800">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* News & events */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between gap-4">
              <SectionHeading eyebrow="Latest" title="News" />
              <Link href="/news" className="shrink-0 font-semibold text-brand-600 hover:underline">
                All news →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {news.slice(0, 2).map((post) => (
                <NewsCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <SectionHeading eyebrow="Coming up" title="Events" />
              <Link href="/events" className="shrink-0 font-semibold text-brand-600 hover:underline">
                Calendar →
              </Link>
            </div>
            <div className="mt-8">
              <EventList events={events.slice(0, 4)} compact />
            </div>
          </div>
        </Container>
      </section>

      {/* Alumni CTA */}
      <section className="relative overflow-hidden bg-brand-700 py-20 text-cream">
        <Container className="relative grid items-center gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest text-gold-300 uppercase">Alumni</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Once a Ndururumo student, always family</h2>
            <p className="mt-4 max-w-2xl text-lg text-cream/85">
              Generations of former students have marched from these grounds into every field. Reconnect, mentor a student, or
              support a school project.
            </p>
          </div>
          <div className="lg:text-right">
            <ButtonLink href="/alumni">Join the alumni network</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

/** Illustrated highlands with a waterfall, a nod to nearby Thomson's Falls. */
function HeroArt() {
  return (
    <svg
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 -z-10 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0e2a1c" />
          <stop offset="1" stopColor="#22613f" />
        </linearGradient>
        <linearGradient id="fall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#faf7f0" stopOpacity="0.7" />
          <stop offset="1" stopColor="#faf7f0" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="1440" height="700" fill="url(#sky)" />
      <circle cx="1150" cy="170" r="70" fill="#e0bd55" opacity="0.35" />
      <circle cx="1150" cy="170" r="40" fill="#ecd48a" opacity="0.5" />
      <path d="M0 420 220 300l180 90 220-170 200 150 180-110 220 130 220-90v490H0Z" fill="#1b4d33" opacity="0.8" />
      <path d="M850 365c8 0 32 0 44 0-2 60 8 120 20 200H830c10-80 22-140 20-200Z" fill="url(#fall)" opacity="0.45" />
      <path d="M0 500c200-60 420-80 640-40s420 60 800-30v270H0Z" fill="#153c28" />
      <path d="M0 590c260-40 520-40 760-10s420 20 680-20v140H0Z" fill="#0e2a1c" />
    </svg>
  );
}
