import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";

type Tone = "prompt" | "dark" | "flow";

export function ServiceDetail({
  tag,
  kicker,
  tagline,
  price,
  meta,
  forWho,
  includes,
  timeline,
  tone,
}: {
  tag: string;
  kicker: string;
  tagline: string;
  price: string;
  meta: string;
  forWho: string[];
  includes: [string, string][];
  timeline: [string, string][];
  tone: Tone;
}) {
  const heroBg =
    tone === "dark"
      ? "bg-ink text-canvas"
      : tone === "flow"
      ? "bg-gradient-to-br from-canvas via-canvas to-flow/10"
      : "bg-gradient-to-br from-canvas via-canvas to-prompt/10";

  const eyebrowTone = tone === "dark" ? "canvas" : "ink";

  return (
    <>
      <section className={`relative isolate overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32 ${heroBg}`}>
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow tone={eyebrowTone}>{kicker}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 text-6xl lg:text-[clamp(5rem,11vw,11rem)]">
              {tag}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`mt-6 max-w-2xl text-xl ${tone === "dark" ? "text-canvas/80" : "text-ink/75"}`}>
              {tagline}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-4">
              <div>
                <div className="font-display text-5xl text-prompt">{price}</div>
                <div className={`mt-2 text-xs uppercase tracking-widest ${tone === "dark" ? "text-canvas/50" : "text-ink/50"}`}>{meta}</div>
              </div>
              <CTA to="/audit">Start with an audit</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who for */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <Eyebrow>Who this is for</Eyebrow>
              <h2 className="mt-6 text-3xl lg:text-4xl">A fit if you recognize yourself here.</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="space-y-4">
                {forWho.map((w, i) => (
                  <motion.li
                    key={w}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 border-b border-border pb-4 text-lg"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-prompt" />
                    {w}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="bg-ink py-24 text-canvas lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow tone="canvas">What's included</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl text-canvas lg:text-5xl">
              Concrete deliverables.<br />
              <span className="italic text-prompt">No vague retainers.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {includes.map(([h, d], i) => (
              <Reveal key={h} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-canvas/10 bg-canvas/[0.04] p-7 transition-colors hover:border-flow/40"
                >
                  <div className="font-display text-xs tracking-[0.3em] text-prompt">0{i + 1}</div>
                  <h3 className="mt-4 text-2xl text-canvas">{h}</h3>
                  <p className="mt-3 text-canvas/70">{d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Timeline</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl text-4xl lg:text-5xl">From kickoff to compounding.</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {timeline.map(([when, what], i) => (
              <Reveal key={when} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-xs tracking-widest text-flow">{when}</div>
                  <p className="mt-4 text-ink/85">{what}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16">
              <CTA to="/audit">Book your free audit</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
