import { getCategory, type CategorySlug } from "@/data/blog";

export function CategoryChip({
  slug,
  size = "md",
  soft = false,
}: {
  slug: CategorySlug;
  size?: "sm" | "md";
  soft?: boolean;
}) {
  const cat = getCategory(slug);
  const sizing = size === "sm" ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-xs";
  return (
    <span
      className={`inline-flex items-center rounded-full font-display uppercase tracking-[0.2em] ${sizing} ${
        soft ? cat.softChip : cat.chip
      }`}
    >
      {cat.label}
    </span>
  );
}
