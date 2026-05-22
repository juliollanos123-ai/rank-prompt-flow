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
          "El sistema operativo de RYB: un flujo de trabajo multi-agente con N8N + LLM que convierte el SEO en una línea de producción medible.",
      },
      { property: "og:title", content: "Metodología — Rank Your Brand" },
      { property: "og:description", content: "No hacemos SEO. Construimos sistemas de visibilidad." },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/methodology" }],
  }),
  component: MetodologiaEs,
});

const agents = [
  { name: "The Scout", role: "Investigación", note: "DataForSEO + Perplexity" },
  { name: "The Architect", role: "Estrategia", note: "GPT-4 + brand brief" },
  { name: "The Writer", role: "Contenido", note: "Claude + guía de estilo" },
  { name: "The Watchdog", role: "Monitoreo", note: "GSC + uptime + chequeos IA" },
  { name: "The Reporter", role: "Resultados", note: "Looker Studio + email" },
];

const stack = {
  "Estrategia & Datos": ["Airtable", "DataForSEO", "Ubersuggest"],
  "Automatización": ["N8N", "OpenAI API", "Perplexity API"],
  "Entrega": ["Google Workspace", "Lovable", "Looker Studio"],
};

const compare = [
  ["Investigación manual de keywords (4–6h)", "Automatizada por The Scout (15 min)"],
  ["Briefs de contenido en Google Docs", "Auto-generados, almacenados en Airtable"],
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
              No hacemos SEO.<br />
              <span className="italic text-prompt">Construimos sistemas de visibilidad.</span>
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
              "Esto no es una metáfora. Este es nuestro sistema de producción real. Construido sobre N8N, GPT-4, Airtable y DataForSEO."
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
              La mayoría de agencias usan ChatGPT.<br />
              <span className="italic text-prompt">Nuestras operaciones corren sobre él.</span>
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

      {/* Stack */}
      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Eyebrow>Stack tecnológico · transparencia radical</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
              Las herramientas que nos hacen <span className="italic text-prompt">10× más rápidos.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {Object.entries(stack).map(([cat, tools], i) => (
              <Reveal key={cat} delay={i * 0.1}>
                <div className="rounded-3xl border border-border bg-card p-8">
                  <div className="font-display text-xs tracking-widest text-flow">{cat}</div>
                  <ul className="mt-6 space-y-3">
                    {tools.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-prompt" />
                        <span className="font-medium">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

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
