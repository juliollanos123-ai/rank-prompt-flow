import { Link } from "@tanstack/react-router";
import { CategoryChip } from "./CategoryChip";
import { getCategory, readingTimeMinutes, formatDate, type Article } from "@/data/blog";

export function BlogCard({ article, variant = "grid" }: { article: Article; variant?: "grid" | "featured" }) {
  const cat = getCategory(article.category);
  const time = readingTimeMinutes(article.body);

  if (variant === "featured") {
    return (
      <Link
        to="/blog/$slug"
        params={{ slug: article.slug }}
        className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:shadow-elegant lg:grid-cols-2"
      >
        <div className={`relative aspect-[16/10] lg:aspect-auto ${cat.cover}`}>
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_20%,rgba(255,255,255,0.18),transparent)]" />
          <div className="absolute left-6 top-6">
            <span className="rounded-full bg-canvas/95 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.25em] text-ink">
              Featured
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 p-8 lg:p-12">
          <div>
            <CategoryChip slug={article.category} />
            <h2 className="mt-6 text-3xl lg:text-4xl">
              {article.title}
            </h2>
            <p className="mt-5 text-base text-ink/70 lg:text-lg">{article.excerpt}</p>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-5">
            <div className="font-display text-[11px] uppercase tracking-[0.22em] text-ink/55">
              {formatDate(article.publishedAt)} · {time} min read
            </div>
            <span className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-prompt transition-transform group-hover:translate-x-1">
              Read more <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to="/blog/$slug"
      params={{ slug: article.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <div className={`relative aspect-[16/10] ${cat.cover}`}>
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_20%,rgba(255,255,255,0.18),transparent)]" />
        <div className="absolute left-4 top-4">
          <CategoryChip slug={article.category} size="sm" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="h3-soft text-xl text-ink">{article.title}</h3>
        <p className="line-clamp-2 text-sm text-ink/65">{article.excerpt}</p>
        <div className="mt-auto pt-4 font-display text-[11px] uppercase tracking-[0.22em] text-ink/50">
          {formatDate(article.publishedAt)} · {time} min read
        </div>
      </div>
    </Link>
  );
}
