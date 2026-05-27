import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI SEO Agency",
  "alternateName": "AI SEO Agency for B2B",
  "description": "Generative Engine Optimization (GEO) service that positions B2B brands to be cited by ChatGPT, Perplexity and Google AI Overviews. Includes entity SEO, knowledge graph optimization and thought leadership.",
  "provider": { "@id": "https://rankyourbrand.co/#organization" },
  "serviceType": ["AI SEO", "Generative Engine Optimization"],
  "areaServed": "Worldwide",
  "url": "https://rankyourbrand.co/services/ai-seo-agency",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankyourbrand.co/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rankyourbrand.co/services" },
    { "@type": "ListItem", "position": 3, "name": "AI SEO Agency", "item": "https://rankyourbrand.co/services/ai-seo-agency" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What makes AI SEO Agency different from SEO for B2B?", "acceptedAnswer": { "@type": "Answer", "text": "SEO for B2B focuses on traffic and rankings. AI SEO Agency focuses on category ownership and AI citation. Think: being THE answer, not just ranking well." } },
    { "@type": "Question", "name": "Do I need a Wikipedia page?", "acceptedAnswer": { "@type": "Answer", "text": "Not required, but if you're notable enough we'll help you get one. Otherwise we focus on Wikidata, Crunchbase and industry databases." } },
    { "@type": "Question", "name": "How do you track AI citations?", "acceptedAnswer": { "@type": "Answer", "text": "We test queries weekly in ChatGPT, Perplexity and Claude. We measure mention frequency, context and competitive displacement." } },
    { "@type": "Question", "name": "What if my industry isn't AI-friendly yet?", "acceptedAnswer": { "@type": "Answer", "text": "Every B2B industry will adopt AI search. We future-proof your brand so you're ready when your buyers shift." } },
    { "@type": "Question", "name": "Can I downgrade to SEO for B2B later?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, after the 12-month commitment. Most clients stay because they see the compound benefits of GEO + thought leadership." } },
    { "@type": "Question", "name": "What level of executive involvement is required?", "acceptedAnswer": { "@type": "Answer", "text": "Minimal but strategic — about 2–3 hours/month for strategy calls and content review. Our team does the heavy lifting." } },
  ],
};

export const Route = createFileRoute("/services/ai-seo-agency")({
  head: () => ({
    meta: [
      { title: "AI SEO Agency for B2B | Rank Your Brand" },
      { name: "description", content: "We optimize your brand to be cited by ChatGPT, Perplexity and Google AI Overviews. Generative Engine Optimization (GEO) + entity SEO for B2B companies." },
      { property: "og:title", content: "AI SEO Agency for B2B | Rank Your Brand" },
      { property: "og:description", content: "Become the brand AI cites by default in your category." },
    ],
    links: [
      { rel: "canonical", href: "https://rankyourbrand.co/services/ai-seo-agency" },
      { rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/services/ai-seo-agency" },
      { rel: "alternate", hrefLang: "es", href: "https://rankyourbrand.co/es/servicios/agencia-seo-ia" },
    ],
  }),
  component: AISEOPage,
});

function AISEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceDetail
        tag="AI SEO Agency"
        tier="Authority"
        format="Premium retainer"
        duration="12-month · Application only"
        tagline="For established B2B brands ready to dominate their category across traditional search AND generative AI engines."
        serviceId="AI SEO Agency"
        primaryCta={{ label: "Book a strategy call", to: "/contact" }}
        secondaryCta={{ label: "See methodology", to: "/methodology" }}
        forWho={[
          "Established B2B brands with strong market position",
          "Annual revenue between $5M and $100M+",
          "Current organic traffic of 20,000+ visits/month",
          "Executive team committed to thought leadership",
          "Multiple service lines or complex product offerings",
        ]}
        notFit={[
          "You're still in growth stage (start with SEO for B2B)",
          "You're not ready for a 12-month commitment",
          "Your executive team won't participate in content creation",
          "You're looking for quick wins (this is brand building)",
        ]}
        includes={[
          ["Everything in SEO for B2B", "All content, CRO, link building, tracking and reporting from the SEO for B2B tier — included by default."],
          ["GEO optimization", "Entity SEO (Wikipedia, Wikidata, Crunchbase), knowledge graph, Perplexity Pages, ChatGPT/Claude citation tracking and improvement."],
          ["Thought leadership", "Executive ghostwriting (LinkedIn, Medium, industry publications), original research and quarterly data studies."],
          ["Advanced technical", "Multi-page management, programmatic SEO, international SEO and competitor intelligence deep dives."],
          ["White-glove service", "Dedicated account manager, bi-weekly strategy calls, direct Slack/WhatsApp access and 24-hour priority response."],
        ]}
        timeline={[
          ["01", "Brand & entity audit + AI baseline"],
          ["02", "Knowledge graph + thought leadership launch"],
          ["03", "Citation engineering + AI surface coverage"],
          ["04", "Category dominance + scale to new geos"],
        ]}
        outcomes={[
          "Month 6 — Brand appears in ChatGPT answers for target queries",
          "Month 12 — Category authority, cited by AI across 10+ queries",
          "Month 18 — Organic traffic 5–10× baseline, AI-driven leads measurable",
        ]}
        faqs={[
          ["What makes AI SEO Agency different from SEO for B2B?", "SEO for B2B focuses on traffic and rankings. AI SEO Agency focuses on category ownership and AI citation. Think: being THE answer, not just ranking well."],
          ["Do I need a Wikipedia page?", "Not required, but if you're notable enough we'll help you get one. Otherwise we focus on Wikidata, Crunchbase and industry databases."],
          ["How do you track AI citations?", "We test queries weekly in ChatGPT, Perplexity and Claude. We measure mention frequency, context and competitive displacement."],
          ["What if my industry isn't AI-friendly yet?", "Every B2B industry will adopt AI search. We future-proof your brand so you're ready when your buyers shift."],
          ["Can I downgrade to SEO for B2B later?", "Yes, after the 12-month commitment. Most clients stay because they see the compound benefits of GEO + thought leadership."],
          ["What level of executive involvement is required?", "Minimal but strategic — about 2–3 hours/month for strategy calls and content review. Our team does the heavy lifting."],
        ]}
        finalCtaText="Ready to dominate your category? Limited to 3–5 clients per year. Application required."
        tone="flow"
      />
    </>
  );
}
