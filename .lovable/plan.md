## Cambios solicitados

### 1. SEO Técnico — `es.servicios.seo-tecnico.tsx` y `services.technical-seo.tsx`

**Includes (fases):**

- Fase 1 — Auditoría (sin cambios)
- **Fase 2 — Keywords y arquitectura** (nuevo): "Investigación de keywords con mayor volumen y construcción de una arquitectura transaccional de valor que sienta las bases de un sitio web estructurado y funcional."
- Fase 3 — Desarrollo (lo que antes era Fase 2)
- Fase 4 — Optimización (lo que antes era Fase 3)
- ❌ Eliminar "Documento de estrategia"

**Timeline (sección "Proceso · Del arranque al…"):** reordenar y quitar referencias temporales:

1. Descubrimiento y auditoría
2. Keywords y arquitectura del sitio
3. Diseño y arquitectura de contenido
4. Desarrollo del sitio web
5. Analytics, medición y lanzamiento

(Los labels ya no dirán "Semana 1/2/3…" sino "01, 02…" — y aplicar el equivalente en EN: "01…")

**Cliente ideal:**

- ❌ Quitar "Ingresos anuales entre $500k y $5M"
- ✏️ Cambiar "menor a 5,000 visitas/mes" → **"menor a 1,000 visitas/mes"**

### 2. Quitar meses en TODAS las timelines de servicios

Reemplazar etiquetas tipo "Mes 1", "Month 1", "Q1", "Semana 1" por "01 / 01" en todos los archivos:

- `es.servicios.seo-tecnico.tsx` + `services.technical-seo.tsx`
- `es.servicios.seo-b2b.tsx` + `services.seo-for-b2b.tsx`
- `es.servicios.agencia-seo-ia.tsx` + `services.ai-seo-agency.tsx`

El contenido descriptivo de cada paso se conserva.

### 3. Home (`es.index.tsx` + `index.tsx`)

**Sección "El sistema" (Pillars):**

- Item 01 "Arquitectura que convierte": quitar "B2B" → "construimos sitios web diseñados para guiar…"
- Item 02 "Operaciones nativas de IA": eliminar mención a N8N. Nueva copia: "Nuestros flujos AI-Native producen contenido estratégico a escala sin sacrificar calidad. Más velocidad. Mejores resultados. Menor costo."
- Añadir un CTA "Ver la metodología" → `/es/metodologia` (y `/methodology` en EN) debajo del título de la sección.

**Eliminar la sección `CaseStudyZero**` completa (componente + uso en `HomeEs` / `Home`).

### 4. QA

Verificar build limpio, que la home siga renderizando sin la sección de casos, que el CTA "Ver la metodología" aparezca dentro de "El sistema", y que ningún service page muestre "Mes/Semana/Month/Week/Q" en el timeline.