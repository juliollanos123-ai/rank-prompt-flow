import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/branding")({
  head: () => ({
    meta: [
      { title: "Strategic Branding for Brands That Want to Grow With Clarity | Rank Your Brand" },
      { name: "description", content: "Branding for companies that need identity, narrative, positioning and consistency. We build brands ready to exist, communicate and grow online." },
      { property: "og:title", content: "Branding — Rank Your Brand" },
      { property: "og:description", content: "Branding for companies that need clarity before scaling." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/services/branding" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/services/branding" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/branding" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/branding" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Branding"
      tier="Foundation"
      format="Project"
      duration="6–8 weeks"
      tagline="Branding for companies that need clarity before scaling. We define the strategic, verbal and visual foundation of brands that need to communicate better, differentiate and build a coherent presence across every channel."
      serviceId="Branding"
      primaryCta={{ label: "Request a branding proposal", to: "/contact" }}
      secondaryCta={{ label: "See the process", to: "/methodology" }}
      forWho={[
        "Companies launching to market that need to arrive well-built",
        "Brands whose current identity no longer reflects the level of the business",
        "Founders with communication confusion across channels",
        "Businesses that want to professionalize before investing in acquisition",
      ]}
      notFit={[
        "You only want a logo without strategy",
        "You want cosmetic changes and no positioning work",
        "You're not willing to define your business narrative",
      ]}
      includes={[
        ["Brand positioning", "Positioning, value proposition and category definition — where the brand lives in the mind of the buyer."],
        ["Message & narrative", "Core message, narrative and story arc — what the brand says and how it says it."],
        ["Tone & voice", "Verbal identity, tone and voice guidelines that stay consistent across sales, marketing and product."],
        ["Naming (if applies)", "Naming exploration and validation when the project requires it."],
        ["Visual identity", "Logo system, typography, color, iconography and photographic direction."],
        ["Brand guidelines", "Brand guidelines for social, web, decks and every touchpoint — so the brand stops depending on the founder."],
      ]}
      timeline={[
        ["01", "Discovery, positioning & strategy"],
        ["02", "Verbal identity, naming & messaging"],
        ["03", "Visual system & applications"],
        ["04", "Guidelines & handover"],
      ]}
      outcomes={[
        "A clearer brand that sells better and aligns the team",
        "Consistency across every channel without depending on the founder",
        "A foundation ready for web, content, Ads and long-term growth",
      ]}
      faqs={[
        ["Do you do only visual identity?", "No. Branding starts with positioning and strategy. Visual is the last step, not the first."],
        ["Do you help with naming?", "Yes, when the project requires it. Legal validation is a separate scope."],
        ["What comes after branding?", "Web development, content and acquisition — that's where the brand starts working commercially."],
        ["How involved is my team?", "Highly involved in discovery and validation. We facilitate; you own the brand."],
      ]}
      finalCtaText="If the brand isn't clear, everything else gets harder: selling, communicating, designing, ranking and scaling."
      lang="en"
      tone="prompt"
    />
  ),
});
