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
      { title: "Rank Your Brand — Growth Systems for Modern Brands" },
      {
        name: "description",
        content:
          "We don't sell isolated tasks. We build growth systems: strategy, brand, web, SEO, GEO, Ads and AI automation — connected to make companies scale with order.",
      },
      { property: "og:title", content: "Rank Your Brand — Growth Systems for Modern Brands" },
      {
        property: "og:description",
        content: "Strategy, brand, web, SEO/GEO, Ads and AI automation — one connected growth system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://rankyourbrand.co/" },
      { rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/" },
      { rel: "alternate", hrefLang: "es", href: "https://rankyourbrand.co/es" },
    ],
  }),
  component: Home,
});

const headlineWords = ["We", "don't", "sell", "isolated", "tasks."];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-soft-glow" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-60" />

      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 -z-10 h-[640px] w-[640px] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-diagonal)" }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Growth System Agency · Colombia + USA</Eyebrow>
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
            We build growth systems.
          </motion.span>
        </h1>

        <Reveal delay={0.8}>
          <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/75 lg:text-xl">
            Strategy, brand, web, SEO, GEO, paid acquisition and AI automation
            — connected as one operating system so your company grows with
            order, authority and predictable results.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/audit">Get your free diagnosis</CTA>
            <CTA to="/methodology" variant="ghost">See the methodology</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ShiftNarrative() {
  return (
    <section className="relative bg-canvas py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>The shift</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl lg:text-6xl">
            A traditional agency operates in silos.{" "}
            <span className="text-prompt italic">A growth system connects everything.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg text-ink/70">
            Brand, website, content, SEO, GEO, Ads and reporting used to live in
            separate teams and separate tools. That's why growth felt
            disconnected — every piece optimized for itself, none for the
            business. We rebuild the whole operating system so each part
            reinforces the next.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              { k: "Strategy first", v: "Every deliverable answers a business question, not a channel checklist." },
              { k: "AI-Native operations", v: "Multi-agent workflows produce, monitor and report at a speed manual teams can't match." },
              { k: "Compounding assets", v: "Brand, web, SEO and content are built to appreciate, not expire with a campaign." },
            ].map((b, i) => (
              <Reveal key={b.k} delay={0.1 * i}>
                <div className="h-full rounded-3xl border border-border bg-card p-8">
                  <div className="font-display text-xs tracking-[0.3em] text-prompt">0{i + 1}</div>
                  <h3 className="h3-soft mt-4 text-2xl">{b.k}</h3>
                  <p className="mt-4 text-ink/70">{b.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GrowthSystem() {
  const phases = [
    {
      n: "Diagnose",
      body: "We map your context, stage and real bottleneck — before proposing anything. No cookie-cutter deck.",
      note: "Weeks 1–2",
    },
    {
      n: "Build",
      body: "We ship the priority front — brand, web, SEO, content, Ads or automation — with the rest of the system in mind.",
      note: "Weeks 3–8",
    },
    {
      n: "Scale",
      body: "What works turns into a repeatable engine. New fronts plug in without breaking the ones already running.",
      note: "Month 3+",
    },
  ];
  return (
    <section className="bg-ink py-28 text-canvas lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow tone="canvas">How we work</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl text-canvas lg:text-6xl">
            Diagnose. Build. <span className="italic text-prompt">Scale.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-canvas/70">
            Three phases you actually experience as a client. Underneath sits a
            structured methodology — but you don't need to run it, we do.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative rounded-3xl border border-canvas/10 bg-canvas/[0.04] p-8"
            >
              <div className="flex items-center justify-between">
                <div className="font-display text-xs tracking-[0.3em] text-prompt">0{i + 1}</div>
                <div className="mono-light text-xs uppercase tracking-widest text-canvas/40">{p.note}</div>
              </div>
              <h3 className="h3-soft mt-6 text-3xl text-canvas">{p.n}</h3>
              <p className="mt-4 text-canvas/70">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <CTA to="/methodology" variant="outline-canvas">See the full methodology</CTA>
            <span className="mono-light text-sm text-canvas/50">5 stages · multi-agent operating system</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function ServicesPreview() {
  const services = [
    {
      tag: "SEO & GEO",
      to: "/services/seo-geo" as const,
      kicker: "Organic visibility",
      desc: "Transactional SEO architecture, commercial content and optimization for AI engines like ChatGPT, Perplexity and Google AI.",
      tone: "border-prompt/40 bg-prompt/5",
    },
    {
      tag: "Mega Ads",
      to: "/services/mega-ads" as const,
      kicker: "Paid acquisition",
      desc: "Advertising systems on Meta, Google and other channels to accelerate results, validate offers or scale demand.",
      tone: "border-ink/15 bg-ink text-canvas",
    },
    {
      tag: "AI Automation",
      to: "/services/ai-automation" as const,
      kicker: "Operational leverage",
      desc: "Manual processes turned into intelligent systems: marketing, sales follow-up, content, lead scoring, internal ops.",
      tone: "border-flow/40 bg-flow/[0.06]",
    },
    {
      tag: "Web Development",
      to: "/services/web-development" as const,
      kicker: "Digital infrastructure",
      desc: "Websites ready to sell, rank and scale. Digital assets that connect structure, experience and conversion.",
      tone: "border-prompt/40 bg-prompt/5",
    },
    {
      tag: "Branding",
      to: "/services/branding" as const,
      kicker: "Positioning & identity",
      desc: "Naming, narrative, message, visual system, tone and guidelines to grow with consistency.",
      tone: "border-ink/15 bg-ink text-canvas",
    },
    {
      tag: "Digital Foundations",
      to: "/services/digital-foundations" as const,
      kicker: "Early-stage base",
      desc: "Brand base, social channels, minimum viable web and messaging — for companies starting out with the right structure.",
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
          <h2 className="mt-6 max-w-4xl text-4xl lg:text-6xl">
            Six connected services. <span className="italic text-prompt">One growth system.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg text-ink/70">
            Enter with one specific need and evolve toward the integrated system.
            Every service is designed to reinforce the others — not to be sold as
            an isolated tactic.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const dark = s.tone.includes("text-canvas");
            return (
              <Reveal key={s.tag} delay={i * 0.06}>
                <Link to={s.to} className="block h-full">
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`group h-full rounded-3xl border p-8 transition-shadow hover:shadow-card ${s.tone}`}
                  >
                    <div className={`font-display text-xs tracking-[0.3em] ${dark ? "text-canvas/60" : "text-ink/50"}`}>
                      {s.kicker}
                    </div>
                    <h3 className="h3-soft mt-3 text-2xl lg:text-3xl">{s.tag}</h3>
                    <p className={`mt-4 ${dark ? "text-canvas/75" : "text-ink/70"}`}>{s.desc}</p>
                    <div className={`mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${dark ? "text-canvas" : "text-ink"} group-hover:text-prompt`}>
                      Learn more <span aria-hidden>→</span>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap gap-3">
            <CTA to="/services">Explore all services</CTA>
            <CTA to="/contact" variant="outline">Talk to us</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GeoGap() {
  return (
    <section className="relative bg-ink/[0.02] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Why now</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
            There are new ways to show up in search.{" "}
            <span className="text-prompt italic">And a new way to build agencies.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            AI engines generate answers instead of lists of links. Buyers are
            being served cited brands before they click anything. Meanwhile,
            traditional agencies still deliver disconnected tasks in month-long
            cycles. Both realities are shifting — we're built for both.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What exactly is a growth system?",
    a: "It's the connected set of pieces a modern company needs to grow: strategy, brand, web, SEO/GEO, paid acquisition, AI automation and reporting — designed to reinforce each other. Instead of hiring five vendors for five tactics, you get one operating system where every asset compounds.",
  },
  {
    q: "Do I have to hire everything at once?",
    a: "No. Most clients start with one specific service — usually the current bottleneck — and evolve toward the integrated system as results appear. Every service is designed to plug into the next.",
  },
  {
    q: "How is this different from a traditional agency?",
    a: "Traditional agencies sell isolated deliverables in silos. We build systems. That means shared strategy, shared data, AI-Native operations, and every asset designed to strengthen the next — not to justify a monthly retainer.",
  },
  {
    q: "What does 'AI-Native' mean in practice?",
    a: "It means AI is part of how we operate, not a buzzword we sell. Multi-agent workflows run research, content production, monitoring and reporting at a speed and cost manual teams can't match — so more of your budget goes to strategy and quality.",
  },
  {
    q: "What's included in the free diagnosis?",
    a: "A structured review of your site, positioning, current channels, presence in Google and AI engines, and a prioritized recommendation of the next steps. No obligation. It's how we start conversations that lead to real work.",
  },
  {
    q: "Which markets do you serve?",
    a: "We are based in Colombia and serve B2B companies in Colombia and the US, in English and Spanish, across time zones.",
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
            If you want more predictable results, you need more than execution.{" "}
            <span className="italic text-prompt">You need a system.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/audit" variant="outline-canvas">Get a free diagnosis</CTA>
            <CTA to="/contact" variant="outline-canvas">Book a strategy call</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }} />
      <Hero />
      <ShiftNarrative />
      <GrowthSystem />
      <ServicesPreview />
      <GeoGap />
      <FAQ />
      <FinalCTA />
    </>
  );
}
