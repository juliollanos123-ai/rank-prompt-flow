import { Link, useRouterState } from "@tanstack/react-router";
import { categories } from "@/data/blog";
import { categoriesEs } from "@/data/blog.es";
import type { CategorySlug } from "@/data/blog";
import type { EsCategorySlug } from "@/data/blog.es";

export function CategoryFilter({ isEs = false }: { isEs?: boolean }) {
  const { location } = useRouterState();
  const segments = location.pathname.split("/").filter(Boolean);

  const baseCls =
    "rounded-full px-4 py-2 font-display text-xs uppercase tracking-wider transition-all";
  const activeCls = "bg-ink text-canvas";
  const inactiveCls =
    "border border-ink/20 text-ink/60 hover:border-ink/40 hover:text-ink";

  if (isEs) {
    // /es/blog/$esCategory → segments = ['es','blog','$esCategory']
    const activeCat =
      segments.length >= 3 && segments[0] === "es" && segments[1] === "blog"
        ? (segments[2] as EsCategorySlug)
        : undefined;

    return (
      <div className="flex flex-wrap gap-3">
        <Link
          to="/es/blog"
          className={`${baseCls} ${!activeCat ? activeCls : inactiveCls}`}
        >
          Todos
        </Link>
        {Object.values(categoriesEs).map((cat) => (
          <Link
            key={cat.slug}
            to="/es/blog/$category"
            params={{ category: cat.slug }}
            className={`${baseCls} ${activeCat === cat.slug ? cat.chipClass : inactiveCls}`}
          >
            {cat.label}
          </Link>
        ))}
      </div>
    );
  }

  // /blog/$category → segments = ['blog','$category']
  const activeCat =
    segments.length >= 2 && segments[0] === "blog"
      ? (segments[1] as CategorySlug | undefined)
      : undefined;

  return (
    <div className="flex flex-wrap gap-3">
      <Link to="/blog" className={`${baseCls} ${!activeCat ? activeCls : inactiveCls}`}>
        All
      </Link>
      {Object.values(categories).map((cat) => (
        <Link
          key={cat.slug}
          to="/blog/$category"
          params={{ category: cat.slug }}
          className={`${baseCls} ${activeCat === cat.slug ? cat.chipClass : inactiveCls}`}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}
