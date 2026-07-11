import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Automation for Marketing & Operations | Rank Your Brand" },
      { name: "description", content: "We design AI-powered automations for marketing, sales and operations: lead management, content, follow-up, reporting and internal processes." },
      { property: "og:title", content: "AI Automation — Rank Your Brand" },
      { property: "og:description", content: "AI-Native automation for companies that want to scale without breaking their operation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rank-prompt-flow.lovable.app/services/ai-automation" },
    ],
    links: [
      { rel: "canonical", href: "https://rank-prompt-flow.lovable.app/services/ai-automation" },
      { rel: "alternate", hrefLang: "en", href: "https://rank-prompt-flow.lovable.app/services/ai-automation" },
      { rel: "alternate", hrefLang: "es", href: "https://rank-prompt-flow.lovable.app/es/servicios/automatizacion-ia" },
    ],
  }),
  component: () => (
    <ServiceDetail
      tag="AI Automation"
      tier="Growth"
      format="Project + retainer"
      duration="6–10 weeks build"
      tagline="AI automation for companies that want to scale without breaking their operation. We design systems that reduce manual work, accelerate processes and turn repetitive tasks into intelligent flows for marketing, sales and growth."
      serviceId="AI Automation"
      primaryCta={{ label: "Evaluate automation opportunities", to: "/contact" }}
      secondaryCta={{ label: "See the system", to: "/methodology" }}
      forWho={[
        "Teams losing leads because no one responds on time",
        "Companies duplicating work across WhatsApp, email, CRM and spreadsheets",
        "Marketing teams that can't sustain their content cadence",
        "Founders drowning in manual reporting",
        "Operations with too many manual steps between platforms",
      ]}
      notFit={[
        "You want tools installed without diagnosing what to automate first",
        "There is no defined process yet — start with strategy",
        "You expect AI to make critical business decisions without human oversight",
      ]}
      includes={[
        ["Marketing", "Brief generation, content ideas, opportunity classification, publishing automation, reports and nurturing flows."],
        ["Sales", "Lead assignment, automatic follow-up, reminders, scoring, first responses, CRM updates and team alerts."],
        ["Operations", "Dashboards, data consolidation, repetitive tasks across platforms, documentation, internal processes and automation of deliverables."],
        ["Design with business logic", "We don't install automations for the sake of it. Every flow is designed around a business objective with human criteria at the critical points."],
      ]}
      timeline={[
        ["01", "Diagnosis: what's slowing you down and what's worth automating first"],
        ["02", "Design of flows, integrations and human checkpoints"],
        ["03", "Build, test & deploy across your stack"],
        ["04", "Monitoring, iteration and optional retainer"],
      ]}
      outcomes={[
        "Manual tasks reduced from hours to minutes",
        "Consistent response times for leads and clients",
        "A documented operational system that scales with the team",
      ]}
      faqs={[
        ["Do you replace our current tools?", "No. We connect what you already use. Only when a tool is a real bottleneck do we recommend a replacement."],
        ["Do we need a technical team?", "No. We handle the build. You need someone from your side to validate the process logic."],
        ["Is AI making the decisions?", "AI accelerates. Strategy decides. Every critical point has human criteria — that's the whole point of AI-Native done well."],
        ["What happens after the build?", "Optional monthly retainer for monitoring, iteration and new flows as the operation evolves."],
      ]}
      finalCtaText="Let's identify what processes are slowing you down and which ones should be automated first."
      lang="en"
      tone="flow"
    />
  ),
});
