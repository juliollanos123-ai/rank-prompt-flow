import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/es/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios — Blueprint, Scale & Landmark | Rank Your Brand" },
      {
        name: "description",
        content:
          "Tres niveles. Un objetivo: que te encuentren. Blueprint ($1,500), Scale ($2,500/mes) y Landmark ($3,500/mes).",
      },
      { property: "og:title", content: "Servicios — Rank Your Brand" },
      { property: "og:description", content: "Tres niveles. Un objetivo: que te encuentren." },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/services" }],
  }),
  component: ServicesPageEs,
});

const tiers = [
  {
    tag: "Blueprint",
    to: "/es/servicios/blueprint" as const,
    kicker: "Fundación · Proyecto",
    price: "$1,500 USD",
    meta: "4–6 semanas",
    desc: "La base que tu sitio necesita para rankear. Desarrollo web completo + SEO técnico + analytics, listo para crecimiento orgánico y descubrimiento por IA.",
    bullets: [
      "Desarrollo web completo (desde cero o rediseño)",
      "SEO técnico + optimización de Core Web Vitals",
      "Schema markup + arquitectura de contenido",
      "Configuración de GA4, Search Console y Tag Manager",
    ],
    ideal: "Empresas que lanzan sitios nuevos o renuevan sitios obsoletos.",
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "Scale",
    to: "/es/servicios/scale" as const,
    kicker: "Crecimiento · Retainer mensual",
    price: "$2,500/mes",
    meta: "mínimo 6 meses",
    desc: "Crecimiento orgánico, mes a mes. Motor de contenido con IA + CRO + link building + dashboards enfocados en leads cualificados.",
    bullets: [
      "4–6 artículos de blog optimizados/mes",
      "Optimización de tasa de conversión (CRO)",
      "2–3 backlinks de calidad/mes",
      "Dashboard en tiempo real + reportes mensuales",
    ],
    ideal: "Empresas listas para crecer en tráfico orgánico y generación de leads.",
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "Landmark",
    to: "/es/servicios/landmark" as const,
    kicker: "Autoridad · Retainer premium",
    price: "$3,500/mes",
    meta: "compromiso 12 meses",
    desc: "La autoridad que la IA recomienda. Todo lo de Scale + GEO + liderazgo de pensamiento + servicio premium para líderes de categoría.",
    bullets: [
      "Todo lo de Scale",
      "Optimización GEO (citas en ChatGPT, Perplexity)",
      "Programa de liderazgo de pensamiento ejecutivo",
      "Account manager dedicado + estrategia quincenal",
    ],
    ideal: "Marcas B2B establecidas con ingresos $5M+ listas para dominar.",
    tone: "border-flow/40 bg-flow/[0.06]",
  },
];

function ServicesPageEs() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Inicio", to: "/es" }, { label: "Servicios" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8"><Eyebrow>Servicios</Eyebrow></div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Tres niveles.<br />
              <span className="accent-italic text-prompt">Un objetivo: que te encuentren.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Ya sea que estés construyendo desde cero, escalando el tráfico orgánico o dominando tu categoría — tenemos el camino para ti.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-6 px-6 lg:px-10">
          {tiers.map((t, i) => {
            const dark = t.tone.includes("text-canvas");
            return (
              <Reveal key={t.tag} delay={i * 0.08}>
                <Link to={t.to} className="block">
                  <motion.article
                    whileHover={{ y: -4 }}
                    className={`group grid gap-8 rounded-3xl border p-8 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center lg:p-12 ${t.tone}`}
                  >
                    <div>
                      <div className={`font-display text-xs tracking-[0.3em] ${dark ? "text-canvas/60" : "text-ink/50"}`}>{t.kicker}</div>
                      <h2 className="mt-3 text-4xl lg:text-5xl">{t.tag}</h2>
                      <p className={`mt-4 max-w-md ${dark ? "text-canvas/75" : "text-ink/70"}`}>{t.desc}</p>
                      <p className={`mt-4 text-sm ${dark ? "text-canvas/55" : "text-ink/55"}`}>
                        <span className={dark ? "text-canvas/80" : "text-ink/80"}>Ideal para:</span> {t.ideal}
                      </p>
                    </div>
                    <ul className={`grid gap-2 text-sm ${dark ? "text-canvas/85" : "text-ink/85"}`}>
                      {t.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prompt" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="text-right">
                      <div className="font-display text-3xl text-prompt">{t.price}</div>
                      <div className={`mt-1 text-xs uppercase tracking-widest ${dark ? "text-canvas/50" : "text-ink/50"}`}>
                        {t.meta}
                      </div>
                      <div className={`mt-6 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${dark ? "text-canvas" : "text-ink"} group-hover:text-prompt`}>
                        Ver más <span aria-hidden>→</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <Eyebrow>¿No sabes cuál es el correcto?</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-3xl lg:text-5xl">
                Cada empresa es diferente. Obtén un diagnóstico gratuito y recomendaremos el <span className="accent-italic text-prompt">punto de partida ideal.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/es/auditoria">Diagnóstico gratuito</CTA>
                <CTA to="/es/contacto" variant="ghost">Háblanos</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
