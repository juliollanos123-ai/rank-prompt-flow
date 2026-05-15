import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import isotipo from "@/assets/brand/isotipo-color.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rank Your Brand — Be the answer your buyers find in ChatGPT" },
      {
        name: "description",
        content:
          "AI-native SEO for B2B. We build visibility systems that get cited by ChatGPT, Perplexity and Google AI. Free website diagnosis in 48 hours.",
      },
      { property: "og:title", content: "Rank Your Brand — AI-Native SEO for B2B" },
      {
        property: "og:description",
        content: "Be the answer your buyers find. Free website diagnosis in 48 hours.",
      },
    ],
  }),
  component: Home,
});

const headlineWords = [
  "Your", "buyers", "already", "searched", "for", "you",
  "in", "ChatGPT.",
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-soft-glow" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-60" />

      {/* Floating diagonal gradient blob bottom-right */}
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 -z-10 h-[640px] w-[640px] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-diagonal)" }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>AI-Native SEO · USA + Europe</Eyebrow>
        </Reveal>

        <h1 className="mt-8 max-w-5xl text-balance text-5xl leading-[0.95] sm:text-6xl lg:text-[clamp(4rem,8vw,7.5rem)]">
          <span className="block">
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="block text-prompt italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Did they find you?
          </motion.span>
        </h1>

        <Reveal delay={0.8}>
          <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/75 lg:text-xl">
            68% of B2B buyers use AI search engines before visiting any website.
            If you're not optimized for ChatGPT, Perplexity and Google AI, you
            don't exist to your next customer.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/audit">Get your free website diagnosis</CTA>
            <CTA to="/methodology" variant="ghost">See how we do it</CTA>
          </div>
        </Reveal>

        {/* Split visual */}
        <Reveal delay={1.2}>
          <div className="mt-20 grid gap-4 lg:grid-cols-2">
            <SearchMock
              kind="google"
              title="google.com"
              query="best B2B logistics software"
            />
            <SearchMock
              kind="chatgpt"
              title="chatgpt.com"
              query="What's the best B2B logistics software in 2026?"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SearchMock({
  kind,
  title,
  query,
}: {
  kind: "google" | "chatgpt";
  title: string;
  query: string;
}) {
  const isAI = kind === "chatgpt";
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative overflow-hidden rounded-3xl border shadow-card ${
        isAI ? "border-flow/30 bg-ink text-canvas" : "border-border bg-card"
      }`}
    >
      <div className={`flex items-center gap-2 border-b px-5 py-3 text-xs ${isAI ? "border-canvas/10 text-canvas/60" : "border-border text-ink/60"}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-prompt/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-flow/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-current/20" />
        <span className="ml-3 font-display tracking-wider">{title}</span>
      </div>
      <div className="p-6">
        <div className={`mb-5 rounded-full px-4 py-2 text-sm ${isAI ? "bg-canvas/10" : "bg-muted"}`}>
          {query}
        </div>

        {isAI ? (
          <>
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-flow">
              <span className="h-1.5 w-1.5 rounded-full bg-flow animate-pulse" />
              AI answer
            </div>
            <p className="text-sm leading-relaxed text-canvas/85">
              For mid-market B2B, the leading platforms include{" "}
              <span className="rounded bg-prompt/20 px-1 text-prompt">CompetitorOne</span>,{" "}
              <span className="rounded bg-prompt/20 px-1 text-prompt">CompetitorTwo</span>{" "}
              and <span className="rounded bg-prompt/20 px-1 text-prompt">CompetitorThree</span>.
              Each offers automated routing, real-time tracking and EDI integrations.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-canvas/50">
              Sources: 3 cited · <span className="text-prompt">Your brand: not mentioned</span>
            </div>
          </>
        ) : (
          <>
            <ul className="space-y-4 text-sm">
              {[
                "competitorone.com — Top 10 B2B logistics platforms",
                "g2.com — Best logistics software 2026",
                "gartner.com — Magic Quadrant for logistics",
                "competitortwo.com — Why we lead the market",
              ].map((r) => (
                <li key={r} className="border-b border-border/60 pb-3 last:border-0">
                  <div className="text-flow underline-offset-4 hover:underline">{r}</div>
                  <div className="mt-1 text-xs text-ink/50">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
}

function GeoGap() {
  const milestones = [
    { year: "2020", label: "Classic Google SERP", note: "10 blue links" },
    { year: "2023", label: "SGE snippets appear", note: "AI previews go beta" },
    { year: "2024", label: "ChatGPT becomes research tool", note: "200M weekly users" },
    { year: "2026", label: "AI search is the default", note: "68% of B2B research" },
  ];
  return (
    <section className="relative bg-canvas py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>The GEO Gap</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
            The SEO you know <span className="text-prompt italic">is already obsolete.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            The game changed in 2024. Google doesn't just show links anymore — it
            generates answers. And AI decides who gets cited.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 h-px bg-ink/15" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-0 top-6 h-px origin-left"
            style={{ right: 0, background: "var(--gradient-diagonal)" }}
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={0.1 * i}>
                <div className="relative pt-12">
                  <div className="absolute left-0 top-3.5 h-6 w-6 rounded-full border-2 border-prompt bg-canvas" />
                  <div className="font-display text-2xl text-prompt">{m.year}</div>
                  <div className="mt-2 text-lg font-semibold">{m.label}</div>
                  <div className="mt-1 text-sm text-ink/60">{m.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-20 overflow-hidden rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="font-display text-7xl text-prompt lg:text-9xl">68%</div>
                <p className="mt-3 max-w-md text-ink/70">
                  of B2B buyers start product research with an AI assistant — not a search engine.
                </p>
              </div>
              <div className="text-right text-xs uppercase tracking-widest text-ink/50">
                Source: Gartner, 2025
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    {
      tag: "01",
      title: "Architecture that converts",
      body:
        "We build B2B websites designed to guide visitors from first click to contact. Not pretty pages — sales systems.",
    },
    {
      tag: "02",
      title: "AI-native operations",
      body:
        "Our N8N + LLM workflows produce strategic content at scale without sacrificing quality. More speed. Better results. Lower cost.",
    },
    {
      tag: "03",
      title: "GEO optimization",
      body:
        "We optimize your brand to be cited by ChatGPT, Perplexity and Google AI — the new search layer where buyers decide.",
    },
  ];
  return (
    <section className="bg-ink py-28 text-canvas lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow tone="canvas">The system</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl text-canvas lg:text-6xl">
            We build visibility systems, <span className="italic text-prompt">not SEO campaigns.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-canvas/10 bg-canvas/[0.03] p-8 transition-colors hover:border-flow/40"
              >
                <div className="font-display text-xs tracking-[0.3em] text-prompt">{p.tag}</div>
                <h3 className="mt-6 text-2xl text-canvas lg:text-3xl">{p.title}</h3>
                <p className="mt-4 text-canvas/70">{p.body}</p>
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-flow/0 blur-3xl transition-all group-hover:bg-flow/30" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyZero() {
  const metrics = [
    { label: "Days since launch", value: "42" },
    { label: "Organic keywords ranking", value: "127" },
    { label: "ChatGPT citations", value: "9" },
    { label: "Perplexity mentions", value: "14" },
    { label: "Google AI overviews", value: "6" },
    { label: "Articles published", value: "23" },
  ];
  return (
    <section className="bg-canvas py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <Reveal>
            <div>
              <Eyebrow>Case Study #0</Eyebrow>
              <h2 className="mt-6 text-4xl lg:text-6xl">
                This website <span className="italic text-prompt">is</span> our first case study.
              </h2>
              <p className="mt-6 max-w-md text-ink/70">
                We don't just talk about AI-native SEO. We practice it on ourselves, in public. Every metric below comes from this exact site.
              </p>
              <div className="mt-8">
                <CTA to="/methodology">See the methodology</CTA>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink text-canvas shadow-elegant">
              <div className="flex items-center justify-between border-b border-canvas/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-prompt animate-pulse" />
                  <span className="font-display text-xs tracking-widest text-canvas/70">RYB.CO · LIVE</span>
                </div>
                <span className="text-xs text-canvas/40">Updated 6 min ago</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3">
                {metrics.map((m) => (
                  <div key={m.label} className="border-b border-r border-canvas/10 p-6 last:border-r-0">
                    <div className="font-display text-4xl text-canvas lg:text-5xl">{m.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-wider text-canvas/50">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-canvas/10 bg-canvas/[0.04] px-6 py-4 text-xs text-canvas/50">
                Source: GSC + DataForSEO + manual AI checks · Pulled hourly
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      tag: "Blueprint",
      to: "/services/blueprint" as const,
      kicker: "Foundation",
      desc: "Full website development + technical SEO foundation. Ready for organic growth and AI discovery.",
      price: "$1,500 USD",
      meta: "Project · 4–6 weeks",
      tone: "border-prompt/40 bg-prompt/5",
    },
    {
      tag: "Scale",
      to: "/services/scale" as const,
      kicker: "Growth",
      desc: "Organic growth, month after month. AI-native content engine + CRO + link building + dashboards.",
      price: "$2,500/mo",
      meta: "Retainer · 6-month minimum",
      tone: "border-ink/15 bg-ink text-canvas",
    },
    {
      tag: "Landmark",
      to: "/services/landmark" as const,
      kicker: "Authority",
      desc: "The authority AI recommends. Everything in Scale + GEO + thought leadership.",
      price: "$3,500/mo",
      meta: "Retainer · 12-month engagement",
      tone: "border-flow/40 bg-flow/[0.06]",
    },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
            Three levels. One objective: <span className="italic text-prompt">make you findable.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.tag} delay={0.1 * i}>
              <Link to={s.to} className="block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative flex h-full flex-col rounded-3xl border p-8 transition-shadow hover:shadow-card ${s.tone}`}
                >
                  <div className={`font-display text-xs tracking-[0.3em] ${s.tone.includes("text-canvas") ? "text-canvas/60" : "text-ink/50"}`}>
                    {s.kicker}
                  </div>
                  <h3 className="mt-3 text-3xl lg:text-4xl">{s.tag}</h3>
                  <p className={`mt-5 ${s.tone.includes("text-canvas") ? "text-canvas/75" : "text-ink/70"}`}>
                    {s.desc}
                  </p>
                  <div className="mt-auto pt-10">
                    <div className="font-display text-2xl text-prompt">{s.price}</div>
                    <div className={`mt-1 text-xs uppercase tracking-wider ${s.tone.includes("text-canvas") ? "text-canvas/50" : "text-ink/50"}`}>
                      {s.meta}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider">
                      Learn more <span aria-hidden>→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What is GEO and why does it matter for B2B?",
    a: "GEO (Generative Engine Optimization) is the practice of optimizing your content so AI systems like ChatGPT, Perplexity, and Google AI Overview cite your brand when answering buyer questions. In B2B, 68% of buyers now start research with an AI assistant — if you're not cited, you don't exist in that critical early stage.",
  },
  {
    q: "How is this different from traditional SEO?",
    a: "Traditional SEO targets 10 blue links in Google. GEO targets the AI-generated answers that now appear before those links — and increasingly replace them entirely. We optimize both layers: classic technical SEO for ranking AND content architecture that makes AI systems choose to cite you.",
  },
  {
    q: "How long does it take to see results?",
    a: "Technical fixes and content improvements typically show initial movement in 6–12 weeks. GEO citation results (ChatGPT, Perplexity mentions) often appear in 8–16 weeks. Our Blueprint service creates the foundation; Scale and Landmark build the compounding visibility over 6–12 months.",
  },
  {
    q: "Do you work with companies outside the US?",
    a: "Yes. We serve B2B companies in the US, Europe, and LATAM. Our team operates across time zones and we've optimized for both English and Spanish-language markets.",
  },
  {
    q: "What makes your free diagnosis actually free?",
    a: "We analyze your site, run competitor benchmarks, and check your current presence in Google AI, ChatGPT, and Perplexity — then deliver a 5–7 page PDF with actionable findings. No catch. We do it because the best clients come from seeing real value first. If the report helps you whether or not you hire us, that's fine with us.",
  },
  {
    q: "What does the $497 full audit include?",
    a: "A 20-page PDF covering 50+ technical checkpoints, 3–5 competitor benchmarks, 100+ keyword opportunities, a backlink profile audit, a GEO optimization roadmap, and a 90-day implementation plan. Plus a 30-minute video walkthrough with our team. The fee is fully refundable if you hire us within 30 days.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-canvas py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
            Questions we <span className="italic text-prompt">always get.</span>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-8 py-6 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-lg font-semibold text-ink lg:text-xl">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-1 shrink-0 font-display text-xl text-prompt"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-ink/70 leading-relaxed max-w-3xl">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-diagonal" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-20 mix-blend-overlay" />
      <div className="mx-auto max-w-7xl px-6 py-28 text-canvas lg:px-10 lg:py-40">
        <Reveal>
          <img src={isotipo} alt="" className="h-14 w-auto opacity-90" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 max-w-4xl text-balance text-4xl text-canvas lg:text-7xl">
            Do you know how your brand appears when a buyer searches for you in ChatGPT today?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/audit" variant="outline-canvas">Find out free in 48h</CTA>
            <CTA to="/contact" variant="outline-canvas">Talk to us</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <GeoGap />
      <Pillars />
      <CaseStudyZero />
      <ServicesPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
