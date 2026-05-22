## Typography Leveling Plan — Rank Your Brand

### Goal
Equilibrar la jerarquía tipográfica del sitio. Hoy todo display usa **Aglet Mono Black (900)**, lo que satura los H1/H2 y aplana la diferencia entre títulos, subtítulos y elementos editoriales. Vamos a incorporar la nueva **Aglet Mono Light Italic** (recién subida) como contrapeso editorial y reglar pesos por nivel.

### 1. Instalar la nueva fuente
- Copiar `user-uploads://AgletMonoTrial-LightItalic.otf` → `src/assets/fonts/AgletMono-LightItalic.otf`.
- Agregar `@font-face` en `src/styles.css` con `font-weight: 300; font-style: italic;`.
- Mantener Black (900) regular + Black Italic (900) ya existentes.

### 2. Sistema de escala (nuevo)
Definir reglas de uso por jerarquía — sin tocar layouts, solo `className`:

| Nivel | Fuente / peso | Uso |
|---|---|---|
| **Eyebrow / kicker** (xs uppercase tracking) | Aglet Mono **Black 900** | Tags pequeños (`PHASE 01`, `CASE STUDY #0`). Sin cambios. |
| **H1 hero** (clamp 4–9rem) | Aglet Mono **Black 900** | Solo el headline principal de cada página. Sin cambios. |
| **H1 secundario** (text-5xl en services detail) | Aglet **Black 900** | Sin cambios. |
| **H2 de sección** (text-4xl/5xl/6xl) | Aglet **Black 900**, con **una palabra clave en Light Italic** (acento editorial). | Crear utility `.accent-italic` que aplica `font-weight:300; font-style:italic;` al `<span>` resaltado. |
| **H3 de tarjeta** (text-2xl/3xl) | **Inter SemiBold** (no Aglet) | Aliviar la densidad mono en cards: pillars, services preview, methodology agents, FAQ headers, includes. |
| **Números grandes / métricas** (text-7xl, text-9xl) | Aglet **Black 900** | Sin cambios. |
| **Subtítulos descriptivos / lead** | Inter Regular | Sin cambios. |

**Regla resumida:** Aglet Black sigue siendo la voz principal en H1, H2 y números. Light Italic aparece **solo como acento** dentro de H2 (una o dos palabras clave). H3 baja a Inter SemiBold para crear contraste y respirar.

### 3. Cambios concretos por archivo

**`src/styles.css`**
- Añadir `@font-face` Light Italic (300, italic).
- Añadir utilities:
  - `.accent-italic { font-weight: 300; font-style: italic; letter-spacing: -0.01em; }`
  - `.h3-soft { font-family: var(--font-sans); font-weight: 600; letter-spacing: -0.01em; }`

**`src/routes/index.tsx`**
- H1 hero: envolver palabra de remate (ej. *"cited"*, *"visibility"*) en `<span class="accent-italic text-prompt">`.
- H2 de GEO Gap, Pillars, Case Study #0, Services preview, FAQs CTA: aplicar `accent-italic` a la palabra de contraste.
- H3 de pillars (`.pillars` cards) y services preview (`s.tag` queda Black, pero `h3` interno descripciones) → revisar: las tags de tier son identidad → quedan Black. Los `h3` descriptivos (pillars cards y dashboard labels) → `h3-soft`.

**`src/routes/methodology.tsx`**
- H1 + H2 hero: keyword en `accent-italic`.
- Agent name (`a.name`, text-xl): pasar a `h3-soft`.
- Comparison table headers: mantener Black.

**`src/routes/services.index.tsx`**
- H1: keyword en italic.
- H2 de tier cards (`t.tag`): se mantienen Black (son identidad de producto).
- H2 final CTA: keyword en italic.

**`src/components/site/ServiceDetail.tsx`**
- H1 (tag): Black, sin cambios.
- H2 de "What you get / Process / Ideal client / FAQ / Final CTA": keyword en italic.
- H3 de includes y FAQ questions → `h3-soft`.

**`src/routes/audit.tsx`**
- H1: keyword en italic.
- H2 de tier cards (`title`): Black sin cambios.
- H2 de success states: keyword en italic.

**`src/routes/contact.tsx`** (verificar y aplicar mismo patrón)

**`src/routes/__root.tsx`** (404 page)
- "doesn't exist" ya está en italic con `<span class="italic text-prompt">` → reemplazar por `accent-italic` para usar la nueva Light Italic real.

**Rutas `es.*`** — replicar exactamente los mismos `className` cambios en sus equivalentes en español para mantener paridad.

### 4. Lo que NO se toca
- Estructura, layouts, animaciones, colores, copy en sí.
- Paleta y tokens (la regla 55/35/15/5 sigue intacta).
- Font-weight de eyebrows, números, navegación, botones.

### 5. QA
- Revisar visualmente Home, Methodology, Services overview, los 3 service detail, Audit, Contact en viewport actual (1014px) y mobile.
- Verificar contraste y legibilidad de Light Italic sobre fondos canvas, ink y diagonal.
- Confirmar que la Light Italic carga (network tab) y no hace fallback a system italic.

### Resultado esperado
Jerarquía visual con tres voces claras: **Black Mono** (autoridad/identidad), **Light Italic Mono** (acento editorial premium), **Inter SemiBold** (legibilidad en cards). El sitio se siente menos "todo grita" y más editorial-técnico — alineado con la metáfora de la diagonal perfecta.
