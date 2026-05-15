import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

type Tone = "prompt" | "dark" | "flow";

export type ServiceDetailProps = {
  tag: string;
  kicker: string;
  tagline: string;
  price: string;
  meta: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  forWho: string[];
  notFit?: string[];
  includes: [string, string][];
  timeline: [string, string][];
  outcomes?: string[];
  faqs?: [string, string][];
  finalCtaText?: string;
  tone: Tone;
};

export function ServiceDetail(props: ServiceDetailProps) {
  const {
    tag, kicker, tagline, price, meta,
    primaryCta = { label: "Get a free diagnosis", to: "/audit" },
    secondaryCta,
    forWho, notFit, includes, timeline,
    outcomes, faqs,
    finalCtaText = "Not sure if this is right for you?",
    tone,
  } = props;

  const heroBg =
    tone === "dark"
      ? "bg-ink text-canvas"
      : tone === "flow"
      ? "bg-gradient-to-br from-canvas via-canvas to-flow/10"
      : "bg-gradient-to-br from-canvas via-canvas to-prompt/10";

  const eyebrowTone = tone === "dark" ? "canvas" : "ink";

  return (
    <>
      <section className={`relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 ${heroBg}`}>
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs
              tone={tone === "dark" ? "canvas" : "ink"}
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: tag },
              ]}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8">
              <Eyebrow tone={eyebrowTone}>{kicker}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl lg:text-[clamp(4rem,9vw,9rem)]">{tag}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`mt-6 max-w-2xl text-xl ${tone === "dark" ? "text-canvas/80" : "text-ink/75"}`}>
              {tagline}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-6">
              <div>
                <div className="font-display text-4xl text-prompt lg:text-5xl">{price}</div>
                <div className={`mt-2 text-xs uppercase tracking-widest ${tone === "dark" ? "text-canvas/50" : "text-ink/50"}`}>{meta}</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <CTA to={primaryCta.to}>{primaryCta.label}</CTA>
                {secondaryCta && (
                  <CTA to={secondaryCta.to} variant={tone === "dark" ? "outline-canvas" : "ghost"}>
                    {secondaryCta.label}
                  </CTA>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Includes */}
      <section className="bg-ink py-24 text-canvas lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow tone="canvas">What's included</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl text-canvas lg:text-5xl">
              Concrete deliverables.<br />
              <span className="italic text-prompt">No vague retainers.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {includes.map(([h, d], i) => (
              <Reveal key={h} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-canvas/10 bg-canvas/[0.04] p-7 transition-colors hover:border-flow/40"
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

      {/* Outcomes */}
      {outcomes && outcomes.length > 0 && (
        <section className="bg-canvas py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal><Eyebrow>Expected outcomes</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl text-4xl lg:text-5xl">
                What you'll see, <span className="italic text-prompt">on the timeline that matters.</span>
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-4 lg:grid-cols-3">
              {outcomes.map((o, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-prompt/20 bg-prompt/5 p-7">
                    <div className="font-display text-xs tracking-[0.3em] text-prompt">Stage {i + 1}</div>
                    <p className="mt-4 text-lg text-ink/85">{o}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Who for + not fit */}
      <section className={`${outcomes ? "bg-ink/[0.02]" : "bg-canvas"} py-24 lg:py-32`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>Who this is for</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl lg:text-5xl">
              A fit if you recognize <span className="italic text-prompt">yourself here.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-prompt/20 bg-canvas p-8">
                <div className="font-display text-xs tracking-[0.3em] text-prompt">Ideal client</div>
                <ul className="mt-6 space-y-4">
                  {forWho.map((w) => (
                    <li key={w} className="flex items-start gap-4 border-b border-border pb-4 last:border-0">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-prompt" />
                      <span className="text-ink/85">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {notFit && notFit.length > 0 && (
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-ink/10 bg-canvas p-8">
                  <div className="font-display text-xs tracking-[0.3em] text-ink/50">Not a fit if</div>
                  <ul className="mt-6 space-y-4">
                    {notFit.map((w) => (
                      <li key={w} className="flex items-start gap-4 border-b border-border pb-4 last:border-0">
                        <span className="mt-2 h-2 w-px shrink-0 bg-ink/40" />
                        <span className="text-ink/65 line-through decoration-ink/20">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>Process</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl text-4xl lg:text-5xl">From kickoff to compounding.</h2>
          </Reveal>

          <div className={`mt-14 grid gap-6 ${timeline.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {timeline.map(([when, what], i) => (
              <Reveal key={when} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-xs tracking-widest text-flow">{when}</div>
                  <p className="mt-4 text-ink/85">{what}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="bg-ink/[0.02] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal><Eyebrow>FAQs</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl text-4xl lg:text-5xl">
                Questions, <span className="italic text-prompt">answered honestly.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4">
              {faqs.map(([q, a], i) => (
                <Reveal key={q} delay={i * 0.04}>
                  <details className="group rounded-2xl border border-border bg-canvas p-6 transition-colors open:border-prompt/30">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-ink">
                      {q}
                      <span aria-hidden className="font-display text-prompt transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-ink/70">{a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-canvas py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <h2 className="max-w-3xl text-balance text-3xl lg:text-5xl">{finalCtaText}</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to={primaryCta.to}>{primaryCta.label}</CTA>
                {secondaryCta && (
                  <CTA to={secondaryCta.to} variant="ghost">{secondaryCta.label}</CTA>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
