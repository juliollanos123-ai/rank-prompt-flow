import { CTA } from "@/components/site/CTA";

export function BlogInlineCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-ink p-8 text-canvas lg:p-12">
      <div className="absolute inset-0 bg-soft-glow opacity-60" />
      <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="font-display text-[11px] uppercase tracking-[0.3em] text-prompt">Free diagnosis</div>
          <h3 className="mt-3 text-2xl text-canvas lg:text-4xl">
            Not sure where your B2B brand stands in <span className="accent-italic text-prompt">AI search?</span>
          </h3>
        </div>
        <CTA to="/audit" variant="primary">Get Free Diagnosis</CTA>
      </div>
    </section>
  );
}

export function BlogEndCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-ink p-10 text-canvas lg:p-14">
      <div className="absolute inset-0 bg-soft-glow opacity-50" />
      <div className="relative">
        <div className="font-display text-[11px] uppercase tracking-[0.3em] text-prompt">Your move</div>
        <h2 className="mt-4 text-3xl text-canvas lg:text-5xl">
          Is your B2B brand invisible in <span className="accent-italic text-prompt">AI search?</span>
        </h2>
        <p className="mt-5 max-w-xl text-base text-canvas/75 lg:text-lg">
          Get a free diagnosis in 48 hours. We audit your visibility across ChatGPT, Perplexity and Google AI — and tell you exactly where to start.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA to="/audit" variant="primary">Get Free Diagnosis</CTA>
          <CTA to="/contact" variant="outline-canvas">Talk to us</CTA>
        </div>
      </div>
    </section>
  );
}
