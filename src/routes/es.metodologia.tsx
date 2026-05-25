import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/es/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodología — Cómo RYB construye sistemas de visibilidad" },
      {
        name: "description",
        content:
          "El sistema operativo de RYB: una metodología AI-Native que convierte el SEO en una línea de producción medible, rápida y transparente.",
      },
      { property: "og:title", content: "Metodología — Rank Your Brand" },
      { property: "og:description", content: "No hacemos SEO. Construimos sistemas de visibilidad." },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/methodology" }],
  }),
  component: MetodologiaEs,
});

const agents = [
  { name: "The Scout", role: "Investigación", note: "Detecta oportunidades y mapea el panorama competitivo" },
  { name: "The Architect", role: "Estrategia", note: "Define la estrategia editorial y técnica por cliente" },
  { name: "The Writer", role: "Contenido", note: "Produce contenido alineado a marca y a intención de búsqueda" },
  { name: "The Watchdog", role: "Monitoreo", note: "Vigila salud técnica, rankings y citas en IA 24/7" },
  { name: "The Reporter", role: "Resultados", note: "Consolida resultados y los entrega listos para decisión" },
];

const compare = [
  ["Investigación manual de keywords (4–6h)", "Automatizada por The Scout (15 min)"],
  ["Briefs de contenido en Google Docs", "Auto-generados y centralizados"],
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
            <div className="mt-8"><Eyebrow>Metodología</Eyebrow></div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-5xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              No hacemos SEO.<br />
              <span className="accent-italic text-prompt">Construimos sistemas de visibilidad.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Cada cliente de RYB pasa por un proceso estructurado, automatizado y medible que convierte su sitio web en su activo comercial más rentable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sistema Operativo */}
      <section className="bg-ink py-28 text-canvas lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow tone="canvas">Sistema Operativo</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl text-canvas lg:text-6xl">
              Un sistema multi-agente,<br />
              <span className="accent-italic text-prompt">no un brief en un Google Doc.</span>
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
                <div className="h3-soft mt-4 text-xl">{a.name}</div>
                <div className="mt-1 text-sm text-canvas/60">{a.role}</div>
                <div className="mt-6 border-t border-canvas/10 pt-4 text-xs text-canvas/50">
                  {a.note}
                </div>
                {i < agents.length - 1 && (
                  <div className="absolute right-[-1rem] top-1/2 hidden h-px w-4 bg-flow lg:block" />
                )}
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 rounded-2xl border-l-4 border-prompt bg-canvas/[0.04] p-6 text-canvas/80">
              "Esto no es una metáfora. Es nuestro sistema de producción real: una línea de trabajo automatizada que opera 24/7 con IA, supervisada por estrategas humanos."
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nativo de IA vs Sabor a IA */}
      <section className="bg-canvas py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Nativo de IA vs Sabor a IA</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl text-4xl lg:text-6xl">
              La mayoría de agencias le piden cosas a la IA.<br />
              <span className="accent-italic text-prompt">Nosotros operamos como una agencia AI-Native.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-ink/70">
              Cada proceso —investigación, contenido, monitoreo, reporte— está orquestado por IA y validado por estrategas.
            </p>
          </Reveal>

          <div className="mt-14 overflow-hidden rounded-3xl border border-border">
            <div className="grid grid-cols-2 border-b border-border bg-muted px-6 py-4 font-display text-xs tracking-widest">
              <div className="text-ink/60">Agencia tradicional</div>
              <div className="text-prompt">RankYourBrand</div>
            </div>
            {compare.map(([a, b], i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid grid-cols-2 border-b border-border last:border-0">
                  <div className="border-r border-border p-6 text-ink/55 line-through decoration-ink/30">
                    {a}
                  </div>
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

      {/* Operación AI-Native */}
      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Operación AI-Native</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
              Más rápidos. Más consistentes. <span className="accent-italic text-prompt">Más medibles.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">
              Donde una agencia tradicional necesita semanas y un equipo de 8 personas, nuestra metodología automatizada con IA entrega lo mismo en días — con trazabilidad completa de cada decisión y cada resultado.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-16">
              <CTA to="/es/auditoria">Reserva una llamada estratégica</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
