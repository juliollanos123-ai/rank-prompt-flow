import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Fragment } from "react";
import {
  getArticleEs,
  relatedArticlesEs,
  formatDateEs,
  getCategoryEs,
  isEsCategorySlug,
} from "@/data/blog.es";
import { readingTimeMinutes } from "@/data/blog";
import type { Block } from "@/data/blog";
import { CategoryChip } from "@/components/blog/CategoryChip";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogInlineCTA } from "@/components/blog/BlogInlineCTA";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/es/blog/$category/$slug")({
  loader: ({ params }) => {
    const article = getArticleEs(params.slug);
    if (!article) throw redirect({ to: "/es/blog", statusCode: 301 });
    if (article.categoryEs !== params.category) {
      if (!isEsCategorySlug(params.category)) {
        throw redirect({ to: "/es/blog", statusCode: 301 });
      }
      throw redirect({
        to: "/es/blog/$category/$slug",
        params: { category: article.categoryEs, slug: article.slug },
        statusCode: 301,
      });
    }
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | Rank Your Brand` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://rankyourbrand.co/es/blog/${article.categoryEs}/${article.slug}`,
        },
        {
          rel: "alternate",
          hrefLang: "en",
          href: `https://rankyourbrand.co/blog/${article.category}/${article.enSlug}`,
        },
      ],
    };
  },
  component: ArticlePageEs,
});

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 id={block.id}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote>
          <p>{block.text}</p>
          {block.cite && <cite>— {block.cite}</cite>}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="my-8 rounded-xl border-l-[3px] border-prompt bg-prompt/[0.07] px-6 py-5 text-base italic leading-relaxed text-ink">
          {block.text}
        </aside>
      );
  }
}

function ArticleBody({ body }: { body: Block[] }) {
  const firstCalloutIdx = body.findIndex((b) => b.type === "callout");
  const ctaAfterIdx =
    firstCalloutIdx >= 0 ? firstCalloutIdx : Math.floor(body.length / 2);

  return (
    <div className="prose-blog">
      {body.map((block, idx) => (
        <Fragment key={idx}>
          <BlockRenderer block={block} />
          {idx === ctaAfterIdx && (
            <BlogInlineCTA
              headline="¿Quieres saber dónde aparece tu marca en la búsqueda con IA?"
              body="Solicita un diagnóstico GEO gratuito — te mostramos qué sistemas de IA citan tu marca y dónde eres invisible."
              cta={{ label: "Obtén tu diagnóstico gratuito", to: "/es/auditoria" }}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

function ArticlePageEs() {
  const { article } = Route.useLoaderData();
  const mins = readingTimeMinutes(article.body);
  const related = relatedArticlesEs(article, 3);
  const cat = getCategoryEs(article.categoryEs);

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="absolute inset-0 -z-10 grid-overlay opacity-30" />
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Inicio", to: "/es" },
                { label: "Blog", to: "/es/blog" },
                {
                  label: cat?.label ?? article.categoryEs,
                  to: `/es/blog/${article.categoryEs}`,
                },
                { label: article.title },
              ]}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6">
              <CategoryChip slug={article.category} size="md" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl lg:text-[clamp(2.5rem,6vw,4.5rem)]" style={{ lineHeight: 1.02 }}>
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-xl leading-relaxed text-ink/70 lg:text-2xl">
              {article.excerpt}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6 mono-light text-sm text-ink/50">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-xs font-black text-canvas">
                  {article.author.initials}
                </span>
                <span>{article.author.name}</span>
              </div>
              <span aria-hidden>·</span>
              <span>{formatDateEs(article.publishedAt)}</span>
              <span aria-hidden>·</span>
              <span>{mins} min de lectura</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cuerpo del artículo */}
      <section className="bg-canvas pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <ArticleBody body={article.body} />
        </div>
      </section>

      {/* Artículos relacionados */}
      {related.length > 0 && (
        <section className="border-t border-border bg-canvas pb-28 pt-16 lg:pb-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <h2 className="text-2xl lg:text-3xl">Artículos relacionados</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel, i) => (
                <Reveal key={rel.slug} delay={i * 0.05}>
                  <BlogCard article={rel} isEs />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="mt-10">
                <Link
                  to="/es/blog"
                  className="mono-light text-sm text-ink/50 underline-offset-4 hover:text-ink hover:underline"
                >
                  ← Volver a todos los artículos
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
