import { Link } from "@tanstack/react-router";
import { categories, type CategorySlug } from "@/data/blog";

export function CategoryFilter({ active }: { active: CategorySlug | "all" }) {
  const items: { slug: CategorySlug | "all"; label: string }[] = [
    { slug: "all", label: "All" },
    ...categories.map((c) => ({ slug: c.slug, label: c.label })),
  ];

  return (
    <div className="sticky top-[68px] z-30 -mx-6 border-b border-border bg-canvas/85 px-6 backdrop-blur-md lg:-mx-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto py-4">
        {items.map((it) => {
          const isActive = it.slug === active;
          const to = it.slug === "all" ? "/blog" : "/blog/$slug";
          return (
            <Link
              key={it.slug}
              to={to}
              params={it.slug === "all" ? undefined : { slug: it.slug }}
              className={`whitespace-nowrap rounded-full px-4 py-2 font-display text-xs uppercase tracking-[0.2em] transition-colors ${
                isActive
                  ? "bg-ink text-canvas"
                  : "text-ink/70 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {it.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
