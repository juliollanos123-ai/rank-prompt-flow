# Rank Your Brand — sitio web (rankyourbrand.co)

Sitio bilingüe (EN + ES) de la agencia Rank Your Brand (RYB). Este repo es la fuente de verdad del sitio.
Guía operativa completa y checklists: `docs/ADMIN_SITIO.md`. Léela antes de crear páginas o artículos.

## Stack
TanStack Start + React 19 + TypeScript + Tailwind v4 + shadcn/ui, desplegado en Cloudflare Workers vía Lovable.
Gestor de paquetes: **bun** (`bun.lock`). Comandos: `bun install`, `bun run dev`, `bun run build`, `bun run lint`.
No hay CMS ni base de datos en este repo. Los formularios (contacto y auditoría) envían a Basin.

## Reglas que no se rompen
1. **Dominio canónico: `https://rankyourbrand.co`.** Nunca `rank-prompt-flow.lovable.app` en canonical, og:url, hreflang ni sitemap.
2. **Todo es bilingüe.** Cada página EN tiene su par ES (`/es/...`) con hreflang cruzado y entrada en `src/i18n/langRoutes.ts`.
3. **No editar a mano** `src/routeTree.gen.ts` (se autogenera) ni `src/components/ui/*` (shadcn).
4. **Marca (regla 55/35/15/5):** Ivory Click `#f6fcee` (canvas), Grey Rank `#3f3b39` (texto/estructura), Orange Prompt `#d05206` (CTAs/acentos), Blue Flow `#007ba7` (solo acento tech). Usar tokens `canvas`, `ink`, `prompt`, `flow`; no colores hex sueltos. Tipografía: Aglet Mono.
5. **Nunca inventar** clientes, logos, métricas ni testimonios. Si no hay dato real, se deja marcado como pendiente.
6. **Cada cambio en una rama y un pull request**, nunca commits directos a `main`. Lovable también escribe en `main`; evitar editar en Lovable y en Claude Code a la vez.
7. Contenido para clientes y visitantes: español neutro de negocio (tuteo), sin jerga técnica. Inglés para las rutas EN.

## Dónde vive cada cosa
- Páginas: `src/routes/` — EN `services.<slug>.tsx`, ES `es.servicios.<slug>.tsx`.
- Plantilla de servicio: `src/components/site/ServiceDetail.tsx` (props: tag, tier, format, duration, tagline, includes, timeline, forWho, notFit, outcomes, faqs, finalCtaText, lang, tone).
- Blog: datos en `src/data/blog.ts` (EN) y `src/data/blog.es.ts` (ES, con mapas de slugs EN↔ES).
- Navegación y pie: `src/components/site/Nav.tsx`, `Footer.tsx`.
- Mapa EN↔ES: `src/i18n/langRoutes.ts`.
- SEO/GEO estático: `public/sitemap.xml` (manual), `public/llms.txt`, `public/robots.txt`.
- Schema global y metas base: `src/routes/__root.tsx`.
- Tokens de diseño: `src/styles.css`.

## Antes de dar algo por terminado
`bun run build` y `bun run lint` sin errores; la ruta nueva abre en EN y ES; canonical y hreflang correctos; sitemap actualizado.
