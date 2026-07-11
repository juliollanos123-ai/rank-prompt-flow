import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Our growth system: how Rank Your Brand works | Rank Your Brand" },
      { name: "description", content: "Inside RYB's methodology: strategy, structure, AI, automation, positioning and execution focused on real business results — not isolated tasks." },
      { property: "og:title", content: "Methodology — Rank Your Brand" },
      { property: "og:description", content: "We don't sell isolated tasks. We build growth systems." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/methodology" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/methodology" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/methodology" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/metodologia" },
    ],
  }),
  component: Methodology,
});

const agents = [
  { name: "The Scout", role: "Research", note: "Automated keyword & competitor intelligence" },
  { name: "The Architect", role: "Strategy", note: "Brand-aligned strategic planning" },
  { name: "The Writer", role: "Content", note: "AI-assisted editorial production" },
  { name: "The Watchdog", role: "Monitoring", note: "Search + uptime + AI citation checks" },
  { name: "The Reporter", role: "Results", note: "Automated reporting + dashboards" },
];

const stages = [
  { n: "01", name: "Diagnosis", body: "We identify context, stage, objective, real bottleneck and the primary opportunity." },
  { n: "02", name: "Structure design", body: "We define what needs to be built first so growth has a real foundation." },
  { n: "03", name: "Implementation", body: "We execute the assets, processes and improvements the prioritized front requires." },
  { n: "04", name: "Optimization", body: "We measure, interpret and improve continuously with market feedback and business data." },
  { n: "05", name: "Scaling", body: "We turn what works into a stronger, repeatable and scalable system." },
];

const compare = [
  ["Manual keyword research (4–6h)", "Automated via The Scout (15 min)"],
  ["Content briefs in Google Docs", "Auto-generated and structured, stored centrally"],
  ["Monthly reports compiled by hand", "Real-time dashboard + auto-email"],
  ["Slow, expensive, opaque", "Fast, scalable, transparent"],
];

function Methodology() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Methodology" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 max-w-5xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              We don't sell isolated tasks.<br />
              <span className="italic text-prompt">We build growth systems.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg text-ink/70">
              Our work combines strategy, digital structure, automation, positioning and data-driven decision-making so a brand can grow with order and a long-term view — not with disconnected campaigns.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA to="/contact">Book a strategy call</CTA>
              <CTA to="/audit" variant="outline">Get a free diagnosis</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-canvas py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>The difference</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl text-3xl lg:text-5xl">
              A traditional agency runs services in silos.<br />
              <span className="italic text-prompt">A growth system connects everything.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl text-lg text-ink/70">
              At Rank Your Brand every piece is designed to strengthen the others: brand, web, content, SEO, AI, Ads, reporting and commercial evolution. That's why our output compounds — because it isn't a menu of tasks, it's an operating system.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Operating System */}
      <section className="bg-ink py-28 text-canvas lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow tone="canvas">Operating System</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl text-canvas lg:text-6xl">
              A multi-agent system,<br />
              <span className="italic text-prompt">not a brief in a Google Doc.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 lg:grid-cols-5">
            {agents.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative rounded-2xl border border-canvas/10 bg-canvas/[0.04] p-6"
              >
                <div className="font-display text-xs tracking-[0.3em] text-prompt">0{i + 1}</div>
                <div className="mt-4 font-display text-xl">{a.name}</div>
                <div className="mt-1 text-sm text-canvas/60">{a.role}</div>
                <div className="mt-6 border-t border-canvas/10 pt-4 text-xs text-canvas/50">{a.note}</div>
                {i < agents.length - 1 && (
                  <div className="absolute right-[-1rem] top-1/2 hidden h-px w-4 bg-flow lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System stages */}
      <section className="bg-canvas py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>System stages</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
              From diagnosis to <span className="italic text-prompt">scalable system.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-xs tracking-[0.3em] text-prompt">{s.n}</div>
                  <h3 className="h3-soft mt-4 text-xl text-ink">{s.name}</h3>
                  <p className="mt-3 text-sm text-ink/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI-native ≠ ChatGPT */}
      <section className="bg-ink/[0.02] py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>AI-native vs AI-flavoured</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl text-4xl lg:text-6xl">
              Most agencies prompt AI.<br />
              <span className="italic text-prompt">We operate as an AI-Native agency.</span>
            </h2>
          </Reveal>

          <div className="mt-14 overflow-hidden rounded-3xl border border-border">
            <div className="grid grid-cols-2 border-b border-border bg-muted px-6 py-4 font-display text-xs tracking-widest">
              <div className="text-ink/60">Traditional agency</div>
              <div className="text-prompt">RankYourBrand</div>
            </div>
            {compare.map(([a, b], i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid grid-cols-2 border-b border-border last:border-0">
                  <div className="border-r border-border p-6 text-ink/55 line-through decoration-ink/30">{a}</div>
                  <div className="p-6 font-medium text-ink">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-prompt" />
                    {b}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <h2 className="max-w-3xl text-balance text-3xl lg:text-5xl">
                If you want more predictable results, you need more than execution: <span className="accent-italic text-prompt">you need system.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/contact">Find the right approach for my company</CTA>
                <CTA to="/audit" variant="outline">Get a free diagnosis</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
