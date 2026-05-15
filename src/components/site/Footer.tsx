import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/brand/wordmark-dark.svg";

const cols = [
  {
    heading: "Services",
    links: [
      { to: "/services/blueprint" as const, label: "Blueprint" },
      { to: "/services/scale" as const, label: "Scale" },
      { to: "/services/landmark" as const, label: "Landmark" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { to: "/audit" as const, label: "Free Diagnosis" },
      { to: "/methodology" as const, label: "Methodology" },
    ],
  },
  {
    heading: "Company",
    links: [
      { to: "/" as const, label: "Home" },
      { to: "/contact" as const, label: "Contact" },
    ],
  },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5 lg:px-10">
        <div className="lg:col-span-2">
          <img
            src={wordmark}
            alt="Rank Your Brand"
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-sm text-sm text-canvas/70">
            AI-native SEO for B2B companies that want to be the answer their buyers find — in Google, ChatGPT, Perplexity, and beyond.
          </p>
          <div className="mt-8 space-y-2 text-sm text-canvas/80">
            <a href="mailto:julio@rankyourbrand.co" className="block hover:text-prompt transition-colors">
              julio@rankyourbrand.co
            </a>
            <p className="text-canvas/60">Serving B2B companies in USA, Europe & LATAM</p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/rankyourbrand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rank Your Brand on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-canvas/15 text-canvas/60 transition-colors hover:border-prompt hover:text-prompt"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://x.com/rankyourbrand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rank Your Brand on X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-canvas/15 text-canvas/60 transition-colors hover:border-prompt hover:text-prompt"
            >
              <XIcon />
            </a>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.heading}>
            <h4 className="font-display text-xs tracking-widest text-canvas/50 uppercase">{col.heading}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-canvas/80 hover:text-prompt transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-canvas/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-canvas/50 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} RankYourBrand. All rights reserved.</span>
          <span className="font-display tracking-widest uppercase">Your buyers are looking. Be found.</span>
        </div>
      </div>
    </footer>
  );
}
