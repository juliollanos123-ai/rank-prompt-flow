import { createFileRoute } from "@tanstack/react-router";
import { allArticlesEs, featuredArticleEs } from "@/data/blog.es";
import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/es/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — SEO & GEO para B2B | Rank Your Brand" },
      {
        name: "description",
        content:
          "Artículos sobre SEO B2B, Optimización para Motores Generativos (GEO) y marketing AI-native. Guías prácticas de una agencia SEO B2B AI-native.",
      },
      { property: "og:title", content: "Blog — Rank Your Brand" },
      {
        property: "og:description",
        content: "Insights de SEO & GEO para empresas B2B.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://rankyourbrand.co/es/blog" },
      { rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/blog" },
    ],
  }),
  component: BlogHubEs,
});

function BlogHubEs() {
  const rest = allArticlesEs.filter((a) => !a.featured);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              items={[{ label: "Inicio", to: "/es" }, { label: "Blog" }]}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6rem)]">
              Insights de SEO & GEO
              <br />
              <span className="italic text-prompt">para empresas B2B.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Guías prácticas sobre SEO B2B, Optimización para Motores Generativos (GEO)
              y marketing AI-native — escritas por el equipo que lo practica en su propio sitio primero.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <BlogCard article={featuredArticleEs} featured isEs />
          </Reveal>

          <div className="mt-16 mb-10">
            <Reveal>
              <CategoryFilter isEs />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.04}>
                <BlogCard article={article} isEs />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
