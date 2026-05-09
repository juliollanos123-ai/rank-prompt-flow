import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/brand/wordmark-dark.svg";

export function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <img src={wordmark} alt="Rank Your Brand" className="h-8 w-auto invert brightness-0" style={{ filter: "invert(1)" }} />
          <p className="mt-6 max-w-sm text-sm text-canvas/70">
            AI-native SEO for B2B companies that want to be the answer their buyers find — in Google, ChatGPT, Perplexity, and beyond.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-widest text-canvas/50">Sitemap</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="text-canvas/80 hover:text-prompt">Home</Link></li>
            <li><Link to="/methodology" className="text-canvas/80 hover:text-prompt">Methodology</Link></li>
            <li><Link to="/services" className="text-canvas/80 hover:text-prompt">Services</Link></li>
            <li><Link to="/audit" className="text-canvas/80 hover:text-prompt">Free Audit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-widest text-canvas/50">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-canvas/80">
            <li>hello@rankyourbrand.co</li>
            <li>USA · Europe</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-canvas/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-canvas/50 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} RankYourBrand.co — All rights reserved.</span>
          <span className="font-display tracking-widest">YOUR BUYERS ARE LOOKING. BE FOUND.</span>
        </div>
      </div>
    </footer>
  );
}
