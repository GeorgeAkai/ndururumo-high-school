import Link from "next/link";
import type { SiteSettings } from "@/lib/types";
import { Crest } from "./Crest";
import { navigation } from "./nav";

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="mt-auto bg-brand-900 text-cream/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Crest className="h-12 w-11" />
            <div>
              <p className="font-serif text-lg font-semibold text-cream">{settings.schoolName}</p>
              <p className="text-sm text-gold-300">{settings.motto}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A mixed boarding school in {settings.city}, Laikipia County, educating young Kenyans since 1964.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider text-gold-300 uppercase">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider text-gold-300 uppercase">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${settings.email}`} className="hover:text-gold-300">
                {settings.email}
              </a>
            </li>
            <li>{settings.city}, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-800">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-cream/60 sm:px-6">
          © {new Date().getFullYear()} {settings.schoolName}. Website proudly built and donated by an alumnus.
        </p>
      </div>
    </footer>
  );
}
