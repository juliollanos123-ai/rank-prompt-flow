import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/es/resultados")({
  head: () => ({
    meta: [
      { title: "Resultados, casos y aplicaciones del sistema | Rank Your Brand" },
      { name: "description", content: "Explora cómo aplicamos SEO, GEO, branding, desarrollo web, automatización y estrategia para construir sistemas reales de crecimiento." },
      { property: "og:title", content: "Resultados — Rank Your Brand" },
      { property: "og:description", content: "La estrategia se vuelve valiosa cuando puede traducirse en resultados reales." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/resultados" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/resultados" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/proof" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/resultados" },
    ],
  }),
  component: ResultadosPage,
});

const cases = [
  {
    n: "01",
    tag: "Marca y estructura",
    title: "De presencia digital confusa a estructura clara de marca, sitio y comunicación.",
    body: "Reconstrucción de la narrativa central, identidad verbal y arquitectura web — convirtiendo canales dispersos en un frente comercial coherente.",
  },
  {
    n: "02",
    tag: "Arquitectura SEO",
    title: "De contenido sin dirección a arquitectura SEO con intención comercial.",
    body: "Investigación de keywords anclada a búsquedas de alto volumen e intención, con una arquitectura transaccional que hace crecer el tráfico orgánico mes a mes.",
  },
  {
    n: "03",
    tag: "Automatización con IA",
    title: "De procesos dispersos a automatización operativa con IA.",
    body: "Flujos de marketing, ventas y operación conectados de punta a punta con automatización AI-Native — reduciendo trabajo manual y liberando capacidad predecible.",
  },
  {
    n: "04",
    tag: "Sistema publicitario",
    title: "De campañas sin control a un sistema publicitario medible y escalable.",
    body: "Reestructuración de campañas Meta y Google alrededor de objetivos reales — medición, creatividad, landing y oferta alineadas para que el presupuesto componga.",
  },
];

function ResultadosPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-soft-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Breadcrumbs items={[{ label: "Inicio", to: "/es" }, { label: "Resultados" }]} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8"><Eyebrow>Resultados</Eyebrow></div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-5xl text-5xl lg:text-[clamp(3.25rem,6.5vw,6rem)]">
              La estrategia se vuelve valiosa<br />
              <span className="accent-italic text-prompt">cuando se traduce en resultados reales.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg text-ink/70">
              No todas las pruebas se ven iguales. A veces un caso demuestra crecimiento orgánico. Otras veces demuestra claridad de marca, mejor estructura web, un sistema comercial más ordenado o una operación más eficiente. Lo importante es qué cambió en el negocio después de tener una mejor estructura.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.06}>
                <article className="h-full rounded-3xl border border-border bg-card p-8 transition-colors hover:border-prompt/40 lg:p-10">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xs tracking-[0.3em] text-prompt">{c.n}</span>
                    <span className="mono-light text-xs uppercase tracking-[0.25em] text-ink/50">{c.tag}</span>
                  </div>
                  <h2 className="mt-6 text-2xl lg:text-3xl">{c.title}</h2>
                  <p className="mt-4 text-ink/70">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <h2 className="max-w-3xl text-balance text-3xl lg:text-5xl">
                Cada negocio crece desde un punto diferente. La clave está en identificar qué estructura necesita primero.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/es/contacto">Hablar sobre mi caso</CTA>
                <CTA to="/es/auditoria" variant="outline">Diagnóstico gratuito</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
