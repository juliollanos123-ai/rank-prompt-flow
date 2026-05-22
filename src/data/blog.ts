export type CategorySlug = "ai-search" | "b2b-growth" | "seo-engineering" | "seo-roi";

export type Category = {
  slug: CategorySlug;
  label: string;
  description: string;
  /** Tailwind classes for chip background + text */
  chip: string;
  /** Tailwind classes for soft tag (used in card chips) */
  softChip: string;
  /** Background gradient placeholder for covers */
  cover: string;
};

export const categories: Category[] = [
  {
    slug: "ai-search",
    label: "AI Search",
    description:
      "Everything about ranking in ChatGPT, Perplexity and Google AI for B2B companies.",
    chip: "bg-prompt text-canvas",
    softChip: "bg-prompt/10 text-prompt",
    cover:
      "bg-[linear-gradient(135deg,var(--prompt)_0%,color-mix(in_oklab,var(--prompt)_60%,var(--flow))_100%)]",
  },
  {
    slug: "b2b-growth",
    label: "B2B Growth",
    description:
      "Organic growth strategies and SEO playbooks for B2B and SaaS companies.",
    chip: "bg-flow text-canvas",
    softChip: "bg-flow/10 text-flow",
    cover:
      "bg-[linear-gradient(135deg,var(--flow)_0%,color-mix(in_oklab,var(--flow)_60%,var(--ink))_100%)]",
  },
  {
    slug: "seo-engineering",
    label: "SEO Engineering",
    description:
      "The technical side of SEO: site architecture, audits, Core Web Vitals, schema markup.",
    chip: "bg-ink text-canvas",
    softChip: "bg-ink/10 text-ink",
    cover:
      "bg-[linear-gradient(135deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_60%,var(--flow))_100%)]",
  },
  {
    slug: "seo-roi",
    label: "SEO ROI",
    description:
      "Pricing, ROI measurement, and how to make smart SEO investment decisions.",
    chip: "bg-canvas text-ink border border-prompt",
    softChip: "bg-canvas text-ink border border-ink/20",
    cover:
      "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--prompt)_25%,var(--canvas))_0%,color-mix(in_oklab,var(--flow)_30%,var(--canvas))_100%)]",
  },
];

export function getCategory(slug: CategorySlug): Category {
  return categories.find((c) => c.slug === slug)!;
}

export type Author = { name: string; company: string; title?: string };
export const defaultAuthor: Author = {
  name: "Julio Llanos",
  company: "Rank Your Brand",
  title: "Founder & SEO Strategist",
};

export type Article = {
  slug: string;
  title: string;
  category: CategorySlug;
  excerpt: string;
  publishedAt: string; // ISO
  author: Author;
  featured?: boolean;
  /** Optional cover image URL — falls back to category gradient if absent */
  coverImage?: string;
  /** Rich body: array of blocks. Only the first article ships with full body. */
  body: Block[];
};

export type Block =
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string };

