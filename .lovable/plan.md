## Objetivo

Quitar toda mención pública a stack tecnológico (N8N, GPT-4, Claude, DataForSEO, Airtable, Perplexity, OpenAI API, Looker Studio, etc.), reescribir el título "La mayoría de agencias usan ChatGPT…", unificar las dos opciones de audit en un único "Free Audit", y reemplazar el título "El SEO que conoces ya es obsoleto" del home con un mensaje más persuasivo. Cambios solo de copy/UI; sin tocar lógica de negocio.

---

## 1. Página Metodología (`src/routes/es.metodologia.tsx` y `src/routes/methodology.tsx`)

### 1a. Tarjetas de agentes — quitar tecnologías del `note`
Reemplazar el campo `note` para que describa el rol con lenguaje de proceso, no de herramientas:

- The Scout · "Detecta oportunidades y mapea el panorama competitivo"
- The Architect · "Define la estrategia editorial y técnica por cliente"
- The Writer · "Produce contenido alineado a marca y a intención de búsqueda"
- The Watchdog · "Vigila salud técnica, rankings y citas en IA 24/7"
- The Reporter · "Consolida resultados y los entrega listos para decisión"

(Mismo cambio en `methodology.tsx` con copy en EN.)

### 1b. Quote bajo el sistema multi-agente
Sustituir:
> "Esto no es una metáfora. Este es nuestro sistema de producción real. Construido sobre N8N, GPT-4, Airtable y DataForSEO."

Por:
> "Esto no es una metáfora. Es nuestro sistema de producción real: una línea de trabajo automatizada que opera 24/7 con IA, supervisada por estrategas humanos."

### 1c. Sección "Nativo de IA vs Sabor a IA" — nuevo título
Reemplazar:
> "La mayoría de agencias usan ChatGPT. Nuestras operaciones corren sobre él."

Por (propuesta — el dev puede ajustar matiz si quiere):
> "La mayoría de agencias le piden cosas a la IA. Nosotros operamos como una agencia AI-Native."

Subtexto / italic: "Cada proceso —investigación, contenido, monitoreo, reporte— está orquestado por IA y validado por estrategas."

(EN: "Most agencies prompt AI. We operate as an AI-Native agency." + subcopy paralelo.)

### 1d. Sección "Stack tecnológico" — eliminar completa
Borrar la sección final completa (eyebrow "Stack tecnológico · transparencia radical", H2 "Las herramientas que nos hacen 10× más rápidos", y la grilla de 3 tarjetas con Airtable / DataForSEO / Ubersuggest / N8N / OpenAI API / Perplexity API / Google Workspace / Lovable / Looker Studio).

Reemplazar por una sección nueva, sin nombrar herramientas, que mantenga el mensaje de velocidad/eficiencia y el CTA final:

- Eyebrow: "Operación AI-Native"
- H2: "Más rápidos. Más consistentes. *Más medibles.*"
- Párrafo corto: "Donde una agencia tradicional necesita semanas y un equipo de 8 personas, nuestra metodología automatizada con IA entrega lo mismo en días — con trazabilidad completa de cada decisión y cada resultado."
- Mantener el CTA actual ("Reserva una llamada estratégica" / "Book a strategy call").

También limpiar el `meta description` de la `head()`:
- ES: "El sistema operativo de RYB: una metodología AI-Native que convierte el SEO en una línea de producción medible, rápida y transparente."
- EN equivalente.

---

## 2. Página Audit — unificar a un solo "Free Audit"

Archivos: `src/routes/audit.tsx` (EN) y `src/routes/es.auditoria.tsx` (ES).

### 2a. Eliminar el toggle de tiers
- Quitar el estado `tier` / `setTier` y el tipo `Tier`.
- Quitar la grilla `lg:grid-cols-2` con las dos `TierCard`.
- Quitar el componente `TierCard` (ya no se usa).
- Quitar la rama `tier === "full"` en `ThankYou` y el `<input type="hidden" name="tier" />`.
- Quitar el badge "Selected option · Full SEO Audit · $497" del form; dejar solo "Free Audit".

