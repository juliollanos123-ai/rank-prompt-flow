import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

const WEB3FORMS_KEY = "d7c3d809-27dd-439c-b6b1-132392749c47";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

type Tier = "free" | "full";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free Website Diagnosis & Full SEO Audit | Rank Your Brand" },
      {
        name: "description",
        content:
          "Discover why your competitors show up before you do. Free 48h diagnosis or a full SEO audit (5 days, $497, refundable).",
      },
      { property: "og:title", content: "Free Diagnosis & Full SEO Audit" },
      { property: "og:description", content: "48-hour free diagnosis or comprehensive 5-day audit." },
    ],
  }),
  component: AuditPage,
});

function AuditPage() {
  const [tier, setTier] = useState<Tier>("free");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-diagonal opacity-95" />
        <div className="absolute inset-0 -z-10 grid-overlay opacity-15 mix-blend-overlay" />
        <motion.div
          aria-hidden
          className="absolute -top-40 -left-40 -z-10 h-[600px] w-[600px] rounded-full bg-prompt blur-3xl opacity-40"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="mx-auto max-w-7xl px-6 text-canvas lg:px-10">
          <Reveal>
            <Breadcrumbs tone="canvas" items={[{ label: "Home", to: "/" }, { label: "Free Diagnosis" }]} />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-5xl text-balance text-5xl text-canvas lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Discover why your competitors <span className="italic">show up before you do.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-canvas/85">
              Get a clear picture of your digital visibility in 48 hours — completely free.
              Or unlock a deep-dive audit that reveals your complete SEO roadmap.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 -mt-10 lg:px-10 lg:-mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <TierCard
              active={tier === "free"}
              onSelect={() => setTier("free")}
              badge="Most popular"
              title="Free Website Diagnosis"
              subtitle="Delivered in 48 hours. No commitment required."
              price="Free"
              deliverable="PDF report (5–7 pages)"
              items={[
                "3 critical technical issues blocking your rankings",
                "2–3 high-value B2B keywords you're missing",
                "Your visibility in Google AI, ChatGPT & Perplexity",
                "Prioritized 30-day action plan",
                "Service recommendation (Blueprint / Scale / Landmark)",
              ]}
              tone="prompt"
            />
            <TierCard
              active={tier === "full"}
              onSelect={() => setTier("full")}
              badge="Most comprehensive"
              title="Full SEO Audit"
              subtitle="Complete deep-dive analysis in 5 business days."
              price="$497 USD"
              priceNote="Refundable if you hire us within 30 days"
              deliverable="20-page PDF + 30-min video walkthrough"
              items={[
                "Everything in the Free Diagnosis",
                "Complete technical SEO analysis (50+ checkpoints)",
                "Competitor benchmarking (3–5 key players)",
                "Keyword opportunity analysis (100+ keywords)",
                "Content gap & backlink profile audit",
                "GEO optimization roadmap (AI citation strategy)",
                "90-day implementation roadmap",
              ]}
              tone="flow"
            />
          </div>

          <div id="form" className="mt-16 rounded-3xl border border-border bg-card p-8 shadow-card lg:p-12">
            {submitted ? (
              <ThankYou tier={tier} />
            ) : (
              <AuditForm tier={tier} onSubmit={() => setSubmitted(true)} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function TierCard({
  active, onSelect, badge, title, subtitle, price, priceNote, deliverable, items, tone,
}: {
  active: boolean;
  onSelect: () => void;
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  priceNote?: string;
  deliverable: string;
  items: string[];
  tone: "prompt" | "flow";
}) {
  const ring = active
    ? tone === "prompt"
      ? "border-prompt ring-2 ring-prompt/20"
      : "border-flow ring-2 ring-flow/20"
    : "border-border hover:border-ink/30";
  const accent = tone === "prompt" ? "bg-prompt text-canvas" : "bg-flow text-canvas";
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ y: -4 }}
      className={`group relative flex h-full flex-col rounded-3xl border bg-canvas p-8 text-left transition-all lg:p-10 ${ring}`}
    >
      <span className={`absolute right-6 top-6 rounded-full px-3 py-1 font-display text-[10px] uppercase tracking-widest ${accent}`}>
        {badge}
      </span>
      <h2 className="text-3xl lg:text-4xl">{title}</h2>
      <p className="mt-3 text-ink/65">{subtitle}</p>

      <div className="mt-8 flex items-end gap-3">
        <div className="font-display text-5xl text-prompt">{price}</div>
        {priceNote && <div className="pb-2 text-xs text-ink/50">{priceNote}</div>}
      </div>

      <ul className="mt-8 space-y-3 text-ink/85">
        {items.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-prompt" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8 text-xs uppercase tracking-widest text-ink/50">
        Deliverable: <span className="text-ink/80">{deliverable}</span>
      </div>

      <div className={`mt-6 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${active ? "text-prompt" : "text-ink/70"}`}>
        {active ? "Selected" : "Choose this"} <span aria-hidden>→</span>
      </div>
    </motion.button>
  );
}

function AuditForm({ tier, onSubmit }: { tier: Tier; onSubmit: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const subject =
      tier === "free"
        ? "Free Diagnosis Request — Rank Your Brand"
        : "Full SEO Audit Request ($497) — Rank Your Brand";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, ...data }),
      });
      const json = await res.json();
      if (json.success) {
        onSubmit();
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-center gap-3">
        <Eyebrow>Selected option</Eyebrow>
        <span className="rounded-full bg-prompt/10 px-3 py-1 font-display text-xs uppercase tracking-widest text-prompt">
          {tier === "free" ? "Free Diagnosis" : "Full SEO Audit · $497"}
        </span>
      </div>
      <input type="hidden" name="tier" value={tier} />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone number" name="phone" type="tel" />
        <Field label="Company" name="company" required />
        <Field label="Website URL" name="website" type="url" required placeholder="https://" />
        <Field label="Country" name="country" required />
        <Field label="City" name="city" required />
      </div>
      <div className="mt-6">
        <Field label="Your biggest visibility challenge today" name="challenge" textarea required />
      </div>
      <div className="mt-6">
        <label className="block">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-ink/60">
            How did you find us?
          </span>
          <select
            name="source"
            className="mt-2 w-full rounded-xl border border-border bg-canvas px-4 py-3 text-ink focus:border-prompt focus:outline-none focus:ring-2 focus:ring-prompt/20"
            defaultValue=""
          >
            <option value="" disabled>Choose one…</option>
            <option>Google</option>
            <option>LinkedIn</option>
            <option>Referral</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      {error && (
        <p className="mt-6 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-prompt px-7 py-4 font-display text-sm uppercase tracking-wider text-primary-foreground transition-all hover:shadow-elegant disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : tier === "free" ? "Get my free diagnosis" : "Request full audit"}
        {!loading && <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>}
      </button>
      <p className="mt-4 text-xs text-ink/50">
        No credit card required. We typically reply from julio@rankyourbrand.co within 24h.
      </p>
    </form>
  );
}

function Field({
  label, name, type = "text", required, textarea, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; textarea?: boolean; placeholder?: string;
}) {
  const cls =
    "mt-2 w-full rounded-xl border border-border bg-canvas px-4 py-3 text-ink placeholder:text-ink/30 focus:border-prompt focus:outline-none focus:ring-2 focus:ring-prompt/20";
  return (
    <label className="block">
      <span className="font-display text-xs uppercase tracking-[0.25em] text-ink/60">
        {label}{required && " *"}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

function ThankYou({ tier }: { tier: Tier }) {
  if (tier === "full") {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="font-display text-xs tracking-[0.3em] text-prompt">Confirmed</div>
        <h2 className="mt-4 text-3xl lg:text-4xl">
          Your Full SEO Audit is <span className="italic text-prompt">on the way.</span>
        </h2>
        <ol className="mt-8 space-y-4 text-ink/75">
          <li><strong className="text-ink">1.</strong> You'll receive a payment link via email (PayPal or Stripe).</li>
          <li><strong className="text-ink">2.</strong> Once payment is confirmed, we begin the audit.</li>
          <li><strong className="text-ink">3.</strong> We deliver your comprehensive report in 5 business days.</li>
          <li><strong className="text-ink">4.</strong> We schedule a 30-min video walkthrough.</li>
        </ol>
        <p className="mt-6 rounded-xl border border-prompt/20 bg-prompt/5 p-4 text-sm text-ink/80">
          Remember: the $497 is fully refundable if you hire us within 30 days. Expect an email from <strong>julio@rankyourbrand.co</strong> with payment details.
        </p>
      </motion.div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="font-display text-xs tracking-[0.3em] text-prompt">On the way</div>
      <h2 className="mt-4 text-3xl lg:text-4xl">
        Your free diagnosis will arrive <span className="italic text-prompt">within 48 hours.</span>
      </h2>
      <ol className="mt-8 space-y-4 text-ink/75">
        <li><strong className="text-ink">1.</strong> We analyze your site and competitors.</li>
        <li><strong className="text-ink">2.</strong> You receive a PDF report by email.</li>
        <li><strong className="text-ink">3.</strong> We include a tailored recommendation for next steps.</li>
      </ol>
      <p className="mt-6 text-sm text-ink/60">
        Expect an email from <strong>julio@rankyourbrand.co</strong> confirming receipt.
      </p>
      <ul className="mt-8 space-y-2 text-ink/75">
        <li>→ <Link to="/methodology" className="underline-offset-4 hover:text-prompt hover:underline">Learn about our methodology</Link></li>
        <li>→ <Link to="/services" className="underline-offset-4 hover:text-prompt hover:underline">Explore our services</Link></li>
      </ul>
    </motion.div>
  );
}