const geoBody: Block[] = [
  {
    type: "p",
    text: "If your buyers are asking ChatGPT, Perplexity or Google's AI Overviews for recommendations, your SEO playbook from 2020 is already obsolete. Generative Engine Optimization (GEO) is the discipline of making sure your brand is the answer those engines surface — with the right context, the right citations, and the right level of trust.",
  },
  { type: "h2", id: "what-is-geo", text: "What is GEO?" },
  {
    type: "p",
    text: "Generative Engine Optimization is the practice of structuring your content, data and entity signals so that large language models (LLMs) and AI-powered search engines retrieve, cite and recommend your brand when buyers ask buying-intent questions. It is not a replacement for SEO. It is the next layer on top of it.",
  },
  {
    type: "p",
    text: "Where classic SEO optimizes for a list of blue links, GEO optimizes for a single synthesized answer. The win condition is no longer 'rank #1'. The win condition is 'be the source the model trusts'.",
  },
  { type: "h2", id: "how-it-differs", text: "How GEO differs from SEO" },
  {
    type: "ul",
    items: [
      "Retrieval > Ranking. Models pull passages, not pages. Write in self-contained, citable chunks.",
      "Entity > Keyword. Models reason about who you are, not which keywords you stuffed.",
      "Citations > Clicks. Being mentioned in the answer matters even when no one clicks.",
      "Freshness > Volume. A weekly authoritative update beats a hundred thin posts.",
    ],
  },
  { type: "h2", id: "ranking-factors", text: "GEO ranking factors that actually matter" },
  {
    type: "p",
    text: "We've reverse-engineered hundreds of AI answers across ChatGPT, Perplexity, Claude and Google AI Overviews. Four signals show up over and over again:",
  },
  { type: "h3", text: "1. Structured, citable passages" },
  {
    type: "p",
    text: "Models extract self-contained paragraphs that answer a single question. If your page buries the answer five scrolls down, you lose. Lead with the answer, then expand.",
  },
  { type: "h3", text: "2. Entity consistency" },
  {
    type: "p",
    text: "Your brand needs to exist as a clear entity across the web — schema markup, Wikipedia/Wikidata entries, consistent NAP, founder bios, product taxonomy. LLMs build a vector of who you are from these signals.",
  },
  { type: "h3", text: "3. Third-party validation" },
  {
    type: "p",
    text: "Mentions on G2, Capterra, industry publications, podcasts, GitHub READMEs — anywhere a model might find independent corroboration of your claims. PR is back, and it's measurable.",
  },
  { type: "h3", text: "4. Fresh, dated, expert-authored content" },
  {
    type: "p",
    text: "AI engines weight recency and author credibility heavily. A page authored by a known practitioner, dated within the last 12 months, outperforms anonymous evergreen content.",
  },
  {
    type: "callout",
    text: "Rule of thumb: if a smart intern couldn't summarize your page in two sentences, an LLM can't cite it either.",
  },
  { type: "h2", id: "measuring-geo", text: "How to measure GEO performance" },
  {
    type: "p",
    text: "Traditional rank trackers won't help you here. You need to monitor brand mentions inside AI answers, share of voice across queries that matter to your funnel, and the citations your competitors are earning that you aren't.",
  },
  {
    type: "ul",
    items: [
      "Track presence across ChatGPT, Perplexity, Claude and Google AI Overviews weekly.",
      "Map your top 50 buying-intent prompts and audit your inclusion rate per engine.",
      "Compare citation share against your top 3 competitors.",
      "Tie back to pipeline — AI-influenced demo requests are now a measurable channel.",
    ],
  },
  { type: "h2", id: "where-to-start", text: "Where to start this quarter" },
  {
    type: "p",
    text: "If you do nothing else: pick the ten queries that bring you the best customers, ask each AI engine those exact queries today, and write down who gets cited. The gap between you and the cited brands is your roadmap.",
  },
  {
    type: "quote",
    text: "AI search isn't a future channel. It's already the first place your buyer asks 'who should I trust?' — and the answer is being formed right now.",
    cite: "Julio Llanos · Rank Your Brand",
  },
];

const placeholderBody = (title: string): Block[] => [
  {
    type: "p",
    text: `This is a preview of "${title}". The full article is being prepared by the Rank Your Brand editorial team. In the meantime, explore our other published pieces or request a free AI-search diagnosis for your B2B brand.`,
  },
  {
    type: "callout",
    text: "Want to be notified when this article goes live? Request your free diagnosis and we'll keep you in the loop.",
  },
];

