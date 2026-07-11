import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/es/servicios/mega-ads")({
  head: () => ({
    meta: [
      { title: "Mega Ads: campañas publicitarias para crecer con sistema | Rank Your Brand" },
      { name: "description", content: "Diseño y gestión de campañas publicitarias para generar demanda, validar ofertas y escalar resultados con Meta Ads, Google Ads y estrategia de conversión." },
      { property: "og:title", content: "Mega Ads — Rank Your Brand" },
      { property: "og:description", content: "Campañas diseñadas para generar demanda, no solo clics." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/servicios/mega-ads" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/servicios/mega-ads" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/mega-ads" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/mega-ads" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Mega Ads"
      tier="Crecimiento"
      format="Retainer mensual"
      duration="Mínimo 3 meses"
      tagline="Campañas diseñadas para generar demanda, no solo clics. Planificamos, lanzamos y optimizamos sistemas publicitarios para marcas que necesitan resultados medibles, control del presupuesto y una estructura real para escalar."
      serviceId="Mega Ads"
      primaryCta={{ label: "Solicitar diagnóstico de Ads", to: "/es/contacto" }}
      secondaryCta={{ label: "Ver cómo trabajamos", to: "/es/metodologia" }}
      forWho={[
        "Empresas que quieren acelerar generación de leads",
        "Marcas que ya tienen una oferta validada y quieren escalar",
        "Negocios que necesitan complementar SEO con adquisición inmediata",
        "Empresas con campañas activas pero bajo rendimiento",
      ]}
      notFit={[
        "Aún no tienes una oferta clara — empieza con Branding o Fundamentos Digitales",
        "Tu sitio web no está listo para convertir tráfico — empieza con Desarrollo Web",
        "Quieres correr campañas sin ningún tipo de medición o tracking",
      ]}
      includes={[
        ["Auditoría de cuenta, oferta y tracking", "Revisamos cuenta, oferta, embudo y medición para identificar qué está fugando presupuesto antes de gastar un dólar más."],
        ["Arquitectura publicitaria", "Estructura de campañas diseñada según el objetivo de negocio — no según métricas de vanidad — en Meta Ads, Google Ads o ambos."],
        ["Creatividad y copies", "Copies publicitarios y conceptos creativos construidos para la plataforma, la audiencia y el momento del embudo."],
        ["Recomendaciones de landing", "Auditamos o desarrollamos landing pages de conversión para que anuncio y destino hablen el mismo idioma."],
        ["Eventos y medición", "Configuración de eventos, tracking de conversiones y dashboards de performance para decidir con datos, no con intuición."],
        ["Optimización continua", "Optimización semanal basada en señales reales de performance — rotación creativa, pujas, testeo de audiencias y asignación de presupuesto."],
      ]}
      timeline={[
        ["01", "Auditoría, revisión de oferta y setup de tracking"],
        ["02", "Producción creativa y lanzamiento de campañas"],
        ["03", "Optimización, escalamiento y reporting"],
      ]}
      outcomes={[
        "CPA predecible sobre leads cualificados",
        "Señales claras de performance para decidir cuándo y cómo escalar",
        "Un sistema de Ads conectado con tu web, marca y oferta — no un canal aislado",
      ]}
      faqs={[
        ["¿Gestionan el presupuesto de medios?", "Tú mantienes el control del presupuesto y pagas directamente a las plataformas. Nuestro fee es independiente del ad spend."],
        ["¿Trabajan Meta y Google?", "Sí. Recomendamos la mezcla según tu oferta, comprador y funnel — no según lo que esté de moda."],
        ["¿Necesito una nueva landing?", "No siempre. Auditamos primero lo que existe y solo recomendamos rediseño cuando ese es el cuello de botella real."],
        ["¿Y si ya tengo campañas activas?", "Mejor. Empezamos con auditoría y reorganizamos lo que hay antes de lanzar cualquier cosa nueva."],
      ]}
      finalCtaText="Antes de aumentar presupuesto, asegúrate de tener una estructura que pueda convertirlo en oportunidades reales."
      lang="es"
      tone="prompt"
    />
  ),
});
