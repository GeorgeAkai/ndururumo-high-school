import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { NewsPost } from "@/lib/types";
import { SchoolImage } from "./ui";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition hover:shadow-lg">
      <SchoolImage image={post.coverImage} alt={post.title} className="aspect-[16/9]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col p-6">
        <time dateTime={post.publishedAt} className="text-sm text-gold-600">
          {formatDate(post.publishedAt)}
        </time>
        <h3 className="mt-2 text-xl font-semibold text-brand-800">
          <Link href={`/news/${post.slug}`} className="after:absolute after:inset-0 group-hover:underline">
            {post.title}
          </Link>
        </h3>
        {post.excerpt && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>}
      </div>
    </article>
  );
}
