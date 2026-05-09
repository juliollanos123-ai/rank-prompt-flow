import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/scale")({
  head: () => ({
    meta: [
      { title: "Scale — AI-native SEO retainer | Rank Your Brand" },
      { name: "description", content: "Always-on SEO + AI content engine that produces strategic content at 10× speed. From $1,800/mo." },
      { property: "og:title", content: "Scale — Rank Your Brand" },
      { property: "og:description", content: "Compounding organic growth, month after month." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Scale"
      kicker="Growth · Monthly retainer"
      tagline="An always-on content + SEO engine driven by our N8N multi-agent system."
      price="from $1,800/mo"
      meta="Retainer · 6-month minimum"
      forWho={[
        "Companies with a working site that needs more traffic",
        "Marketing teams ready to scale content without scaling headcount",
        "B2B brands competing in saturated SERPs",
      ]}
      includes={[
        ["AI-native content production", "8–16 strategic articles per month, written through our agent stack and edited by humans."],
        ["Continuous keyword expansion", "The Scout monitors your space weekly and surfaces new opportunities."],
        ["Authority link building", "Selective digital PR + partnership outreach. Quality over volume."],
        ["Real-time dashboard", "Live Looker Studio dashboard. No more PDF reports."],
        ["Monthly strategy call", "60 minutes with strategy lead. Decisions, not status updates."],
      ]}
      timeline={[
        ["Month 1", "Onboarding + agent calibration"],
        ["Month 2–3", "First content waves + technical wins"],
        ["Month 4–6", "Compounding traffic + topical authority"],
        ["Month 6+", "Scale verticals or expand to Landmark"],
      ]}
      tone="dark"
    />
  ),
});
