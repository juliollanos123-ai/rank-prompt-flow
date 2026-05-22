import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/es/servicios/scale")({
  head: () => ({
    meta: [
      { title: "SEO para B2B — Crecimiento orgánico mes a mes | Rank Your Brand" },
      { name: "description", content: "SEO siempre activo + motor de contenido con IA para B2B. 4–6 artículos/mes, CRO, link building, dashboards. Mínimo 6 meses." },
      { property: "og:title", content: "SEO para B2B — Rank Your Brand" },
      { property: "og:description", content: "Crecimiento orgánico compuesto, cada mes." },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/services/scale" }],
  }),
  component: () => (
    <ServiceDetail
      tag="SEO para B2B"
      tier="Crecimiento"
      format="Retainer mensual"
      tagline="Para empresas B2B listas para invertir en un crecimiento sostenido de visibilidad con producción de contenido continua, optimización y generación de leads."
      duration="Mínimo 6 meses"
      primaryCta={{ label: "Reserva una llamada estratégica", to: "/es/contacto" }}
      secondaryCta={{ label: "Diagnóstico gratuito primero", to: "/es/auditoria" }}
      forWho={[
        "Empresas B2B con una base técnica sólida (o SEO Técnico completo)",
        "Ingresos anuales entre $1M y $20M",
        "Tráfico orgánico actual de 2,000–20,000 visitas/mes",
        "Listas para comprometerse 6+ meses con crecimiento sostenido",
      ]}
      notFit={[
        "Necesitas una reconstrucción completa del sitio (empieza con SEO Técnico)",
        "No estás listo para un compromiso de 6 meses",
        "Quieres microgestionar cada artículo",
        "Tu sitio tiene problemas técnicos importantes sin resolver",
      ]}
      includes={[
        ["Producción de contenido", "4–6 artículos optimizados para SEO al mes (2,000–3,000 palabras), investigación asistida por IA con supervisión editorial humana completa."],
        ["Optimización de conversión", "CRO continuo, landing pages estratégicas para intención de búsqueda, recomendaciones A/B y análisis de comportamiento."],
        ["Link building y autoridad", "2–3 backlinks de alta calidad al mes mediante outreach, guest posts y PR digital cuando sea relevante."],
        ["Seguimiento y reportes", "50–100 keywords rastreadas, dashboard en tiempo real en Looker Studio, resumen ejecutivo mensual y sesiones de estrategia trimestrales."],
        ["Enfoque en generación de leads", "Seguimiento y atribución de leads cualificados. Analytics enfocado en resultados de negocio, no en tráfico vanidoso."],
      ]}
      timeline={[
        ["Mes 1", "Onboarding + calendario de contenido + primeros artículos"],
        ["Mes 2–6", "Producción compuesta + link building + CRO"],
        ["Mes 6+", "Escalar lo que funciona, expandir a nuevos territorios de keywords"],
      ]}
      outcomes={[
        "Mes 3 — +20–30% de tráfico orgánico, momentum visible en movimiento de keywords",
        "Mes 6 — +50–80% de tráfico orgánico, 3–5 keywords en el top 10",
        "Mes 12 — 2–3× tráfico orgánico con generación de leads predecible",
      ]}
      faqs={[
        ["¿Necesito SEO Técnico antes de SEO para B2B?", "No siempre. Auditamos tu sitio primero. Si existen problemas técnicos, los corregimos en el Mes 1 de SEO para B2B (o recomendamos SEO Técnico primero)."],
        ["¿Puedo escribir mi propio contenido?", "Puedes, pero no lo recomendamos. Nuestro proceso asistido por IA es más rápido y consistente. Ofrecemos un nivel 'Solo Estrategia' a precio reducido si lo prefieres."],
        ["¿Qué pasa si no veo resultados en 6 meses?", "Rastreamos indicadores líderes mensualmente (movimiento de keywords, páginas indexadas, engagement). Si no hay tendencia positiva en el Mes 3, diagnosticamos y ajustamos."],
        ["¿Puedo pausar el retainer?", "No dentro del mínimo de 6 meses. Después, sí — con 30 días de aviso. Pausar el SEO suele significar perder momentum."],
        ["¿Puedo enfocarme en temas específicos?", "Absolutamente. Los calendarios de contenido se construyen de forma colaborativa. Tienes aprobación final sobre todos los temas antes de que escribamos."],
        ["¿Cómo miden la calidad de los leads?", "Rastreamos envíos de formularios, solicitudes de demo y llamadas atribuidas al tráfico orgánico, más el comportamiento en el sitio para separar los leads cualificados de los no cualificados."],
      ]}
      finalCtaText="¿Listo para crecer de forma predecible?"
      lang="es"
      tone="neutral"
    />
  ),
});
