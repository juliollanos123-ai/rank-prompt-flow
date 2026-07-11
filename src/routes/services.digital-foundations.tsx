import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/digital-foundations")({
  head: () => ({
    meta: [
      { title: "Digital Foundations for Early-Stage Businesses | Rank Your Brand" },
      { name: "description", content: "We build the digital base of brands that are starting out: initial branding, social channels, web structure, and the minimum viable system to grow." },
      { property: "og:title", content: "Digital Foundations — Rank Your Brand" },
      { property: "og:description", content: "Digital foundations for brands that need to start well from day one." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/services/digital-foundations" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/services/digital-foundations" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/digital-foundations" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/fundamentos-digitales" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Digital Foundations"
      tier="Foundation"
      format="Project"
      duration="3–4 weeks"
      tagline="Digital foundations for brands that need to start well from day one. We create the minimum viable structure a company needs to exist online with clarity, coherence and growth potential."
      serviceId="Digital Foundations"
      primaryCta={{ label: "Request an initial diagnosis", to: "/contact" }}
      secondaryCta={{ label: "See what's included", to: "/methodology" }}
      forWho={[
        "New companies preparing to launch",
        "Founders with an idea and no digital presence yet",
        "Small operations with disorganized channels and messaging",
        "Businesses that want to start well before investing in Ads or SEO",
      ]}
      notFit={[
        "You already have a mature digital presence — jump to SEO, Ads or Automation",
        "You need enterprise scope from day one",
      ]}
      includes={[
        ["Base brand definition", "Positioning, message and minimum brand system to communicate clearly from day one."],
        ["Social channels setup", "Structure and initial setup of the right social channels — with a plan, not just accounts opened."],
        ["Digital channels organization", "Consolidation of the digital touchpoints: email, WhatsApp Business, GBP, essential integrations."],
        ["Base website or launch landing", "A base site or landing that works commercially — not a placeholder."],
        ["Core messaging", "Main communication messages, ready to use across sales, social and outreach."],
        ["Roadmap for next steps", "A recommendation of the next steps: branding, web, SEO, Ads or automation, in the right order."],
      ]}
      timeline={[
        ["01", "Discovery & priorities"],
        ["02", "Brand & channels setup"],
        ["03", "Base website + messaging"],
        ["04", "Handover & growth roadmap"],
      ]}
      outcomes={[
        "A minimum viable digital presence, done right",
        "Clarity on what to invest in next, and in what order",
        "Less improvisation, more direction",
      ]}
      faqs={[
        ["Is this a cheaper version of Branding + Web?", "No. It's a compact, prioritized package for early stage — enough to exist well online without overbuilding."],
        ["Can I upgrade later?", "Yes. Digital Foundations is designed to plug directly into Branding, Web Development or SEO when the business is ready."],
        ["Do you manage the channels after?", "No. We set up and hand over. Ongoing management is an optional retainer."],
      ]}
      finalCtaText="If you're building a company and want to do it with a solid base, this is the right starting point."
      lang="en"
      tone="neutral"
    />
  ),
});
