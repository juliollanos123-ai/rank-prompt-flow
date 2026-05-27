import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technical SEO",
  "alternateName": "Technical SEO Services for B2B",
  "description": "Complete technical SEO foundation for B2B websites. Includes audit, architecture redesign, Core Web Vitals optimization, schema markup, and sitemap setup.",
  "provider": { "@id": "https://rankyourbrand.co/#organization" },
  "serviceType": "Technical SEO",
  "areaServed": "Worldwide",
  "url": "https://rankyourbrand.co/services/technical-seo",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankyourbrand.co/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rankyourbrand.co/services" },
    { "@type": "ListItem", "position": 3, "name": "Technical SEO", "item": "https://rankyourbrand.co/services/technical-seo" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What if I don't know my SEO issues?", "acceptedAnswer": { "@type": "Answer", "text": "That's exactly what the audit phase uncovers. We diagnose before we prescribe." } },
    { "@type": "Question", "name": "Do you build the website from scratch?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Whether you need a complete rebuild or a fresh start, we handle full development." } },
    { "@type": "Question", "name": "What platform do you build on?", "acceptedAnswer": { "@type": "Answer", "text": "We typically use modern frameworks (Next.js, React) for speed and SEO. We can also work with WordPress if preferred." } },
    { "@type": "Question", "name": "Can I upgrade to SEO for B2B after Technical SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely — most clients move to our B2B SEO retainer after seeing the roadmap. We offer transition discounts." } },
    { "@type": "Question", "name": "Do you provide content for the site?", "acceptedAnswer": { "@type": "Answer", "text": "We provide content architecture and strategy. Copywriting can be added for an additional fee." } },
  ],
};

export const Route = createFileRoute("/services/technical-seo")({
  head: () => ({
    meta: [
      { title: "Technical SEO for B2B — Rank Your Brand" },
      { name: "description", content: "We fix the technical foundation that blocks your B2B website from ranking. Crawlability, Core Web Vitals, schema, sitemap and architecture. Project-based engagement." },
      { property: "og:title", content: "Technical SEO for B2B — Rank Your Brand" },
      { property: "og:description", content: "The foundation your site needs before you scale." },
    ],
    links: [
      { rel: "canonical", href: "https://rankyourbrand.co/services/technical-seo" },
      { rel: "alternate", hrefLang: "en", href: "https://rankyourbrand.co/services/technical-seo" },
      { rel: "alternate", hrefLang: "es", href: "https://rankyourbrand.co/es/servicios/seo-tecnico" },
    ],
  }),
  component: TechnicalSEOPage,
});

function TechnicalSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceDetail
        tag="Technical SEO"
        tier="Foundation"
        format="Project"
        duration="4–6 weeks"
        tagline="For B2B companies with underperforming websites that need technical fixes, strategic repositioning, and a solid foundation for growth."
        serviceId="Technical SEO Services"
        primaryCta={{ label: "Get free diagnosis first", to: "/audit" }}
        secondaryCta={{ label: "Contact us", to: "/contact" }}
        forWho={[
          "B2B companies with existing websites (not brand new)",
          "Current organic traffic under 1,000 visits/month",
          "Ready to invest in growth but need a foundation first",
        ]}
        notFit={[
          "You need immediate traffic (this is foundation work)",
          "You're not ready to commit to content after",
          "Your site is already technically sound (consider SEO for B2B)",
        ]}
        includes={[
          ["Phase 1 — Audit", "Technical SEO audit, competitor landscape, keyword gaps and a GEO baseline across ChatGPT, Perplexity and Google AI."],
          ["Phase 2 — Keywords & architecture", "Keyword research with the highest volume and construction of a transactional content architecture that lays the groundwork for a structured, high-performing website."],
          ["Phase 3 — Development", "Full website development (rebuild or fresh), information architecture, internal linking and schema (Organization, Product, FAQ)."],
          ["Phase 4 — Optimization", "GA4, Search Console and Tag Manager setup, Core Web Vitals work, sitemap, robots.txt and conversion tracking."],
        ]}
        timeline={[
          ["01", "Discovery & audit"],
          ["02", "Keywords & site architecture"],
          ["03", "Design & content architecture"],
          ["04", "Website development"],
          ["05", "Analytics, measurement & launch"],
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
          ["Can I upgrade to SEO for B2B after?", "Absolutely — most clients move to our B2B SEO retainer after seeing the roadmap. We offer transition discounts."],
          ["Do you provide content for the site?", "We provide content architecture and strategy. Copywriting can be added for an additional fee."],
        ]}
        finalCtaText="Not sure if Technical SEO is right for you?"
        tone="prompt"
      />
    </>
  );
}
