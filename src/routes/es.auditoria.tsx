import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

const BASIN_ENDPOINT = "https://usebasin.com/f/3c237926592d";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

type Tier = "free" | "full";

export const Route = createFileRoute("/es/auditoria")({
  head: () => ({
    meta: [
      { title: "Diagnóstico web gratuito y Auditoría SEO completa | Rank Your Brand" },
      {
        name: "description",
        content:
          "Descubre por qué tus competidores aparecen antes que tú. Diagnóstico gratuito en 48h o auditoría SEO completa (5 días, $497, reembolsable).",
      },
      { property: "og:title", content: "Diagnóstico Gratuito y Auditoría SEO Completa" },
      { property: "og:description", content: "Diagnóstico gratuito en 48 horas o auditoría completa en 5 días." },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/audit" }],
  }),
  component: AuditoriaPage,
});

function AuditoriaPage() {
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
            <Breadcrumbs tone="canvas" items={[{ label: "Inicio", to: "/es" }, { label: "Diagnóstico Gratuito" }]} />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-5xl text-balance text-5xl text-canvas lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Descubre por qué tus competidores <span className="italic">aparecen antes que tú.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-canvas/85">
              Obtén una imagen clara de tu visibilidad digital en 48 horas — completamente gratuito.
              O desbloquea una auditoría profunda que revela tu hoja de ruta SEO completa.
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
              badge="Más popular"
              title="Diagnóstico Web Gratuito"
              subtitle="Entregado en 48 horas. Sin compromiso."
              price="Gratis"
              deliverable="Informe PDF (5–7 páginas)"
              items={[
                "3 problemas técnicos críticos que bloquean tu posicionamiento",
                "2–3 keywords de alto valor B2B que te estás perdiendo",
                "Tu visibilidad en Google AI, ChatGPT y Perplexity",
                "Plan de acción priorizado a 30 días",
                "Recomendación de servicio (Blueprint / Scale / Landmark)",
              ]}
              tone="prompt"
            />
            <TierCard
              active={tier === "full"}
              onSelect={() => setTier("full")}
              badge="Más completo"
              title="Auditoría SEO Completa"
              subtitle="Análisis profundo en 5 días hábiles."
              price="$497 USD"
              priceNote="Reembolsable si nos contratas en 30 días"
              deliverable="PDF de 20 páginas + video walkthrough de 30 min"
              items={[
                "Todo lo del Diagnóstico Gratuito",
                "Análisis SEO técnico completo (50+ puntos de control)",
                "Benchmarking de competidores (3–5 jugadores clave)",
                "Análisis de oportunidades de keywords (100+ keywords)",
                "Auditoría de brechas de contenido y perfil de backlinks",
                "Hoja de ruta de optimización GEO (estrategia de citas en IA)",
                "Hoja de ruta de implementación de 90 días",
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
        Entregable: <span className="text-ink/80">{deliverable}</span>
      </div>

      <div className={`mt-6 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${active ? "text-prompt" : "text-ink/70"}`}>
        {active ? "Seleccionado" : "Elegir este"} <span aria-hidden>→</span>
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

    try {
      const res = await fetch(BASIN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        onSubmit();
      } else {
        setError("Algo salió mal. Por favor, inténtalo de nuevo o escríbenos directamente.");
      }
    } catch {
      setError("Error de red. Por favor, verifica tu conexión e inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-center gap-3">
        <Eyebrow>Opción seleccionada</Eyebrow>
        <span className="rounded-full bg-prompt/10 px-3 py-1 font-display text-xs uppercase tracking-widest text-prompt">
          {tier === "free" ? "Diagnóstico Gratuito" : "Auditoría SEO Completa · $497"}
        </span>
      </div>
      <input type="hidden" name="tier" value={tier} />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Field label="Nombre completo" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Número de teléfono" name="phone" type="tel" />
        <Field label="Empresa" name="company" required />
        <Field label="URL del sitio web" name="website" type="url" required placeholder="https://" />
        <Field label="País" name="country" required />
        <Field label="Ciudad" name="city" required />
      </div>
      <div className="mt-6">
        <Field label="Tu mayor reto de visibilidad hoy" name="challenge" textarea required />
      </div>
      <div className="mt-6">
        <label className="block">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-ink/60">
            ¿Cómo nos encontraste?
          </span>
          <select
            name="source"
            className="mt-2 w-full rounded-xl border border-border bg-canvas px-4 py-3 text-ink focus:border-prompt focus:outline-none focus:ring-2 focus:ring-prompt/20"
            defaultValue=""
          >
            <option value="" disabled>Elige una opción…</option>
            <option>Google</option>
            <option>LinkedIn</option>
            <option>Referido</option>
            <option>Otro</option>
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
        {loading ? "Enviando…" : tier === "free" ? "Obtener mi diagnóstico gratuito" : "Solicitar auditoría completa"}
        {!loading && <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>}
      </button>
      <p className="mt-4 text-xs text-ink/50">
        Sin tarjeta de crédito. Solemos responder desde julio@rankyourbrand.co en 24h.
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
        <div className="font-display text-xs tracking-[0.3em] text-prompt">Confirmado</div>
        <h2 className="mt-4 text-3xl lg:text-4xl">
          Tu Auditoría SEO Completa <span className="italic text-prompt">está en marcha.</span>
        </h2>
        <ol className="mt-8 space-y-4 text-ink/75">
          <li><strong className="text-ink">1.</strong> Recibirás un enlace de pago por email (PayPal o Stripe).</li>
          <li><strong className="text-ink">2.</strong> Una vez confirmado el pago, comenzamos la auditoría.</li>
          <li><strong className="text-ink">3.</strong> Entregamos tu informe completo en 5 días hábiles.</li>
          <li><strong className="text-ink">4.</strong> Programamos un video walkthrough de 30 minutos.</li>
        </ol>
        <p className="mt-6 rounded-xl border border-prompt/20 bg-prompt/5 p-4 text-sm text-ink/80">
          Recuerda: los $497 son totalmente reembolsables si nos contratas en 30 días. Espera un email de <strong>julio@rankyourbrand.co</strong> con los detalles del pago.
        </p>
      </motion.div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="font-display text-xs tracking-[0.3em] text-prompt">En camino</div>
      <h2 className="mt-4 text-3xl lg:text-4xl">
        Tu diagnóstico gratuito llegará <span className="italic text-prompt">en menos de 48 horas.</span>
      </h2>
      <ol className="mt-8 space-y-4 text-ink/75">
        <li><strong className="text-ink">1.</strong> Analizamos tu sitio y competidores.</li>
        <li><strong className="text-ink">2.</strong> Recibes un informe PDF por email.</li>
        <li><strong className="text-ink">3.</strong> Incluimos una recomendación personalizada para los próximos pasos.</li>
      </ol>
      <p className="mt-6 text-sm text-ink/60">
        Recibirás un email de <strong>julio@rankyourbrand.co</strong> confirmando la recepción.
      </p>
      <ul className="mt-8 space-y-2 text-ink/75">
        <li>→ <Link to="/es/metodologia" className="underline-offset-4 hover:text-prompt hover:underline">Conoce nuestra metodología</Link></li>
        <li>→ <Link to="/es/servicios" className="underline-offset-4 hover:text-prompt hover:underline">Explora nuestros servicios</Link></li>
      </ul>
    </motion.div>
  );
}
