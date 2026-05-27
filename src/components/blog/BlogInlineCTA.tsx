import { CTA } from "@/components/site/CTA";

export function BlogInlineCTA({
  headline = "Want to know where your brand shows up in AI search?",
  body = "Run a free GEO baseline audit — we'll show you which AI systems cite your brand (and where you're invisible).",
  cta = { label: "Get your free audit", to: "/audit" },
}: {
  headline?: string;
  body?: string;
  cta?: { label: string; to: string };
}) {
  return (
    <aside className="my-10 rounded-2xl border border-prompt/20 bg-prompt/[0.06] p-8 lg:p-10">
      <p className="font-display text-xs uppercase tracking-[0.25em] text-prompt">
        From Rank Your Brand
      </p>
      <h3 className="mt-3 font-display font-black text-xl uppercase tracking-tight lg:text-2xl">
        {headline}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-ink/70">{body}</p>
      <div className="mt-6">
        <CTA to={cta.to}>{cta.label}</CTA>
      </div>
    </aside>
  );
}
