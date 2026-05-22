import { Link } from "@tanstack/react-router";
import { categories, type CategorySlug } from "@/data/blog";

export function CategoryFilter({ active }: { active: CategorySlug | "all" }) {
  return (
    <div className="sticky top-[68px] z-30 -mx-6 border-b border-border bg-canvas/85 px-6 backdrop-blur-md lg:-mx-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto py-4">
        <FilterPill label="All" isActive={active === "all"} to="/blog" />
        {categories.map((c) => (
          <FilterPill
            key={c.slug}
            label={c.label}
            isActive={active === c.slug}
            to="/blog/$category"
            params={{ category: c.slug }}
          />
        ))}
      </div>
    </div>
  );
}

type PillProps =
  | { label: string; isActive: boolean; to: "/blog"; params?: undefined }
  | { label: string; isActive: boolean; to: "/blog/$category"; params: { category: CategorySlug } };

function FilterPill(props: PillProps) {
  const cls = `whitespace-nowrap rounded-full px-4 py-2 font-display text-xs uppercase tracking-[0.2em] transition-colors ${
    props.isActive ? "bg-ink text-canvas" : "text-ink/70 hover:bg-ink/5 hover:text-ink"
  }`;
  if (props.to === "/blog") {
    return <Link to="/blog" className={cls}>{props.label}</Link>;
  }
  return (
    <Link to="/blog/$category" params={props.params} className={cls}>
      {props.label}
    </Link>
  );
}
