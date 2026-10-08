# Guía de administración del sitio — rankyourbrand.co

Última revisión: 7 oct 2026. Complementa a `CLAUDE.md` (reglas) con el paso a paso.

## 1. Cómo fluye un cambio

```
Claude Code (Mac de Julio) → rama + Pull Request en GitHub → merge a main
→ Lovable sincroniza el repo → Julio revisa la vista previa → botón Publish en Lovable → rankyourbrand.co
```

- **Merge a `main` no publica por sí solo.** Hay que pulsar *Publish* en Lovable (proyecto "Rank Your Brand AI").
- Vista previa: https://id-preview--791b7d41-aa91-45bc-b533-3c6986a10545.lovable.app
- Editor Lovable: https://lovable.dev/projects/791b7d41-aa91-45bc-b533-3c6986a10545
- Regla de oro: **un solo editor a la vez.** Si se edita en Lovable, hacer `git pull` antes de trabajar en Claude Code.

## 2. Qué se puede y qué no

| Se puede (código) | No se puede / requiere otra herramienta |
|---|---|
| Crear y editar landings, páginas de servicio, home | Editar contenido sin tocar código (no hay CMS) |
| Publicar artículos de blog EN/ES | Ver analítica (usar GA/GTM y Search Console) |
| Cambiar metas, schema, sitemap, `llms.txt` | Cambiar el destino de formularios (se hace en Basin y en `BASIN_ENDPOINT` de cada formulario) |
| Ajustar navegación, pie, CTAs, diseño | Publicar a producción (lo hace Julio en Lovable) |

## 3. Checklist: nueva página de servicio / landing con la plantilla `ServiceDetail`

1. Copiar `src/routes/services.branding.tsx` → `src/routes/services.<slug>.tsx` y `es.servicios.branding.tsx` → `es.servicios.<slug-es>.tsx`.
2. Cambiar `createFileRoute("/services/<slug>")` (y la ruta ES) y todo el copy.
3. En ambas: `title` (≤60 caracteres), `description` (≤155), `og:title`, `og:description`, `og:url`, `canonical` y los dos `alternate` (en/es) **con `https://rankyourbrand.co`**.
4. `src/i18n/langRoutes.ts`: agregar el par EN→ES **y** ES→EN.
5. `Nav.tsx` y `Footer.tsx`: agregar el enlace si debe aparecer en el menú.
6. `public/sitemap.xml`: agregar las dos URLs con `xhtml:link` hreflang cruzado y `lastmod`.
7. `public/llms.txt`: agregar una línea con la descripción del servicio.
8. `bun run build && bun run lint`, abrir la ruta EN y ES en `bun run dev`.
9. PR → revisión de Julio en la vista previa de Lovable → merge → Publish.

Para una landing que no encaje en `ServiceDetail` (campaña, lead magnet), pedir un diseño propio reutilizando `Reveal`, `Eyebrow`, `CTA`, `Breadcrumbs` y los tokens de `styles.css`.

## 4. Checklist: nuevo artículo de blog

1. EN: agregar un objeto a `articles` en `src/data/blog.ts` (`slug`, `title`, `category`, `excerpt`, `publishedAt`, `author`, `body` con bloques `h2/h3/p/ul/quote/callout`).
2. ES: agregar la versión en `src/data/blog.es.ts` y el par de slugs en `articleSlugEnToEs` / `articleSlugEsToEn`.
3. Categorías válidas: `ai-search`, `b2b-growth`, `seo-engineering`, `seo-roi` (en ES: `busqueda-con-ia`, `crecimiento-b2b`, `seo-tecnico`, `roi-del-seo`).
4. Agregar las URLs al sitemap.
5. Build, revisar, PR.

## 5. Estado actual y pendientes conocidos (7 oct 2026)

1. **Canonical incorrecto en ~20 rutas.** Home, servicios nuevos, metodología y proof usan `https://rank-prompt-flow.lovable.app/...` en `canonical`, `og:url` y `hreflang` en vez de `https://rankyourbrand.co/...`. Las rutas de blog, contacto, auditoría y las 3 páginas SEO originales sí lo tienen bien. Corregir antes de publicar nada más.
2. **`/proof` y `/es/resultados` no están publicadas** y su contenido es genérico (4 bloques tipo "de X a Y" sin clientes, cifras ni logos). Publicar solo cuando tengan casos reales (cliente, problema, qué se hizo, resultado medible y permiso de uso).
3. Verificar qué diferencias hay entre lo publicado en producción y `main` antes del próximo Publish (la home publicada no muestra "Proof" en el menú).
4. El `sitemap.xml` es manual; hay que actualizarlo con cada página.
5. El nombre del proyecto en `package.json` y `wrangler.jsonc` sigue siendo el de la plantilla (`tanstack_start_ts`, `tanstack-start-app`). No tocar sin necesidad: puede afectar el despliegue.

## 6. Marca y tono

Paleta, tokens y regla 55/35/15/5 en `CLAUDE.md` y `src/styles.css`. Propuesta de valor del sitio: sistemas de crecimiento (SEO + GEO, ads, automatización con IA, web, branding), no tareas sueltas. Claims de resultados solo con respaldo real.
