import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/es/servicios/fundamentos-digitales")({
  head: () => ({
    meta: [
      { title: "Fundamentos digitales para negocios que están empezando | Rank Your Brand" },
      { name: "description", content: "Creamos la base digital de marcas que están comenzando: branding inicial, redes sociales, estructura web, canales y activos listos para crecer." },
      { property: "og:title", content: "Fundamentos Digitales — Rank Your Brand" },
      { property: "og:description", content: "Fundamentos digitales para marcas que necesitan empezar bien desde el día uno." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/servicios/fundamentos-digitales" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/servicios/fundamentos-digitales" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/digital-foundations" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/fundamentos-digitales" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Fundamentos Digitales"
      tier="Fundación"
      format="Proyecto"
      duration="3–4 semanas"
      tagline="Fundamentos digitales para marcas que necesitan empezar bien desde el día uno. Creamos la estructura mínima viable que una empresa necesita para existir online con claridad, coherencia y potencial de crecimiento."
      serviceId="Digital Foundations"
      primaryCta={{ label: "Solicitar diagnóstico inicial", to: "/es/contacto" }}
      secondaryCta={{ label: "Ver qué incluye", to: "/es/metodologia" }}
      forWho={[
        "Empresas nuevas preparándose para salir al mercado",
        "Founders con una idea y sin presencia digital todavía",
        "Operaciones pequeñas con canales y mensajes desorganizados",
        "Negocios que quieren empezar bien antes de invertir en Ads o SEO",
      ]}
      notFit={[
        "Ya tienes una presencia digital madura — pasa directo a SEO, Ads o Automatización",
        "Necesitas scope enterprise desde el día uno",
      ]}
      includes={[
        ["Definición base de marca", "Posicionamiento, mensaje y sistema mínimo de marca para comunicar con claridad desde el día uno."],
        ["Setup de redes sociales", "Estructura y setup inicial de las redes correctas — con plan, no solo cuentas abiertas."],
        ["Organización de canales digitales", "Consolidación de los puntos de contacto: email, WhatsApp Business, GBP, integraciones esenciales."],
        ["Sitio web base o landing inicial", "Un sitio base o landing que funcione comercialmente — no un placeholder."],
        ["Mensajes principales", "Mensajes principales de comunicación, listos para usar en ventas, redes y outreach."],
        ["Roadmap del siguiente paso", "Recomendación de los siguientes pasos: branding, web, SEO, Ads o automatización, en el orden correcto."],
      ]}
      timeline={[
        ["01", "Descubrimiento y prioridades"],
        ["02", "Setup de marca y canales"],
        ["03", "Sitio base + mensaje"],
        ["04", "Handover y roadmap de crecimiento"],
      ]}
      outcomes={[
        "Una presencia digital mínima viable, bien hecha",
        "Claridad sobre en qué invertir después, y en qué orden",
        "Menos improvisación, más dirección",
      ]}
      faqs={[
        ["¿Es una versión barata de Branding + Web?", "No. Es un paquete compacto y priorizado para etapa temprana — suficiente para existir bien online sin sobreconstruir."],
        ["¿Puedo escalar después?", "Sí. Fundamentos Digitales se diseña para conectar directo con Branding, Desarrollo Web o SEO cuando el negocio esté listo."],
        ["¿Gestionan los canales después?", "No. Nosotros configuramos y entregamos. La gestión continua es un retainer opcional."],
      ]}
      finalCtaText="Si estás construyendo una empresa y quieres hacerlo con una base sólida, este es el punto de partida correcto."
      lang="es"
      tone="neutral"
    />
  ),
});
