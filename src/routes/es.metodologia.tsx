import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/es/metodologia")({
  head: () => ({
    meta: [
      { title: "Nuestro sistema de crecimiento: cómo trabaja Rank Your Brand" },
      { name: "description", content: "Conoce la metodología de Rank Your Brand: estrategia, estructura, IA, automatización, posicionamiento y ejecución orientada a resultados de negocio." },
      { property: "og:title", content: "Metodología — Rank Your Brand" },
      { property: "og:description", content: "No vendemos tareas sueltas. Construimos sistemas de crecimiento." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/metodologia" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/metodologia" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/methodology" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/metodologia" },
    ],
  }),
  component: MetodologiaEs,
});

const agents = [
  { name: "The Scout", role: "Investigación", note: "Inteligencia automatizada de keywords y competidores" },
  { name: "The Architect", role: "Estrategia", note: "Planificación estratégica alineada con la marca" },
  { name: "The Writer", role: "Contenido", note: "Producción editorial asistida por IA" },
  { name: "The Watchdog", role: "Monitoreo", note: "Chequeos de búsqueda, uptime y citas de IA" },
  { name: "The Reporter", role: "Resultados", note: "Informes automatizados + dashboards" },
];

const stages = [
  { n: "01", name: "Diagnóstico", body: "Identificamos contexto, etapa, objetivo, cuello de botella y oportunidad principal." },
  { n: "02", name: "Diseño de estructura", body: "Definimos qué necesita construirse primero para que el crecimiento tenga base real." },
  { n: "03", name: "Implementación", body: "Ejecutamos los activos, procesos y mejoras necesarias según el frente priorizado." },
  { n: "04", name: "Optimización", body: "Medimos, interpretamos y mejoramos continuamente con feedback del mercado y datos del negocio." },
  { n: "05", name: "Escalamiento", body: "Convertimos lo que funciona en un sistema más sólido, repetible y escalable." },
];

const compare = [
  ["Investigación manual de keywords (4–6h)", "Automatizada por The Scout (15 min)"],
  ["Briefs de contenido en Google Docs", "Auto-generados y estructurados, almacenados centralmente"],
  ["Informes mensuales compilados a mano", "Dashboard en tiempo real + auto-email"],
  ["Lento, caro, opaco", "Rápido, escalable, transparente"],
];

function MetodologiaEs() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Inicio", to: "/es" }, { label: "Metodología" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 max-w-5xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              No vendemos tareas sueltas.<br />
              <span className="italic text-prompt">Construimos sistemas de crecimiento.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg text-ink/70">
              Nuestro trabajo combina estrategia, estructura digital, automatización, posicionamiento y toma de decisiones basada en datos para que una marca pueda crecer con orden y visión de largo plazo — no con campañas desconectadas.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA to="/es/contacto">Solicitar llamada estratégica</CTA>
              <CTA to="/es/auditoria" variant="outline">Diagnóstico gratuito</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Narrativa */}
      <section className="bg-canvas py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>La diferencia</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl text-3xl lg:text-5xl">
              Una agencia tradicional opera en silos.<br />
              <span className="italic text-prompt">Un sistema de crecimiento conecta todo.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl text-lg text-ink/70">
              En Rank Your Brand cada pieza se diseña para fortalecer a las demás: marca, web, contenido, SEO, IA, Ads, reporting y evolución comercial. Por eso el resultado compone — porque no es un menú de tareas, es un sistema operativo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sistema Operativo */}
      <section className="bg-ink py-28 text-canvas lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow tone="canvas">Sistema Operativo</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl text-canvas lg:text-6xl">
              Un sistema multi-agente,<br />
              <span className="italic text-prompt">no un brief en un Google Doc.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 lg:grid-cols-5">
            {agents.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative rounded-2xl border border-canvas/10 bg-canvas/[0.04] p-6"
              >
                <div className="font-display text-xs tracking-[0.3em] text-prompt">0{i + 1}</div>
                <div className="mt-4 font-display text-xl">{a.name}</div>
                <div className="mt-1 text-sm text-canvas/60">{a.role}</div>
                <div className="mt-6 border-t border-canvas/10 pt-4 text-xs text-canvas/50">{a.note}</div>
                {i < agents.length - 1 && (
                  <div className="absolute right-[-1rem] top-1/2 hidden h-px w-4 bg-flow lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Etapas del sistema */}
      <section className="bg-canvas py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>Etapas del sistema</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
              Del diagnóstico al <span className="italic text-prompt">sistema escalable.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-xs tracking-[0.3em] text-prompt">{s.n}</div>
                  <h3 className="h3-soft mt-4 text-xl text-ink">{s.name}</h3>
                  <p className="mt-3 text-sm text-ink/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nativo de IA vs Sabor a IA */}
      <section className="bg-ink/[0.02] py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>Nativo de IA vs Sabor a IA</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl text-4xl lg:text-6xl">
              La mayoría de agencias hacen prompts a la IA.<br />
              <span className="italic text-prompt">Nosotros operamos como una agencia AI-Native.</span>
            </h2>
          </Reveal>

          <div className="mt-14 overflow-hidden rounded-3xl border border-border">
            <div className="grid grid-cols-2 border-b border-border bg-muted px-6 py-4 font-display text-xs tracking-widest">
              <div className="text-ink/60">Agencia tradicional</div>
              <div className="text-prompt">RankYourBrand</div>
            </div>
            {compare.map(([a, b], i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid grid-cols-2 border-b border-border last:border-0">
                  <div className="border-r border-border p-6 text-ink/55 line-through decoration-ink/30">{a}</div>
                  <div className="p-6 font-medium text-ink">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-prompt" />
                    {b}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <h2 className="max-w-3xl text-balance text-3xl lg:text-5xl">
                Si quieres resultados más previsibles, necesitas más que ejecución: <span className="accent-italic text-prompt">necesitas sistema.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/es/contacto">Conocer el enfoque correcto para mi empresa</CTA>
                <CTA to="/es/auditoria" variant="outline">Diagnóstico gratuito</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
