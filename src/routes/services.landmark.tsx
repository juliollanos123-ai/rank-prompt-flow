import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/landmark")({
  head: () => ({
    meta: [
      { title: "Landmark — GEO & generative visibility | Rank Your Brand" },
      { name: "description", content: "Become the brand AI cites. GEO, entity SEO and generative visibility for category leaders. From $3,500/mo." },
      { property: "og:title", content: "Landmark — Rank Your Brand" },
      { property: "og:description", content: "The authority AI recommends." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Landmark"
      kicker="Authority · Premium retainer"
      tagline="Become the brand AI cites by default in your category."
      price="from $3,500/mo"
      meta="Retainer · 12-month engagement"
      forWho={[
        "Category leaders or ambitious challengers",
        "B2B brands whose buyers research with ChatGPT & Perplexity",
        "Teams who treat brand visibility as a P&L line",
      ]}
      includes={[
        ["GEO optimization", "We engineer your presence so ChatGPT, Perplexity and Google AI cite you in the answers your buyers see."],
        ["Entity & knowledge graph", "Wikidata, Wikipedia footprints, schema entity linking, brand SERP control."],
        ["Thought leadership program", "Strategic narrative + ghostwriting for founders and execs."],
        ["Quarterly AI visibility audit", "Manual + automated tracking of every AI surface that matters in your category."],
        ["Strategic war room", "Weekly tactical sync with strategy and engineering leads."],
      ]}
      timeline={[
        ["Q1", "Brand & entity audit + AI baseline"],
        ["Q2", "Knowledge graph + thought leadership launch"],
        ["Q3", "Citation engineering + AI surface coverage"],
        ["Q4", "Category dominance + scale to new geos"],
      ]}
      tone="flow"
    />
  ),
});
