export type CategorySlug = "ai-search" | "b2b-growth" | "seo-engineering" | "seo-roi";

export type Author = {
  name: string;
  role: string;
  initials: string;
};

export type Block =
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  category: CategorySlug;
  excerpt: string;
  publishedAt: string;
  author: Author;
  featured?: boolean;
  coverImage?: string;
  body: Block[];
};

export type Category = {
  slug: CategorySlug;
  label: string;
  description: string;
  chipClass: string;
};

// ─── Categories ────────────────────────────────────────────────────────────────

export const categories: Record<CategorySlug, Category> = {
  "ai-search": {
    slug: "ai-search",
    label: "AI Search",
    description: "How generative AI is reshaping search — and what it means for B2B visibility.",
    chipClass: "bg-prompt text-canvas",
  },
  "b2b-growth": {
    slug: "b2b-growth",
    label: "B2B Growth",
    description: "Organic growth strategies built for complex B2B buying cycles and long sales processes.",
    chipClass: "bg-flow text-canvas",
  },
  "seo-engineering": {
    slug: "seo-engineering",
    label: "SEO Engineering",
    description: "Technical foundations that make B2B websites crawlable, fast and trustworthy.",
    chipClass: "bg-ink text-canvas",
  },
  "seo-roi": {
    slug: "seo-roi",
    label: "SEO ROI",
    description: "How to measure, predict and maximize the return on your SEO investment.",
    chipClass: "bg-canvas text-ink border border-prompt/60",
  },
};

// ─── Authors ───────────────────────────────────────────────────────────────────

const julio: Author = {
  name: "Julio Llanos",
  role: "Founder & Head of SEO Strategy",
  initials: "JL",
};

const diego: Author = {
  name: "Diego Parra",
  role: "Co-founder & Head of Growth",
  initials: "DP",
};

const katty: Author = {
  name: "Katty Theran",
  role: "SEO Strategist",
  initials: "KT",
};

const paula: Author = {
  name: "Paula Elena",
  role: "Content & GEO Lead",
  initials: "PE",
};

// ─── Articles ──────────────────────────────────────────────────────────────────

