import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/landmark")({
  head: () => ({
    meta: [
      { title: "Landmark — The authority AI recommends | Rank Your Brand" },
      { name: "description", content: "Premium GEO + thought leadership program for B2B brands ready to dominate their category. $3,500/mo, 12-month engagement." },
      { property: "og:title", content: "Landmark — Rank Your Brand" },
      { property: "og:description", content: "Become the brand AI cites by default in your category." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Landmark"
      kicker="Authority · Premium retainer"
      tagline="For established B2B brands ready to dominate their category across traditional search AND generative AI engines."
      price="$3,500/mo"
      meta="Retainer · 12-month engagement · Application only"
      primaryCta={{ label: "Apply for Landmark", to: "/contact" }}
      secondaryCta={{ label: "See methodology", to: "/methodology" }}
      forWho={[
        "Established B2B brands with strong market position",
        "Annual revenue between $5M and $100M+",
        "Current organic traffic of 20,000+ visits/month",
        "Executive team committed to thought leadership",
        "Multiple service lines or complex product offerings",
      ]}
      notFit={[
        "You're still in growth stage (start with Scale)",
        "You're not ready for a 12-month commitment",
        "Your executive team won't participate in content creation",
        "You're looking for quick wins (this is brand building)",
      ]}
      includes={[
        ["Everything in Scale", "All content, CRO, link building, tracking and reporting from the Scale tier — included by default."],
        ["GEO optimization", "Entity SEO (Wikipedia, Wikidata, Crunchbase), knowledge graph, Perplexity Pages, ChatGPT/Claude citation tracking and improvement."],
        ["Thought leadership", "Executive ghostwriting (LinkedIn, Medium, industry publications), original research and quarterly data studies."],
        ["Advanced technical", "Multi-page management, programmatic SEO, international SEO and competitor intelligence deep dives."],
        ["White-glove service", "Dedicated account manager, bi-weekly strategy calls, direct Slack/WhatsApp access and 24-hour priority response."],
      ]}
      timeline={[
        ["Q1", "Brand & entity audit + AI baseline"],
        ["Q2", "Knowledge graph + thought leadership launch"],
        ["Q3", "Citation engineering + AI surface coverage"],
        ["Q4", "Category dominance + scale to new geos"],
      ]}
      outcomes={[
        "Month 6 — Brand appears in ChatGPT answers for target queries",
        "Month 12 — Category authority, cited by AI across 10+ queries",
        "Month 18 — Organic traffic 5–10× baseline, AI-driven leads measurable",
      ]}
      faqs={[
        ["What makes Landmark different from Scale?", "Scale focuses on traffic and rankings. Landmark focuses on category ownership and AI citation. Think: being THE answer, not just ranking well."],
        ["Do I need a Wikipedia page?", "Not required, but if you're notable enough we'll help you get one. Otherwise we focus on Wikidata, Crunchbase and industry databases."],
        ["How do you track AI citations?", "We test queries weekly in ChatGPT, Perplexity and Claude. We measure mention frequency, context and competitive displacement."],
        ["What if my industry isn't AI-friendly yet?", "Every B2B industry will adopt AI search. We future-proof your brand so you're ready when your buyers shift."],
        ["Can I downgrade to Scale later?", "Yes, after the 12-month commitment. Most clients stay because they see the compound benefits of GEO + thought leadership."],
        ["What level of executive involvement is required?", "Minimal but strategic — about 2–3 hours/month for strategy calls and content review. Our team does the heavy lifting."],
      ]}
      finalCtaText="Ready to dominate your category? Limited to 3–5 clients per year. Application required."
      tone="flow"
    />
  ),
});
