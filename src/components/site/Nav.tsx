import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import isotipo from "@/assets/brand/isotipo-nuevo.svg";
import { isEsPath, getAlternateLang } from "@/i18n/langRoutes";

const enServiceItems = [
  { to: "/services/blueprint" as const, label: "Technical SEO", desc: "Foundation" },
  { to: "/services/scale" as const, label: "SEO for B2B", desc: "Growth" },
  { to: "/services/landmark" as const, label: "AI SEO Agency", desc: "Authority" },
];

const esServiceItems = [
  { to: "/es/servicios/blueprint" as const, label: "SEO Técnico", desc: "Fundacion" },
  { to: "/es/servicios/scale" as const, label: "SEO para B2B", desc: "Crecimiento" },
  { to: "/es/servicios/landmark" as const, label: "Agencia SEO IA", desc: "Autoridad" },
];

const enLinks = [
  { to: "/methodology" as const, label: "Methodology" },
  { to: "/contact" as const, label: "Contact" },
];

const esLinks = [
  { to: "/es/metodologia" as const, label: "Metodologia" },
  { to: "/es/contacto" as const, label: "Contacto" },
];

function ServicesDropdown({ isEs }: { isEs: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { location } = useRouterState();

  const items = isEs ? esServiceItems : enServiceItems;
  const servicesPath = isEs ? "/es/servicios" : "/services";
  const isActive = location.pathname.startsWith(servicesPath);

  function show() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }
  function hide() {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          isActive ? "bg-ink/5 text-ink" : "text-ink/80 hover:bg-ink/5 hover:text-ink"
        }`}
      >
        {isEs ? "Servicios" : "Services"}
        <motion.svg
          width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden
        >
          <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={show}
            onMouseLeave={hide}
            className="absolute left-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-border bg-canvas shadow-card"
          >
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center justify-between px-4 py-3 transition-colors hover:bg-prompt/5 first:pt-4 last:pb-4"
              >
                <span className="font-display text-sm font-semibold tracking-wide text-ink group-hover:text-prompt">
                  {item.label}
                </span>
                <span className="text-xs text-ink/45 group-hover:text-prompt/70">{item.desc}</span>
              </Link>
            ))}
            <div className="border-t border-border px-4 py-3">
              <Link
                to={isEs ? "/es/servicios" : "/services"}
                className="text-xs text-ink/50 hover:text-prompt"
              >
                {isEs ? "Ver todos →" : "View all →"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { location } = useRouterState();
  const isEs = isEsPath(location.pathname);
  const links = isEs ? esLinks : enLinks;
  const alternatePath = getAlternateLang(location.pathname);
  const serviceItems = isEs ? esServiceItems : enServiceItems;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
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
        <Link to={isEs ? "/es" : "/"} className="flex items-center" aria-label="Rank Your Brand">
          <img src={isotipo} alt="Rank Your Brand" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <ServicesDropdown isEs={isEs} />
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
            to={isEs ? "/es/auditoria" : "/audit"}
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-prompt px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-elegant"
          >
            {isEs ? "Diagnostico Gratis" : "Free Diagnosis"}
            <span aria-hidden>→</span>
          </Link>
          <Link
            to={alternatePath}
            className="ml-2 rounded-full border border-ink/20 px-3 py-2 font-display text-xs font-semibold uppercase tracking-widest text-ink/70 transition-colors hover:border-prompt hover:text-prompt"
            aria-label={isEs ? "Switch to English" : "Cambiar a Español"}
          >
            {isEs ? "EN" : "ES"}
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
              {/* Services accordion */}
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`flex items-center justify-between py-3 text-base font-medium rounded-xl px-3 transition-colors ${
                  location.pathname.startsWith(isEs ? "/es/servicios" : "/services")
                    ? "text-prompt bg-prompt/5"
                    : "text-ink hover:bg-ink/5"
                }`}
              >
                {isEs ? "Servicios" : "Services"}
                <motion.svg
                  width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"
                  animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden
                >
                  <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 mb-1 flex flex-col gap-0.5 border-l-2 border-prompt/20 pl-3">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm text-ink/80 transition-colors hover:text-prompt"
                        >
                          <span className="font-medium">{item.label}</span>
                          <span className="text-xs text-ink/40">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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
                to={isEs ? "/es/auditoria" : "/audit"}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-prompt px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
              >
                {isEs ? "Diagnostico Gratis" : "Free Diagnosis"} <span aria-hidden>→</span>
              </Link>
              <Link
                to={alternatePath}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-ink/20 px-5 py-3 font-display text-xs font-semibold uppercase tracking-widest text-ink/70"
              >
                {isEs ? "EN — English" : "ES — Español"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
