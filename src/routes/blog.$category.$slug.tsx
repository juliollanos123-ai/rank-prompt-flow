import { createFileRoute, notFound, Link, redirect } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTA } from "@/components/site/CTA";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryChip } from "@/components/blog/CategoryChip";
import { BlogInlineCTA, BlogEndCTA } from "@/components/blog/BlogInlineCTA";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import {
  formatDate,
  getArticle,
  getCategory,
  isCategorySlug,
  readingTimeMinutes,
  relatedArticles,
  type Block,
} from "@/data/blog";

export const Route = createFileRoute("/blog/$category/$slug")({
  loader: ({ params }) => {
    if (!isCategorySlug(params.category)) throw notFound();
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    // Canonical URL guard — article belongs to one category only.
    if (article.category !== params.category) {
      throw redirect({
        to: "/blog/$category/$slug",
        params: { category: article.category, slug: article.slug },
        statusCode: 301,
      });
    }
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Blog — Rank Your Brand" }] };
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} | Rank Your Brand Blog` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "article:author", content: a.author.name },
        { property: "article:published_time", content: a.publishedAt },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-40 text-center lg:px-10">
      <h1 className="text-4xl">Article not found</h1>
      <p className="mt-4 text-ink/70">We couldn't find what you were looking for.</p>
      <div className="mt-8"><CTA to="/blog">Back to blog</CTA></div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-40 text-center lg:px-10">
      <h1 className="text-3xl">Something went wrong</h1>
      <button onClick={reset} className="mt-6 underline">Try again</button>
    </div>
  ),
  component: ArticleView,
});

function ArticleView() {
  const { article } = Route.useLoaderData();
  const cat = getCategory(article.category);
  const time = readingTimeMinutes(article.body);
  const headings = article.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const related = relatedArticles(article);
  const initials = article.author.name.split(" ").map((n) => n[0]).join("");

  return (
    <>
      <ReadingProgress />

      <section className="relative isolate overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-14">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: cat.label, to: "/blog/$category", params: { category: cat.slug } },
                { label: article.title },
              ]}
            />
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <Reveal delay={0.06}>
                <div className="flex flex-wrap items-center gap-3">
                  <CategoryChip slug={article.category} />
                  <span className="font-display text-[11px] uppercase tracking-[0.22em] text-ink/55">
                    {time} min read
                  </span>
                  <span className="text-ink/30">·</span>
                  <span className="font-display text-[11px] uppercase tracking-[0.22em] text-ink/55">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <h1 className="mt-6 text-balance text-4xl leading-[1.05] lg:text-6xl">
                  {article.title}
                </h1>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-6 max-w-2xl text-lg text-ink/70 lg:text-xl">
                  {article.excerpt}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.22} className="lg:col-span-4">
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm lg:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-sm text-canvas">
                    {initials}
                  </div>
                  <div>
                    <div className="font-display text-[10px] uppercase tracking-[0.25em] text-ink/45">
                      Written by
                    </div>
                    <div className="mt-1 font-display text-sm text-ink">{article.author.name}</div>
                    <div className="text-xs text-ink/55">
                      {article.author.title ? `${article.author.title} · ` : ""}
                      {article.author.company}
                    </div>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border pt-5">
                  <div>
                    <dt className="font-display text-[10px] uppercase tracking-[0.25em] text-ink/45">Category</dt>
                    <dd className="mt-1 font-display text-sm text-ink">{cat.label}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[10px] uppercase tracking-[0.25em] text-ink/45">Reading</dt>
                    <dd className="mt-1 font-display text-sm text-ink">{time} min</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[10px] uppercase tracking-[0.25em] text-ink/45">Published</dt>
                    <dd className="mt-1 font-display text-sm text-ink">{formatDate(article.publishedAt)}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[10px] uppercase tracking-[0.25em] text-ink/45">Sections</dt>
                    <dd className="mt-1 font-display text-sm text-ink">{headings.length || "—"}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className={`relative aspect-[21/8] overflow-hidden rounded-3xl ${cat.cover}`}>
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_20%,rgba(255,255,255,0.18),transparent)]" />
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {headings.length > 0 && (
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <div className="font-display text-[10px] uppercase tracking-[0.3em] text-ink/45">
                    On this page
                  </div>
                  <ol className="mt-5 space-y-3 border-l border-border pl-4 text-sm">
                    {headings.map((h, i) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="block leading-snug text-ink/70 transition-colors hover:text-prompt"
                        >
                          <span className="mr-2 font-display text-[10px] text-ink/40">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>
            )}

            <article
              className={`prose-blog max-w-[720px] ${
                headings.length > 0 ? "lg:col-span-8 lg:col-start-5" : "mx-auto lg:col-span-10 lg:col-start-2"
              }`}
            >
              {article.body.map((b, i) => renderBlock(b, i))}

              <div className="my-14">
                <BlogInlineCTA />
              </div>

              <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between lg:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-sm text-canvas">
                    {initials}
                  </div>
                  <div>
                    <div className="font-display text-sm text-ink">{article.author.name}</div>
                    <div className="text-xs text-ink/55">
                      {article.author.title ? `${article.author.title} · ` : ""}
                      {article.author.company}
                    </div>
                  </div>
                </div>
                <Link
                  to="/blog/$category"
                  params={{ category: cat.slug }}
                  className="font-display text-[11px] uppercase tracking-[0.25em] text-ink/60 transition-colors hover:text-prompt"
                >
                  More in {cat.label} →
                </Link>
              </div>

              <div className="mt-10">
                <BlogEndCTA />
              </div>
            </article>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-canvas pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-3xl lg:text-4xl">Related <span className="accent-italic text-prompt">articles.</span></h2>
              <Link to="/blog" className="font-display text-xs uppercase tracking-[0.22em] text-ink/60 hover:text-prompt">
                View all →
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <BlogCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2 key={i} id={b.id} className="mt-14 scroll-mt-28 text-3xl text-ink lg:text-4xl">
          {b.text}
        </h2>
      );
    case "h3":
      return <h3 key={i} className="mt-10 h3-soft text-2xl text-ink">{b.text}</h3>;
    case "p":
      return (
        <p key={i} className="mt-5 text-base leading-[1.75] text-ink/85 lg:text-[17px]">
          {b.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-6 space-y-3">
          {b.items.map((it, j) => (
            <li key={j} className="flex gap-3 text-ink/85">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-prompt" />
              <span className="leading-[1.7]">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={i} className="mt-10 rounded-2xl border-l-4 border-prompt bg-prompt/5 px-6 py-5 text-ink">
          {b.text}
        </div>
      );
    case "quote":
      return (
        <blockquote key={i} className="mt-12 border-l-2 border-ink/20 pl-6">
          <p className="h3-soft text-2xl text-ink">"{b.text}"</p>
          {b.cite && (
            <footer className="mt-3 font-display text-[11px] uppercase tracking-[0.22em] text-ink/55">
              — {b.cite}
            </footer>
          )}
        </blockquote>
      );
  }
}
