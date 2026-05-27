import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/blog";
import { formatDate, readingTimeMinutes } from "@/data/blog";
import { formatDateEs, categorySlugEnToEs } from "@/data/blog.es";
import type { ArticleEs } from "@/data/blog.es";
import { CategoryChip } from "./CategoryChip";

export function BlogCard({
  article,
  featured = false,
  isEs = false,
}: {
  article: Article | ArticleEs;
  featured?: boolean;
  isEs?: boolean;
}) {
  const mins = readingTimeMinutes(article.body);
  const dateStr = isEs ? formatDateEs(article.publishedAt) : formatDate(article.publishedAt);
  const readLabel = isEs ? `${mins} min de lectura` : `${mins} min read`;

  // When ES, use Spanish slugs from ArticleEs; otherwise use EN Article slugs
  const esArticle = isEs ? (article as ArticleEs) : null;
  const esCatSlug = esArticle?.categoryEs ?? categorySlugEnToEs[article.category];
  const articleSlug = article.slug; // already ES slug when isEs

  if (featured) {
    if (isEs) {
      return (
        <Link
          to="/es/blog/$category/$slug"
          params={{ category: esCatSlug, slug: articleSlug }}
          className="group block"
        >
          <article className="rounded-3xl bg-ink p-8 lg:p-14 transition-shadow hover:shadow-elegant">
            <CategoryChip slug={article.category} size="md" />
            <h2
              className="mt-6 text-3xl lg:text-5xl text-canvas transition-colors group-hover:text-prompt/90"
              style={{ lineHeight: 1.05 }}
            >
              {article.title}
            </h2>
            <p className="mt-5 max-w-2xl text-canvas/60 text-base lg:text-lg leading-relaxed">
              {article.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-canvas/40 text-sm mono-light">
              <span>{article.author.name}</span>
              <span aria-hidden>·</span>
              <span>{dateStr}</span>
              <span aria-hidden>·</span>
              <span>{readLabel}</span>
            </div>
          </article>
        </Link>
      );
    }

    return (
      <Link
        to="/blog/$category/$slug"
        params={{ category: article.category, slug: articleSlug }}
        className="group block"
      >
        <article className="rounded-3xl bg-ink p-8 lg:p-14 transition-shadow hover:shadow-elegant">
          <CategoryChip slug={article.category} size="md" />
          <h2
            className="mt-6 text-3xl lg:text-5xl text-canvas transition-colors group-hover:text-prompt/90"
            style={{ lineHeight: 1.05 }}
          >
            {article.title}
          </h2>
          <p className="mt-5 max-w-2xl text-canvas/60 text-base lg:text-lg leading-relaxed">
            {article.excerpt}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-canvas/40 text-sm mono-light">
            <span>{article.author.name}</span>
            <span aria-hidden>·</span>
            <span>{dateStr}</span>
            <span aria-hidden>·</span>
            <span>{readLabel}</span>
          </div>
        </article>
      </Link>
    );
  }

  if (isEs) {
    return (
      <Link
        to="/es/blog/$category/$slug"
        params={{ category: esCatSlug, slug: articleSlug }}
        className="group block h-full"
      >
        <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-prompt/30 hover:shadow-card lg:p-8">
          <CategoryChip slug={article.category} />
          <h3 className="h3-soft mt-4 text-xl transition-colors group-hover:text-prompt lg:text-2xl">
            {article.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
            {article.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3 mono-light text-xs text-ink/40">
            <span>{dateStr}</span>
            <span aria-hidden>·</span>
            <span>{readLabel}</span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link
      to="/blog/$category/$slug"
      params={{ category: article.category, slug: articleSlug }}
      className="group block h-full"
    >
      <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-prompt/30 hover:shadow-card lg:p-8">
        <CategoryChip slug={article.category} />
        <h3 className="h3-soft mt-4 text-xl transition-colors group-hover:text-prompt lg:text-2xl">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
          {article.excerpt}
        </p>
        <div className="mt-6 flex items-center gap-3 mono-light text-xs text-ink/40">
          <span>{dateStr}</span>
          <span aria-hidden>·</span>
          <span>{readLabel}</span>
        </div>
      </article>
    </Link>
  );
}
