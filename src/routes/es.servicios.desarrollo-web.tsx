import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/es/servicios/desarrollo-web")({
  head: () => ({
    meta: [
      { title: "Desarrollo web estratégico para marcas que quieren crecer | Rank Your Brand" },
      { name: "description", content: "Desarrollo web orientado a posicionamiento, conversión y escalabilidad. Sitios creados para vender, posicionarse y sostener el crecimiento digital de la marca." },
      { property: "og:title", content: "Desarrollo Web — Rank Your Brand" },
      { property: "og:description", content: "Sitios que convierten tu presencia digital en un activo de crecimiento." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/servicios/desarrollo-web" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/servicios/desarrollo-web" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/web-development" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/desarrollo-web" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Desarrollo Web"
      tier="Fundación"
      format="Proyecto"
      duration="6–10 semanas"
      tagline="Desarrollo web que convierte tu presencia digital en un activo de crecimiento. Diseñamos y desarrollamos sitios preparados para posicionarse, comunicar con claridad y convertir visitas en oportunidades reales de negocio."
      serviceId="Web Development"
      primaryCta={{ label: "Solicitar propuesta web", to: "/es/contacto" }}
      secondaryCta={{ label: "Ver enfoque estratégico", to: "/es/metodologia" }}
      forWho={[
        "Empresas B2B con un sitio que existe pero no vende",
        "Marcas que van a invertir en Ads, SEO o contenido y necesitan infraestructura primero",
        "Founders lanzando por primera vez una presencia digital seria",
        "Equipos con un sitio actual que no escala nuevas campañas o automatizaciones",
      ]}
      notFit={[
        "Quieres un sitio decorativo sin objetivo comercial",
        "Necesitas configurar una plantilla, no un build estratégico",
        "Esperas un sitio completo en 2 semanas sin estrategia",
      ]}
      includes={[
        ["Descubrimiento estratégico", "Descubrimiento de negocio, oferta y audiencia para que el sitio se construya sobre una tesis comercial real."],
        ["Arquitectura orientada a conversión", "Arquitectura del sitio construida para conversión y SEO — cada página tiene un propósito en el sistema de crecimiento."],
        ["Wireframes y estructura de contenidos", "Wireframes y estructura definidos antes del diseño, para no decorar sobre un esqueleto débil."],
        ["Copywriting estratégico", "Copywriting por página escrito para el comprador, no para el founder."],
        ["Diseño y performance", "Diseño visual coherente con marca y objetivos, responsive y optimizado para Core Web Vitals."],
        ["SEO + analytics + integraciones", "Bases SEO técnicas, GA4 / Search Console, formularios, campañas y listo para automatizaciones."],
      ]}
      timeline={[
        ["01", "Descubrimiento, sitemap y estrategia de contenido"],
        ["02", "Wireframes, copywriting y diseño visual"],
        ["03", "Desarrollo, integraciones y QA"],
        ["04", "Lanzamiento, setup de medición y handover"],
      ]}
      outcomes={[
        "Un sitio con propósito comercial claro por página",
        "Base SEO lista desde el día uno",
        "Infraestructura preparada para Ads, contenido y automatización encima",
      ]}
      faqs={[
        ["¿Qué stack usan?", "Frameworks modernos (React, Next.js, TanStack) por velocidad y SEO. WordPress si la operación realmente lo requiere."],
        ["¿Escriben el copy?", "Sí — copy estratégico por página está incluido. Ustedes revisan y aprueban todo."],
        ["¿Podemos migrar contenido del sitio anterior?", "Sí. Migración y mapa de redirects son parte del proyecto cuando aplica."],
        ["¿Qué pasa después del lanzamiento?", "Período de garantía incluido. Evolución continua vía retainer SEO o Automatización es opcional."],
      ]}
      finalCtaText="Si tu sitio actual no está ayudando a vender, posicionar o escalar, ya no es solo un problema de diseño."
      lang="es"
      tone="neutral"
    />
  ),
});
