import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";

// TODO: Replace with the real Calendly / Typeform URL
const AUDIT_URL = "https://calendly.com/rankyourbrand/free-audit";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free AI Visibility Audit — Rank Your Brand" },
      {
        name: "description",
        content:
          "Get your free AI Visibility Audit in 48 hours. See how your brand appears in ChatGPT, Perplexity and Google AI today.",
      },
      { property: "og:title", content: "Free AI Visibility Audit" },
      { property: "og:description", content: "Delivered in 48 hours. No strings attached." },
    ],
  }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-diagonal opacity-95" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-15 mix-blend-overlay" />

      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 -z-10 h-[600px] w-[600px] rounded-full bg-prompt blur-3xl opacity-40"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 text-canvas lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-24 lg:px-10">
        <div>
          <Reveal>
            <Eyebrow tone="canvas">Free · 48-hour delivery</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 text-balance text-5xl text-canvas lg:text-[clamp(3.5rem,7vw,7rem)]">
              See how your brand appears in <span className="italic">ChatGPT</span> today.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg text-canvas/85">
              We run a custom AI Visibility Audit on your domain across the three
              search surfaces that matter — Google, ChatGPT and Perplexity — and
              send you a 1-page diagnostic in under 48 hours.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CTA href={AUDIT_URL} variant="outline-canvas">Book your audit</CTA>
              <span className="text-sm text-canvas/70">No credit card. No sales pitch.</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="rounded-3xl border border-canvas/15 bg-ink/40 p-8 backdrop-blur-md lg:p-10">
            <div className="font-display text-xs tracking-[0.3em] text-prompt">What you get</div>
            <ul className="mt-8 space-y-5">
              {[
                ["AI surface scan", "Where you do — and don't — appear in ChatGPT, Perplexity and Google AI."],
                ["Competitor citation map", "Which brands are being recommended in your category."],
                ["Top 3 fixes", "The highest-leverage changes you can ship this quarter."],
                ["48h delivery", "PDF + 15-min Loom walkthrough. Yours to keep."],
              ].map(([h, d], i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 border-b border-canvas/10 pb-5 last:border-0"
                >
                  <span className="font-display text-prompt">0{i + 1}</span>
                  <div>
                    <div className="font-semibold text-canvas">{h}</div>
                    <div className="mt-1 text-sm text-canvas/65">{d}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
