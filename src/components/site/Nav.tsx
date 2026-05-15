import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import wordmark from "@/assets/brand/wordmark-color.svg";

const links = [
  { to: "/services", label: "Services" },
  { to: "/methodology", label: "Methodology" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-canvas/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2" aria-label="Rank Your Brand">
          <img src={wordmark} alt="Rank Your Brand" className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
              activeProps={{ className: "text-ink bg-ink/5" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/audit"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-prompt px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-elegant font-display"
          >
            Free Diagnosis
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden rounded-md p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h18" strokeLinecap="round" />
                <path d="M3 17h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-border bg-canvas md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => {
                const isActive = location.pathname.startsWith(l.to);
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`py-3 text-base font-medium rounded-xl px-3 transition-colors ${
                      isActive ? "text-prompt bg-prompt/5" : "text-ink hover:bg-ink/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                to="/audit"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-prompt px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground"
              >
                Free Diagnosis <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
