import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/es/servicios/seo-tecnico")({
  head: () => ({
    meta: [
      { title: "SEO Técnico para B2B — Rank Your Brand" },
      { name: "description", content: "Corregimos la base técnica que impide que tu sitio B2B posicione. Rastreabilidad, Core Web Vitals, schema, sitemap y arquitectura. Proyecto fijo." },
      { property: "og:title", content: "SEO Técnico para B2B — Rank Your Brand" },
      { property: "og:description", content: "La base que tu sitio necesita antes de escalar." },
    ],
    links: [
      { rel: "canonical", href: "https://rankyourbrand.co/es/servicios/seo-tecnico" },
      { rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/services/technical-seo" },
      { rel: "alternate", hrefLang: "es", href: "https://rankyourbrand.co/es/servicios/seo-tecnico" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="SEO Técnico"
      tier="Fundación"
      format="Proyecto"
      duration="4–6 semanas"
      tagline="Para empresas B2B con sitios web de bajo rendimiento que necesitan correcciones técnicas, reposicionamiento estratégico y una base sólida para crecer."
      serviceId="Technical SEO Services"
      primaryCta={{ label: "Obtén un diagnóstico gratuito", to: "/es/auditoria" }}
      secondaryCta={{ label: "Contáctanos", to: "/es/contacto" }}
      forWho={[
        "Empresas B2B con sitios web existentes (no nuevas)",
        "Tráfico orgánico actual menor a 1,000 visitas/mes",
        "Listas para invertir en crecimiento pero necesitan una base primero",
      ]}
      notFit={[
        "Necesitas tráfico inmediato (esto es trabajo de base)",
        "No estás listo para comprometerte con contenido después",
        "Tu sitio ya es técnicamente sólido (considera SEO para B2B)",
      ]}
      includes={[
        ["Fase 1 — Auditoría", "Auditoría SEO técnica, panorama de competidores, brechas de keywords y una línea base GEO en ChatGPT, Perplexity y Google AI."],
        ["Fase 2 — Keywords y arquitectura", "Investigación de keywords con mayor volumen y construcción de una arquitectura transaccional de valor que sienta las bases de un sitio web estructurado y funcional."],
        ["Fase 3 — Desarrollo", "Desarrollo web completo (reconstrucción o nuevo), arquitectura de información, enlazado interno y schema (Organización, Producto, FAQ)."],
        ["Fase 4 — Optimización", "Configuración de GA4, Search Console y Tag Manager, trabajo en Core Web Vitals, sitemap, robots.txt y seguimiento de conversiones."],
      ]}
      timeline={[
        ["01", "Descubrimiento y auditoría"],
        ["02", "Keywords y arquitectura del sitio"],
        ["03", "Diseño y arquitectura de contenido"],
        ["04", "Desarrollo del sitio web"],
        ["05", "Analytics, medición y lanzamiento"],
      ]}
      outcomes={[
        "Base técnica lista para el crecimiento orgánico",
        "Estrategia de contenido clara para los próximos 6 meses",
        "Métricas de referencia establecidas para medir el ROI desde el primer día",
      ]}
      faqs={[
        ["¿Qué pasa si no conozco mis problemas de SEO?", "Eso es exactamente lo que descubre la fase de auditoría. Diagnosticamos antes de prescribir."],
        ["¿Construyen el sitio web desde cero?", "Sí. Ya sea que necesiten una reconstrucción completa o un nuevo inicio, nos encargamos del desarrollo completo."],
        ["¿Qué plataforma usan?", "Normalmente usamos frameworks modernos (Next.js, React) por velocidad y SEO. También podemos trabajar con WordPress si se prefiere."],
        ["¿Puedo pasar a SEO para B2B después?", "Absolutamente — la mayoría de clientes pasan a SEO para B2B después de ver la hoja de ruta. Ofrecemos descuentos de transición."],
        ["¿Proporcionan el contenido del sitio?", "Proporcionamos la arquitectura y estrategia de contenido. El copywriting se puede agregar por un costo adicional."],
      ]}
      finalCtaText="¿No sabes si SEO Técnico es lo que necesitas?"
      lang="es"
      tone="prompt"
    />
  ),
});
