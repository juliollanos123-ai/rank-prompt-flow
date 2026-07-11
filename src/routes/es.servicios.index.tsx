import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/es/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios de SEO, GEO, IA, branding y desarrollo web | Rank Your Brand" },
      { name: "description", content: "Servicios premium para construir, posicionar y escalar marcas: SEO, GEO, Mega Ads, automatización con IA, desarrollo web y branding estratégico." },
      { property: "og:title", content: "Servicios — Rank Your Brand" },
      { property: "og:description", content: "Servicios diseñados para construir, posicionar y escalar marcas con sistema." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/servicios" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/servicios" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios" },
    ],
  }),
  component: ServiciosPage,
});

const categories = [
  {
    tag: "SEO & GEO",
    to: "/es/servicios/seo-geo" as const,
    kicker: "Visibilidad orgánica",
    desc: "Construimos visibilidad orgánica con estrategia. Arquitecturas SEO transaccionales, contenido con intención comercial y optimización para motores impulsados por IA como ChatGPT, Perplexity y Google AI.",
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "Mega Ads",
    to: "/es/servicios/mega-ads" as const,
    kicker: "Adquisición paga",
    desc: "Creamos y optimizamos sistemas publicitarios para marcas que necesitan acelerar resultados, validar ofertas o escalar demanda con campañas bien estructuradas en Meta, Google y otros canales pagos.",
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "Automatización con IA",
    to: "/es/servicios/automatizacion-ia" as const,
    kicker: "Palanca operativa",
    desc: "Convertimos procesos manuales en sistemas inteligentes. Automatizaciones para marketing, seguimiento comercial, generación de contenido, clasificación de leads y operación interna.",
    tone: "border-flow/40 bg-flow/[0.06]",
  },
  {
    tag: "Desarrollo Web",
    to: "/es/servicios/desarrollo-web" as const,
    kicker: "Infraestructura digital",
    desc: "Creamos sitios preparados para vender, posicionarse y escalar. No páginas decorativas: activos digitales que conectan estructura, experiencia y conversión.",
    tone: "border-prompt/40 bg-prompt/5",
  },
  {
    tag: "Branding",
    to: "/es/servicios/branding" as const,
    kicker: "Posicionamiento e identidad",
    desc: "Definimos marcas con claridad estratégica. Desde naming, narrativa y mensaje hasta identidad visual, tono y lineamientos para crecer con consistencia.",
    tone: "border-ink/15 bg-ink text-canvas",
  },
  {
    tag: "Fundamentos Digitales",
    to: "/es/servicios/fundamentos-digitales" as const,
    kicker: "Base para arrancar",
    desc: "Ayudamos a negocios que están empezando: redes sociales, base de marca, activos iniciales y sistema mínimo viable para crecer.",
    tone: "border-flow/40 bg-flow/[0.06]",
  },
];

function ServiciosPage() {
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
            <h1 className="mt-6 max-w-5xl text-5xl lg:text-[clamp(3.5rem,7vw,6.5rem)]">
              Servicios diseñados para construir, posicionar<br />
              <span className="accent-italic text-prompt">y escalar marcas con sistema.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg text-ink/70">
              No resolvemos una tarea aislada. Diseñamos la estructura digital que una empresa necesita para existir con autoridad, generar demanda y crecer con procesos más inteligentes.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA to="/es/auditoria">Solicitar diagnóstico estratégico</CTA>
              <CTA to="/es/contacto" variant="outline">Agendar llamada estratégica</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="max-w-3xl text-lg text-ink/70">
              Cada servicio de Rank Your Brand está pensado para resolver una etapa real del crecimiento de una empresa: desde crear una marca sólida y presencia digital inicial, hasta escalar adquisición, automatización, posicionamiento orgánico y autoridad en buscadores tradicionales y motores de respuesta con IA.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg text-ink/70">
              Por eso el portafolio no debe sentirse como una lista de tareas sueltas, sino como un ecosistema de soluciones conectadas. Entra por una necesidad puntual y evoluciona hacia un sistema integral de crecimiento.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {categories.map((c, i) => {
              const dark = c.tone.includes("text-canvas");
              return (
                <Reveal key={c.tag} delay={i * 0.06}>
                  <Link to={c.to} className="block h-full">
                    <motion.article
                      whileHover={{ y: -4 }}
                      className={`group h-full rounded-3xl border p-8 lg:p-10 ${c.tone}`}
                    >
                      <div className={`font-display text-xs tracking-[0.3em] ${dark ? "text-canvas/60" : "text-ink/50"}`}>{c.kicker}</div>
                      <h2 className="mt-3 text-3xl lg:text-4xl">{c.tag}</h2>
                      <p className={`mt-4 ${dark ? "text-canvas/75" : "text-ink/70"}`}>{c.desc}</p>
                      <div className={`mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${dark ? "text-canvas" : "text-ink"} group-hover:text-prompt`}>
                        Ver más <span aria-hidden>→</span>
                      </div>
                    </motion.article>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><Eyebrow>Cómo elegir</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl text-3xl lg:text-5xl">
              No todos los negocios necesitan empezar por SEO. Algunos primero necesitan una marca clara. Otros, una web que convierta. Otros ya tienen base y necesitan acelerar con Ads o automatizar su operación.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl text-lg text-ink/70">
              El primer paso correcto no es contratar un servicio: es entender cuál es el cuello de botella real del negocio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-16">
              <Eyebrow>¿No sabes cuál servicio?</Eyebrow>
              <h2 className="mt-6 max-w-3xl text-3xl lg:text-5xl">
                Hablemos de la etapa en la que está tu empresa y definamos la <span className="accent-italic text-prompt">estructura correcta para crecer.</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/es/contacto">Agendar llamada estratégica</CTA>
                <CTA to="/es/auditoria" variant="outline">Diagnóstico gratuito</CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
