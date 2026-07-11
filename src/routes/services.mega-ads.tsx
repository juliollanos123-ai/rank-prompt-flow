import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/mega-ads")({
  head: () => ({
    meta: [
      { title: "Mega Ads: Paid Campaigns Built to Scale | Rank Your Brand" },
      { name: "description", content: "Design and management of paid advertising campaigns to generate demand, validate offers and scale results with Meta Ads, Google Ads and conversion strategy." },
      { property: "og:title", content: "Mega Ads — Rank Your Brand" },
      { property: "og:description", content: "Campaigns designed to generate demand, not just clicks." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/services/mega-ads" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/services/mega-ads" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/mega-ads" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/mega-ads" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Mega Ads"
      tier="Growth"
      format="Monthly retainer"
      duration="3-month minimum"
      tagline="Campaigns designed to generate demand, not just clicks. We plan, launch and optimize paid systems for brands that need measurable outcomes, budget control and a real structure to scale."
      serviceId="Mega Ads"
      primaryCta={{ label: "Request an Ads diagnosis", to: "/contact" }}
      secondaryCta={{ label: "See how we work", to: "/methodology" }}
      forWho={[
        "Companies that want to accelerate lead generation",
        "Brands with a validated offer ready to scale",
        "Businesses that need to complement SEO with immediate acquisition",
        "Teams with active campaigns underperforming",
      ]}
      notFit={[
        "You don't have a clear offer yet — start with Branding or Digital Foundations",
        "Your website can't convert traffic — start with Web Development",
        "You want to run campaigns without any tracking or measurement setup",
      ]}
      includes={[
        ["Account, offer & tracking audit", "We review your account, offer, funnel and tracking to identify what's leaking budget before we spend a single dollar more."],
        ["Ads architecture", "Campaign structure designed around business objectives — not vanity metrics — across Meta Ads, Google Ads or both."],
        ["Creative & copy", "Ad copy and creative concepts built for the platform, the audience and the moment in the funnel."],
        ["Landing recommendations", "We audit or build conversion-focused landing pages so the ad and the destination speak the same language."],
        ["Events & measurement", "Event configuration, conversion tracking and performance dashboards so decisions come from data, not intuition."],
        ["Continuous optimization", "Weekly optimization based on real performance signals — creative rotation, bidding, audience testing and budget allocation."],
      ]}
      timeline={[
        ["01", "Audit, offer review & tracking setup"],
        ["02", "Creative production & campaign launch"],
        ["03", "Optimization, scaling & reporting"],
      ]}
      outcomes={[
        "Predictable CPA on qualified leads",
        "Clear performance signals to decide when and how to scale",
        "An advertising system connected to your website, brand and offer — not an isolated channel",
      ]}
      faqs={[
        ["Do you manage the ad spend budget?", "You keep control of the budget and pay platforms directly. Our fee is separate from ad spend."],
        ["Do you work with Meta and Google both?", "Yes. We recommend the mix based on your offer, buyer and funnel — not on what's trendy."],
        ["Do I need a new landing page?", "Not always. We audit your current pages first and only recommend a rebuild when it's the real bottleneck."],
        ["What if my campaigns are already running?", "Even better. We start with an audit and reorganize what exists before launching anything new."],
      ]}
      finalCtaText="Before you raise the budget, make sure your structure can turn it into real opportunities."
      lang="en"
      tone="prompt"
    />
  ),
});
