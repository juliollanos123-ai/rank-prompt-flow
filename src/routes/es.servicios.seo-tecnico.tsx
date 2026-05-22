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
        "Ingresos anuales entre $500k y $5M",
        "Tráfico orgánico actual menor a 5,000 visitas/mes",
        "Listas para invertir en crecimiento pero necesitan una base primero",
      ]}
      notFit={[
        "Necesitas tráfico inmediato (esto es trabajo de base)",
        "No estás listo para comprometerte con contenido después",
        "Tu sitio ya es técnicamente sólido (considera SEO para B2B)",
      ]}
      includes={[
        ["Fase 1 — Auditoría", "Auditoría SEO técnica, panorama de competidores, brechas de keywords y una línea base GEO en ChatGPT, Perplexity y Google AI."],
        ["Fase 2 — Desarrollo", "Desarrollo web completo (reconstrucción o nuevo), arquitectura de información, enlazado interno y schema (Organización, Producto, FAQ)."],
        ["Fase 3 — Optimización", "Configuración de GA4, Search Console y Tag Manager, trabajo en Core Web Vitals, sitemap, robots.txt y seguimiento de conversiones."],
        ["Documento de estrategia", "PDF de estrategia con una hoja de ruta de crecimiento de 90 días y una sesión de formación opcional."],
      ]}
      timeline={[
        ["Semana 1", "Descubrimiento y auditoría"],
        ["Semana 2–3", "Desarrollo del sitio web"],
        ["Semana 4", "Diseño y arquitectura de contenido"],
        ["Semana 5", "Analytics y optimización"],
        ["Semana 6", "Testing y lanzamiento"],
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