const articles: Article[] = [
  // ── AI SEARCH ───────────────────────────────────────────────────────────────
  {
    slug: "what-is-geo",
    title: "What Is GEO? Generative Engine Optimization Explained for B2B",
    category: "ai-search",
    excerpt: "GEO is the practice of optimizing your brand to be cited by AI systems like ChatGPT, Perplexity and Google AI Overviews. Here's why it matters more than traditional SEO for B2B companies.",
    publishedAt: "2026-05-10",
    author: julio,   // 1 — Julio Llanos
    featured: true,
    body: [
      {
        type: "p",
        text: "In 2024, something changed that most B2B marketers missed: buyers started asking AI assistants instead of search engines. Not instead of Google entirely — but before Google. They'd type a question into ChatGPT or Perplexity, get a confident, synthesized answer, and only then visit one or two of the cited websites.",
      },
      {
        type: "p",
        text: "If your brand wasn't cited in that AI answer, you didn't exist in that first, critical moment of the buyer's journey. That's the problem GEO — Generative Engine Optimization — was built to solve.",
      },
      {
        type: "h2",
        id: "what-geo-means",
        text: "What GEO Actually Means",
      },
      {
        type: "p",
        text: "Generative Engine Optimization (GEO) is the discipline of optimizing your content, brand and digital presence so that AI-powered search systems — including ChatGPT, Perplexity, Google's AI Overviews, Claude and Bing Copilot — cite your brand when answering questions relevant to your business.",
      },
      {
        type: "p",
        text: "Unlike traditional SEO, which optimizes for a ranked list of blue links, GEO optimizes for inclusion in a synthesized answer. The AI reads hundreds of sources, decides which are most credible and relevant, and weaves a response that cites the winners. Your goal is to be one of those winners.",
      },
      {
        type: "quote",
        text: "The shift from ranked results to synthesized answers is the biggest change in information retrieval since PageRank. Brands that optimize for citations — not just rankings — will own the next decade of organic search.",
        cite: "Julio Ramírez, Rank Your Brand",
      },
      {
        type: "h2",
        id: "traditional-seo-limits",
        text: "Why Traditional SEO Alone Falls Short",
      },
      {
        type: "p",
        text: "Traditional SEO was built for a world where users scroll through a ranked list and click. In that model, ranking #1 means maximum traffic. But in generative search, the model synthesizes an answer from dozens of sources — and the user often gets what they need without clicking at all.",
      },
      {
        type: "p",
        text: "This doesn't mean traditional SEO is dead. It means the definition of 'winning' has changed. Winning now means being cited in the AI's answer, having your entity (your company, your founders, your key concepts) recognized and trusted by the model's training data, and having content that's structured in a way AI systems can quote confidently.",
      },
      {
        type: "ul",
        items: [
          "Traditional SEO wins: your page ranks #1 in the blue links below the AI response",
          "GEO wins: your brand is cited in the AI response itself, before any blue links appear",
          "The real goal: both — visibility in AI Overviews AND organic rankings",
        ],
      },
      {
        type: "h2",
        id: "three-pillars",
        text: "The Three Pillars of GEO",
      },
      {
        type: "h3",
        text: "1. Entity Authority",
      },
      {
        type: "p",
        text: "AI models understand the world through entities — people, companies, products, concepts. Your brand needs to be a well-defined, trustworthy entity in the knowledge graph. This means consistent mentions across authoritative sites, presence in Wikidata, Crunchbase and industry databases, and clear entity disambiguation (your company vs. other companies with similar names).",
      },
      {
        type: "h3",
        text: "2. Citability Engineering",
      },
      {
        type: "p",
        text: "Not all content is equally quotable by an AI. GEO-optimized content is structured so AI models can extract clear, confident answers. This means using precise definitions, factual claims with attributions, structured data (schema.org), and a writing style that's direct — not hedged, not vague. The AI needs to be able to cite you without risk of embarrassment.",
      },
      {
        type: "h3",
        text: "3. Conversational Alignment",
      },
      {
        type: "p",
        text: "Buyers ask AI systems questions in natural language, not keyword strings. GEO requires mapping your content to the actual questions your buyers ask — in full sentences, with the context that surrounds a real conversation. This is closer to FAQ optimization than traditional keyword stuffing.",
      },
      {
        type: "h2",
        id: "how-ai-cites",
        text: "How AI Models Decide What to Cite",
      },
      {
        type: "p",
        text: "The exact algorithms are proprietary and constantly evolving, but through systematic testing across hundreds of queries, several factors consistently influence AI citation rates:",
      },
      {
        type: "ul",
        items: [
          "Domain authority from traditional backlinks — still matters, feeds the underlying trust signal",
          "Topical authority — publishing deeply on a specific topic cluster consistently",
          "Freshness — recent content, especially on fast-moving topics, gets cited more",
          "Structural clarity — headers, bullet points and definitions are easier for AI to quote",
          "Third-party mentions — being cited BY other credible sources signals you're worth citing",
          "Entity disambiguation — being clearly identifiable as a specific company or expert",
        ],
      },
      {
        type: "callout",
        text: "We test 50+ queries weekly across ChatGPT, Perplexity and Claude for each client. The brands that get cited most consistently share one trait: they've published authoritative, structured content on a tight topic cluster — not scattered generalist content.",
      },
      {
        type: "h2",
        id: "geo-vs-seo",
        text: "GEO vs SEO: A Practical Comparison",
      },
      {
        type: "p",
        text: "Think of GEO and SEO as two layers of the same strategy. SEO builds the foundation: technical health, backlink authority, keyword rankings. GEO builds on top: entity recognition, citability, conversational alignment. Neither replaces the other — but brands that only do SEO are leaving the AI layer of search entirely to their competitors.",
      },
      {
        type: "h2",
        id: "measuring-geo",
        text: "Measuring Your GEO Performance",
      },
      {
        type: "p",
        text: "Traditional SEO has rankings and traffic. GEO has its own metrics, and they require manual and semi-automated testing since no single tool covers all AI engines comprehensively.",
      },
      {
        type: "ul",
        items: [
          "Citation rate: % of target queries where your brand is mentioned in AI answers",
          "Citation position: are you the first-mentioned brand or third? First matters more",
          "Context quality: is your brand cited positively, neutrally or in a comparison?",
          "Competitive displacement: are you being cited instead of competitors over time?",
          "Share of voice in AI: across 50–100 target queries, what % include your brand?",
        ],
      },
      {
        type: "h2",
        id: "getting-started",
        text: "Getting Started: Your First 30 Days",
      },
      {
        type: "p",
        text: "If you're starting from zero on GEO, here's the priority order. First, run your brand through a GEO baseline audit — test 20–30 queries in ChatGPT and Perplexity where you should appear. Document where you appear and where you don't. This is your baseline.",
      },
      {
        type: "p",
        text: "Second, strengthen your entity footprint. Ensure your company has a complete, accurate Crunchbase profile, LinkedIn company page, and ideally a Wikidata entry if your organization is notable enough. These are lightweight signals AI models use to confirm you're a real, established entity.",
      },
      {
        type: "p",
        text: "Third, audit your most important pages for citability. Do your service pages and blog posts answer specific questions directly? Do they use structured headings? Do they include precise claims with context? If not, rewrite them with GEO in mind.",
      },
      {
        type: "callout",
        text: "GEO is not a separate strategy from content marketing — it's a lens for making your content marketing work twice as hard. The same content that ranks in Google can be optimized to get cited in ChatGPT. It just needs to be structured correctly.",
      },
    ],
  },
  {
    slug: "ai-seo-vs-traditional-seo",
    title: "AI SEO vs Traditional SEO: What's Different and What Still Matters",
    category: "ai-search",
    excerpt: "Traditional SEO and AI SEO share the same foundation — but they diverge sharply at the strategy layer. Here's what B2B teams need to know to compete in both.",
    publishedAt: "2026-05-03",
    author: diego,  // 2 — Diego Parra
    body: [
      {
        type: "p",
        text: "Every week, a new article declares traditional SEO dead. And every week, organic traffic from blue-link search results continues to drive revenue for the companies paying attention. The reality is more nuanced: traditional SEO isn't dead, but it's no longer sufficient on its own. The B2B teams winning in 2026 are running both in parallel.",
      },
      {
        type: "h2",
        id: "the-fundamental-difference",
        text: "The Fundamental Difference",
      },
      {
        type: "p",
        text: "Traditional SEO is a placement game: rank as high as possible in the ordered list of results for a query. Click-through rate drops sharply after position 3. Position 1 gets roughly 40% of clicks. Everything else fights over the remaining crumbs.",
      },
      {
        type: "p",
        text: "AI SEO — or GEO — is a citation game. When ChatGPT answers 'What's the best B2B SEO agency for SaaS companies?', it synthesizes a response from multiple sources and may cite 0 to 5 brands. There's no ranking; you either appear in the answer or you don't. And unlike position 1 vs. position 3, being cited vs. not cited is a binary outcome.",
      },
      {
        type: "h2",
        id: "what-still-works",
        text: "What Traditional SEO Gets Right (Still)",
      },
      {
        type: "p",
        text: "Backlinks still matter — they feed the trust signals AI models use when deciding what's credible. Technical SEO still matters — slow, crawl-blocked sites don't get indexed, and unindexed content can't be cited. Keyword strategy still matters — you need to rank for the queries that appear above or below AI Overviews.",
      },
      {
        type: "ul",
        items: [
          "Domain authority from backlinks feeds AI citation trust signals",
          "Technical SEO ensures content is indexable and therefore trainable",
          "Keyword rankings still drive traffic for queries AI answers incompletely",
          "Content depth signals topical authority to both Google and AI models",
        ],
      },
      {
        type: "h2",
        id: "what-ai-seo-adds",
        text: "What AI SEO Adds to the Mix",
      },
      {
        type: "p",
        text: "GEO adds three capabilities that traditional SEO doesn't address: entity optimization (making sure AI models recognize and trust your brand as a distinct, authoritative entity), citability engineering (structuring content so AI can quote it confidently), and conversational query coverage (optimizing for full-sentence questions, not just keyword strings).",
      },
      {
        type: "h2",
        id: "b2b-hybrid-strategy",
        text: "The B2B Hybrid Strategy",
      },
      {
        type: "p",
        text: "For B2B companies, the right move is to run traditional SEO as the foundation (technical health, backlinks, keyword rankings) and layer GEO on top (entity authority, structured content, conversational alignment). Don't choose one — both serve different moments in the buyer journey. Your buyer might discover you via an AI citation, then validate by finding your content ranking on Google. Both touchpoints matter.",
      },
    ],
  },
  {
    slug: "how-to-rank-in-chatgpt",
    title: "How to Get Your Brand Cited in ChatGPT (A Practical B2B Guide)",
    category: "ai-search",
    excerpt: "Being mentioned in ChatGPT answers is becoming a primary lead source for B2B companies. Here's the systematic approach we use to increase citation rates for our clients.",
    publishedAt: "2026-04-25",
    author: katty,  // 3 — Katty Theran
    body: [
      {
        type: "p",
        text: "We run weekly citation audits for our clients across ChatGPT, Perplexity and Claude. After testing thousands of queries over 18 months, we've identified the patterns that consistently predict whether a B2B brand gets cited — or ignored. This guide shares the most actionable of those findings.",
      },
      {
        type: "h2",
        id: "why-chatgpt-citations-matter",
        text: "Why ChatGPT Citations Matter for B2B",
      },
      {
        type: "p",
        text: "In B2B, the buying journey typically starts with problem awareness, not vendor discovery. Your buyer has a problem and searches for understanding — 'how to improve B2B lead quality', 'best practices for SaaS onboarding', 'what is programmatic SEO'. AI assistants are increasingly the first port of call for these exploratory queries.",
      },
      {
        type: "p",
        text: "If your brand is cited when a buyer asks ChatGPT about your problem space, you enter their consideration set before they've even visited a website. That's a significant first-mover advantage that compounds over time.",
      },
      {
        type: "h2",
        id: "signals-chatgpt-uses",
        text: "The Signals ChatGPT Uses to Pick Sources",
      },
      {
        type: "p",
        text: "ChatGPT's training data has a cutoff, and its browsing plugin (when active) pulls real-time results. For citation purposes, both matter. In training data, brands with consistent, authoritative, widely-cited content in the training window appear more frequently. In real-time search, the algorithm favors pages that rank well, load fast and have clear, quotable content.",
      },
      {
        type: "ul",
        items: [
          "Topical depth: 10 thorough articles on one topic beats 100 thin ones",
          "Inbound citations: being linked by recognized industry publications",
          "Entity signals: Wikidata, Crunchbase, LinkedIn presence",
          "Content structure: clear headings, bullet points, definitions, numbered steps",
          "Domain age and authority: trust built over time",
          "Freshness for fast-moving topics: AI search favors recent content in volatile categories",
        ],
      },
      {
        type: "h2",
        id: "five-tactics",
        text: "Five Tactics to Increase Your Citation Rate",
      },
      {
        type: "p",
        text: "First: write direct definitions. When a buyer asks 'what is [your concept]', they want a clear, definitive answer. Write one. Make it the first paragraph of your most relevant page. Second: earn citations from trade publications. Getting mentioned in respected industry outlets (not just any guest post) tells AI models you're a credible source. Third: build a structured FAQ for each service. AI systems love FAQs — they're pre-packaged Q&A pairs that map perfectly to how generative AI formats answers.",
      },
      {
        type: "callout",
        text: "The fastest way to get cited in ChatGPT is to write the clearest, most authoritative definition of the problem your buyers have — and then get that page linked from at least three respected industry sources.",
      },
      {
        type: "h2",
        id: "measuring-chatgpt-presence",
        text: "Measuring Your ChatGPT Presence",
      },
      {
        type: "p",
        text: "Build a query bank of 30–50 questions your buyers ask at different stages (awareness, consideration, decision). Test each in ChatGPT (with and without browsing), Perplexity and Claude monthly. Track: citation frequency, citation position and sentiment. This becomes your GEO scorecard — as valuable as your keyword ranking report.",
      },
    ],
  },

  // ── B2B GROWTH ──────────────────────────────────────────────────────────────
  {
    slug: "seo-for-b2b-companies",
    title: "SEO for B2B Companies: A Complete Strategy Guide",
    category: "b2b-growth",
    excerpt: "B2B SEO is fundamentally different from B2C. Long buying cycles, committee decisions and niche keywords require a different approach. Here's how to build one.",
    publishedAt: "2026-05-15",
    author: paula,  // 4 — Paula Elena
    body: [
      {
        type: "p",
        text: "B2B SEO has a reputation for being slow and hard to measure. That reputation isn't wrong — but it's incomplete. The companies that treat B2B SEO as a long-term compounding asset consistently outperform those that treat it as a quick-win channel. The key is understanding what makes B2B SEO different, and building a strategy that accounts for those differences.",
      },
      {
        type: "h2",
        id: "b2b-vs-b2c-seo",
        text: "B2B SEO Is Fundamentally Different from B2C",
      },
      {
        type: "p",
        text: "In B2C, the buyer journey is often days or weeks. A user searches, reads a few reviews, and converts. In B2B, the journey can be 6–18 months. Multiple stakeholders are involved. The content a VP of Operations needs is completely different from what the CFO or the end user needs. Your SEO strategy has to cover all of them.",
      },
      {
        type: "ul",
        items: [
          "Buying cycles: B2C days-weeks, B2B months-years",
          "Decision makers: B2C individual, B2B committee of 5–10 people",
          "Content needed: B2C product-focused, B2B educational + ROI-focused + technical",
          "Keywords: B2C high volume broad, B2B low volume highly specific",
          "Conversion: B2C add to cart, B2B book a call / request a demo / contact",
        ],
      },
      {
        type: "h2",
        id: "keyword-strategy",
        text: "Keyword Strategy for Long Sales Cycles",
      },
      {
        type: "p",
        text: "The mistake most B2B teams make with SEO is targeting keywords that are too broad. 'CRM software' gets millions of monthly searches — and is dominated by HubSpot, Salesforce and Gartner. 'CRM software for manufacturing companies with field service teams' gets 200 monthly searches — and you can rank for it in 90 days with one good article.",
      },
      {
        type: "p",
        text: "B2B keyword strategy should cascade from broad (brand awareness) through mid-funnel (category education) to bottom-funnel (specific, high-intent queries). The bottom-funnel content converts best and often has the least competition.",
      },
      {
        type: "h2",
        id: "content-for-b2b-buyers",
        text: "Content That Converts B2B Buyers",
      },
      {
        type: "p",
        text: "B2B buyers consume 13 pieces of content on average before making a purchase decision. Your content library needs to serve every stage: awareness content (industry trends, problem definitions), consideration content (how-to guides, comparisons, case studies) and decision content (ROI calculators, demos, case studies with specific metrics). The last category is where most B2B sites fail — they have awareness content but no decision-stage assets.",
      },
      {
        type: "h2",
        id: "technical-seo-for-b2b",
        text: "Technical SEO for B2B Websites",
      },
      {
        type: "p",
        text: "B2B websites often accumulate technical debt faster than B2C: complex CMS setups, JavaScript-heavy platforms, legacy redirect chains and duplicate content from gated resource pages. Before investing in content, audit your technical foundation. A site with crawl issues won't see the returns from new content that a technically clean site would.",
      },
    ],
  },
  {
    slug: "b2b-saas-seo-guide",
    title: "B2B SaaS SEO: From Zero to Measurable Pipeline in 12 Months",
    category: "b2b-growth",
    excerpt: "SaaS companies have unique SEO challenges: fast product iteration, wide keyword landscapes and pressure to attribute revenue. Here's how the best B2B SaaS teams approach it.",
    publishedAt: "2026-04-18",
    author: julio,  // 5 — Julio Llanos
    body: [
      {
        type: "p",
        text: "SaaS SEO is one of the most leveraged investments a B2B company can make — but only if it's set up correctly from the start. Unlike project-based businesses, SaaS companies can use SEO to build organic customer acquisition channels that compound month over month, reducing CAC while increasing LTV.",
      },
      {
        type: "h2",
        id: "saas-seo-funnel",
        text: "The SaaS SEO Funnel",
      },
      {
        type: "p",
        text: "Think of SaaS SEO across three layers. The top layer is problem-awareness content — users who have the problem your software solves but don't know software is the solution. The middle layer is category content — users who know they need a tool like yours but are evaluating options. The bottom layer is high-intent purchase-ready content — users searching 'best [category] software', '[competitor] alternative', or '[your brand] pricing'.",
      },
      {
        type: "h2",
        id: "bottom-funnel-keywords",
        text: "Bottom-of-Funnel Keywords That Drive Trials",
      },
      {
        type: "p",
        text: "The fastest path to attributable revenue from SEO is bottom-of-funnel keywords. These have lower volume but dramatically higher intent. '[Competitor] vs [Your Product]' pages, '[Category] software pricing' pages, and '[Your Product] reviews' pages convert at 3–5× the rate of top-of-funnel content. Build these first, even if you also invest in content for the full funnel.",
      },
      {
        type: "ul",
        items: [
          "'[Competitor] alternative' — captures buyers actively evaluating your space",
          "'[Category] software for [industry]' — niche, high-intent, low competition",
          "'How to [key use case]' — attracts users with the exact problem you solve",
          "'[Your product] vs [competitor]' — own the comparison before G2/Capterra does",
        ],
      },
      {
        type: "h2",
        id: "product-led-seo",
        text: "Product-Led SEO for SaaS",
      },
      {
        type: "p",
        text: "The most scalable SaaS SEO strategy is product-led: let your product generate SEO-valuable pages automatically. Notion's public pages, Figma's community files, Airtable's template directory — all of these create thousands of indexed pages without manual content creation. If your product generates user-created content or has shareable outputs, there's likely a product-led SEO play worth exploring.",
      },
      {
        type: "h2",
        id: "measuring-seo-on-arr",
        text: "Measuring SEO Impact on ARR",
      },
      {
        type: "p",
        text: "The classic attribution problem: a prospect reads your blog, comes back two weeks later via a paid ad, signs up for a trial, and converts after a sales call. Which channel gets credit? The right answer is all of them — but SEO's first-touch contribution is often invisible in last-touch models. Set up first-touch attribution in GA4 and use UTM parameters consistently. Track organic trial signups, organic demo requests and organic MQL rate separately from other channels.",
      },
    ],
  },
  {
    slug: "best-b2b-seo-agency",
    title: "How to Choose the Best B2B SEO Agency (What to Ask, What to Avoid)",
    category: "b2b-growth",
    excerpt: "Not all SEO agencies understand B2B. Here's a practical framework for evaluating agencies, avoiding common traps and ensuring the engagement actually drives pipeline.",
    publishedAt: "2026-04-10",
    author: diego,  // 6 — Diego Parra
    body: [
      {
        type: "p",
        text: "Most B2B SEO agencies are built for B2C or e-commerce. They're optimized for traffic volume and quick wins — not for the 6-month nurture cycles, multi-stakeholder buying processes and account-based metrics that define B2B success. Finding an agency that actually understands your business requires asking the right questions before you sign anything.",
      },
      {
        type: "h2",
        id: "what-makes-a-great-b2b-seo-agency",
        text: "What Makes a Great B2B SEO Agency",
      },
      {
        type: "p",
        text: "A great B2B SEO agency understands that the goal is pipeline, not traffic. They can explain how they attribute SEO contribution to revenue. They've worked with companies in complex sales cycles. They know the difference between MQL and SQL. And they can speak intelligently about the buying committee — who you're actually trying to reach, and what each stakeholder needs to see.",
      },
      {
        type: "ul",
        items: [
          "Pipeline focus, not traffic vanity metrics",
          "B2B-specific case studies with revenue attribution",
          "Understanding of complex sales cycles and buyer committees",
          "Transparent reporting with leading AND lagging indicators",
          "Ability to integrate with your CRM for closed-loop attribution",
        ],
      },
      {
        type: "h2",
        id: "questions-to-ask",
        text: "Questions to Ask Before You Hire",
      },
      {
        type: "p",
        text: "Ask: 'What does success look like in month 6 for a company like ours, and how will you measure it?' If they answer only in keyword rankings and traffic, walk away. Ask: 'Can you show me a case study from a B2B company in a long sales cycle?' If they show you e-commerce or B2C examples, that's a red flag. Ask: 'How do you approach content creation — do you use AI, human writers, or a mix?' The answer tells you a lot about the quality you can expect.",
      },
      {
        type: "h2",
        id: "red-flags",
        text: "Red Flags to Watch For",
      },
      {
        type: "p",
        text: "Red flag #1: guarantees. No legitimate SEO agency guarantees specific rankings. The algorithm changes, competitors adapt, and search results are inherently unpredictable. Any agency that guarantees page 1 rankings is either naive or dishonest. Red flag #2: lock-in without results. Long contracts with no performance clauses are a sign the agency isn't confident in their work. Red flag #3: AI-generated content at scale with no editorial oversight. Quantity without quality doesn't work in B2B, where your buyers are sophisticated and can spot thin content immediately.",
      },
      {
        type: "h2",
        id: "evaluating-roi",
        text: "How to Evaluate ROI from an Agency",
      },
      {
        type: "p",
        text: "Set a baseline before you start: current organic traffic, current organic leads, current organic MQL rate. At month 3, check leading indicators: keyword movement, indexed page count, backlinks acquired, organic CTR trends. At month 6, check lagging indicators: organic MQL growth, organic trial signup rate, organic revenue attribution. If you're not seeing positive trends by month 3, the strategy needs to change — not wait for month 12.",
      },
    ],
  },

  // ── SEO ENGINEERING ─────────────────────────────────────────────────────────
  {
    slug: "technical-seo-for-saas",
    title: "Technical SEO for SaaS: The Complete 2026 Checklist",
    category: "seo-engineering",
    excerpt: "SaaS websites have unique technical SEO challenges — JavaScript rendering, subdomain strategy, dynamic content and Core Web Vitals. Here's how to tackle each.",
    publishedAt: "2026-05-08",
    author: katty,  // 7 — Katty Theran
    body: [
      {
        type: "p",
        text: "SaaS companies build technically sophisticated products — but their marketing websites often have significant technical SEO gaps. JavaScript-heavy builds, poor canonicalization, app subdomains that dilute authority, and neglected Core Web Vitals are the most common culprits. This guide covers the most impactful technical fixes for SaaS websites in 2026.",
      },
      {
        type: "h2",
        id: "core-web-vitals",
        text: "Core Web Vitals and SaaS Rankings",
      },
      {
        type: "p",
        text: "Google's Core Web Vitals (LCP, FID/INP, CLS) are a confirmed ranking factor. SaaS marketing sites frequently fail on LCP because they load large hero images or rely on JavaScript to render above-the-fold content. The fix: preload your LCP image, eliminate render-blocking resources from the critical path, and use a CDN that serves from edge nodes close to your visitors.",
      },
      {
        type: "ul",
        items: [
          "LCP (Largest Contentful Paint): target < 2.5s — preload hero image, optimize server response time",
          "INP (Interaction to Next Paint): target < 200ms — reduce JavaScript execution on main thread",
          "CLS (Cumulative Layout Shift): target < 0.1 — explicitly size all images and embeds",
          "TTFB (Time to First Byte): target < 800ms — use a CDN and optimize server-side rendering",
        ],
      },
      {
        type: "h2",
        id: "javascript-rendering",
        text: "JavaScript Rendering and Crawlability",
      },
      {
        type: "p",
        text: "Google can render JavaScript, but it processes JS-rendered pages in a second wave of crawling — which can delay indexing by days or weeks. More importantly, Googlebot's budget for JS rendering is limited, so complex SPAs often see incomplete crawling of their content. The solution for marketing sites: server-side rendering (SSR) or static site generation (SSG) for all content pages. Reserve client-side rendering for the app itself.",
      },
      {
        type: "h2",
        id: "subdomain-vs-subdirectory",
        text: "Subdomain vs Subdirectory for Your Blog",
      },
      {
        type: "p",
        text: "One of the most consequential technical decisions a SaaS company makes is where to host their blog: blog.company.com (subdomain) vs company.com/blog (subdirectory). The SEO answer is unambiguous: subdirectories win. Backlinks to blog.company.com build domain authority for that subdomain, not for your main domain. Subdirectory blog posts pass link equity back to your main domain, which helps all your pages rank.",
      },
      {
        type: "h2",
        id: "schema-for-saas",
        text: "Schema Markup for SaaS Products",
      },
      {
        type: "p",
        text: "SaaS companies benefit from three schema types above all others. SoftwareApplication schema tells Google explicitly what your product does, what category it's in and what platforms it supports. FAQPage schema helps capture featured snippets for question-type queries. And Review/AggregateRating schema (with care — must reflect real reviews) can surface star ratings in search results, dramatically improving CTR for competitive queries.",
      },
    ],
  },
  {
    slug: "technical-seo-audit",
    title: "How to Run a Technical SEO Audit: A Step-by-Step Process",
    category: "seo-engineering",
    excerpt: "A technical SEO audit is the starting point for any serious SEO engagement. Here's the exact 4-phase process we use for every new B2B client.",
    publishedAt: "2026-04-02",
    author: paula,  // 8 — Paula Elena
    body: [
      {
        type: "p",
        text: "A technical SEO audit is not a one-time event — it's a diagnostic protocol that should run quarterly for any site with more than 100 indexed pages. Done right, it surfaces the technical issues blocking your organic growth before they compound into traffic losses. Here's the four-phase process we run for every B2B client.",
      },
      {
        type: "h2",
        id: "phase-1-crawl",
        text: "Phase 1 — Crawl Analysis",
      },
      {
        type: "p",
        text: "Start with a full crawl using Screaming Frog, Sitebulb or Ahrefs. You're looking for: pages that return non-200 status codes, pages blocked by robots.txt that shouldn't be, redirect chains longer than two hops, pages without canonical tags or with incorrect canonicals, and pages with duplicate or near-duplicate titles and meta descriptions.",
      },
      {
        type: "ul",
        items: [
          "4xx errors: broken pages that may have backlinks pointing to them (redirect to relevant live page)",
          "5xx errors: server errors that prevent crawling (escalate to dev team immediately)",
          "Redirect chains: A → B → C chains leak PageRank — flatten to A → C",
          "Blocked pages: confirm robots.txt isn't accidentally blocking important content",
          "Duplicate content: find and resolve with canonical tags or 301 redirects",
        ],
      },
      {
        type: "h2",
        id: "phase-2-indexability",
        text: "Phase 2 — Indexability and Canonicals",
      },
      {
        type: "p",
        text: "Crawlability (a bot can reach the page) and indexability (Google will include it in results) are different things. Cross-reference your crawl data with Google Search Console's Coverage report. Pages marked 'Excluded' or 'Noindexed' need investigation — some exclusions are intentional (thank-you pages, gated content), but many are accidental. Check: noindex tags, canonical mismatches, hreflang errors for multilingual sites, and orphan pages (content with no internal links pointing to it).",
      },
      {
        type: "h2",
        id: "phase-3-performance",
        text: "Phase 3 — Performance and Core Web Vitals",
      },
      {
        type: "p",
        text: "Use PageSpeed Insights and Chrome UX Report (CrUX) data in GSC to measure real-user Core Web Vitals. Field data from CrUX reflects how actual users experience your site — it's what Google uses for ranking. Focus on your most valuable pages first: homepage, key service pages, top blog posts. Fix LCP issues (image optimization, preloading), INP issues (reduce JavaScript blocking) and CLS issues (explicit element dimensions).",
      },
      {
        type: "h2",
        id: "phase-4-schema",
        text: "Phase 4 — Schema and Structured Data",
      },
      {
        type: "p",
        text: "Validate all existing schema with Google's Rich Results Test. Look for: schema that errors (invalid JSON-LD), schema that's present but not eligible for rich results (correct but incomplete), and high-value pages that have no schema at all. Priority schemas for B2B sites: Organization, WebSite, Service, FAQPage on service/product pages, Article on blog posts, and BreadcrumbList on all internal pages.",
      },
    ],
  },

  // ── SEO ROI ──────────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-b2b-seo-cost",
    title: "How Much Does B2B SEO Cost? An Honest Breakdown",
    category: "seo-roi",
    excerpt: "B2B SEO pricing ranges from $500/month to $20,000+. Here's what drives that range, what you actually get at each level, and how to know what's right for your stage.",
    publishedAt: "2026-05-01",
    author: julio,  // 9 — Julio Llanos
    body: [
      {
        type: "p",
        text: "The most common question we get from B2B founders and marketing leaders: 'How much should we be spending on SEO?' The honest answer: it depends on your current organic baseline, your competitive landscape, your growth targets and your time horizon. But that's not useful without context. Here's the context.",
      },
      {
        type: "h2",
        id: "the-range",
        text: "The Range Is Wider Than You Think",
      },
      {
        type: "p",
        text: "B2B SEO pricing runs from about $500/month (a solo freelancer running basic optimizations) to $25,000+/month (a full-service agency managing content, links, technical and GEO for an enterprise brand). The right number for your business sits somewhere in this range — but it's not determined by what you can afford. It's determined by what competitive level of investment your market requires to win.",
      },
      {
        type: "callout",
        text: "The worst SEO investment is spending too little to compete. If your top three competitors are each spending $5,000–$10,000/month on SEO, investing $800/month will give you activity without results.",
      },
      {
        type: "h2",
        id: "what-you-pay-for",
        text: "What You Pay For at Each Level",
      },
      {
        type: "ul",
        items: [
          "$500–1,500/month: Freelancer or entry-level agency — basic keyword tracking, monthly reporting, light content edits. No proactive link building, no technical SEO, no GEO.",
          "$1,500–3,500/month: Mid-tier agency — keyword strategy, 2–4 articles/month, some technical fixes, quarterly link outreach. Suitable for early-stage companies in low-competition niches.",
          "$3,500–8,000/month: Full-service retainer — ongoing content production, proactive link building, technical SEO, CRO and reporting. The tier where compounding organic growth becomes realistic.",
          "$8,000+/month: Premium retainer — adds GEO, thought leadership, executive ghostwriting, international SEO and dedicated account management. For established brands competing in saturated markets.",
        ],
      },
      {
        type: "h2",
        id: "agency-vs-inhouse",
        text: "Agency vs In-House vs Freelancer",
      },
      {
        type: "p",
        text: "In-house SEO makes sense when you have enough content production volume to justify a full-time content lead, when your technical complexity requires daily attention, and when you're spending $15,000+/month on the function total (salary + tools + link building budget). Below that threshold, an agency or senior freelancer typically provides better ROI.",
      },
      {
        type: "h2",
        id: "budgeting-for-roi",
        text: "How to Budget for SEO ROI",
      },
      {
        type: "p",
        text: "Start with your organic traffic value: what would you pay in PPC to get the same traffic your organic channel delivers? If you're getting 5,000 organic sessions/month with an average CPC of $8 for your keywords, your organic channel is worth $40,000/month in paid equivalent. If you're spending $3,000/month on SEO to generate that value, you have a 13× return. Most B2B SEO programs with proper execution deliver 5–15× over 12–24 months. The challenge is the time lag — SEO doesn't pay in month 1. Set expectations accordingly.",
      },
    ],
  },
  {
    slug: "seo-retainer-vs-project",
    title: "SEO Retainer vs Project: Which Model Is Right for Your B2B Company?",
    category: "seo-roi",
    excerpt: "Should you hire for a one-time SEO project or a monthly retainer? The answer depends on your current state, your goals and your capacity to execute. Here's the framework.",
    publishedAt: "2026-03-28",
    author: diego,  // 10 — Diego Parra
    body: [
      {
        type: "p",
        text: "The question of retainer vs project comes up in almost every B2B SEO conversation. Both models have legitimate use cases — the mistake is choosing the wrong one for your situation. Companies that start with a retainer when they need a project waste money on ongoing work before the foundation is ready. Companies that do a project when they need ongoing investment see initial gains reverse within 6 months.",
      },
      {
        type: "h2",
        id: "when-project",
        text: "When a Project Makes Sense",
      },
      {
        type: "p",
        text: "A project-based engagement makes sense when you have a specific, bounded problem: your site has severe technical issues blocking indexing, you need a one-time content strategy document, you're launching a new website and need SEO-integrated development, or you want an audit to guide your in-house team's priorities. Projects have defined deliverables, timelines and end states.",
      },
      {
        type: "ul",
        items: [
          "New website with no SEO foundation — project to build the foundation first",
          "Technical emergency — crawl issues, manual penalties, major algorithm impact",
          "Site migration — consolidating domains, replatforming, URL structure changes",
          "One-time audit to guide in-house or freelance execution",
        ],
      },
      {
        type: "h2",
        id: "when-retainer",
        text: "When a Retainer Is the Right Move",
      },
      {
        type: "p",
        text: "A retainer makes sense when SEO is a sustained growth channel, not a one-time fix. If you want to grow organic traffic month over month, publish content consistently, build authority through link earning, and track compounding improvements, you need ongoing engagement. The keyword is 'compounding' — SEO's returns don't come from a single intervention but from consistent, cumulative effort over 6–24 months.",
      },
      {
        type: "h2",
        id: "hybrid-approaches",
        text: "Hybrid Approaches That Work",
      },
      {
        type: "p",
        text: "The most effective model for many B2B companies: start with a project (foundation + audit + strategy), then transition to a retainer once the foundation is solid. This avoids paying retainer fees while your agency is still fixing technical issues, and ensures you're investing in content and link building from a position of technical strength. Budget for 1–2 months of project work, then 6+ months of retainer.",
      },
      {
        type: "h2",
        id: "transition-to-retainer",
        text: "How to Transition from Project to Retainer",
      },
      {
        type: "p",
        text: "The transition from project to retainer should be triggered by specific conditions: technical issues resolved (site health score > 80), analytics tracking in place and validated, keyword strategy agreed upon, content calendar established and content velocity defined. Don't extend a retainer just because you like working with the agency — ensure you have clear KPIs and milestone targets that justify ongoing investment.",
      },
    ],
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

export function getCategory(slug: string): Category | undefined {
  return categories[slug as CategorySlug];
}

export function isCategorySlug(slug: string): slug is CategorySlug {
  return slug in categories;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function articlesByCategory(slug: CategorySlug): Article[] {
  return articles.filter((a) => a.category === slug);
}

export function relatedArticles(article: Article, count = 3): Article[] {
  return articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, count);
}

export function readingTimeMinutes(body: Block[]): number {
  const words = body.reduce((acc, block) => {
    if (block.type === "p" || block.type === "quote" || block.type === "callout") {
      return acc + block.text.split(" ").length;
    }
    if (block.type === "h2" || block.type === "h3") {
      return acc + block.text.split(" ").length;
    }
    if (block.type === "ul") {
      return acc + block.items.join(" ").split(" ").length;
    }
    return acc;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const allArticles = articles;
export const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
