import Link from "next/link";
import { Crest } from "@/components/Crest";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-brand-900 px-4 py-24 text-center text-cream">
      <Crest className="h-20 w-18" />
      <h1 className="mt-6 text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-cream/80">The page you are looking for has marched on.</p>
      <Link href="/" className="mt-8 rounded-full bg-gold-500 px-5 py-2.5 font-semibold text-brand-900 hover:bg-gold-400">
        Back to the homepage
      </Link>
    </main>
  );
}
