import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScrollRestoration,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-canvas px-6 text-center">
      <div className="absolute inset-0 -z-10 bg-soft-glow" />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />
      <div className="font-display text-[clamp(6rem,20vw,14rem)] leading-none text-prompt opacity-15 select-none">
        404
      </div>
      <div className="-mt-8 max-w-lg">
        <p className="font-display text-xs tracking-[0.3em] text-prompt uppercase">Page not found</p>
        <h1 className="mt-4 text-4xl lg:text-5xl">
          This page <span className="italic text-prompt">doesn't exist.</span>
        </h1>
        <p className="mt-6 text-ink/65">
          The page you're looking for has been moved, renamed, or never existed.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-prompt px-6 py-3 font-display text-sm uppercase tracking-wider text-canvas transition-all hover:shadow-elegant hover:scale-[1.03]"
          >
            Go home <span aria-hidden>→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-display text-sm uppercase tracking-wider text-ink transition-colors hover:border-prompt hover:text-prompt"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rank Your Brand — AI SEO Agency for B2B" },
      { name: "description", content: "We build visibility systems that get your brand cited by Google, ChatGPT and Perplexity. AI-native SEO for B2B companies in the US and Europe." },
      { name: "author", content: "Rank Your Brand" },
      { property: "og:title", content: "Rank Your Brand — AI SEO Agency for B2B" },
      { property: "og:description", content: "We build visibility systems that get B2B brands cited by ChatGPT, Perplexity and Google AI. Technical SEO + GEO + content strategy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rank Your Brand — AI SEO Agency for B2B" },
      { name: "twitter:description", content: "We build visibility systems that get B2B brands cited by ChatGPT, Perplexity and Google AI. Technical SEO + GEO + content strategy." },
      { property: "og:image", content: "https://rankyourbrand.co/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://rankyourbrand.co/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://rankyourbrand.co/#organization",
  name: "Rank Your Brand",
  alternateName: "RYB",
  url: "https://rankyourbrand.co",
  logo: {
    "@type": "ImageObject",
    url: "https://rankyourbrand.co/favicon.svg",
  },
  description: "AI-native SEO agency for B2B companies. We build visibility systems that get brands cited by ChatGPT, Perplexity and Google AI.",
  foundingDate: "2024",
  priceRange: "$$$",
  areaServed: ["US", "Europe", "LATAM"],
  knowsLanguage: ["en", "es"],
  serviceType: ["SEO", "Technical SEO", "AI SEO", "Generative Engine Optimization", "B2B SEO"],
  sameAs: [
    "https://www.linkedin.com/company/rankyourbrand",
    "https://x.com/rankyourbrand",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "julio@rankyourbrand.co",
    availableLanguage: ["English", "Spanish"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rankyourbrand.co/#website",
  name: "Rank Your Brand",
  url: "https://rankyourbrand.co",
  publisher: { "@id": "https://rankyourbrand.co/#organization" },
};

const GTM_ID = "GTM-P4DCNPGR";
const GA_ID = "G-0XBK3TWED7";

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html:
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`
        }} />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html:
          `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`
        }} />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
