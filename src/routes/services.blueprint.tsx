import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/blueprint")({
  head: () => ({
    meta: [
      { title: "Blueprint — Foundation for ranking | Rank Your Brand" },
      { name: "description", content: "Full B2B website development + technical SEO foundation. Project-based, $1,500 USD, 4–6 weeks." },
      { property: "og:title", content: "Blueprint — Rank Your Brand" },
      { property: "og:description", content: "The foundation your site needs before you scale." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Blueprint"
      kicker="Foundation · Project"
      tagline="For B2B companies with underperforming websites that need technical fixes, strategic repositioning, and a solid foundation for growth."
      price="$1,500 USD"
      meta="Project · 4–6 weeks"
      primaryCta={{ label: "Get your free diagnosis first", to: "/audit" }}
      secondaryCta={{ label: "Contact us", to: "/contact" }}
      forWho={[
        "B2B companies with existing websites (not brand new)",
        "Annual revenue between $500k and $5M",
        "Current organic traffic under 5,000 visits/month",
        "Ready to invest in growth but need a foundation first",
      ]}
      notFit={[
        "You need immediate traffic (this is foundation work)",
        "You're not ready to commit to content after",
        "Your site is already technically sound (consider Scale)",
      ]}
      includes={[
        ["Phase 1 — Audit", "Technical SEO audit, competitor landscape, keyword gaps and a GEO baseline across ChatGPT, Perplexity and Google AI."],
        ["Phase 2 — Development", "Full website development (rebuild or fresh), information architecture, internal linking and schema (Organization, Product, FAQ)."],
        ["Phase 3 — Optimization", "GA4, Search Console and Tag Manager setup, Core Web Vitals work, sitemap, robots.txt and conversion tracking."],
        ["Strategy document", "PDF strategy doc with a 90-day growth roadmap and an optional training session."],
      ]}
      timeline={[
        ["Week 1", "Discovery & audit"],
        ["Week 2–3", "Website development"],
        ["Week 4", "Design & content architecture"],
        ["Week 5", "Analytics & optimization"],
        ["Week 6", "Testing & launch"],
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
        ["Can I upgrade to Scale after Blueprint?", "Absolutely — most clients move to Scale after seeing the roadmap. We offer transition discounts."],
        ["Do you provide content for the site?", "We provide content architecture and strategy. Copywriting can be added for an additional fee."],
      ]}
      finalCtaText="Not sure if Blueprint is right for you?"
      tone="prompt"
    />
  ),
});
