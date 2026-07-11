import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/es/servicios/automatizacion-ia")({
  head: () => ({
    meta: [
      { title: "Automatización con IA para marketing y operación | Rank Your Brand" },
      { name: "description", content: "Diseñamos automatizaciones con inteligencia artificial para marketing, ventas y operación: lead management, contenido, seguimiento, reporting y procesos internos." },
      { property: "og:title", content: "Automatización con IA — Rank Your Brand" },
      { property: "og:description", content: "Automatización AI-Native para empresas que quieren escalar sin romper su operación." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/servicios/automatizacion-ia" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/servicios/automatizacion-ia" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/ai-automation" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/automatizacion-ia" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Automatización con IA"
      tier="Crecimiento"
      format="Proyecto + retainer"
      duration="Build de 6–10 semanas"
      tagline="Automatización con IA para empresas que quieren escalar sin romper su operación. Diseñamos sistemas que reducen trabajo manual, aceleran procesos y convierten tareas repetitivas en flujos inteligentes para marketing, ventas y crecimiento."
      serviceId="AI Automation"
      primaryCta={{ label: "Evaluar oportunidades de automatización", to: "/es/contacto" }}
      secondaryCta={{ label: "Conocer el sistema", to: "/es/metodologia" }}
      forWho={[
        "Equipos que pierden leads porque nadie responde a tiempo",
        "Empresas que duplican tareas entre WhatsApp, email, CRM y hojas de cálculo",
        "Equipos de marketing que no sostienen su cadencia de contenido",
        "Founders atrapados haciendo reportes manuales",
        "Operaciones con demasiados pasos manuales entre plataformas",
      ]}
      notFit={[
        "Quieres instalar herramientas sin diagnosticar primero qué automatizar",
        "Aún no existe un proceso definido — empieza por estrategia",
        "Esperas que la IA tome decisiones críticas de negocio sin criterio humano",
      ]}
      includes={[
        ["Marketing", "Generación de briefs, ideas de contenido, clasificación de oportunidades, automatización de publicaciones, reportes y flujos de nurturing."],
        ["Ventas", "Asignación de leads, seguimiento automático, recordatorios, scoring, respuestas iniciales, actualización de CRM y alertas para el equipo."],
        ["Operación", "Dashboards, consolidación de datos, tareas repetitivas entre plataformas, documentación, procesos internos y automatización de entregables."],
        ["Diseño con lógica de negocio", "No instalamos automatizaciones por moda. Cada flujo se diseña con objetivo de negocio y criterio humano en los puntos críticos."],
      ]}
      timeline={[
        ["01", "Diagnóstico: qué te está frenando y qué conviene automatizar primero"],
        ["02", "Diseño de flujos, integraciones y checkpoints humanos"],
        ["03", "Construcción, pruebas y despliegue en tu stack"],
        ["04", "Monitoreo, iteración y retainer opcional"],
      ]}
      outcomes={[
        "Tareas manuales reducidas de horas a minutos",
        "Tiempos de respuesta consistentes para leads y clientes",
        "Un sistema operativo documentado que escala con el equipo",
      ]}
      faqs={[
        ["¿Reemplazan las herramientas que ya uso?", "No. Conectamos lo que ya usas. Solo si una herramienta es un cuello de botella real recomendamos reemplazarla."],
        ["¿Necesitamos equipo técnico?", "No. Nosotros construimos. Solo necesitamos a alguien de tu lado que valide la lógica del proceso."],
        ["¿La IA toma las decisiones?", "La IA acelera. La estrategia decide. Cada punto crítico tiene criterio humano — ese es el punto de AI-Native bien hecho."],
        ["¿Qué pasa después del build?", "Retainer mensual opcional para monitoreo, iteración y nuevos flujos según evoluciona la operación."],
      ]}
      finalCtaText="Identifiquemos qué procesos te están frenando y cuáles conviene automatizar primero."
      lang="es"
      tone="flow"
    />
  ),
});
