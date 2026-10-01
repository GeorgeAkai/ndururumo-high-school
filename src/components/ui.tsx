import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SanityImage } from "@/lib/types";
import { urlFor } from "@/sanity/image";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-800 text-cream">
      <Hills className="absolute inset-x-0 bottom-0 h-24 w-full opacity-40" />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && <p className="text-sm font-semibold tracking-widest text-gold-300 uppercase">{eyebrow}</p>}
        <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-cream/85">{intro}</p>}
      </Container>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">{eyebrow}</p>}
      <h2 className="mt-1 text-3xl font-semibold text-brand-800 sm:text-4xl">{title}</h2>
      {children && <div className="mt-3 text-lg text-muted">{children}</div>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
}) {
  const styles = {
    primary: "bg-gold-500 text-brand-900 hover:bg-gold-400",
    light: "bg-cream text-brand-800 hover:bg-white",
    outline: "border border-current hover:bg-white/10",
  }[variant];
  return (
    <Link href={href} className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

/** Rolling highland hills — a nod to the Laikipia plateau. */
export function Hills({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 80c180-50 360-60 540-30s360 40 540 0 270-50 360-30v100H0Z" fill="var(--color-brand-600)" />
      <path d="M0 100c240-30 480-30 720-5s480 20 720-10v35H0Z" fill="var(--color-brand-900)" />
    </svg>
  );
}

/**
 * Shows a CMS image when there is one, otherwise a tasteful placeholder so
 * layouts look finished before photos are uploaded.
 */
export function SchoolImage({
  image,
  alt,
  label,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className = "",
  priority = false,
}: {
  image?: SanityImage;
  alt: string;
  label?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <div className={`relative overflow-hidden bg-brand-100 ${className}`}>
        <Image
          src={urlFor(image).width(1600).url()}
          alt={image.alt || alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br from-brand-600 to-brand-900 ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="150" cy="35" r="14" fill="var(--color-gold-400)" opacity="0.55" />
        <path d="M0 90 40 60l30 20 40-35 45 40 45-25v60H0Z" fill="var(--color-brand-500)" opacity="0.5" />
        <path d="M0 105c40-15 80-15 120-4s60 4 80-6v25H0Z" fill="var(--color-brand-900)" opacity="0.7" />
      </svg>
      {label && <span className="relative p-3 text-sm font-medium text-cream/90">{label}</span>}
    </div>
  );
}
