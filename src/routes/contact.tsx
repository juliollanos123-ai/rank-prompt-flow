import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's talk visibility | Rank Your Brand" },
      { name: "description", content: "Have a project, a question, or need strategic guidance? Reach out — we typically respond within 24 business hours." },
      { property: "og:title", content: "Contact — Rank Your Brand" },
      { property: "og:description", content: "Let's talk about growing your visibility." },
    ],
  }),
  component: ContactPage,
});

const reasons = [
  "I'm ready to discuss a project",
  "I have a question about your services",
  "I want strategic guidance",
  "Other",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-soft-glow pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6rem)]">
              Let's talk about <span className="italic text-prompt">growing your visibility.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Whether you have a question, need strategic guidance, or want to discuss a project — we're here to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.6fr_1fr] lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-card">
              {submitted ? (
                <ThankYou />
              ) : (
                <ContactForm onSubmit={() => setSubmitted(true)} />
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <aside className="space-y-8">
              <InfoBlock label="Email" value="julio@rankyourbrand.co" href="mailto:julio@rankyourbrand.co" />
              <InfoBlock label="We serve" value="B2B companies in USA, Europe & LATAM" />
              <InfoBlock label="Response time" value="Typically within 24 business hours." />
              <div className="rounded-2xl border border-prompt/20 bg-prompt/5 p-6">
                <div className="font-display text-xs tracking-[0.3em] text-prompt">Faster path</div>
                <p className="mt-3 text-ink/80">
                  Want a 1-page diagnostic before we talk?
                </p>
                <div className="mt-5">
                  <CTA to="/audit">Get a free diagnosis</CTA>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <Eyebrow>{label}</Eyebrow>
      {href ? (
        <a href={href} className="mt-3 block text-lg text-ink hover:text-prompt">{value}</a>
      ) : (
        <p className="mt-3 text-lg text-ink">{value}</p>
      )}
    </div>
  );
}

function ContactForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to Lovable Cloud / N8N / Airtable when backend is enabled
        onSubmit();
      }}
      className="space-y-6"
    >
      <Field label="Full name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Company" name="company" required />
      <Field label="Website (optional)" name="website" type="url" />

      <fieldset>
        <legend className="font-display text-xs uppercase tracking-[0.25em] text-ink/60">
          What can we help you with? *
        </legend>
        <div className="mt-4 space-y-3">
          {reasons.map((r) => (
            <label key={r} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-prompt/40">
              <input type="radio" name="reason" required value={r} className="accent-prompt" />
              <span className="text-ink">{r}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Message" name="message" textarea required />

      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-prompt px-7 py-4 font-display text-sm uppercase tracking-wider text-primary-foreground transition-all hover:shadow-elegant"
      >
        Send message <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls =
    "mt-2 w-full rounded-xl border border-border bg-canvas px-4 py-3 text-ink placeholder:text-ink/30 focus:border-prompt focus:outline-none focus:ring-2 focus:ring-prompt/20";
  return (
    <label className="block">
      <span className="font-display text-xs uppercase tracking-[0.25em] text-ink/60">
        {label}{required && " *"}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}

function ThankYou() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="font-display text-xs tracking-[0.3em] text-prompt">Message received</div>
      <h2 className="mt-4 text-3xl lg:text-4xl">
        Thanks — we'll be in touch <span className="italic text-prompt">within 24 hours.</span>
      </h2>
      <ul className="mt-8 space-y-3 text-ink/75">
        <li>→ <a href="/audit" className="underline-offset-4 hover:text-prompt hover:underline">Get a free website diagnosis</a></li>
        <li>→ <a href="/methodology" className="underline-offset-4 hover:text-prompt hover:underline">Read about our methodology</a></li>
        <li>→ <a href="/services" className="underline-offset-4 hover:text-prompt hover:underline">Explore our services</a></li>
      </ul>
    </motion.div>
  );
}
