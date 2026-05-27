import { createFileRoute } from "@tanstack/react-router";
import { allArticles, featuredArticle } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — SEO & GEO Insights for B2B | Rank Your Brand" },
      {
        name: "description",
        content:
          "Articles on B2B SEO, Generative Engine Optimization (GEO), and AI-native marketing. Practical guides from an AI-native B2B SEO agency.",
      },
      { property: "og:title", content: "Blog — Rank Your Brand" },
      {
        property: "og:description",
        content: "SEO & GEO insights for B2B companies.",
      },
    ],
    links: [{ rel: "canonical", href: "https://rankyourbrand.co/blog" }],
  }),
  component: BlogHub,
});

function BlogHub() {
  const rest = allArticles.filter((a) => !a.featured);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              items={[{ label: "Home", to: "/" }, { label: "Blog" }]}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6rem)]">
              SEO & GEO insights
              <br />
              <span className="italic text-prompt">for B2B companies.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Practical guides on B2B SEO, Generative Engine Optimization (GEO)
              and AI-native marketing — written by the team that practices it on
              their own site first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <BlogCard article={featuredArticle} featured />
          </Reveal>

          <div className="mt-16 mb-10">
            <Reveal>
              <CategoryFilter />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.04}>
                <BlogCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
