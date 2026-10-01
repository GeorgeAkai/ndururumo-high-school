import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { Container, SchoolImage } from "@/components/ui";
import { getNewsPost, getNewsSlugs } from "@/lib/content";
import { formatDate } from "@/lib/format";
import type { SanityImage } from "@/lib/types";
import { urlFor } from "@/sanity/image";

export async function generateStaticParams() {
  const slugs = await getNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.coverImage ? { images: [urlFor(post.coverImage).width(1200).height(630).url()] } : undefined,
  };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <Image
        src={urlFor(value).width(1200).url()}
        alt={value.alt || ""}
        width={1200}
        height={675}
        className="my-8 h-auto w-full rounded-2xl"
      />
    ),
  },
};

export default async function NewsPostPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  if (!post) notFound();

  return (
    <article className="py-16">
      <Container className="max-w-3xl">
        <Link href="/news" className="text-sm font-semibold text-brand-600 hover:underline">
          ← All news
        </Link>
        <time dateTime={post.publishedAt} className="mt-6 block text-sm text-gold-600">
          {formatDate(post.publishedAt)}
        </time>
        <h1 className="mt-2 text-4xl font-semibold text-brand-800 sm:text-5xl">{post.title}</h1>
        {post.excerpt && <p className="mt-4 text-xl text-muted">{post.excerpt}</p>}
        {post.coverImage && (
          <SchoolImage image={post.coverImage} alt={post.title} className="mt-10 aspect-[16/9] rounded-2xl" sizes="(min-width: 768px) 768px, 100vw" priority />
        )}
        <div className="prose-school mt-10 text-lg text-ink">
          <PortableText value={post.body ?? []} components={components} />
        </div>
      </Container>
    </article>
  );
}
