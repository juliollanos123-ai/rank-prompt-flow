import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: "Strategic Web Development for Growing Brands | Rank Your Brand" },
      { name: "description", content: "Web development focused on positioning, conversion and scalability. Websites built to sell, rank and sustain the digital growth of your brand." },
      { property: "og:title", content: "Web Development — Rank Your Brand" },
      { property: "og:description", content: "Websites that turn your digital presence into a growth asset." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/services/web-development" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/services/web-development" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/web-development" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/desarrollo-web" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="Web Development"
      tier="Foundation"
      format="Project"
      duration="6–10 weeks"
      tagline="Web development that turns your digital presence into a growth asset. We design and build websites ready to rank, communicate clearly and convert visits into real business opportunities."
      serviceId="Web Development"
      primaryCta={{ label: "Request a web proposal", to: "/contact" }}
      secondaryCta={{ label: "See the strategic approach", to: "/methodology" }}
      forWho={[
        "B2B companies with a site that exists but doesn't sell",
        "Brands preparing to invest in Ads, SEO or content and need infrastructure first",
        "Founders launching a serious digital presence for the first time",
        "Teams whose current site can't scale new campaigns or automations",
      ]}
      notFit={[
        "You want a decorative site without commercial objective",
        "You need a template configured, not a strategic build",
        "You expect a full site in 2 weeks without strategy",
      ]}
      includes={[
        ["Strategic discovery", "Business, offer and audience discovery so the site is built around a real commercial thesis."],
        ["Conversion-oriented architecture", "Site architecture built for conversion and SEO — every page has a purpose in the growth system."],
        ["Wireframes & content structure", "Wireframes and content structure defined before design, so we don't decorate around a weak skeleton."],
        ["Strategic copywriting", "Copywriting per page written for the buyer, not for the founder."],
        ["Design & performance", "Visual design coherent with brand and objectives, responsive and optimized for Core Web Vitals."],
        ["SEO + analytics + integrations", "Technical SEO foundation, GA4 / Search Console, forms, campaigns and automation-ready."],
      ]}
      timeline={[
        ["01", "Discovery, sitemap & content strategy"],
        ["02", "Wireframes, copywriting & visual design"],
        ["03", "Development, integrations & QA"],
        ["04", "Launch, measurement setup & handover"],
      ]}
      outcomes={[
        "A website with clear commercial purpose per page",
        "SEO-ready foundation from day one",
        "Infrastructure ready for Ads, content and automation on top",
      ]}
      faqs={[
        ["What stack do you use?", "Modern frameworks (React, Next.js, TanStack) for speed and SEO. WordPress if the operation truly requires it."],
        ["Do you write the copy?", "Yes — strategic copy per page is included. You review and approve everything."],
        ["Can we migrate content from the old site?", "Yes. Migration and redirect map are part of the project when needed."],
        ["What happens after launch?", "Warranty period included. Continuous evolution via SEO retainer or Automation is optional."],
      ]}
      finalCtaText="If your current site isn't helping you sell, rank or scale, it's no longer just a design problem."
      lang="en"
      tone="neutral"
    />
  ),
});
