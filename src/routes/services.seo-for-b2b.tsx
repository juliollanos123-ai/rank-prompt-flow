import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO for B2B",
  "alternateName": "Monthly B2B SEO Retainer",
  "description": "Monthly SEO services for B2B companies. Ongoing keyword tracking, content production, technical monitoring and AI-native optimization.",
  "provider": { "@id": "https://rankyourbrand.co/#organization" },
  "serviceType": "B2B SEO",
  "areaServed": "Worldwide",
  "url": "https://rankyourbrand.co/services/seo-for-b2b",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankyourbrand.co/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rankyourbrand.co/services" },
    { "@type": "ListItem", "position": 3, "name": "SEO for B2B", "item": "https://rankyourbrand.co/services/seo-for-b2b" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do I need Technical SEO before SEO for B2B?", "acceptedAnswer": { "@type": "Answer", "text": "Not always. We audit your site first. If technical issues exist, we fix them in Month 1 of the retainer (or recommend Technical SEO first)." } },
    { "@type": "Question", "name": "Can I write my own content instead?", "acceptedAnswer": { "@type": "Answer", "text": "You can, but we don't recommend it. Our AI-assisted process is faster and more consistent. We offer a 'Strategy Only' tier at reduced pricing if you insist." } },
    { "@type": "Question", "name": "What if I don't see results in 6 months?", "acceptedAnswer": { "@type": "Answer", "text": "We track leading indicators monthly (keyword movement, indexed pages, engagement). If we're not trending up by Month 3, we diagnose why and adjust." } },
    { "@type": "Question", "name": "Can I pause the retainer?", "acceptedAnswer": { "@type": "Answer", "text": "Not within the 6-month minimum. After that, yes — with 30 days notice. Pausing SEO often means losing momentum, though." } },
    { "@type": "Question", "name": "Can I focus on specific topics?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Content calendars are built collaboratively. You have final approval on all topics before we write." } },
    { "@type": "Question", "name": "How do you measure lead quality?", "acceptedAnswer": { "@type": "Answer", "text": "We track form submissions, demo requests and calls attributed to organic traffic, plus on-site behavior to separate qualified from unqualified." } },
  ],
};

export const Route = createFileRoute("/services/seo-for-b2b")({
  head: () => ({
    meta: [
      { title: "SEO for B2B — Monthly Retainer | Rank Your Brand" },
      { name: "description", content: "Monthly SEO for B2B companies that grows your organic traffic predictably. Keyword strategy, content production and AI-native optimization. 6-month retainer." },
      { property: "og:title", content: "SEO for B2B — Monthly Retainer | Rank Your Brand" },
      { property: "og:description", content: "Compounding organic growth, every month." },
    ],
    links: [
      { rel: "canonical", href: "https://rankyourbrand.co/services/seo-for-b2b" },
      { rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/services/seo-for-b2b" },
      { rel: "alternate", hrefLang: "es", href: "https://rankyourbrand.co/es/servicios/seo-b2b" },
    ],
  }),
  component: SEOForB2BPage,
});

function SEOForB2BPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceDetail
        tag="SEO for B2B"
        tier="Growth"
        format="Monthly retainer"
        duration="6-month minimum"
        tagline="For B2B companies ready to invest in sustained visibility growth with ongoing content production, optimization and lead generation."
        serviceId="B2B SEO Services"
        primaryCta={{ label: "Book a strategy call", to: "/contact" }}
        secondaryCta={{ label: "Get free diagnosis first", to: "/audit" }}
        forWho={[
          "B2B companies with a solid technical foundation (or Technical SEO complete)",
          "Annual revenue between $1M and $20M",
          "Current organic traffic of 2,000–20,000 visits/month",
          "Ready to commit 6+ months to sustained growth",
        ]}
        notFit={[
          "You need a complete website rebuild (start with Technical SEO)",
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
          ["Do I need Technical SEO before this?", "Not always. We audit your site first. If technical issues exist, we fix them in Month 1 (or recommend Technical SEO first)."],
          ["Can I write my own content instead?", "You can, but we don't recommend it. Our AI-assisted process is faster and more consistent. We offer a 'Strategy Only' tier at reduced pricing if you insist."],
          ["What if I don't see results in 6 months?", "We track leading indicators monthly (keyword movement, indexed pages, engagement). If we're not trending up by Month 3, we diagnose why and adjust."],
          ["Can I pause the retainer?", "Not within the 6-month minimum. After that, yes — with 30 days notice. Pausing SEO often means losing momentum, though."],
          ["Can I focus on specific topics?", "Absolutely. Content calendars are built collaboratively. You have final approval on all topics before we write."],
          ["How do you measure lead quality?", "We track form submissions, demo requests and calls attributed to organic traffic, plus on-site behavior to separate qualified from unqualified."],
        ]}
        finalCtaText="Ready to grow predictably?"
        tone="neutral"
      />
    </>
  );
}
