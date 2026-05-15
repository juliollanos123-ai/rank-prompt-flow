import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Blueprint, Scale & Landmark | Rank Your Brand" },
      {
        name: "description",
        content:
          "Three levels. One objective: make you findable. Blueprint ($1,500), Scale ($2,500/mo) and Landmark ($3,500/mo).",
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
    price: "$1,500 USD",
    meta: "4–6 weeks",
    desc: "The foundation your site needs to rank. Full website development + technical SEO + analytics setup, ready for organic growth and AI discovery.",
    bullets: [
      "Full website development (from scratch or redesign)",
      "Technical SEO + Core Web Vitals optimization",
      "Schema markup + content architecture",
      "GA4, Search Console & Tag Manager setup",
    ],
    ideal: "Companies launching new sites or rebuilding outdated ones.",
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "Scale",
    to: "/services/scale" as const,
    kicker: "Growth · Monthly retainer",
    price: "$2,500/mo",
    meta: "6-month minimum",
    desc: "Organic growth, month after month. AI-native content engine + CRO + link building + dashboards focused on qualified leads.",
    bullets: [
      "4–6 SEO-optimized blog posts/month",
      "Conversion Rate Optimization (CRO)",
      "2–3 high-quality backlinks/month",
      "Real-time dashboard + monthly reporting",
    ],
    ideal: "Companies ready to grow organic traffic and lead generation.",
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "Landmark",
    to: "/services/landmark" as const,
    kicker: "Authority · Premium retainer",
    price: "$3,500/mo",
    meta: "12-month engagement",
    desc: "The authority AI recommends. Everything in Scale + GEO + thought leadership + white-glove service for category leaders.",
    bullets: [
      "Everything in Scale",
      "GEO optimization (ChatGPT, Perplexity citations)",
      "Executive thought leadership program",
      "Dedicated account manager + bi-weekly strategy",
    ],
    ideal: "Established B2B brands with $5M+ revenue ready to dominate.",
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
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Three levels.<br />
              <span className="italic text-prompt">One objective: make you findable.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Whether you're building from scratch, scaling organic growth, or dominating your category — we have a path for you.
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
                      <p className={`mt-4 text-sm ${dark ? "text-canvas/55" : "text-ink/55"}`}>
                        <span className={dark ? "text-canvas/80" : "text-ink/80"}>Ideal for:</span> {t.ideal}
                      </p>
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
                      <div className={`mt-1 text-xs uppercase tracking-widest ${dark ? "text-canvas/50" : "text-ink/50"}`}>
                        {t.meta}
                      </div>
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
              <Eyebrow>Not sure which is right?</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-3xl lg:text-5xl">
                Every business is different. Get a free diagnosis and we'll <span className="italic text-prompt">recommend the right starting point.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/audit">Get free diagnosis</CTA>
                <CTA to="/contact" variant="ghost">Talk to us</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
