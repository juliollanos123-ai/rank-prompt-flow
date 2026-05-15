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
      { title: "Rank Your Brand — AI-Native SEO for B2B" },
      { name: "description", content: "We build visibility systems that get your brand cited by Google, ChatGPT and Perplexity. AI-native SEO for B2B companies in the US and Europe." },
      { name: "author", content: "Rank Your Brand" },
      { property: "og:title", content: "Rank Your Brand — AI-Native SEO for B2B" },
      { property: "og:description", content: "We build visibility systems that get your brand cited by Google, ChatGPT and Perplexity. AI-native SEO for B2B companies in the US and Europe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rank Your Brand — AI-Native SEO for B2B" },
      { name: "twitter:description", content: "We build visibility systems that get your brand cited by Google, ChatGPT and Perplexity. AI-native SEO for B2B companies in the US and Europe." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e272053b-9c9c-432f-b273-ba60f813eb4e/id-preview-552e8080--791b7d41-aa91-45bc-b533-3c6986a10545.lovable.app-1778353035482.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e272053b-9c9c-432f-b273-ba60f813eb4e/id-preview-552e8080--791b7d41-aa91-45bc-b533-3c6986a10545.lovable.app-1778353035482.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
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
  "@type": "ProfessionalService",
  name: "Rank Your Brand",
  alternateName: "RYB",
  url: "https://rankyourbrand.co",
  email: "julio@rankyourbrand.co",
  description:
    "AI-native SEO agency for B2B. We build visibility systems that get brands cited by ChatGPT, Perplexity and Google AI.",
  areaServed: ["United States", "Europe", "Latin America"],
  knowsAbout: [
    "SEO",
    "Generative Engine Optimization",
    "B2B Marketing",
    "AI Search Optimization",
    "Content Strategy",
  ],
  sameAs: [
    "https://www.linkedin.com/company/rankyourbrand",
    "https://x.com/rankyourbrand",
  ],
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
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
