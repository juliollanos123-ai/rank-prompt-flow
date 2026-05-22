import { createFileRoute, notFound, Link } from "@tanstack/react-router";
// articles import kept for potential future use; only individual helpers below are required.
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CTA } from "@/components/site/CTA";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryChip } from "@/components/blog/CategoryChip";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { BlogInlineCTA, BlogEndCTA } from "@/components/blog/BlogInlineCTA";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import {
  articlesByCategory,
  formatDate,
  getArticle,
  getCategory,
  isCategorySlug,
  readingTimeMinutes,
  relatedArticles,
  type Article,
  type Block,
} from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const { slug } = params;
    if (isCategorySlug(slug)) {
      const cat = getCategory(slug);
      const list = articlesByCategory(slug);
      return { kind: "category" as const, cat, list };
    }
    const article = getArticle(slug);
    if (!article) throw notFound();
    return { kind: "article" as const, article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Blog — Rank Your Brand" }] };
    if (loaderData.kind === "category") {
      const { cat, list } = loaderData;
      return {
        meta: [
          { title: `${cat.label} — Blog | Rank Your Brand` },
          { name: "description", content: cat.description },
          { property: "og:title", content: `${cat.label} — Rank Your Brand Blog` },
          { property: "og:description", content: `${list.length} articles on ${cat.label}.` },
        ],
      };
    }
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
  component: BlogSlug,
});

function BlogSlug() {
  const data = Route.useLoaderData();
  if (data.kind === "category") return <CategoryView />;
  return <ArticleView />;
}

function CategoryView() {
  const { cat, list } = Route.useLoaderData() as {
    kind: "category";
    cat: ReturnType<typeof getCategory>;
    list: Article[];
  };
  const first = list.slice(0, 6);
  const rest = list.slice(6);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: cat.label }]}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8"><CategoryChip slug={cat.slug} /></div>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-7xl">
              <span className="accent-italic text-prompt">{cat.label}.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-2xl text-lg text-ink/70">{cat.description}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-6 font-display text-[11px] uppercase tracking-[0.25em] text-ink/55">
              {list.length} article{list.length === 1 ? "" : "s"}
            </div>
          </Reveal>
        </div>
      </section>

      <CategoryFilter active={cat.slug} />

      <section className="bg-canvas py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {list.length === 0 ? (
            <p className="text-ink/60">No articles in this category yet.</p>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {first.map((a, i) => (
                  <Reveal key={a.slug} delay={i * 0.05}>
                    <BlogCard article={a} />
                  </Reveal>
                ))}
              </div>
              {rest.length > 0 && (
                <>
                  <div className="my-16"><BlogInlineCTA /></div>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((a, i) => (
                      <Reveal key={a.slug} delay={i * 0.05}>
                        <BlogCard article={a} />
                      </Reveal>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      <section className="bg-canvas pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <BlogInlineCTA />
        </div>
      </section>
    </>
  );
}

function ArticleView() {
  const { article } = Route.useLoaderData() as { kind: "article"; article: Article };
  const cat = getCategory(article.category);
  const time = readingTimeMinutes(article.body);
  const headings = article.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const related = relatedArticles(article);
  const wordCount = article.body.reduce((acc, b) => {
    if ("text" in b) return acc + b.text.split(/\s+/).length;
    if (b.type === "ul") return acc + b.items.join(" ").split(/\s+/).length;
    return acc;
  }, 0);
  const showToc = wordCount > 1000 && headings.length > 1;

  return (
    <>
      <ReadingProgress />

      {/* Header */}
      <section className="relative isolate overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: cat.label, to: "/blog/$slug", },
                { label: article.title },
              ]}
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
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
            <h1 className="mt-6 text-balance text-4xl lg:text-6xl">{article.title}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-lg text-ink/70">{article.excerpt}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-canvas font-display text-sm">
                {article.author.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-display text-sm text-ink">{article.author.name}</div>
                <div className="text-xs text-ink/55">
                  {article.author.title ? `${article.author.title} · ` : ""}
                  {article.author.company}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className={`relative aspect-[21/9] overflow-hidden rounded-3xl ${cat.cover}`}>
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_20%,rgba(255,255,255,0.18),transparent)]" />
          </div>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="bg-canvas py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className={showToc ? "lg:grid lg:grid-cols-[1fr_240px] lg:gap-12" : ""}>
            <article className="prose-blog mx-auto max-w-[720px]">
              {/* Plan / On this page (inline at top, always visible) */}
              {headings.length > 0 && (
                <div className="mb-10 rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-[11px] uppercase tracking-[0.25em] text-ink/55">
                    On this page
                  </div>
                  <ol className="mt-4 space-y-2 text-sm">
                    {headings.map((h, i) => (
                      <li key={h.id} className="flex gap-3 text-ink/80 hover:text-prompt">
                        <span className="font-display text-prompt">{String(i + 1).padStart(2, "0")}</span>
                        <a href={`#${h.id}`} className="leading-snug">{h.text}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {article.body.map((b, i) => renderBlock(b, i))}

              <div className="mt-16">
                <BlogEndCTA />
              </div>
            </article>

            {showToc && (
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <div className="font-display text-[11px] uppercase tracking-[0.25em] text-ink/55">
                    Contents
                  </div>
                  <ol className="mt-4 space-y-3 border-l border-border pl-4 text-sm">
                    {headings.map((h, i) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="block text-ink/70 transition-colors hover:text-prompt"
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
          </div>
        </div>
      </section>

      {/* Related */}
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
        <h2
          key={i}
          id={b.id}
          className="mt-14 scroll-mt-28 text-3xl text-ink lg:text-4xl"
        >
          {b.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-10 h3-soft text-2xl text-ink">
          {b.text}
        </h3>
      );
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
        <div
          key={i}
          className="mt-10 rounded-2xl border-l-4 border-prompt bg-prompt/5 px-6 py-5 text-ink"
        >
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
