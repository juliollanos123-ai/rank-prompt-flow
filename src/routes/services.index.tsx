import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Blueprint, Scale & Landmark | Rank Your Brand" },
      {
        name: "description",
        content:
          "Three service tiers built for B2B growth: Blueprint (foundation), Scale (monthly growth) and Landmark (AI authority).",
      },
      { property: "og:title", content: "Services — Rank Your Brand" },
      { property: "og:description", content: "Three levels. One objective: make you findable." },
    ],
  }),
  component: ServicesPage,
});

const tiers = [
  {
    tag: "Blueprint",
    to: "/services/blueprint" as const,
    kicker: "Foundation · Project",
    price: "from $1,200",
    desc: "Audit, architecture and the technical SEO base every B2B site needs to rank in 2026.",
    bullets: ["Full technical audit", "Information architecture", "On-page SEO blueprint", "Schema + structured data"],
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "Scale",
    to: "/services/scale" as const,
    kicker: "Growth · Monthly retainer",
    price: "from $1,800/mo",
    desc: "An always-on content + SEO engine driven by our N8N multi-agent system. Compounding organic growth.",
    bullets: ["AI-native content production", "Continuous keyword expansion", "Authority link building", "Real-time dashboard"],
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "Landmark",
    to: "/services/landmark" as const,
    kicker: "Authority · Premium retainer",
    price: "from $3,500/mo",
    desc: "Become the brand AI cites. GEO, entity SEO and generative visibility for category leaders.",
    bullets: ["GEO optimization for ChatGPT, Perplexity & Google AI", "Entity and knowledge graph work", "Thought leadership program", "Quarterly AI visibility audit"],
    tone: "border-flow/40 bg-flow/[0.06]",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>Services</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Three levels.<br />
              <span className="italic text-prompt">One objective.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg text-ink/70">
              Choose the engagement that matches where you are. All start with the same Free AI Visibility Audit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28 lg:pb-36">
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
                    <ul className={`grid gap-2 text-sm ${dark ? "text-canvas/85" : "text-ink/85"}`}>
                      {t.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prompt" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="text-right">
                      <div className="font-display text-3xl text-prompt">{t.price}</div>
                      <div className={`mt-3 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${dark ? "text-canvas" : "text-ink"} group-hover:text-prompt`}>
                        Explore <span aria-hidden>→</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}

          <Reveal delay={0.4}>
            <div className="mt-10">
              <CTA to="/audit">Start with a free audit</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
