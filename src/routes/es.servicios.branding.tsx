import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/es/servicios/branding")({
  head: () => ({
    meta: [
      { title: "Branding estratégico para marcas que quieren crecer con claridad | Rank Your Brand" },
      { name: "description", content: "Branding para empresas que necesitan identidad, narrativa, posicionamiento y consistencia. Construimos marcas listas para existir, comunicar y crecer online." },
      { property: "og:title", content: "Branding — Rank Your Brand" },
      { property: "og:description", content: "Branding para empresas que necesitan claridad antes de escalar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/es/servicios/branding" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/es/servicios/branding" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/branding" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/branding" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Branding"
      tier="Fundación"
      format="Proyecto"
      duration="6–8 semanas"
      tagline="Branding para empresas que necesitan claridad antes de escalar. Definimos la base estratégica, verbal y visual de marcas que necesitan comunicar mejor, diferenciarse y construir una presencia coherente en todos sus canales."
      serviceId="Branding"
      primaryCta={{ label: "Solicitar propuesta de branding", to: "/es/contacto" }}
      secondaryCta={{ label: "Ver proceso", to: "/es/metodologia" }}
      forWho={[
        "Empresas que van a salir al mercado y necesitan llegar bien construidas",
        "Marcas cuya identidad actual ya no representa el nivel del negocio",
        "Founders con confusión en la comunicación entre canales",
        "Negocios que quieren profesionalizar antes de invertir en adquisición",
      ]}
      notFit={[
        "Solo quieres un logo sin estrategia",
        "Buscas cambios cosméticos y ningún trabajo de posicionamiento",
        "No estás dispuesto a definir la narrativa de tu negocio",
      ]}
      includes={[
        ["Posicionamiento de marca", "Posicionamiento, propuesta de valor y definición de categoría — dónde vive la marca en la mente del comprador."],
        ["Mensaje y narrativa", "Mensaje principal, narrativa y arco de historia — qué dice la marca y cómo lo dice."],
        ["Tono y voz", "Identidad verbal, guías de tono y voz que se mantienen consistentes en ventas, marketing y producto."],
        ["Naming (si aplica)", "Exploración y validación de naming cuando el proyecto lo requiere."],
        ["Identidad visual", "Sistema de logo, tipografía, color, iconografía y dirección fotográfica."],
        ["Lineamientos de marca", "Lineamientos para redes, sitio web, decks y cada punto de contacto — para que la marca deje de depender del founder."],
      ]}
      timeline={[
        ["01", "Descubrimiento, posicionamiento y estrategia"],
        ["02", "Identidad verbal, naming y mensaje"],
        ["03", "Sistema visual y aplicaciones"],
        ["04", "Lineamientos y handover"],
      ]}
      outcomes={[
        "Una marca más clara que vende mejor y alinea al equipo",
        "Consistencia en cada canal sin depender del founder",
        "Base lista para web, contenido, Ads y crecimiento a largo plazo",
      ]}
      faqs={[
        ["¿Solo hacen identidad visual?", "No. El branding empieza por posicionamiento y estrategia. Lo visual es el último paso, no el primero."],
        ["¿Ayudan con naming?", "Sí, cuando el proyecto lo requiere. La validación legal es un scope aparte."],
        ["¿Qué viene después del branding?", "Desarrollo web, contenido y adquisición — ahí es donde la marca empieza a trabajar comercialmente."],
        ["¿Qué tan involucrado está mi equipo?", "Muy involucrado en descubrimiento y validación. Nosotros facilitamos; tú eres dueño de la marca."],
      ]}
      finalCtaText="Si la marca no está clara, todo lo demás se vuelve más difícil: vender, comunicar, diseñar, posicionar y escalar."
      lang="es"
      tone="prompt"
    />
  ),
});
