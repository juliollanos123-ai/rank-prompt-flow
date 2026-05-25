import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/es/servicios/agencia-seo-ia")({
  head: () => ({
    meta: [
      { title: "Agencia SEO IA — La autoridad que la IA recomienda | Rank Your Brand" },
      { name: "description", content: "Programa premium de GEO + liderazgo de pensamiento para marcas B2B listas para dominar su categoría. Compromiso 12 meses." },
      { property: "og:title", content: "Agencia SEO IA — Rank Your Brand" },
      { property: "og:description", content: "Conviértete en la marca que la IA cita por defecto en tu categoría." },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/services/ai-seo-agency" }],
  }),
  component: () => (
    <ServiceDetail
      tag="Agencia SEO IA"
      tier="Autoridad"
      format="Retainer premium"
      tagline="Para marcas B2B establecidas listas para dominar su categoría en búsqueda tradicional Y motores de IA generativos."
      duration="12 meses · Solo por solicitud"
      primaryCta={{ label: "Solicitar Agencia SEO IA", to: "/es/contacto" }}
      secondaryCta={{ label: "Ver metodología", to: "/es/metodologia" }}
      forWho={[
        "Marcas B2B establecidas con fuerte posición de mercado",
        "Ingresos anuales entre $5M y $100M+",
        "Tráfico orgánico actual de 20,000+ visitas/mes",
        "Equipo ejecutivo comprometido con el liderazgo de pensamiento",
        "Múltiples líneas de servicio u ofertas de productos complejas",
      ]}
      notFit={[
        "Todavía estás en etapa de crecimiento (empieza con SEO para B2B)",
        "No estás listo para un compromiso de 12 meses",
        "Tu equipo ejecutivo no participará en la creación de contenido",
        "Buscas victorias rápidas (esto es construcción de marca)",
      ]}
      includes={[
        ["Todo lo de SEO para B2B", "Todo el contenido, CRO, link building, seguimiento y reportes del nivel SEO para B2B — incluidos por defecto."],
        ["Optimización GEO", "SEO de entidades (Wikipedia, Wikidata, Crunchbase), knowledge graph, Perplexity Pages, seguimiento y mejora de citas en ChatGPT/Claude."],
        ["Liderazgo de pensamiento", "Ghostwriting ejecutivo (LinkedIn, Medium, publicaciones del sector), investigación original y estudios de datos trimestrales."],
        ["Técnico avanzado", "Gestión multi-página, SEO programático, SEO internacional e investigación profunda de inteligencia competitiva."],
        ["Servicio premium", "Account manager dedicado, llamadas de estrategia quincenales, acceso directo por Slack/WhatsApp y respuesta prioritaria en 24 horas."],
      ]}
      timeline={[
        ["01", "Auditoría de marca y entidades + línea base de IA"],
        ["02", "Knowledge graph + lanzamiento de liderazgo de pensamiento"],
        ["03", "Ingeniería de citas + cobertura en superficies de IA"],
        ["04", "Dominancia de categoría + expansión a nuevas geografías"],
      ]}
      outcomes={[
        "Mes 6 — La marca aparece en respuestas de ChatGPT para consultas objetivo",
        "Mes 12 — Autoridad de categoría, citada por IA en 10+ consultas",
        "Mes 18 — Tráfico orgánico 5–10× la línea base, leads generados por IA medibles",
      ]}
      faqs={[
        ["¿En qué se diferencia Agencia SEO IA de SEO para B2B?", "SEO para B2B se enfoca en tráfico y rankings. Agencia SEO IA se enfoca en la propiedad de categoría y la citación por IA. Piénsalo así: ser LA respuesta, no solo rankear bien."],
        ["¿Necesito una página de Wikipedia?", "No es obligatorio, pero si eres lo suficientemente notable, te ayudaremos a conseguirla. Si no, nos enfocamos en Wikidata, Crunchbase y bases de datos del sector."],
        ["¿Cómo rastrean las citas de IA?", "Probamos consultas semanalmente en ChatGPT, Perplexity y Claude. Medimos la frecuencia de mención, el contexto y el desplazamiento competitivo."],
        ["¿Qué pasa si mi industria aún no está lista para la IA?", "Todos los sectores B2B adoptarán la búsqueda por IA. Preparamos tu marca para que estés listo cuando tus compradores den el salto."],
        ["¿Puedo bajar a SEO para B2B después?", "Sí, después del compromiso de 12 meses. La mayoría de clientes se quedan porque ven los beneficios compuestos de GEO + liderazgo de pensamiento."],
        ["¿Qué nivel de participación ejecutiva se requiere?", "Mínimo pero estratégico — unas 2–3 horas/mes para llamadas de estrategia y revisión de contenido. Nuestro equipo hace el trabajo pesado."],
      ]}
      finalCtaText="¿Listo para dominar tu categoría? Limitado a 3–5 clientes por año. Se requiere solicitud."
      lang="es"
      tone="flow"
    />
  ),
});
