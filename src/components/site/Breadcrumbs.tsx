import { Link } from "@tanstack/react-router";

type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items, tone = "ink" }: { items: Crumb[]; tone?: "ink" | "canvas" }) {
  const base = tone === "canvas" ? "text-canvas/60" : "text-ink/55";
  const hover = tone === "canvas" ? "hover:text-canvas" : "hover:text-ink";
  const current = tone === "canvas" ? "text-canvas" : "text-ink";
  return (
    <nav aria-label="Breadcrumb" className={`font-display text-xs uppercase tracking-[0.25em] ${base}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {c.to && !isLast ? (
                <Link to={c.to} className={`${hover} transition-colors`}>
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? current : ""} aria-current={isLast ? "page" : undefined}>
                  {c.label}
                </span>
              )}
              {!isLast && <span aria-hidden className="opacity-50">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
