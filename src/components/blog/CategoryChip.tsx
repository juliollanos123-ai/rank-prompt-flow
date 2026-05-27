import { categories } from "@/data/blog";
import type { CategorySlug } from "@/data/blog";

export function CategoryChip({
  slug,
  size = "sm",
}: {
  slug: CategorySlug;
  size?: "sm" | "md";
}) {
  const cat = categories[slug];
  const sizeClass = size === "md" ? "px-4 py-1.5 text-sm" : "px-3 py-1 text-xs";
  return (
    <span
      className={`inline-block rounded-full font-display uppercase tracking-wider ${sizeClass} ${cat.chipClass}`}
    >
      {cat.label}
    </span>
  );
}
