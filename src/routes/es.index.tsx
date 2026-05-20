import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CTA } from "@/components/site/CTA";
import { Eyebrow } from "@/components/site/Eyebrow";
import { Reveal } from "@/components/site/Reveal";
import isotipo from "@/assets/brand/isotipo-color.svg";

export const Route = createFileRoute("/es/")({
  head: () => ({
    meta: [
      { title: "Rank Your Brand — Sé la respuesta que tus compradores encuentran en ChatGPT" },
      {
        name: "description",
        content:
          "SEO nativo de IA para B2B. Construimos sistemas de visibilidad citados por ChatGPT, Perplexity y Google AI. Diagnóstico web gratuito en 48 horas.",
      },
      { property: "og:title", content: "Rank Your Brand — SEO Nativo de IA para B2B" },
      {
        property: "og:description",
        content: "Sé la respuesta que tus compradores encuentran. Diagnóstico web gratuito en 48 horas.",
      },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/" }],
  }),
  component: HomeEs,
});

const headlineWords = [
  "Tus", "compradores", "ya", "te", "buscaron",
  "en", "ChatGPT.",
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-soft-glow" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-60" />

      {/* Floating diagonal gradient blob bottom-right */}
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 -z-10 h-[640px] w-[640px] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-diagonal)" }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>SEO Nativo de IA · USA + Europa</Eyebrow>
        </Reveal>

        <h1 className="mt-8 max-w-5xl text-balance text-5xl leading-[0.95] sm:text-6xl lg:text-[clamp(4rem,8vw,7.5rem)]">
          <span className="block">
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="block text-prompt italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            ¿Te encontraron?
          </motion.span>
        </h1>

        <Reveal delay={0.8}>
          <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/75 lg:text-xl">
            El 68% de los compradores B2B usan motores de búsqueda con IA antes de visitar cualquier sitio web.
            Si no estás optimizado para ChatGPT, Perplexity y Google AI, no existes para tu próximo cliente.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/es/auditoria">Obtén tu diagnóstico web gratuito</CTA>
            <CTA to="/es/metodologia" variant="ghost">Ve cómo lo hacemos</CTA>
          </div>
        </Reveal>

        {/* Split visual */}
        <Reveal delay={1.2}>
          <div className="mt-20 grid gap-4 lg:grid-cols-2">
            <SearchMock
              kind="google"
              title="google.com"
              query="mejor software de logística B2B"
            />
            <SearchMock
              kind="chatgpt"
              title="chatgpt.com"
              query="¿Cuál es el mejor software de logística B2B en 2026?"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SearchMock({
  kind,
  title,
  query,
}: {
  kind: "google" | "chatgpt";
  title: string;
  query: string;
}) {
  const isAI = kind === "chatgpt";
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative overflow-hidden rounded-3xl border shadow-card ${
        isAI ? "border-flow/30 bg-ink text-canvas" : "border-border bg-card"
      }`}
    >
      <div className={`flex items-center gap-2 border-b px-5 py-3 text-xs ${isAI ? "border-canvas/10 text-canvas/60" : "border-border text-ink/60"}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-prompt/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-flow/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-current/20" />
        <span className="ml-3 font-display tracking-wider">{title}</span>
      </div>
      <div className="p-6">
        <div className={`mb-5 rounded-full px-4 py-2 text-sm ${isAI ? "bg-canvas/10" : "bg-muted"}`}>
          {query}
        </div>

        {isAI ? (
          <>
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-flow">
              <span className="h-1.5 w-1.5 rounded-full bg-flow animate-pulse" />
              Respuesta IA
            </div>
            <p className="text-sm leading-relaxed text-canvas/85">
              Para el mercado medio B2B, las plataformas líderes incluyen{" "}
              <span className="rounded bg-prompt/20 px-1 text-prompt">CompetidorUno</span>,{" "}
              <span className="rounded bg-prompt/20 px-1 text-prompt">CompetidorDos</span>{" "}
              y <span className="rounded bg-prompt/20 px-1 text-prompt">CompetidorTres</span>.
              Cada una ofrece routing automatizado, seguimiento en tiempo real e integraciones EDI.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-canvas/50">
              Fuentes: 3 citadas · <span className="text-prompt">Tu marca: no mencionada</span>
            </div>
          </>
        ) : (
          <>
            <ul className="space-y-4 text-sm">
              {[
                "competidoruno.com — Top 10 plataformas de logística B2B",
                "g2.com — Mejor software de logística 2026",
                "gartner.com — Magic Quadrant para logística",
                "competidordos.com — Por qué lideramos el mercado",
              ].map((r) => (
                <li key={r} className="border-b border-border/60 pb-3 last:border-0">
                  <div className="text-flow underline-offset-4 hover:underline">{r}</div>
                  <div className="mt-1 text-xs text-ink/50">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
}

function GeoGap() {
  const milestones = [
    { year: "2020", label: "Google SERP clásico", note: "10 enlaces azules" },
    { year: "2023", label: "Aparecen snippets SGE", note: "Las vistas previas de IA van a beta" },
    { year: "2024", label: "ChatGPT se convierte en herramienta de investigación", note: "200M usuarios semanales" },
    { year: "2026", label: "La búsqueda con IA es el estándar", note: "68% de la investigación B2B" },
  ];
  return (
    <section className="relative bg-canvas py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>La Brecha GEO</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
            El SEO que conoces <span className="text-prompt italic">ya es obsoleto.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            El juego cambió en 2024. Google ya no solo muestra enlaces — genera respuestas.
            Y la IA decide quién recibe las citas.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 h-px bg-ink/15" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-0 top-6 h-px origin-left"
            style={{ right: 0, background: "var(--gradient-diagonal)" }}
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={0.1 * i}>
                <div className="relative pt-12">
                  <div className="absolute left-0 top-3.5 h-6 w-6 rounded-full border-2 border-prompt bg-canvas" />
                  <div className="font-display text-2xl text-prompt">{m.year}</div>
                  <div className="mt-2 text-lg font-semibold">{m.label}</div>
                  <div className="mt-1 text-sm text-ink/60">{m.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-20 overflow-hidden rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="font-display text-7xl text-prompt lg:text-9xl">68%</div>
                <p className="mt-3 max-w-md text-ink/70">
                  de los compradores B2B inician la investigación de productos con un asistente de IA — no con un motor de búsqueda.
                </p>
              </div>
              <div className="text-right text-xs uppercase tracking-widest text-ink/50">
                Fuente: Gartner, 2025
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    {
      tag: "01",
      title: "Arquitectura que convierte",
      body:
        "Construimos sitios web B2B diseñados para guiar a los visitantes desde el primer clic hasta el contacto. No páginas bonitas — sistemas de ventas.",
    },
    {
      tag: "02",
      title: "Operaciones nativas de IA",
      body:
        "Nuestros flujos de trabajo N8N + LLM producen contenido estratégico a escala sin sacrificar la calidad. Más velocidad. Mejores resultados. Menor coste.",
    },
    {
      tag: "03",
      title: "Optimización GEO",
      body:
        "Optimizamos tu marca para que sea citada por ChatGPT, Perplexity y Google AI — la nueva capa de búsqueda donde los compradores deciden.",
    },
  ];
  return (
    <section className="bg-ink py-28 text-canvas lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow tone="canvas">El sistema</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl text-canvas lg:text-6xl">
            Construimos sistemas de visibilidad, <span className="italic text-prompt">no campañas de SEO.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-canvas/10 bg-canvas/[0.03] p-8 transition-colors hover:border-flow/40"
              >
                <div className="font-display text-xs tracking-[0.3em] text-prompt">{p.tag}</div>
                <h3 className="mt-6 text-2xl text-canvas lg:text-3xl">{p.title}</h3>
                <p className="mt-4 text-canvas/70">{p.body}</p>
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-flow/0 blur-3xl transition-all group-hover:bg-flow/30" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyZero() {
  const metrics = [
    { label: "Días desde el lanzamiento", value: "42" },
    { label: "Keywords orgánicas posicionadas", value: "127" },
    { label: "Citas en ChatGPT", value: "9" },
    { label: "Menciones en Perplexity", value: "14" },
    { label: "Google AI overviews", value: "6" },
    { label: "Artículos publicados", value: "23" },
  ];
  return (
    <section className="bg-canvas py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <Reveal>
            <div>
              <Eyebrow>Caso de Estudio #0</Eyebrow>
              <h2 className="mt-6 text-4xl lg:text-6xl">
                Este sitio web <span className="italic text-prompt">es</span> nuestro primer caso de estudio.
              </h2>
              <p className="mt-6 max-w-md text-ink/70">
                No solo hablamos de SEO nativo de IA. Lo practicamos en nosotros mismos, en público. Cada métrica que aparece a continuación viene de este mismo sitio.
              </p>
              <div className="mt-8">
                <CTA to="/es/metodologia">Ver la metodología</CTA>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink text-canvas shadow-elegant">
              <div className="flex items-center justify-between border-b border-canvas/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-prompt animate-pulse" />
                  <span className="font-display text-xs tracking-widest text-canvas/70">RYB.CO · EN VIVO</span>
                </div>
                <span className="text-xs text-canvas/40">Actualizado hace 6 min</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3">
                {metrics.map((m) => (
                  <div key={m.label} className="border-b border-r border-canvas/10 p-6 last:border-r-0">
                    <div className="font-display text-4xl text-canvas lg:text-5xl">{m.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-wider text-canvas/50">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-canvas/10 bg-canvas/[0.04] px-6 py-4 text-xs text-canvas/50">
                Fuente: GSC + DataForSEO + revisiones manuales de IA · Actualizado cada hora
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      tag: "Blueprint",
      to: "/es/servicios/blueprint" as const,
      kicker: "Fundación",
      desc: "Desarrollo web completo + base técnica SEO. Lista para crecimiento orgánico y descubrimiento por IA.",
      price: "$1,500 USD",
      meta: "Proyecto · 4–6 semanas",
      tone: "border-prompt/40 bg-prompt/5",
    },
    {
      tag: "Scale",
      to: "/es/servicios/scale" as const,
      kicker: "Crecimiento",
      desc: "Crecimiento orgánico, mes a mes. Motor de contenido con IA + CRO + link building + dashboards.",
      price: "$2,500/mo",
      meta: "Retainer · mínimo 6 meses",
      tone: "border-ink/15 bg-ink text-canvas",
    },
    {
      tag: "Landmark",
      to: "/es/servicios/landmark" as const,
      kicker: "Autoridad",
      desc: "La autoridad que la IA recomienda. Todo lo de Scale + GEO + liderazgo de pensamiento.",
      price: "$3,500/mo",
      meta: "Retainer · compromiso 12 meses",
      tone: "border-flow/40 bg-flow/[0.06]",
    },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
            Tres niveles. Un objetivo: <span className="italic text-prompt">que te encuentren.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.tag} delay={0.1 * i}>
              <Link to={s.to} className="block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative flex h-full flex-col rounded-3xl border p-8 transition-shadow hover:shadow-card ${s.tone}`}
                >
                  <div className={`font-display text-xs tracking-[0.3em] ${s.tone.includes("text-canvas") ? "text-canvas/60" : "text-ink/50"}`}>
                    {s.kicker}
                  </div>
                  <h3 className="mt-3 text-3xl lg:text-4xl">{s.tag}</h3>
                  <p className={`mt-5 ${s.tone.includes("text-canvas") ? "text-canvas/75" : "text-ink/70"}`}>
                    {s.desc}
                  </p>
                  <div className="mt-auto pt-10">
                    <div className="font-display text-2xl text-prompt">{s.price}</div>
                    <div className={`mt-1 text-xs uppercase tracking-wider ${s.tone.includes("text-canvas") ? "text-canvas/50" : "text-ink/50"}`}>
                      {s.meta}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider">
                      Ver más <span aria-hidden>→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "¿Qué es GEO y por qué importa para B2B?",
    a: "GEO (Optimización para Motores Generativos) es la práctica de optimizar tu contenido para que sistemas de IA como ChatGPT, Perplexity y Google AI Overview citen tu marca cuando responden preguntas de compradores. En B2B, el 68% de los compradores inicia su investigación con un asistente de IA — si no apareces citado, no existes en esa etapa crítica.",
  },
  {
    q: "¿En qué se diferencia del SEO tradicional?",
    a: "El SEO tradicional apunta a los 10 enlaces azules de Google. GEO apunta a las respuestas generadas por IA que ahora aparecen antes de esos enlaces — y que en muchos casos los reemplazan por completo. Optimizamos ambas capas: SEO técnico clásico para el ranking Y arquitectura de contenido que hace que los sistemas de IA te citen.",
  },
  {
    q: "¿Cuánto tiempo tarda en ver resultados?",
    a: "Las correcciones técnicas y mejoras de contenido suelen mostrar movimiento inicial en 6–12 semanas. Los resultados de citación GEO (menciones en ChatGPT, Perplexity) suelen aparecer en 8–16 semanas. Blueprint crea la base; Scale y Landmark construyen la visibilidad compuesta en 6–12 meses.",
  },
  {
    q: "¿Trabajáis con empresas fuera de EE.UU.?",
    a: "Sí. Trabajamos con empresas B2B en EE.UU., Europa y LATAM. Nuestro equipo opera en múltiples zonas horarias y hemos optimizado para mercados en inglés y español.",
  },
  {
    q: "¿Por qué el diagnóstico gratuito es realmente gratis?",
    a: "Analizamos tu sitio, hacemos benchmarks de competidores y verificamos tu presencia actual en Google AI, ChatGPT y Perplexity — luego entregamos un PDF de 5–7 páginas con hallazgos accionables. Sin trampa. Lo hacemos porque los mejores clientes llegan al ver valor real primero.",
  },
  {
    q: "¿Qué incluye la auditoría completa de $497?",
    a: "Un PDF de 20 páginas con 50+ puntos de control técnico, benchmarks de 3–5 competidores, 100+ oportunidades de keywords, auditoría de perfil de backlinks, hoja de ruta de optimización GEO y un plan de implementación de 90 días. Más una sesión de video de 30 minutos con nuestro equipo. El pago es totalmente reembolsable si nos contratas en 30 días.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-canvas py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
            Las preguntas que <span className="italic text-prompt">siempre nos hacen.</span>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-8 py-6 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-lg font-semibold text-ink lg:text-xl">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-1 shrink-0 font-display text-xl text-prompt"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-ink/70 leading-relaxed max-w-3xl">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-diagonal" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-20 mix-blend-overlay" />
      <div className="mx-auto max-w-7xl px-6 py-28 text-canvas lg:px-10 lg:py-40">
        <Reveal>
          <img src={isotipo} alt="" className="h-14 w-auto opacity-90" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 max-w-4xl text-balance text-4xl text-canvas lg:text-7xl">
            ¿Sabes cómo aparece tu marca cuando un comprador te busca en ChatGPT hoy?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/es/auditoria" variant="outline-canvas">Descúbrelo gratis en 48h</CTA>
            <CTA to="/es/contacto" variant="outline-canvas">Háblanos</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HomeEs() {
  return (
    <>
      <Hero />
      <GeoGap />
      <Pillars />
      <CaseStudyZero />
      <ServicesPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
