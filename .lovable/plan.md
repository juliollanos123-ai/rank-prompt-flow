## Alcance aprobado

Expandir el sitio con 6 categorías de servicio, página Proof, reescritura de Metodología, y sincronizar navegación + sitemap.

## Rutas nuevas (EN + ES) — 14 archivos

| # | EN | ES |
|---|-----|-----|
| 1 | `/services/mega-ads` | `/es/servicios/mega-ads` |
| 2 | `/services/ai-automation` | `/es/servicios/automatizacion-ia` |
| 3 | `/services/web-development` | `/es/servicios/desarrollo-web` |
| 4 | `/services/branding` | `/es/servicios/branding` |
| 5 | `/services/digital-foundations` | `/es/servicios/fundamentos-digitales` |
| 6 | `/services/seo-geo` (hub SEO) | `/es/servicios/seo-geo` |
| 7 | `/proof` | `/es/resultados` |

Los 5 servicios nuevos usan el componente `ServiceDetail` existente (breadcrumbs → meta-bar → tagline → includes → timeline → forWho → notFit → outcomes → FAQs → finalCTA con outline + primary), respetando `tone`, `tier`, `format`, `duration`, i18n y la paleta 55/35/15/5.

`/services/seo-geo` es una página resumen ligera con las 3 tarjetas de tier existentes (Technical SEO / SEO for B2B / AI SEO Agency) — NO usa `ServiceDetail` y NO cambia las 3 URLs actuales.

`/proof` usa layout editorial: hero + intro + los 4 bloques del doc como cards genéricas (placeholder editorial, sin logos reales) + CTA final.

## Hub `/services` y `/es/servicios` — reescritura

Reemplazar el contenido actual por:
- Hero con H1/subheadline/CTAs del doc.
- Sección intro (2 párrafos del doc).
- Grid de **6 tarjetas de categoría** enlazando a cada servicio.
- Sección "cómo elegir el servicio correcto" con el copy del doc.
- CTA final a `/contact` (o `/es/contacto`).

## Metodología — reescritura complementaria (EN + ES)

Mantener el ADN actual (5 agentes, tabla AI-Native vs AI-flavoured, CTA final) y **complementarlo** con el copy del doc:
- Nuevo hero con H1 del doc: "No vendemos tareas sueltas. Construimos sistemas de crecimiento." + subheadline del doc.
- Mantener sección "Operating System" con los 5 agentes.
- Añadir nueva sección **"Etapas del sistema"** con 5 bloques del doc (Diagnóstico → Diseño de estructura → Implementación → Optimización → Escalamiento) — diseñada como stepper vertical o grid 5-col coherente con el estilo actual.
- Añadir nueva sección **"Narrativa"** (el párrafo del doc sobre agencia tradicional vs sistema de crecimiento) como transición entre agentes y comparativa.
- Mantener la comparativa AI-Native vs tradicional (aporta contraste visual y complementa).
- Nuevo CTA final del doc: "Si quieres resultados más previsibles, necesitas más que ejecución: necesitas sistema."

Resultado: la página gana profundidad narrativa y las etapas del sistema, sin perder los diferenciales visuales actuales.

## Páginas NO tocadas

- Home, Contact, Audit, blog, 3 páginas SEO detalladas.

## Componentes y navegación

- **`Nav.tsx`**: dropdown Services reorganizado — SEO & GEO / Mega Ads / AI Automation / Web Development / Branding / Digital Foundations. Agregar "Proof" como item top-level entre Methodology y Blog. Mismo tratamiento en menú mobile y ES.
- **`Footer.tsx`**: columna Services ampliada con los 6 slugs; entrada Proof en Resources.
- **`langRoutes.ts`**: agregar los 14 nuevos mappings EN↔ES.

## SEO por página

Cada nueva ruta define `head()` con:
- `title` y `meta description` del doc verbatim (traducidos al EN cuando el doc solo trae ES),
- `og:title`, `og:description`, `og:type=website`,
- `canonical` absoluto,
- `hreflang` EN/ES emparejados.

## Sitemap y llms.txt

- `public/sitemap.xml`: agregar las 14 URLs nuevas con `<xhtml:link hreflang>` y `lastmod=2026-07-11`.
- `public/llms.txt`: sección Services ampliada con los 6 nuevos slugs.

## Metadata técnica

- Naming dot-notation: `services.mega-ads.tsx`, `es.servicios.mega-ads.tsx`, etc.
- `createFileRoute` string coincide con filename.
- Tone por servicio (para variar acentos manteniendo paleta):
  - Mega Ads → `prompt`
  - AI Automation → `flow`
  - Web Development → `neutral`
  - Branding → `prompt`
  - Digital Foundations → `neutral`
  - SEO & GEO hub → `prompt`
- `tier` / `format` / `duration` inferidos con criterio comercial:
  - Mega Ads: Growth · Retainer mensual · 3 meses mínimo
  - AI Automation: Growth · Proyecto + retainer · 6-10 semanas
  - Web Development: Foundation · Proyecto · 6-10 semanas
  - Branding: Foundation · Proyecto · 6-8 semanas
  - Digital Foundations: Foundation · Proyecto · 3-4 semanas

## Orden de ejecución

1. Crear 12 archivos de servicios (6 EN + 6 ES) + 2 Proof en paralelo.
2. Reescribir hub `/services` y `/es/servicios`.
3. Reescribir Methodology (EN + ES).
4. Actualizar Nav, Footer, langRoutes.
5. Actualizar sitemap y llms.txt.
6. Verificar build limpio.
