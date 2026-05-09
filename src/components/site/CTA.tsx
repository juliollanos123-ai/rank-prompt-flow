import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

type Variant = "primary" | "ghost" | "outline-canvas";

const styles: Record<Variant, string> = {
  primary:
    "bg-prompt text-primary-foreground hover:shadow-elegant",
  ghost:
    "bg-transparent text-ink hover:bg-ink/5",
  "outline-canvas":
    "border border-canvas/30 text-canvas hover:bg-canvas hover:text-ink",
};

export function CTA({
  to,
  href,
  children,
  variant = "primary",
  className = "",
}: {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const cls = `group inline-flex items-center gap-2 rounded-full px-7 py-4 font-display text-sm uppercase tracking-wider transition-all ${styles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <motion.span
        aria-hidden
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
      >
        →
      </motion.span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {content}
    </Link>
  );
}
