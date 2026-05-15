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

export function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5 lg:px-10">
        <div className="lg:col-span-2">
          <img src={wordmark} alt="Rank Your Brand" className="h-8 w-auto" style={{ filter: "invert(1)" }} />
          <p className="mt-6 max-w-sm text-sm text-canvas/70">
            AI-native SEO for B2B companies that want to be the answer their buyers find — in Google, ChatGPT, Perplexity, and beyond.
          </p>
          <div className="mt-8 space-y-2 text-sm text-canvas/80">
            <a href="mailto:julio@rankyourbrand.co" className="block hover:text-prompt">julio@rankyourbrand.co</a>
            <p className="text-canvas/60">Serving B2B companies in USA, Europe & LATAM</p>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.heading}>
            <h4 className="font-display text-xs tracking-widest text-canvas/50 uppercase">{col.heading}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-canvas/80 hover:text-prompt">{l.label}</Link>
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