### 2b. Nueva sección única "Free Audit" (una sola tarjeta o bloque centrado encima del form)

Contenido exacto a mostrar (ES — EN paralelo):

- Badge: "100% gratuito"
- Título: "Free Audit"
- Subtítulo: "Una radiografía clara de tu visibilidad en Google y en motores con IA."
- Precio: "Gratis" (sin línea de "refundable" ni referencia a páginas/duración del informe)
- Bullets (en este orden, sin mencionar número de páginas):
  1. Análisis SEO del sitio web actual
  2. On-Page SEO Score
  3. Traffic Overview (Google y AI)
  4. Salud del sitio web
  5. 3 problemas técnicos críticos que bloquean tu posicionamiento
  6. Análisis de oportunidades de keywords (5 keywords)
  7. Recomendación del servicio de RYB que necesitas

(EN mirror: "On-Page SEO Score", "Traffic Overview (Google & AI)", "Website health", "3 critical technical issues blocking your rankings", "Keyword opportunity analysis (5 keywords)", "Recommended RYB service for you".)

### 2c. Form
- Botón submit: "Obtener mi Free Audit" / "Get my Free Audit".
- `ThankYou`: dejar solo la versión actual del free (sin la rama de pago/$497), manteniendo los enlaces a metodología y servicios.

### 2d. Metadata `head()`
- ES title: "Free Audit SEO gratuito | Rank Your Brand"
- ES description: "Descubre por qué tus competidores aparecen antes que tú. Free Audit con análisis SEO, salud del sitio, visibilidad en Google y AI, y recomendación personalizada."
- EN title: "Free SEO Audit | Rank Your Brand"
- EN description equivalente.
- Eliminar menciones a "48 horas", "5 días", "$497" en hero, subhero y meta.

### 2e. Hero copy
- ES H1: mantener "Descubre por qué tus competidores aparecen antes que tú." (sigue siendo válido)
- ES subhero: "Pide tu Free Audit y obtén una imagen clara de tu visibilidad en Google y en motores con IA, junto a la recomendación del servicio que más impacto tendrá en tu negocio."
- EN: mismo enfoque, sin tiempos ni precios.
- Breadcrumb: "Free Audit" en ambos idiomas.

---

## 3. Home — reemplazar "El SEO que conoces ya es obsoleto"

Archivos: `src/routes/es.index.tsx` (~línea 195) y `src/routes/index.tsx` (~línea 195).

Sustituir el H2:
> "El SEO que conoces ya es obsoleto."

Por (propuesta corta y persuasiva, manteniendo el eyebrow "La Brecha GEO"):
> "Hay nuevas formas de aparecer en los motores de búsqueda. *Nosotros sabemos cómo.*"

EN paralelo:
> "There are new ways to show up in search. *We know how.*"

Ajustar también el párrafo de apoyo para que conecte con el nuevo título, sin cambiar el resto de la sección (timeline 2020→2026 se queda igual):
- ES: "Google ya no solo muestra enlaces — genera respuestas. Y la IA decide a quién cita. Te ayudamos a estar del lado correcto de ese cambio."
- EN equivalente.

---

## 4. QA después de implementar

- Buscar en el proyecto que no queden menciones públicas a: `N8N`, `GPT-4`, `Claude`, `Airtable`, `DataForSEO`, `Perplexity`, `OpenAI`, `Ubersuggest`, `Looker Studio` dentro de `src/routes/methodology.tsx` y `src/routes/es.metodologia.tsx` (en otras páginas se revisa solo si aparece, no se toca fuera de scope).
- Validar que `/audit` y `/es/auditoria` ya no tienen tarjetas duplicadas ni el plan de $497, y que el form envía correctamente (un solo tier implícito = "free").
- Validar que home (ES + EN) renderiza el nuevo H2 sin romper el grid del timeline.
