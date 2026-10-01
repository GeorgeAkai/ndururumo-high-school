import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { Container, PageHero } from "@/components/ui";
import { getNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "The latest news and announcements from Ndururumo High School.",
};

export default async function NewsPage() {
  const news = await getNews();
  return (
    <>
      <PageHero eyebrow="News" title="News & announcements" intro="Stories, achievements and updates from around the school." />
      <section className="py-20">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </Container>
      </section>
    </>
  );
}
