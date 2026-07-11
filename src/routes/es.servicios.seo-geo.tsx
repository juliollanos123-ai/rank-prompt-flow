import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/es/servicios/seo-geo")({
  head: () => ({
    meta: [
      { title: "SEO & GEO — Visibilidad orgánica construida con estrategia | Rank Your Brand" },
      { name: "description", content: "SEO y Optimización para Motores Generativos para B2B. Tres niveles conectados para construir la base, escalar tráfico orgánico y dominar las respuestas por IA." },
      { property: "og:title", content: "SEO & GEO — Rank Your Brand" },
      { property: "og:description", content: "Visibilidad orgánica construida con estrategia — para Google y para IA." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/servicios/seo-geo" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/servicios/seo-geo" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/seo-geo" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/seo-geo" },
    ],
  }),
  component: SeoGeoHubEs,
});

const tiers = [
  {
    tag: "SEO Técnico",
    to: "/es/servicios/seo-tecnico" as const,
    kicker: "Fundación · Proyecto",
    meta: "4–6 semanas",
    desc: "La base técnica que tu sitio necesita para rankear. Arquitectura, Core Web Vitals, schema y setup de analytics.",
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "SEO para B2B",
    to: "/es/servicios/seo-b2b" as const,
    kicker: "Crecimiento · Retainer mensual",
    meta: "mínimo 6 meses",
    desc: "Crecimiento orgánico mes a mes. Motor de contenido AI-Native, CRO, link building y dashboards enfocados en leads cualificados.",
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "Agencia SEO IA",
    to: "/es/servicios/agencia-seo-ia" as const,
    kicker: "Autoridad · Retainer premium",
    meta: "compromiso 12 meses",
    desc: "Todo lo de SEO para B2B más GEO y liderazgo de pensamiento para marcas listas para dominar su categoría en Google y en IA.",
    tone: "border-flow/40 bg-flow/[0.06]",
  },
];

function SeoGeoHubEs() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Inicio", to: "/es" }, { label: "Servicios", to: "/es/servicios" }, { label: "SEO & GEO" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8"><Eyebrow>SEO & GEO</Eyebrow></div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Visibilidad orgánica<br />
              <span className="accent-italic text-prompt">construida con estrategia.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Diseñamos arquitecturas SEO transaccionales, contenido con intención comercial y optimización para motores impulsados por IA como ChatGPT, Perplexity y Google AI. Tres niveles conectados, un solo camino.
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
                    </div>
                    <div className="hidden lg:block" />
                    <div className="text-right">
                      <div className={`text-xs uppercase tracking-widest ${dark ? "text-canvas/50" : "text-ink/50"}`}>{t.meta}</div>
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
              <Eyebrow>¿No sabes cuál nivel encaja?</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-3xl lg:text-5xl">
                Obtén un diagnóstico gratuito y recomendaremos el <span className="accent-italic text-prompt">punto de partida correcto.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/es/auditoria">Diagnóstico gratuito</CTA>
                <CTA to="/es/contacto" variant="outline">Háblanos</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
