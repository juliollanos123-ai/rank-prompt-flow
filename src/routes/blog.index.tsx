import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { BlogInlineCTA } from "@/components/blog/BlogInlineCTA";
import { articles } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — B2B SEO & AI Search Insights | Rank Your Brand" },
      {
        name: "description",
        content:
          "Insights on ranking in Google, ChatGPT and Perplexity — for B2B companies. AI Search, B2B Growth, SEO Engineering and SEO ROI.",
      },
      { property: "og:title", content: "The B2B SEO & AI Search Blog — Rank Your Brand" },
      {
        property: "og:description",
        content: "Insights on ranking in Google, ChatGPT and Perplexity — for B2B companies.",
      },
    ],
  }),
  component: BlogHub,
});

function BlogHub() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug);
  const firstSix = rest.slice(0, 6);
  const remaining = rest.slice(6);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8"><Eyebrow>Blog · Insights</Eyebrow></div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-5xl text-5xl lg:text-[clamp(3.25rem,6.5vw,6rem)]">
              The B2B SEO &<br />
              <span className="accent-italic text-prompt">AI Search Blog.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Insights on ranking in Google, ChatGPT and Perplexity — written for B2B companies that treat organic as a growth channel, not an experiment.
            </p>
          </Reveal>
        </div>
      </section>

      <CategoryFilter active="all" />

      {/* Featured */}
      <section className="bg-canvas py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <BlogCard article={featured} variant="featured" />
          </Reveal>
        </div>
      </section>

      {/* Grid first six + inline CTA + remainder */}
      <section className="bg-canvas pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {firstSix.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.05}>
                <BlogCard article={a} />
              </Reveal>
            ))}
          </div>

          {remaining.length > 0 && (
            <>
              <div className="my-16">
                <Reveal>
                  <BlogInlineCTA />
                </Reveal>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {remaining.map((a, i) => (
                  <Reveal key={a.slug} delay={i * 0.05}>
                    <BlogCard article={a} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
