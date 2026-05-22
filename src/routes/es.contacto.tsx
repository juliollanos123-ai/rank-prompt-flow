import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/es/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Hablemos de visibilidad | Rank Your Brand" },
      { name: "description", content: "¿Tienes un proyecto, una pregunta o necesitas orientación estratégica? Escríbenos — normalmente respondemos en 24 horas hábiles." },
      { property: "og:title", content: "Contacto — Rank Your Brand" },
      { property: "og:description", content: "Hablemos de cómo hacer crecer tu visibilidad." },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/contact" }],
  }),
  component: ContactoPage,
});

const reasons = [
  "Estoy listo para hablar de un proyecto",
  "Tengo una pregunta sobre tus servicios",
  "Quiero orientación estratégica",
  "Otro",
];

function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-soft-glow pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Inicio", to: "/es" }, { label: "Contacto" }]} />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6rem)]">
              Hablemos de cómo <span className="accent-italic text-prompt">hacer crecer tu visibilidad.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Ya sea que tengas una pregunta, necesites orientación estratégica o quieras hablar de un proyecto — estamos aquí para ayudarte.
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
              <InfoBlock label="Servimos a" value="Empresas B2B en EE.UU., Europa y LATAM" />
              <InfoBlock label="Tiempo de respuesta" value="Normalmente en 24 horas hábiles." />
              <div className="rounded-2xl border border-prompt/20 bg-prompt/5 p-6">
                <div className="font-display text-xs tracking-[0.3em] text-prompt">Camino más rápido</div>
                <p className="mt-3 text-ink/80">
                  ¿Quieres un diagnóstico de 1 página antes de hablar?
                </p>
                <div className="mt-5">
                  <CTA to="/es/auditoria">Obtén un diagnóstico gratuito</CTA>
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

const BASIN_ENDPOINT = "https://usebasin.com/f/3c237926592d";

function ContactForm({ onSubmit }: { onSubmit: () => void }) {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <Field label="Nombre completo" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Número de teléfono" name="phone" type="tel" />
      <Field label="Empresa" name="company" required />
      <Field label="Sitio web (opcional)" name="website" type="url" />
      <Field label="País" name="country" required />
      <Field label="Ciudad" name="city" required />

      <fieldset>
        <legend className="font-display text-xs uppercase tracking-[0.25em] text-ink/60">
          ¿En qué podemos ayudarte? *
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

      <Field label="Mensaje" name="message" textarea required />

      {error && (
        <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center gap-3 rounded-full bg-prompt px-7 py-4 font-display text-sm uppercase tracking-wider text-primary-foreground transition-all hover:shadow-elegant disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando…" : "Enviar mensaje"}
        {!loading && <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>}
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
      <div className="font-display text-xs tracking-[0.3em] text-prompt">Mensaje recibido</div>
      <h2 className="mt-4 text-3xl lg:text-4xl">
        Gracias — te respondemos <span className="accent-italic text-prompt">en menos de 24 horas.</span>
      </h2>
      <ul className="mt-8 space-y-3 text-ink/75">
        <li>→ <a href="/es/auditoria" className="underline-offset-4 hover:text-prompt hover:underline">Obtén un diagnóstico web gratuito</a></li>
        <li>→ <a href="/es/metodologia" className="underline-offset-4 hover:text-prompt hover:underline">Lee sobre nuestra metodología</a></li>
        <li>→ <a href="/es/servicios" className="underline-offset-4 hover:text-prompt hover:underline">Explora nuestros servicios</a></li>
      </ul>
    </motion.div>
  );
}
