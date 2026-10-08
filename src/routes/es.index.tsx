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
      { title: "Rank Your Brand — Sistemas de crecimiento para marcas modernas" },
      {
        name: "description",
        content:
          "No vendemos tareas sueltas. Construimos sistemas de crecimiento: estrategia, marca, web, SEO, GEO, Ads y automatización con IA — conectados para que la empresa escale con orden.",
      },
      { property: "og:title", content: "Rank Your Brand — Sistemas de crecimiento" },
      {
        property: "og:description",
        content: "Estrategia, marca, web, SEO/GEO, Ads y automatización con IA — un sistema de crecimiento conectado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://rankyourbrand.co/es" },
      { rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/" },
      { rel: "alternate", hrefLang: "es", href: "https://rankyourbrand.co/es" },
    ],
  }),
  component: HomeEs,
});

const headlineWords = ["No", "vendemos", "tareas", "sueltas."];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-soft-glow" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-60" />

      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 -z-10 h-[640px] w-[640px] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-diagonal)" }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Agencia de sistemas de crecimiento · USA + Europa + LATAM</Eyebrow>
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
            Construimos sistemas de crecimiento.
          </motion.span>
        </h1>

        <Reveal delay={0.8}>
          <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/75 lg:text-xl">
            Estrategia, marca, web, SEO, GEO, adquisición pagada y automatización
            con IA — conectados como un único sistema operativo para que tu
            empresa crezca con orden, autoridad y resultados previsibles.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/es/auditoria">Diagnóstico gratuito</CTA>
            <CTA to="/es/metodologia" variant="ghost">Ver la metodología</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ShiftNarrative() {
  return (
    <section className="relative bg-canvas py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>El cambio</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl lg:text-6xl">
            Una agencia tradicional opera en silos.{" "}
            <span className="text-prompt italic">Un sistema de crecimiento conecta todo.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg text-ink/70">
            Marca, web, contenido, SEO, GEO, Ads y reporting solían vivir en
            equipos y herramientas separadas. Por eso el crecimiento se sentía
            desconectado: cada pieza optimizada para sí misma, ninguna para el
            negocio. Reconstruimos el sistema operativo completo para que cada
            parte refuerce a la siguiente.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              { k: "Estrategia primero", v: "Cada entregable responde a una pregunta de negocio, no a un checklist de canal." },
              { k: "Operaciones AI-Native", v: "Flujos multi-agente que producen, monitorean y reportan a una velocidad imposible manualmente." },
              { k: "Activos que componen", v: "Marca, web, SEO y contenido diseñados para revalorizarse, no expirar con la campaña." },
            ].map((b, i) => (
              <Reveal key={b.k} delay={0.1 * i}>
                <div className="h-full rounded-3xl border border-border bg-card p-8">
                  <div className="font-display text-xs tracking-[0.3em] text-prompt">0{i + 1}</div>
                  <h3 className="h3-soft mt-4 text-2xl">{b.k}</h3>
                  <p className="mt-4 text-ink/70">{b.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GrowthSystem() {
  const phases = [
    {
      n: "Diagnosticar",
      body: "Mapeamos contexto, etapa y cuello de botella real — antes de proponer nada. Nada de plantillas genéricas.",
      note: "Semanas 1–2",
    },
    {
      n: "Construir",
      body: "Ejecutamos el frente prioritario — marca, web, SEO, contenido, Ads o automatización — pensando en el resto del sistema.",
      note: "Semanas 3–8",
    },
    {
      n: "Escalar",
      body: "Lo que funciona se convierte en un motor repetible. Los nuevos frentes se conectan sin romper los que ya están corriendo.",
      note: "Mes 3+",
    },
  ];
  return (
    <section className="bg-ink py-28 text-canvas lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow tone="canvas">Cómo trabajamos</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl text-canvas lg:text-6xl">
            Diagnosticar. Construir. <span className="italic text-prompt">Escalar.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-canvas/70">
            Tres fases que vives como cliente. Debajo corre una metodología
            estructurada — pero no tienes que operarla, la operamos nosotros.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative rounded-3xl border border-canvas/10 bg-canvas/[0.04] p-8"
            >
              <div className="flex items-center justify-between">
                <div className="font-display text-xs tracking-[0.3em] text-prompt">0{i + 1}</div>
                <div className="mono-light text-xs uppercase tracking-widest text-canvas/40">{p.note}</div>
              </div>
              <h3 className="h3-soft mt-6 text-3xl text-canvas">{p.n}</h3>
              <p className="mt-4 text-canvas/70">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <CTA to="/es/metodologia" variant="outline-canvas">Ver la metodología completa</CTA>
            <span className="mono-light text-sm text-canvas/50">5 etapas · sistema operativo multi-agente</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function ServicesPreview() {
  const services = [
    {
      tag: "SEO & GEO",
      to: "/es/servicios/seo-geo" as const,
      kicker: "Visibilidad orgánica",
      desc: "Arquitectura SEO transaccional, contenido comercial y optimización para motores de IA como ChatGPT, Perplexity y Google AI.",
      tone: "border-prompt/40 bg-prompt/5",
    },
    {
      tag: "Mega Ads",
      to: "/es/servicios/mega-ads" as const,
      kicker: "Adquisición pagada",
      desc: "Sistemas publicitarios en Meta, Google y otros canales para acelerar resultados, validar ofertas o escalar demanda.",
      tone: "border-ink/15 bg-ink text-canvas",
    },
    {
      tag: "Automatización IA",
      to: "/es/servicios/automatizacion-ia" as const,
      kicker: "Palanca operativa",
      desc: "Procesos manuales convertidos en sistemas inteligentes: marketing, seguimiento comercial, contenido, clasificación de leads.",
      tone: "border-flow/40 bg-flow/[0.06]",
    },
    {
      tag: "Desarrollo Web",
      to: "/es/servicios/desarrollo-web" as const,
      kicker: "Infraestructura digital",
      desc: "Sitios web listos para vender, rankear y escalar. Activos digitales que conectan estructura, experiencia y conversión.",
      tone: "border-prompt/40 bg-prompt/5",
    },
    {
      tag: "Branding",
      to: "/es/servicios/branding" as const,
      kicker: "Posicionamiento e identidad",
      desc: "Naming, narrativa, mensaje, sistema visual, tono y guidelines para crecer con consistencia.",
      tone: "border-ink/15 bg-ink text-canvas",
    },
    {
      tag: "Fundamentos Digitales",
      to: "/es/servicios/fundamentos-digitales" as const,
      kicker: "Base para empezar",
      desc: "Base de marca, canales, web mínima viable y mensajes — para empresas que arrancan con la estructura correcta.",
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
          <h2 className="mt-6 max-w-4xl text-4xl lg:text-6xl">
            Seis servicios conectados. <span className="italic text-prompt">Un sistema de crecimiento.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg text-ink/70">
            Entra con una necesidad específica y evoluciona hacia el sistema
            integrado. Cada servicio está diseñado para reforzar a los demás —
            no para venderse como táctica aislada.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const dark = s.tone.includes("text-canvas");
            return (
              <Reveal key={s.tag} delay={i * 0.06}>
                <Link to={s.to} className="block h-full">
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`group h-full rounded-3xl border p-8 transition-shadow hover:shadow-card ${s.tone}`}
                  >
                    <div className={`font-display text-xs tracking-[0.3em] ${dark ? "text-canvas/60" : "text-ink/50"}`}>
                      {s.kicker}
                    </div>
                    <h3 className="h3-soft mt-3 text-2xl lg:text-3xl">{s.tag}</h3>
                    <p className={`mt-4 ${dark ? "text-canvas/75" : "text-ink/70"}`}>{s.desc}</p>
                    <div className={`mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider ${dark ? "text-canvas" : "text-ink"} group-hover:text-prompt`}>
                      Conocer más <span aria-hidden>→</span>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap gap-3">
            <CTA to="/es/servicios">Explorar todos los servicios</CTA>
            <CTA to="/es/contacto" variant="outline">Hablar con nosotros</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GeoGap() {
  return (
    <section className="relative bg-ink/[0.02] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Por qué ahora</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl lg:text-6xl">
            Hay nuevas formas de aparecer en las búsquedas.{" "}
            <span className="text-prompt italic">Y una nueva forma de construir agencias.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            Los motores de IA generan respuestas en lugar de listas de enlaces.
            Los compradores reciben marcas citadas antes de hacer clic en nada.
            Al mismo tiempo, las agencias tradicionales siguen entregando tareas
            desconectadas en ciclos mensuales. Ambas realidades están cambiando —
            estamos construidos para las dos.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-prompt/20 bg-prompt/5 p-10 lg:p-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="font-display text-7xl text-prompt lg:text-9xl">68%</div>
                <p className="mt-3 max-w-md text-ink/70">
                  de los compradores B2B inician su investigación con un asistente de IA — no con un buscador.
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

const faqs = [
  {
    q: "¿Qué es exactamente un sistema de crecimiento?",
    a: "Es el conjunto conectado de piezas que una empresa moderna necesita para crecer: estrategia, marca, web, SEO/GEO, adquisición pagada, automatización con IA y reporting — diseñadas para reforzarse. En vez de contratar cinco proveedores para cinco tácticas, obtienes un sistema operativo donde cada activo compone.",
  },
  {
    q: "¿Tengo que contratar todo al mismo tiempo?",
    a: "No. La mayoría empieza con un servicio específico — normalmente el cuello de botella actual — y evoluciona hacia el sistema integrado a medida que aparecen resultados. Cada servicio está diseñado para conectar con el siguiente.",
  },
  {
    q: "¿En qué se diferencia de una agencia tradicional?",
    a: "Las agencias tradicionales venden entregables aislados en silos. Nosotros construimos sistemas. Eso significa estrategia compartida, datos compartidos, operaciones AI-Native y cada activo diseñado para fortalecer al siguiente — no para justificar un fee mensual.",
  },
  {
    q: "¿Qué significa 'AI-Native' en la práctica?",
    a: "Que la IA es parte de cómo operamos, no un buzzword que vendemos. Flujos multi-agente que ejecutan investigación, producción de contenido, monitoreo y reportes a una velocidad y costo imposibles manualmente — para que más de tu presupuesto vaya a estrategia y calidad.",
  },
  {
    q: "¿Qué incluye el diagnóstico gratuito?",
    a: "Una revisión estructurada de tu sitio, posicionamiento, canales, presencia en Google y motores de IA, y una recomendación priorizada de próximos pasos. Sin obligación. Es como iniciamos conversaciones que terminan en proyectos reales.",
  },
  {
    q: "¿Trabajan fuera de LATAM?",
    a: "Sí. Atendemos empresas en LATAM, USA y Europa, en español e inglés, a través de varias zonas horarias.",
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
            Preguntas que <span className="italic text-prompt">siempre nos hacen.</span>
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
            Si quieres resultados más previsibles, necesitas más que ejecución.{" "}
            <span className="italic text-prompt">Necesitas un sistema.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/es/auditoria" variant="outline-canvas">Diagnóstico gratuito</CTA>
            <CTA to="/es/contacto" variant="outline-canvas">Agendar llamada</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

function HomeEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }} />
      <Hero />
      <ShiftNarrative />
      <GrowthSystem />
      <ServicesPreview />
      <GeoGap />
      <FAQ />
      <FinalCTA />
    </>
  );
}
