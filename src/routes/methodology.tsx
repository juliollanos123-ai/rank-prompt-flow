import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology — How RYB builds visibility systems" },
      {
        name: "description",
        content:
          "Inside the RYB Operating System: a multi-agent AI-Native workflow that turns SEO into a measurable production line.",
      },
      { property: "og:title", content: "Methodology — Rank Your Brand" },
      { property: "og:description", content: "We don't do SEO. We build visibility systems." },
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
              We don't do SEO.<br />
              <span className="italic text-prompt">We build visibility systems.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Every RYB client goes through a structured, automated and measurable
              process that turns their website into their most profitable
              commercial asset.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Operating System */}
      <section className="bg-ink py-28 text-canvas lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow tone="canvas">Operating System</Eyebrow>
          </Reveal>
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
                <div className="mt-6 border-t border-canvas/10 pt-4 text-xs text-canvas/50">
                  {a.note}
                </div>
                {i < agents.length - 1 && (
                  <div className="absolute right-[-1rem] top-1/2 hidden h-px w-4 bg-flow lg:block" />
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* AI-native ≠ ChatGPT */}
      <section className="bg-canvas py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow>AI-native vs AI-flavoured</Eyebrow>
          </Reveal>
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
                  <div className="border-r border-border p-6 text-ink/55 line-through decoration-ink/30">
                    {a}
                  </div>
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

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal delay={0.3}>
            <div className="mt-0">
              <CTA to="/audit">Get your free diagnosis</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
