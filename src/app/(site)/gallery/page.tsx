import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SchoolImage } from "@/components/ui";
import { getGallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of campus life, academics, sports and events at Ndururumo High School.",
};

export default async function GalleryPage() {
  const items = await getGallery();
  const hasPhotos = items.some((item) => item.image);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Life at Ndururumo" intro="Moments from our classrooms, fields, stages and celebrations." />
      <section className="py-20">
        <Container>
          {!hasPhotos && (
            <p className="mb-10 rounded-2xl border border-gold-400 bg-gold-300/20 p-5 text-brand-800">
              Photos are coming soon. Alumni with old school photos are welcome to share them —{" "}
              <Link href="/contact" className="font-semibold underline">
                get in touch
              </Link>
              .
            </p>
          )}
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item, i) => (
              <li key={item._id} className={i % 5 === 0 ? "col-span-2 row-span-2" : ""}>
                <figure className="h-full">
                  <SchoolImage
                    image={item.image}
                    alt={item.caption}
                    label={item.image ? undefined : item.caption}
                    className={`rounded-xl ${i % 5 === 0 ? "aspect-square h-full" : "aspect-square"}`}
                    sizes={i % 5 === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  />
                  {item.image && <figcaption className="mt-2 text-sm text-muted">{item.caption}</figcaption>}
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
