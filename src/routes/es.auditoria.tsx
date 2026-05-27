import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

const BASIN_ENDPOINT = "https://usebasin.com/f/3c237926592d";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const AUDIT_ITEMS = [
  "Análisis SEO del sitio web actual",
  "On-Page SEO Score",
  "Traffic Overview (Google y AI)",
  "Salud del sitio web",
  "3 problemas técnicos críticos que bloquean tu posicionamiento",
  "Análisis de oportunidades de keywords (5 keywords)",
  "Recomendación del servicio de RYB que necesitas",
];

export const Route = createFileRoute("/es/auditoria")({
  head: () => ({
    meta: [
      { title: "Diagnóstico Web Gratuito — Rank Your Brand" },
      {
        name: "description",
        content:
          "Obtén una imagen clara de tu visibilidad digital en 48 horas — completamente gratuito. Análisis de 7 puntos: salud SEO, visibilidad en IA y los problemas técnicos que bloquean tu posicionamiento.",
      },
      { property: "og:title", content: "Diagnóstico Web Gratuito — Rank Your Brand" },
      { property: "og:description", content: "Diagnóstico gratuito en 48 horas. Sin compromiso." },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/audit" }],
  }),
  component: AuditoriaPage,
});

function AuditoriaPage() {
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
              Descubre por qué tus competidores{" "}
              <span className="italic">aparecen antes que tú.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-canvas/85">
              Obtén una imagen clara de tu visibilidad digital en 48 horas — completamente gratuito.
              Sin compromiso, sin tarjeta de crédito, sin trampa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pt-16 pb-28 lg:pt-20 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            {/* Tarjeta de oferta */}
            <Reveal>
              <div className="rounded-3xl border border-prompt bg-canvas p-8 lg:p-10 shadow-card">
                <span className="inline-block rounded-full bg-prompt px-3 py-1 font-display text-[10px] uppercase tracking-widest text-canvas">
                  Gratis · 48 horas
                </span>
                <h2 className="mt-6 text-3xl lg:text-4xl">Diagnóstico Web Gratuito</h2>
                <p className="mt-3 text-ink/65">Entregado en 48 horas. Sin compromiso.</p>

                <div className="mt-8 font-display text-6xl text-prompt">Gratis</div>

                <ul className="mt-8 space-y-3 text-ink/85">
                  {AUDIT_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-prompt" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-4 border-t border-border text-xs uppercase tracking-widest text-ink/50">
                  Entregable: <span className="text-ink/80">Informe PDF (5–7 páginas)</span>
                </div>
              </div>
            </Reveal>

            {/* Formulario */}
            <Reveal delay={0.1}>
              <div id="form" className="rounded-3xl border border-border bg-card p-8 shadow-card lg:p-12">
                {submitted ? (
                  <ThankYou />
                ) : (
                  <AuditForm onSubmit={() => setSubmitted(true)} />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function AuditForm({ onSubmit }: { onSubmit: () => void }) {
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
      <Eyebrow>Solicita tu diagnóstico gratuito</Eyebrow>
      <input type="hidden" name="tier" value="free" />

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
        {loading ? "Enviando…" : "Obtener mi diagnóstico gratuito"}
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

function ThankYou() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="font-display text-xs tracking-[0.3em] text-prompt">En camino</div>
      <h2 className="mt-4 text-3xl lg:text-4xl">
        Tu diagnóstico gratuito llegará{" "}
        <span className="italic text-prompt">en menos de 48 horas.</span>
      </h2>
      <ol className="mt-8 space-y-4 text-ink/75">
        <li><strong className="text-ink">1.</strong> Analizamos tu sitio y competidores.</li>
        <li><strong className="text-ink">2.</strong> Recibes un informe PDF por email.</li>
        <li><strong className="text-ink">3.</strong> Incluimos una recomendación de servicio personalizada.</li>
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
