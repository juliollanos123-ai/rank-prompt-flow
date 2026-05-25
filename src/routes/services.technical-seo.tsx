import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/technical-seo")({
  head: () => ({
    meta: [
      { title: "Technical SEO — Foundation for ranking | Rank Your Brand" },
      { name: "description", content: "Full B2B website development + technical SEO foundation. Project-based, 4–6 weeks." },
      { property: "og:title", content: "Technical SEO — Rank Your Brand" },
      { property: "og:description", content: "The foundation your site needs before you scale." },
    ],
    links: [{ rel: "alternate", hrefLang: "es", href: "https://rankyourbrand.co/es/servicios/seo-tecnico" }],
  }),
  component: () => (
    <ServiceDetail
      tag="Technical SEO"
      tier="Foundation"
      format="Project"
      tagline="For B2B companies with underperforming websites that need technical fixes, strategic repositioning, and a solid foundation for growth."
      duration="4–6 weeks"
      primaryCta={{ label: "Get your free diagnosis first", to: "/audit" }}
      secondaryCta={{ label: "Contact us", to: "/contact" }}
      forWho={[
        "B2B companies with existing websites (not brand new)",
        "Current organic traffic under 1,000 visits/month",
        "Ready to invest in growth but need a foundation first",
      ]}
      notFit={[
        "You need immediate traffic (this is foundation work)",
        "You're not ready to commit to content after",
        "Your site is already technically sound (consider SEO for B2B)",
      ]}
      includes={[
        ["Phase 1 — Audit", "Technical SEO audit, competitor landscape, keyword gaps and a GEO baseline across ChatGPT, Perplexity and Google AI."],
        ["Phase 2 — Keywords & architecture", "Keyword research focused on the highest-volume opportunities and a value-driven transactional architecture that lays the foundation of a structured, functional website."],
        ["Phase 3 — Development", "Full website development (rebuild or fresh), information architecture, internal linking and schema (Organization, Product, FAQ)."],
        ["Phase 4 — Optimization", "GA4, Search Console and Tag Manager setup, Core Web Vitals work, sitemap, robots.txt and conversion tracking."],
      ]}
      timeline={[
        ["01", "Discovery & audit"],
        ["02", "Keywords & site architecture"],
        ["03", "Design & content architecture"],
        ["04", "Website development"],
        ["05", "Analytics, measurement & launch"],
      ]}
      outcomes={[
        "Technical foundation ready for organic growth",
        "Clear content strategy for the next 6 months",
        "Baseline metrics in place to track ROI from day one",
      ]}
      faqs={[
        ["What if I don't know my SEO issues?", "That's exactly what the audit phase uncovers. We diagnose before we prescribe."],
        ["Do you build the website from scratch?", "Yes. Whether you need a complete rebuild or a fresh start, we handle full development."],
        ["What platform do you build on?", "We typically use modern frameworks (Next.js, React) for speed and SEO. We can also work with WordPress if preferred."],
        ["Can I upgrade to SEO for B2B after Technical SEO?", "Absolutely — most clients move to SEO for B2B after seeing the roadmap. We offer transition discounts."],
        ["Do you provide content for the site?", "We provide content architecture and strategy. Copywriting can be added for an additional fee."],
      ]}
      finalCtaText="Not sure if Technical SEO is right for you?"
      tone="prompt"
    />
  ),
});
