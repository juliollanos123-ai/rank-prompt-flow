
# Rank Your Brand — Website Build Plan

A modern, tech-forward marketing site for RYB. English copy from the architecture doc, brand-strict design (Aglet Mono + the 55/35/15/5 palette), polished animations, and a clear conversion path to an external Calendly/Typeform.

## Scope (Phase 1)

Six routes, all SSR-friendly with their own SEO metadata:

- `/` Home
- `/methodology`
- `/services` (overview)
- `/services/blueprint`
- `/services/scale`
- `/services/landmark`
- `/audit` (conversion page → external link)

Other routes from the doc (Proof, Resources, Blog, Tools) are **not** included now. Footer links for them will route to a styled "Coming soon" page so nothing 404s.

## Brand System

Implemented as design tokens in `src/styles.css` (oklch). No hardcoded colors in components.

- **Orange Prompt** `#d05206` — primary, dominant (55%): CTAs, key blocks, headlines accents.
- **Grey Rank** `#3f3b39` — text, structure, dark sections (35%).
- **Ivory Click** `#f6fcee` — default background (15% of "color" but the canvas).
- **Blue Flow** `#007ba7` — accent only (5%): tech glyphs, micro-interactions, the gradient endpoint.

**The Diagonal Perfect gradient**: a reusable utility/CSS class (`--gradient-diagonal`) going from Orange Prompt across the surface into Blue Flow anchored at the bottom-right corner. Used on hero, final CTA, and one section divider — never spammed.

**Typography**:
- `Aglet Mono` (uploaded `.otf` Black + Black Italic) installed via `@font-face`, used for display headlines, section eyebrows, stats, and technical labels.
- Body: a clean neutral pairing (Inter or similar via Google Fonts) so long-form copy stays legible — Aglet stays special.

**Logo system**: copy the four uploaded SVGs into `src/assets/brand/` (isotipo color + mono variants, full wordmarks). Used in nav, footer, and as oversized graphic accents.

## Page-by-page

### Home (`/`)
1. **Nav** — sticky, ivory background, wordmark left, links right, Orange Prompt CTA "Free Audit".
2. **Hero** — 90vh, Aglet Mono headline "Your buyers already searched for you in ChatGPT. Did they find you?", subhead, two CTAs. Visual: split-card mock (Google SERP vs ChatGPT answer with competitor cited, RYB missing). Diagonal gradient backdrop with subtle grid.
3. **GEO Gap timeline** — 2020 → 2025 horizontal timeline, animated on scroll, big stat callout "68%".
4. **Solution — three pillars** — Architecture / AI-Native Ops / GEO. Cards with icon, hover elevation + Blue Flow border glow.
5. **Case Study #0 dashboard** — static mock styled as a real dashboard panel (dark Grey Rank surface, Orange/Blue accents, fake but believable metrics, "Last updated" stamp). Labeled clearly so it reads as live-feel.
6. **Services preview** — three cards (Blueprint / Scale / Landmark) with price anchors, link to each detail page.
7. **Final CTA band** — full-width diagonal gradient, single big button to `/audit`.
8. **Footer** — logo, nav, contact, legal.

### Methodology (`/methodology`)
- Hero, "RYB Operating System" diagram (Scout → Architect → Writer → Watchdog → Reporter) built with SVG + framer-motion path animation.
- "AI-Native ≠ ChatGPT" comparison table with animated strikethrough vs check-in.
- Tech stack grid (Strategy / Automation / Delivery) as branded chips.
- CTA band.

### Services overview (`/services`)
- Intro + three large cards linking to each tier.

### Service detail pages (`/services/blueprint`, `/scale`, `/landmark`)
- Shared template component: hero (name + tagline + price anchor), "Who this is for", deliverables list, timeline, FAQ accordion, CTA. Distinct accent treatment per tier (Blueprint = ivory/orange, Scale = grey/orange, Landmark = grey/blue accents) while staying inside the palette.

### Audit (`/audit`)
- Focused single-screen conversion page: bold value prop, what you get in 48h, social proof strip, and a primary button that opens the external Calendly/Typeform URL in a new tab. A placeholder URL goes in until you provide the real one.

## Animations

Using **framer-motion** (add as dependency) plus the existing `tw-animate-css` utilities. Restrained, purposeful:

- Hero: staggered fade-up of headline words, subtle parallax on the split-card visual, ambient gradient drift.
- Section reveals: `whileInView` fade-up + small y-offset, once-only.
- Timeline: progress line draws as user scrolls.
- Operating System diagram: nodes fade in sequence, connecting lines animate stroke-dashoffset.
- Cards: lift + Blue Flow ring on hover, magnetic CTA buttons.
- Numbers (68%, prices, dashboard metrics): count-up on enter.

All animations respect `prefers-reduced-motion`.

## Technical details

- **Stack**: existing TanStack Start + Tailwind v4 setup. No backend needed for Phase 1 (Lovable Cloud not enabled).
- **Routing**: one file per page under `src/routes/` (flat dot convention for service children: `services.blueprint.tsx`, etc.). Each route exports `head()` with unique title/description/og tags.
- **Fonts**: copy `AgletMonoTrial-Black.otf` and `-BlackItalic.otf` to `src/assets/fonts/`, declare via `@font-face` in `styles.css`, expose as `--font-display`.
- **Assets**: copy the four uploaded SVGs to `src/assets/brand/`, import as ES6 modules.
- **Components**: shared primitives in `src/components/` (`Nav`, `Footer`, `CTAButton`, `SectionEyebrow`, `GradientBackdrop`, `ServiceCard`, `DashboardMock`, `OperatingSystemDiagram`, `Timeline`, `ComparisonTable`).
- **Design tokens**: extend `src/styles.css` with brand colors in oklch, gradient variables, shadow + radius scale, and the Aglet `@font-face`. Override shadcn semantic tokens (`--primary` = Orange Prompt, `--background` = Ivory Click, `--foreground` = Grey Rank, `--accent` = Blue Flow) so existing UI components inherit the brand automatically.
- **SEO**: per-route metadata, single H1 per page, semantic landmarks, alt text, JSON-LD `Organization` on Home.
- **Responsive**: mobile-first; timeline + comparison stack vertically; nav collapses to a sheet.
- **Placeholders to confirm later**: Calendly/Typeform URL, real testimonial/logos, real dashboard metrics. All clearly marked `TODO` in code with sensible defaults.

## Deliverable

A polished, animated, conversion-oriented six-route site that visually nails the RYB brand and is ready to plug in the real audit URL and (later) a live dashboard.
