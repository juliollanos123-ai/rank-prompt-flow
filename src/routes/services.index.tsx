import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — SEO, GEO, AI, Branding & Web Development | Rank Your Brand" },
      { name: "description", content: "Premium services to build, position and scale brands: SEO, GEO, Mega Ads, AI automation, web development and strategic branding." },
      { property: "og:title", content: "Services — Rank Your Brand" },
      { property: "og:description", content: "Services designed to build, position and scale brands with system." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/services" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/services" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios" },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    tag: "SEO & GEO",
    to: "/services/seo-geo" as const,
    kicker: "Organic visibility",
    desc: "We build organic visibility with strategy. Transactional SEO architectures, content with commercial intent and optimization for AI-powered engines like ChatGPT, Perplexity and Google AI.",
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "Mega Ads",
    to: "/services/mega-ads" as const,
    kicker: "Paid acquisition",
    desc: "We create and optimize advertising systems for brands that need to accelerate results, validate offers or scale demand with well-structured campaigns across Meta, Google and other paid channels.",
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "AI Automation",
    to: "/services/ai-automation" as const,
    kicker: "Operational leverage",
    desc: "We turn manual processes into intelligent systems. Automations for marketing, sales follow-up, content generation, lead classification and internal operations.",
    tone: "border-flow/40 bg-flow/[0.06]",
  },
  {
    tag: "Web Development",
    to: "/services/web-development" as const,
    kicker: "Digital infrastructure",
    desc: "We build websites ready to sell, rank and scale. Not decorative pages: digital assets that connect structure, experience and conversion.",
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "Branding",
    to: "/services/branding" as const,
    kicker: "Positioning & identity",
    desc: "We define brands with strategic clarity. From naming, narrative and message to visual identity, tone and guidelines to grow with consistency.",
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "Digital Foundations",
    to: "/services/digital-foundations" as const,
    kicker: "Early-stage base",
    desc: "We help businesses starting out to build their online presence: social channels, brand base, initial assets and a minimum viable system to grow.",
    tone: "border-flow/40 bg-flow/[0.06]",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8"><Eyebrow>Services</Eyebrow></div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-5xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Services designed to build, position<br />
              <span className="accent-italic text-prompt">and scale brands with system.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg text-ink/70">
              We don't solve isolated tasks. We design the digital structure a company needs to exist with authority, generate demand and grow with smarter processes.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA to="/audit">Request a strategic diagnosis</CTA>
              <CTA to="/contact" variant="outline">Book a strategy call</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="max-w-3xl text-lg text-ink/70">
              Every RYB service resolves a real stage of a company's growth: from building a solid brand and initial digital presence, to scaling acquisition, automation, organic positioning and authority in traditional search engines and AI answer engines.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg text-ink/70">
              This isn't a menu of disconnected tasks — it's an ecosystem of connected solutions. Enter with one specific need and evolve toward an integral growth system.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {categories.map((c, i) => {
              const dark = c.tone.includes("text-canvas");
              return (
                <Reveal key={c.tag} delay={i * 0.06}>
                  <Link to={c.to} className="block h-full">
                    <motion.article
                      whileHover={{ y: -4 }}
                      className={`group h-full rounded-3xl border p-8 lg:p-10 ${c.tone}`}
                    >
                      <div className={`font-display text-xs tracking-[0.3em] ${dark ? "text-canvas/60" : "text-ink/50"}`}>{c.kicker}</div>
                      <h2 className="mt-3 text-3xl lg:text-4xl">{c.tag}</h2>
                      <p className={`mt-4 ${dark ? "text-canvas/75" : "text-ink/70"}`}>{c.desc}</p>
                      <div className={`mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${dark ? "text-canvas" : "text-ink"} group-hover:text-prompt`}>
                        Learn more <span aria-hidden>→</span>
                      </div>
                    </motion.article>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>How to choose</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl text-3xl lg:text-5xl">
              Not every business needs to start with SEO. Some need a clear brand first. Others, a web that converts. Others already have a base and need to accelerate with Ads or automate operations.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl text-lg text-ink/70">
              The right first step isn't hiring a service. It's understanding the real bottleneck of the business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <Eyebrow>Not sure which service?</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-3xl lg:text-5xl">
                Let's talk about the stage your company is in and define the <span className="accent-italic text-prompt">right structure to grow.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/contact">Book a strategy call</CTA>
                <CTA to="/audit" variant="outline">Get a free diagnosis</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
