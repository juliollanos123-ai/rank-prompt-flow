import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/scale")({
  head: () => ({
    meta: [
      { title: "Scale — Organic growth, month after month | Rank Your Brand" },
      { name: "description", content: "Always-on SEO + AI content engine for B2B. 4–6 articles/month, CRO, link building, dashboards. $2,500/mo, 6-month minimum." },
      { property: "og:title", content: "Scale — Rank Your Brand" },
      { property: "og:description", content: "Compounding organic growth, every month." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Scale"
      kicker="Growth · Monthly retainer"
      tagline="For B2B companies ready to invest in sustained visibility growth with ongoing content production, optimization and lead generation."
      price="$2,500/mo"
      meta="Retainer · 6-month minimum"
      primaryCta={{ label: "Book a strategy call", to: "/contact" }}
      secondaryCta={{ label: "Get free diagnosis first", to: "/audit" }}
      forWho={[
        "B2B companies with a solid technical foundation (or Blueprint complete)",
        "Annual revenue between $1M and $20M",
        "Current organic traffic of 2,000–20,000 visits/month",
        "Ready to commit 6+ months to sustained growth",
      ]}
      notFit={[
        "You need a complete website rebuild (start with Blueprint)",
        "You're not ready for a 6-month commitment",
        "You want to micromanage every article",
        "Your site has major unresolved technical issues",
      ]}
      includes={[
        ["Content production", "4–6 SEO-optimized articles per month (2,000–3,000 words), AI-assisted research with full human editorial oversight."],
        ["Conversion optimization", "Ongoing CRO, strategic landing pages for search intent, A/B test recommendations and behavior analysis."],
        ["Link building & authority", "2–3 high-quality backlinks per month via outreach, guest posts and digital PR when relevant."],
        ["Tracking & reporting", "50–100 tracked keywords, real-time Looker Studio dashboard, monthly executive summary and quarterly strategy sessions."],
        ["Lead generation focus", "Qualified-lead tracking and attribution. Analytics focused on business outcomes, not vanity traffic."],
      ]}
      timeline={[
        ["Month 1", "Onboarding + content calendar + first articles"],
        ["Month 2–6", "Compounding output + link building + CRO"],
        ["Month 6+", "Scale what works, expand to new keyword territories"],
      ]}
      outcomes={[
        "Month 3 — +20–30% organic traffic, momentum visible in keyword movement",
        "Month 6 — +50–80% organic traffic, 3–5 keywords in top 10",
        "Month 12 — 2–3× organic traffic with predictable lead generation",
      ]}
      faqs={[
        ["Do I need Blueprint before Scale?", "Not always. We audit your site first. If technical issues exist, we fix them in Month 1 of Scale (or recommend Blueprint first)."],
        ["Can I write my own content instead?", "You can, but we don't recommend it. Our AI-assisted process is faster and more consistent. We offer a 'Strategy Only' tier at reduced pricing if you insist."],
        ["What if I don't see results in 6 months?", "We track leading indicators monthly (keyword movement, indexed pages, engagement). If we're not trending up by Month 3, we diagnose why and adjust."],
        ["Can I pause the retainer?", "Not within the 6-month minimum. After that, yes — with 30 days notice. Pausing SEO often means losing momentum, though."],
        ["Can I focus on specific topics?", "Absolutely. Content calendars are built collaboratively. You have final approval on all topics before we write."],
        ["How do you measure lead quality?", "We track form submissions, demo requests and calls attributed to organic traffic, plus on-site behavior to separate qualified from unqualified."],
      ]}
      finalCtaText="Ready to grow predictably?"
      tone="dark"
    />
  ),
});
