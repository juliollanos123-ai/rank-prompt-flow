import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof — Results & Applications of the System | Rank Your Brand" },
      { name: "description", content: "Explore how we apply SEO, GEO, branding, web development, automation and strategy to build real growth systems." },
      { property: "og:title", content: "Proof — Rank Your Brand" },
      { property: "og:description", content: "Strategy becomes valuable when it turns into real results." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/proof" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/proof" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/proof" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/resultados" },
    ],
  }),
  component: ProofPage,
});

const cases = [
  {
    n: "01",
    tag: "Brand & structure",
    title: "From confused digital presence to a clear brand, website and communication system.",
    body: "A rebuild of the brand's core narrative, verbal identity and web architecture — turning scattered channels into one coherent commercial front.",
  },
  {
    n: "02",
    tag: "SEO architecture",
    title: "From content without direction to SEO architecture with commercial intent.",
    body: "Keyword research anchored to high-volume, high-intent queries and a transactional site architecture that grows compounding organic traffic month after month.",
  },
  {
    n: "03",
    tag: "AI automation",
    title: "From scattered processes to operational automation with AI.",
    body: "Marketing, sales and operations flows connected end-to-end with AI-Native automation — reducing manual work and unlocking predictable capacity.",
  },
  {
    n: "04",
    tag: "Paid systems",
    title: "From uncontrolled campaigns to a measurable, scalable ad system.",
    body: "Restructuring of Meta and Google campaigns around real business objectives — measurement, creative, landing and offer aligned so budget compounds.",
  },
];

function ProofPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Proof" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8"><Eyebrow>Proof</Eyebrow></div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-5xl text-5xl lg:text-[clamp(3.25rem,6.5vw,6rem)]">
              Strategy becomes valuable<br />
              <span className="accent-italic text-prompt">when it turns into real results.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg text-ink/70">
              Not every proof point looks the same. Sometimes it's compounding organic growth. Other times it's clearer brand structure, a better website, a more organized sales system or a leaner operation. What matters is what changed in the business after building the right structure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.06}>
                <article className="h-full rounded-3xl border border-border bg-card p-8 transition-colors hover:border-prompt/40 lg:p-10">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xs tracking-[0.3em] text-prompt">{c.n}</span>
                    <span className="mono-light text-xs uppercase tracking-[0.25em] text-ink/50">{c.tag}</span>
                  </div>
                  <h2 className="mt-6 text-2xl lg:text-3xl">{c.title}</h2>
                  <p className="mt-4 text-ink/70">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <h2 className="max-w-3xl text-balance text-3xl lg:text-5xl">
                Every business grows from a different starting point. The key is identifying which structure it needs first.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/contact">Talk about my case</CTA>
                <CTA to="/audit" variant="outline">Get a free diagnosis</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
