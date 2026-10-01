import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSettings } from "@/lib/content";

// Refresh pages at least hourly so dates (e.g. upcoming events) stay current.
export const revalidate = 3600;

export default async function SiteLayout({ children }: LayoutProps<"/">) {
  const settings = await getSettings();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-brand-900"
      >
        Skip to content
      </a>
      <Header motto={settings.motto} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer settings={settings} />
    </>
  );
}
