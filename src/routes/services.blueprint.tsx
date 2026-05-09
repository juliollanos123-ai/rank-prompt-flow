import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/blueprint")({
  head: () => ({
    meta: [
      { title: "Blueprint — Technical SEO foundation | Rank Your Brand" },
      { name: "description", content: "Audit, architecture and technical SEO base. Project-based engagement starting at $1,200." },
      { property: "og:title", content: "Blueprint — Rank Your Brand" },
      { property: "og:description", content: "The foundation your B2B site needs to rank." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Blueprint"
      kicker="Foundation · Project"
      tagline="The technical foundation your B2B site needs to rank in 2026."
      price="from $1,200"
      meta="Project · 4–6 weeks"
      forWho={[
        "Companies relaunching their website",
        "B2B brands with strong product, weak organic visibility",
        "Teams who need an SEO foundation before scaling content",
      ]}
      includes={[
        ["Technical audit", "Crawl, render and Core Web Vitals analysis. Every fix prioritized by impact."],
        ["Information architecture", "Site map, URL structure and internal linking designed to convert and rank."],
        ["On-page SEO blueprint", "Page-by-page brief: titles, intent, schema, internal links."],
        ["Schema & structured data", "Organization, Product, FAQ, Breadcrumb. Built for AI parsing, not just Google."],
        ["GEO baseline check", "Where your brand currently appears in ChatGPT, Perplexity and Google AI."],
      ]}
      timeline={[
        ["Week 1", "Discovery + technical crawl"],
        ["Week 2", "Architecture & content map"],
        ["Week 3–4", "On-page blueprints + schema"],
        ["Week 5–6", "Implementation handoff & training"],
      ]}
      tone="prompt"
    />
  ),
});
