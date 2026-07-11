import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/services/seo-geo")({
  head: () => ({
    meta: [
      { title: "SEO & GEO — Organic Visibility Built With Strategy | Rank Your Brand" },
      { name: "description", content: "SEO and Generative Engine Optimization for B2B. Three connected tiers to build the foundation, scale organic traffic and dominate AI answers." },
      { property: "og:title", content: "SEO & GEO — Rank Your Brand" },
      { property: "og:description", content: "Organic visibility built with strategy — for Google and for AI." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/services/seo-geo" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/services/seo-geo" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/seo-geo" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/seo-geo" },
    ],
  }),
  component: SeoGeoHub,
});

const tiers = [
  {
    tag: "Technical SEO",
    to: "/services/technical-seo" as const,
    kicker: "Foundation · Project",
    meta: "4–6 weeks",
    desc: "The technical foundation your site needs to rank. Architecture, Core Web Vitals, schema and analytics setup.",
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "SEO for B2B",
    to: "/services/seo-for-b2b" as const,
    kicker: "Growth · Monthly retainer",
    meta: "6-month minimum",
    desc: "Organic growth month after month. AI-native content engine, CRO, link building and dashboards focused on qualified leads.",
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "AI SEO Agency",
    to: "/services/ai-seo-agency" as const,
    kicker: "Authority · Premium retainer",
    meta: "12-month engagement",
    desc: "Everything in SEO for B2B plus GEO and thought leadership for brands ready to dominate their category in Google and in AI.",
    tone: "border-flow/40 bg-flow/[0.06]",
  },
];

function SeoGeoHub() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "SEO & GEO" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8"><Eyebrow>SEO & GEO</Eyebrow></div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Organic visibility<br />
              <span className="accent-italic text-prompt">built with strategy.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              We design transactional SEO architectures, content with commercial intent and optimization for AI-powered search engines like ChatGPT, Perplexity and Google AI. Three connected tiers, one path.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-6 px-6 lg:px-10">
          {tiers.map((t, i) => {
            const dark = t.tone.includes("text-canvas");
            return (
              <Reveal key={t.tag} delay={i * 0.08}>
                <Link to={t.to} className="block">
                  <motion.article
                    whileHover={{ y: -4 }}
                    className={`group grid gap-8 rounded-3xl border p-8 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center lg:p-12 ${t.tone}`}
                  >
                    <div>
                      <div className={`font-display text-xs tracking-[0.3em] ${dark ? "text-canvas/60" : "text-ink/50"}`}>{t.kicker}</div>
                      <h2 className="mt-3 text-4xl lg:text-5xl">{t.tag}</h2>
                      <p className={`mt-4 max-w-md ${dark ? "text-canvas/75" : "text-ink/70"}`}>{t.desc}</p>
                    </div>
                    <div className="hidden lg:block" />
                    <div className="text-right">
                      <div className={`text-xs uppercase tracking-widest ${dark ? "text-canvas/50" : "text-ink/50"}`}>{t.meta}</div>
                      <div className={`mt-6 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${dark ? "text-canvas" : "text-ink"} group-hover:text-prompt`}>
                        Learn more <span aria-hidden>→</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <Eyebrow>Not sure which tier fits?</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-3xl lg:text-5xl">
                Get a free diagnosis and we'll <span className="accent-italic text-prompt">recommend the right starting point.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/audit">Get free diagnosis</CTA>
                <CTA to="/contact" variant="outline">Talk to us</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
