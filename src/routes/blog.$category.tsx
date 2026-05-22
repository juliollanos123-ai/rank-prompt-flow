import { createFileRoute, notFound, Outlet, useMatches } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryChip } from "@/components/blog/CategoryChip";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { BlogInlineCTA } from "@/components/blog/BlogInlineCTA";
import { articlesByCategory, getCategory, isCategorySlug } from "@/data/blog";

export const Route = createFileRoute("/blog/$category")({
  loader: ({ params }) => {
    if (!isCategorySlug(params.category)) throw notFound();
    const cat = getCategory(params.category);
    return { cat, list: articlesByCategory(params.category) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Blog — Rank Your Brand" }] };
    const { cat, list } = loaderData;
    return {
      meta: [
        { title: `${cat.label} — Blog | Rank Your Brand` },
        { name: "description", content: cat.description },
        { property: "og:title", content: `${cat.label} — Rank Your Brand Blog` },
        { property: "og:description", content: `${list.length} articles on ${cat.label}.` },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-40 text-center lg:px-10">
      <h1 className="text-4xl">Category not found</h1>
    </div>
  ),
  component: CategoryLayout,
});

function CategoryLayout() {
  // If a child route (article) is matched, render only the outlet.
  const matches = useMatches();
  const hasChild = matches.some((m) => m.routeId === "/blog/$category/$slug");
  if (hasChild) return <Outlet />;
  return <CategoryView />;
}

function CategoryView() {
  const { cat, list } = Route.useLoaderData();
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