export const articles: Article[] = [
  {
    slug: "what-is-geo",
    title: "What Is Generative Engine Optimization (GEO)?",
    category: "ai-search",
    excerpt:
      "A practical primer on the discipline that decides whether ChatGPT, Perplexity and Google AI cite your brand — or your competitor.",
    publishedAt: "2026-05-18",
    author: defaultAuthor,
    featured: true,
    body: geoBody,
  },
  {
    slug: "ai-seo-vs-traditional-seo",
    title: "AI SEO vs Traditional SEO: What's Different?",
    category: "ai-search",
    excerpt:
      "Retrieval, entities, citations, freshness — the four shifts that separate the next era of search from the last one.",
    publishedAt: "2026-05-12",
    author: defaultAuthor,
    body: placeholderBody("AI SEO vs Traditional SEO: What's Different?"),
  },
  {
    slug: "how-to-rank-in-chatgpt",
    title: "How to Rank in ChatGPT Search Results",
    category: "ai-search",
    excerpt:
      "A reverse-engineered playbook for getting cited inside ChatGPT answers — without paying for placement.",
    publishedAt: "2026-05-05",
    author: defaultAuthor,
    body: placeholderBody("How to Rank in ChatGPT Search Results"),
  },
  {
    slug: "seo-for-b2b-companies",
    title: "SEO for B2B Companies: The Complete Guide",
    category: "b2b-growth",
    excerpt:
      "From keyword clusters to bottom-of-funnel content, the operating model B2B teams use to compound organic pipeline.",
    publishedAt: "2026-04-28",
    author: defaultAuthor,
    body: placeholderBody("SEO for B2B Companies: The Complete Guide"),
  },
  {
    slug: "b2b-saas-seo-guide",
    title: "B2B SaaS SEO: How to Rank When Buyers Use ChatGPT",
    category: "b2b-growth",
    excerpt:
      "SaaS buyers no longer Google. They prompt. Here's how to structure your site so AI engines surface your product first.",
    publishedAt: "2026-04-20",
    author: defaultAuthor,
    body: placeholderBody("B2B SaaS SEO: How to Rank When Buyers Use ChatGPT"),
  },
  {
    slug: "best-b2b-seo-agency",
    title: "Best B2B SEO Agency: How to Choose One in 2026",
    category: "b2b-growth",
    excerpt:
      "Twelve questions to vet any SEO partner before you sign a six-figure retainer — and the red flags to walk away from.",
    publishedAt: "2026-04-12",
    author: defaultAuthor,
    body: placeholderBody("Best B2B SEO Agency: How to Choose One in 2026"),
  },
  {
    slug: "technical-seo-for-saas",
    title: "Technical SEO for SaaS: What You Need to Know",
    category: "seo-engineering",
    excerpt:
      "Crawlability, rendering, Core Web Vitals and schema — the four pillars every SaaS site needs nailed before scaling content.",
    publishedAt: "2026-04-04",
    author: defaultAuthor,
    body: placeholderBody("Technical SEO for SaaS: What You Need to Know"),
  },
  {
    slug: "technical-seo-audit",
    title: "Technical SEO Audit: What It Includes and Costs",
    category: "seo-engineering",
    excerpt:
      "A full breakdown of the deliverables, timeline and price ranges you should expect from a serious technical audit.",
    publishedAt: "2026-03-26",
    author: defaultAuthor,
    body: placeholderBody("Technical SEO Audit: What It Includes and Costs"),
  },
  {
    slug: "how-much-does-b2b-seo-cost",
    title: "How Much Does B2B SEO Cost? (2026 Pricing Guide)",
    category: "seo-roi",
    excerpt:
      "Real benchmarks from 100+ B2B engagements — what fair pricing looks like for retainers, projects and AI-search programs.",
    publishedAt: "2026-03-18",
    author: defaultAuthor,
    body: placeholderBody("How Much Does B2B SEO Cost? (2026 Pricing Guide)"),
  },
  {
    slug: "seo-retainer-vs-project",
    title: "SEO Retainer vs Project: Which Is Right for B2B?",
    category: "seo-roi",
    excerpt:
      "When a one-time project is the smarter buy, and when only a retainer can deliver compounding organic growth.",
    publishedAt: "2026-03-10",
    author: defaultAuthor,
    body: placeholderBody("SEO Retainer vs Project: Which Is Right for B2B?"),
  },
];

export function readingTimeMinutes(body: Block[]): number {
  const words = body.reduce((acc, b) => {
    if (b.type === "p" || b.type === "callout" || b.type === "quote") return acc + b.text.split(/\s+/).length;
    if (b.type === "h2" || b.type === "h3") return acc + b.text.split(/\s+/).length;
    if (b.type === "ul") return acc + b.items.join(" ").split(/\s+/).length;
    return acc;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function isCategorySlug(slug: string): slug is CategorySlug {
  return categories.some((c) => c.slug === slug);
}

export function articlesByCategory(slug: CategorySlug): Article[] {
  return articles.filter((a) => a.category === slug);
}

export function relatedArticles(article: Article, count = 3): Article[] {
  return articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, count);
}
