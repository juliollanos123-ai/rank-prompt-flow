import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — SEO & GEO Insights for B2B | Rank Your Brand" },
      { name: "description", content: "Articles on B2B SEO, Generative Engine Optimization (GEO), and AI-native marketing for B2B companies. Practical guides from an AI-native SEO agency." },
      { property: "og:title", content: "Blog — Rank Your Brand" },
      { property: "og:description", content: "SEO & GEO insights for B2B companies." },
    ],
    links: [
      { rel: "canonical", href: "https://rankyourbrand.co/blog" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              SEO & GEO insights<br />
              <span className="italic text-prompt">for B2B companies.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Practical guides on B2B SEO, Generative Engine Optimization (GEO), and AI-native marketing — written by the team that practices it on their own site first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16 text-center">
              <Eyebrow>Coming soon</Eyebrow>
              <h2 className="mt-6 max-w-2xl mx-auto text-3xl lg:text-5xl">
                Articles are on their way. Want to be notified?
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-ink/70">
                We're publishing 4–6 in-depth articles per month on B2B SEO and GEO. Sign up and get the first batch in your inbox.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CTA to="/contact">Get notified</CTA>
                <CTA to="/methodology" variant="ghost">See our methodology</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
