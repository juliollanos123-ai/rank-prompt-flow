import { createFileRoute, Outlet, redirect, useRouterState } from "@tanstack/react-router";
import {
  articlesByCategory,
  getCategory,
  isCategorySlug,
} from "@/data/blog";
import type { CategorySlug } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/$category")({
  beforeLoad: ({ params }) => {
    if (!isCategorySlug(params.category)) {
      throw redirect({ to: "/blog", statusCode: 301 });
    }
  },
  head: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) return {};
    return {
      meta: [
        { title: `${cat.label} — Blog | Rank Your Brand` },
        { name: "description", content: cat.description },
        { property: "og:title", content: `${cat.label} — Rank Your Brand Blog` },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://rankyourbrand.co/blog/${cat.slug}`,
        },
      ],
    };
  },
  component: BlogCategoryRoute,
});

function BlogCategoryRoute() {
  const { location } = useRouterState();
  const segments = location.pathname.split("/").filter(Boolean);
  const isArticle = segments.length > 2;

  if (isArticle) {
    return <Outlet />;
  }

  const { category } = Route.useParams();
  const cat = getCategory(category as CategorySlug)!;
  const articles = articlesByCategory(category as CategorySlug);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: cat.label },
              ]}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6rem)]">
              {cat.label}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-ink/70">
              {cat.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10">
            <Reveal>
              <CategoryFilter />
            </Reveal>
          </div>

          {articles.length === 0 ? (
            <Reveal>
              <p className="text-ink/50 text-lg">
                No articles in this category yet — check back soon.
              </p>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => (
                <Reveal key={article.slug} delay={i * 0.04}>
                  <BlogCard article={article} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
