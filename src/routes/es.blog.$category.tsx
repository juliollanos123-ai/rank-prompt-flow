import { createFileRoute, Outlet, redirect, useRouterState } from "@tanstack/react-router";
import {
  articlesByCategoryEs,
  getCategoryEs,
  isEsCategorySlug,
} from "@/data/blog.es";
import type { EsCategorySlug } from "@/data/blog.es";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/es/blog/$category")({
  beforeLoad: ({ params }) => {
    if (!isEsCategorySlug(params.category)) {
      throw redirect({ to: "/es/blog", statusCode: 301 });
    }
  },
  head: ({ params }) => {
    const cat = getCategoryEs(params.category);
    if (!cat) return {};
    return {
      meta: [
        { title: `${cat.label} — Blog | Rank Your Brand` },
        { name: "description", content: cat.description },
        { property: "og:title", content: `${cat.label} — Blog de Rank Your Brand` },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://rankyourbrand.co/es/blog/${cat.slug}`,
        },
        {
          rel: "alternate",
          hrefLang: "en",
          href: `https://rankyourbrand.co/blog/${cat.enSlug}`,
        },
      ],
    };
  },
  component: BlogCategoryRouteEs,
});

function BlogCategoryRouteEs() {
  const { location } = useRouterState();
  const segments = location.pathname.split("/").filter(Boolean);
  // /es/blog/$category/$slug → 4 segments
  const isArticle = segments.length > 3;

  if (isArticle) {
    return <Outlet />;
  }

  const { category } = Route.useParams();
  const cat = getCategoryEs(category as EsCategorySlug)!;
  const articles = articlesByCategoryEs(category as EsCategorySlug);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Inicio", to: "/es" },
                { label: "Blog", to: "/es/blog" },
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
              <CategoryFilter isEs />
            </Reveal>
          </div>

          {articles.length === 0 ? (
            <Reveal>
              <p className="text-ink/50 text-lg">
                No hay artículos en esta categoría aún — vuelve pronto.
              </p>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => (
                <Reveal key={article.slug} delay={i * 0.04}>
                  <BlogCard article={article} isEs />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
