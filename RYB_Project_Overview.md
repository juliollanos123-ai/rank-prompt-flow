# Rank Your Brand — Documentación del Proyecto
### Sistema de Agentes de IA para Automatización SEO

> **Versión:** Mayo 2026 | **Estado:** En producción activa

---

## Tabla de Contenidos

1. [Manifiesto Estratégico](#1-manifiesto-estratégico)
2. [Stack Tecnológico](#2-stack-tecnológico)
3. [Arquitectura General del Sistema](#3-arquitectura-general-del-sistema)
4. [Los 9 Agentes — Descripción Detallada](#4-los-9-agentes--descripción-detallada)
5. [Infraestructura de Datos](#5-infraestructura-de-datos)
6. [RYB Command Center — La Plataforma Web](#6-ryb-command-center--la-plataforma-web)
7. [Flujo de Activación: OODA Loop](#7-flujo-de-activación-ooda-loop)
8. [Pipeline Completo: De Cliente Nuevo a Reporte](#8-pipeline-completo-de-cliente-nuevo-a-reporte)
9. [Lead Generation — WF8 Free Diagnosis](#9-lead-generation--wf8-free-diagnosis)
10. [Modelo de Negocio y Pricing](#10-modelo-de-negocio-y-pricing)
11. [Estado Actual del Sistema](#11-estado-actual-del-sistema)

---

## 1. Manifiesto Estratégico

### ¿Qué es Rank Your Brand?

Rank Your Brand (RYB) es una agencia SEO de alta gama que opera con un máximo de 8–10 clientes simultáneos. El diferencial no es volumen, sino profundidad: cada cliente recibe una operación SEO completamente automatizada por un sistema de IA que trabaja como si fuera un equipo de 5 especialistas senior, de forma autónoma y continua.

### El problema que resuelve

Las agencias SEO tradicionales escalan agregando personas. Esto genera dos problemas inevitables:
- **La calidad no escala:** Con más clientes, la atención individual baja.
- **Los costos escalan linealmente:** Más trabajo = más equipo = márgenes comprimidos.

RYB invierte esa ecuación. El sistema de agentes de IA realiza el trabajo de investigación, estrategia, creación de contenido, monitoreo técnico, análisis competitivo y reporte de forma automática. El equipo humano supervisa, valida y toma decisiones estratégicas de alto nivel.

### La propuesta de valor

> **"Un equipo completo de IA trabajando por tu marca 24/7, con supervisión estratégica humana."**

- Scout analiza el mercado cada 30 días.
- Architect construye el plan de contenido de 90 días.
- Writer produce artículos SEO de 2,000+ palabras.
- Watchdog monitorea Google Search Console cada lunes.
- Analyst hace inteligencia competitiva + visibilidad GEO mensual.
- Reporter entrega el informe ejecutivo al cliente.
- Director orquesta todo el sistema de forma autónoma.

### Fase actual

RYB está en **fase de construcción de portafolio y casos de estudio**. El sistema está en producción activa con clientes reales. El objetivo es demostrar el sistema en funcionamiento y escalar el ticket promedio a medida que los resultados se acumulen.

---

## 2. Stack Tecnológico

| Categoría | Herramienta | Rol |
|-----------|-------------|-----|
| Automatización | **n8n** (self-hosted) | Motor de todos los workflows/agentes |
| AI — Razonamiento | **GPT-4o** (OpenAI) | Inteligencia en todos los agentes |
| AI — Investigación | **Perplexity sonar-pro** | Research competitivo y GEO |
| SEO Data | **DataForSEO** | Métricas reales: keywords, backlinks, SERP |
| Search Performance | **Google Search Console** | Tráfico, posiciones, CTR por cliente |
| Operaciones (CRM) | **Airtable** | Clientes, contenido, keywords, reportes |
| Memoria Persistente | **Supabase (PostgreSQL)** | Serie de tiempo, aprendizaje entre ejecuciones |
| Comunicación | **Telegram Bot** | Canal de comando y control del equipo |
| Google Workspace | **Drive + Docs + Gmail + Sheets** | Almacenamiento, documentos y entrega |
| Frontend Web | **TanStack Start + React 19 + Supabase** | Command Center (panel de control) |
| Deploy Web | **Lovable + Cloudflare Workers** | Build y hosting del frontend |
| Infraestructura n8n | **Hostinger VPS** | Servidor n8n en producción |

---

## 3. Arquitectura General del Sistema

El sistema está compuesto por **9 workflows (agentes)** interconectados bajo un modelo de orquestación centralizada. El **Director (WF0)** es el cerebro: decide qué agente activar, cuándo y por qué.

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERFACES DE ENTRADA                        │
│                                                                 │
│   Telegram Bot  ──→  Router  ──→  Agente específico            │
│   Schedule (cron)  ──→  WF0 Director (modo auto)               │
│   Webhook externo  ──→  WF8 Diagnosis (leads web)              │
│   RYB Command Center  ──→  n8n API                             │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                   WF0 — THE DIRECTOR                            │
│                                                                 │
│   Modo AUTO (lunes-viernes 9am COT)                             │
│     • Lee estado de todos los clientes activos en Airtable      │
│     • Lee contexto de Supabase (tráfico, tendencias, health)    │
│     • Aplica reglas P1-P7 en cascada por cliente                │
│     • Despacha el primer agente que aplica                      │
│                                                                 │
│   Modo CONVERSACIONAL (Telegram)                                │
│     • AI Agent GPT-4o con 9 tools                               │
│     • "¿Cómo va ACJ Cargo?" → busca datos y responde            │
│     • "Activa el Scout para V&P" → dispara WF2 con contexto     │
└──────────────────────┬──────────────────────────────────────────┘
                       │
          ┌────────────┼────────────────────────┐
          ▼            ▼                        ▼
    ┌──────────┐  ┌──────────┐           ┌──────────┐
    │  WF2     │  │  WF5     │           │  WF6     │
    │  Scout   │  │ Watchdog │           │ Analyst  │
    └────┬─────┘  └──────────┘           └────┬─────┘
         │                                    │
         ▼                                    ▼
    ┌──────────┐                        ┌──────────┐
    │  WF3     │                        │  WF7     │
    │Architect │                        │ Reporter │
    └────┬─────┘                        └──────────┘
         │
         ▼
    ┌──────────┐
    │  WF4     │
    │  Writer  │
    └──────────┘

WF1 — Onboarding (entrada de nuevos clientes, siempre disponible)
WF8 — Free Diagnosis (lead gen desde web, independiente del pipeline)
```

### Capa de memoria persistente (Supabase)

Todos los agentes con actividad repetitiva escriben en Supabase. Esto permite que el Director **aprenda** con el tiempo:

```
WF5 Watchdog   ──→  keyword_performance   (serie semanal por keyword/cliente)
WF3 Architect  ──→  agent_decisions       (cada plan de contenido generado)
WF7 Reporter   ──→  client_trajectory     (snapshot mensual de salud del cliente)
WF0 Director   ──→  agent_sessions        (cada cadena de despacho completa)

Vista: director_context  ←  Director la lee en cada ciclo AUTO
  (pre-calcula: near_top3_keywords, health_score, traffic_trend por cliente)
```

---

## 4. Los 9 Agentes — Descripción Detallada

### WF0 — The Director

| Campo | Valor |
|-------|-------|
| **ID n8n** | `zyL4HyFMZ0FiiptF` |
| **Estado** | Activo ✅ v3.0 |
| **Nodos** | 46 |
| **Trigger** | Schedule (9am COT L-V) + Webhook + Telegram |

**Qué hace:**
Es el orquestador central. Cada mañana revisa el estado de todos los clientes activos y aplica un árbol de decisiones con 7 prioridades:

| Prioridad | Condición | Acción |
|-----------|-----------|--------|
| P7 | Cliente sin website | Skip (alerta, no despacha) |
| P1 | Incidencia crítica activa | Alerta sin despachar agente |
| P2 | Sin Scout en últimos 30 días | Activa WF2 Scout |
| P3 | Scout OK, sin Architect en 30 días | Activa WF3 Architect |
| P4 | Artículo "Pendiente de Brief" | Activa WF4 Writer |
| P5 | Día 2 del mes, sin reporte | Activa WF7 Reporter |

En modo conversacional por Telegram, responde preguntas sobre el estado del sistema y puede activar cualquier agente manualmente con contexto completo.

---

### WF1 — Onboarding de Cliente

| Campo | Valor |
|-------|-------|
| **ID n8n** | `Ef8vQUlX57OzBzFs` |
| **Estado** | Activo ✅ |
| **Trigger** | Webhook (manual por equipo) |

**Qué hace:**
Registra a un nuevo cliente en el sistema completo en menos de 60 segundos:
1. Crea o actualiza el registro en Airtable CLIENTES
2. Crea la carpeta raíz del cliente en Google Drive
3. Crea las subcarpetas de trabajo (contenido, reportes, assets)
4. Guarda el Drive ID en Airtable
5. Envía email de bienvenida personalizado al cliente (Gmail)
6. Notifica internamente al equipo (Gmail)

**Por qué importa:** Es el punto de entrada. Sin este WF, el Director no tiene datos para operar.

---

### WF2 — The Scout

| Campo | Valor |
|-------|-------|
| **ID n8n** | `gSBbWOaDNHY79x0t` |
| **Estado** | Activo ✅ v2.6 |
| **Nodos** | 26 |
| **Trigger** | Webhook (`/webhook/18d5f45b-...`) desde Director o Router |

**Qué hace:**
Es el agente de inteligencia de mercado. Para cada cliente:
1. Lee el perfil del cliente desde Airtable (ICP, industria, país, website)
2. Investiga el negocio y descubre competidores reales con **Perplexity sonar-pro**
3. Obtiene métricas SEO de los competidores con **DataForSEO** (domain overview + ranked keywords)
4. GPT-4o sintetiza todo y genera una **hipótesis estratégica** con gaps de contenido
5. Activa WF3 automáticamente al terminar

**Output clave que produce:**
- `competitor_ranking`: posicionamiento real de competidores
- `top_content_gaps`: qué temas cubren ellos que el cliente no
- `strategic_hypothesis`: la oportunidad de posicionamiento recomendada
- `recommended_first_cluster`: el primer cluster de keywords a atacar

---

### WF3 — The Architect

| Campo | Valor |
|-------|-------|
| **ID n8n** | `MfhbZLXGj3jUCWzk` |
| **Estado** | Activo ✅ v1.5 |
| **Nodos** | 33 |
| **Trigger** | Webhook (`/webhook/ryb-architect-trigger`) |

**Qué hace:**
Es el estratega de keywords y planificador de contenido. Recibe el análisis del Scout y:
1. Expande keywords usando **DataForSEO** (keyword suggestions + ranked keywords)
2. Lee el historial de keywords previas del cliente (memoria en Airtable)
3. GPT-4o construye un **plan de contenido de 90 días** con clusters temáticos
4. Guarda keywords en Airtable (tabla KEYWORDS)
5. Crea artículos en estado "Pendiente de Brief" en Airtable (tabla CONTENIDO)
6. Actualiza Google Sheets con la vista ejecutiva del plan
7. Escribe la decisión en Supabase (`agent_decisions`)
8. Activa WF4 automáticamente

**Output clave:**
- Plan de 90 días por clusters temáticos
- N artículos creados en Airtable para producción
- Puntuación de confianza del agente

---

### WF4 — The Writer

| Campo | Valor |
|-------|-------|
| **ID n8n** | `xhX9DmA4Tm6lUNIC` |
| **Estado** | Activo ✅ v1.1 |
| **Nodos** | 35 |
| **Trigger** | Webhook (`/webhook/ryb-writer-trigger`) |

**Qué hace:**
Es el redactor SEO. Toma el siguiente artículo en cola (estado "Pendiente de Brief") y:
1. Recupera contexto completo: keywords del cluster, competitor intelligence, SEO plan
2. **Fase 1 — Brief:** GPT-4o genera un brief editorial con H1, estructura, ángulo y palabras clave objetivo
3. **Fase 2 — Artículo:** GPT-4o produce el artículo completo (2,000–4,000 palabras)
4. **QA automático:** Verifica 7 reglas SEO (densidad de keyword, keyword en H1, H2, FAQ incluido, imágenes marcadas, etc.)
5. Guarda en Airtable CONTENIDO (status → "En Revisión Humana")
6. Crea Google Doc con el artículo formateado
7. Notifica por Telegram con el link al documento

**Reglas de calidad SEO verificadas automáticamente:**
- Keyword principal aparece ≥3 veces en el texto
- Keyword está en el H1
- Keyword aparece en los primeros 10% del artículo
- Keyword aparece en al menos un H2
- El artículo incluye sección FAQ
- El artículo incluye al menos 2 marcadores de imagen

---

### WF5 — The Watchdog

| Campo | Valor |
|-------|-------|
| **ID n8n** | `s0KEv1B6eqmlAwfj` |
| **Estado** | Activo ✅ v1.8 |
| **Nodos** | 26 |
| **Schedule** | Lunes 8am America/Bogota (automático para todos los clientes) |

**Qué hace:**
Es el monitor técnico SEO semanal. Cada lunes, para todos los clientes activos con GSC verificado:
1. Extrae métricas de Google Search Console (14 días de performance, top páginas, queries)
2. GPT-4o analiza tendencias, detecta caídas, identifica oportunidades near-top-3
3. Calcula un **Health Score** (0–100) por cliente
4. Registra incidencias críticas e importantes en Airtable (tabla INCIDENCIAS)
5. Escribe la serie de tiempo en **Supabase** (tabla `keyword_performance`) para memoria histórica
6. Notifica por Telegram solo si hay alertas que requieren acción

**Output en Telegram por cliente:**
```
✅ Watchdog — ACJ Cargo
📊 Health Score: 85/100 | Semana 4 — abril 2026

📈 Tráfico: Clicks 38 (+9%) | Impressiones 3,346 (+18%)

⚡ Near top-3 (optimizar ahora):
  🎯 "transporte carga bogota" — pos 5.2 | 180 impr. | CTR 0.8%

📋 Prioridades esta semana:
  1. Optimizar title y meta description en páginas CTR < 3%
```

---

### WF6 — The Analyst

| Campo | Valor |
|-------|-------|
| **ID n8n** | `y9T99kWP6z0L9Fkx` |
| **Estado** | Activo ✅ v1.1 |
| **Nodos** | 28 |
| **Schedule** | Día 1 de cada mes, 7am America/Bogota |

**Qué hace:**
Es el analista de inteligencia competitiva y visibilidad GEO. Una vez al mes:
1. Recupera historial de competitor intelligence y keywords por cliente desde Airtable
2. **Perplexity — Competitive Intelligence:** Qué movimientos hicieron los competidores este mes
3. **Perplexity — GEO Visibility:** ¿Aparece el cliente en respuestas de ChatGPT, Perplexity, Google AI Overviews? ¿Y sus competidores?
4. GPT-4o sintetiza y produce el top 3 de oportunidades accionables
5. Actualiza el registro de Competitor Intelligence en Airtable
6. Crea el registro en REPORTES MENSUALES
7. Activa WF7 para generar el reporte completo

**Outputs clave:**
- `competitive_summary`: movimientos relevantes del mes
- `geo_visibility_status`: score de visibilidad en AI (Alta/Media/Baja)
- `top_3_opportunities`: oportunidades concretas con acción recomendada
- `competitive_threat_level`: nivel de amenaza competitiva (low/medium/high/critical)

---

### WF7 — The Reporter

| Campo | Valor |
|-------|-------|
| **ID n8n** | `1ONmZkJxkOBZs70u` |
| **Estado** | Activo ✅ v1.2 |
| **Nodos** | 29 |
| **Trigger** | Automático desde WF6 o manual por Telegram |

**Qué hace:**
Es el encargado de cerrar el ciclo mensual con el cliente. Recibe los datos del Analyst y:
1. Consolida métricas GSC del mes completo
2. Recopila contenido publicado ese mes y las incidencias técnicas
3. GPT-4o genera una narrativa ejecutiva personalizada para el cliente
4. Crea un Google Doc con el reporte completo formateado
5. Envía el reporte al cliente por Gmail
6. Escribe el snapshot mensual en **Supabase** (tabla `client_trajectory`)
7. Notifica internamente al equipo por Telegram

**Por qué importa:** Es el punto de contacto con el cliente. El reporte demuestra el valor entregado y justifica la factura del mes.

---

### WF8 — Free Diagnosis Agent

| Campo | Valor |
|-------|-------|
| **ID n8n** | `qStHMljTcYjd72Fl` |
| **Estado** | Creado ✅ — pendiente activación en UI |
| **Nodos** | 30 |
| **Trigger** | Webhook desde Web3Forms (formulario en rankyourbrand.co) |

**Qué hace:**
Es el agente de captación de leads. Cuando alguien llena el formulario de diagnóstico gratuito en la web:
1. Normaliza el dominio recibido
2. Ejecuta 4 análisis DataForSEO en paralelo: Domain Overview, Backlinks, Competitors, Ranked Keywords
3. GPT-4o genera un diagnóstico JSON con score SEO, hallazgos y plan de acción
4. Construye un **reporte HTML personalizado** con branding de RYB (dark theme, teal #00d4b4)
5. Asigna automáticamente el tier recomendado (Blueprint / Scale / Landmark)
6. **Guardado:** INSERT en Supabase (`lead_diagnoses`) + CREATE en Airtable LEADS
7. **HITL con Julio por Telegram:** Julio revisa, aprueba, edita o descarta el reporte
8. Si aprobado: envía el HTML como adjunto al lead por Gmail + registra en Supabase

**Tier assignment automático:**
| Tier | Precio | Criterio |
|------|--------|----------|
| Blueprint | $1,500 one-time | DA < 10 O tráfico < 2k/mes |
| Scale | $2,500/mes (6 meses mín.) | DA 10–30 O tráfico 2k–20k/mes |
| Landmark | $3,500/mes (12 meses mín.) | DA > 30 O tráfico > 20k/mes |

---

## 5. Infraestructura de Datos

### Airtable — Operaciones (Base: `apphfalhM7r43pOjt`)

La base operacional principal. Es el CRM y el sistema de registro del pipeline.

| Tabla | Propósito |
|-------|-----------|
| **CLIENTES** | Registro maestro: nombre, website, industria, país, ICP, status, Drive ID |
| **CONTENIDO** | Artículos: título, cluster, status (Pendiente de Brief → En Revisión → Publicado) |
| **KEYWORDS** | Keywords por cliente y cluster con métricas DataForSEO |
| **Competitor Intelligence** | Análisis competitivo histórico por cliente |
| **SEO Plans** | Plan activo por cliente, fases, estado del pipeline |
| **INCIDENCIAS TÉCNICAS** | Alertas del Watchdog: Crítico / Importante / Monitoreo |
| **REPORTES MENSUALES** | Registro de cada reporte entregado al cliente |
| **SESSIONS** | Log de sesiones del Director |
| **LEADS** | Registros de leads captados por WF8 |

### Supabase — Memoria del Sistema (`olejnxclrmixjjpvxwzh`)

Base de datos PostgreSQL exclusiva para el sistema agéntico. Permite consultas time-series, joins complejos y aprendizaje entre ejecuciones (cosa que Airtable no puede hacer).

| Tabla/Vista | Escribe | Propósito |
|-------------|---------|-----------|
| `keyword_performance` | WF5 (lunes) | Serie de tiempo: posición, clicks, CTR por keyword/cliente |
| `agent_decisions` | WF3, WF4, WF0 | Cada decisión del agente + outcome medido semanas después |
| `client_trajectory` | WF7 (mensual) | Snapshot mensual: health score, tráfico, contenido publicado |
| `agent_sessions` | WF0 (Director) | Cadenas completas de despacho: qué se activó, cuándo, por qué |
| `lead_diagnoses` | WF8 | Pipeline de diagnósticos: score, tier, estado de envío |
| `pattern_memory` | WF8 (futuro) | Patrones destilados de decisión → outcome |
| **`director_context`** (VISTA) | — lee WF0 | Contexto pre-calculado: near_top3_kws, health, trend por cliente |

### Google Workspace

| Servicio | Uso |
|----------|-----|
| **Google Drive** | Carpeta raíz por cliente con subcarpetas. Artículos y reportes se guardan como Google Docs |
| **Google Docs** | Artículos de WF4 y reportes de WF7 |
| **Google Sheets** | Vista ejecutiva del plan de contenido (WF3) |
| **Gmail** | Email de bienvenida (WF1), reporte mensual al cliente (WF7), diagnósticos de leads (WF8) |
| **Google Search Console** | Fuente de datos GSC para WF5 (Watchdog) y WF7 (Reporter) |

---

## 6. RYB Command Center — La Plataforma Web

El Command Center es el **panel de control visual** del sistema multi-agente. Permite al equipo ver el estado en tiempo real sin necesidad de Telegram o n8n.

### Datos del repositorio

| Campo | Valor |
|-------|-------|
| **GitHub** | `https://github.com/juliollanos123-ai/ryb-agent-nexus` |
| **Directorio local** | `/Users/jllanos/Documents/RYB/ryb-agent-nexus/` |
| **Deploy** | Push a `main` → Lovable auto-build |

### Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | **TanStack Start** (React con SSR/SSG) |
| UI | **React 19 + TypeScript + Tailwind v4 + shadcn/ui** |
| Base de datos | **Supabase** (PostgreSQL — base separada del sistema agéntico) |
| Edge functions | **Cloudflare Workers** |
| Package manager | npm |
| Build/Deploy | Lovable platform |

### Rutas y vistas

```
/             — Dashboard principal
               • KPIs globales del sistema
               • Estado en tiempo real de los 9 agentes
               • Activity feed de las últimas ejecuciones

/agents        — Listado de todos los agentes con su estado

/agents/$id    — Vista detalle de un agente específico
               • Historial de ejecuciones
               • Último output
               • Métricas de rendimiento

/execute       — Ejecución manual de workflows
               • Seleccionar agente + cliente
               • Disparar via n8n API
               • Ver resultado en tiempo real

/data          — Explorador de datos
               • Tablas de Airtable
               • Métricas de Supabase
```

### Integración con el backend

El Command Center se conecta a:
1. **n8n REST API** — para ejecutar workflows manualmente desde la UI
2. **Supabase** (proyecto del Command Center) — para almacenar estado de sesiones, logs de UI, preferencias
3. **Supabase** (proyecto del sistema agéntico) — para leer métricas en tiempo real (keyword_performance, client_trajectory, agent_sessions)
4. **Airtable API** — para mostrar datos de clientes, contenido, keywords en el /data view

### Supabase del Command Center

- **URL:** `https://wupfcwfbeabnxljtjscm.supabase.co`
- **Nota:** Este es un proyecto Supabase distinto al del sistema agéntico. Uno es para la memoria del sistema (agentes), el otro es el backend del frontend web.

---

## 7. Flujo de Activación: OODA Loop

El sistema opera bajo el modelo OODA (Observe–Orient–Decide–Act), ejecutado automáticamente cada semana:

```
┌─────────────────────────────────────────────────────────────┐
│  OBSERVE — Lunes 8am                                        │
│  WF5 Watchdog extrae datos de Google Search Console        │
│  → Escribe keyword_performance en Supabase                  │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│  ORIENT — Continuo                                          │
│  Vista director_context en Supabase pre-calcula:           │
│  • Near-top-3 keywords (pos 4–10, alta oportunidad)        │
│  • Health score por cliente                                  │
│  • Traffic trend (subiendo / bajando / estable)             │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│  DECIDE — Lunes-Viernes 9am                                 │
│  WF0 Director lee director_context                          │
│  Aplica reglas P1-P7 con contexto enriquecido              │
│  "P2: ACJ Cargo sin Scout en 35 días, health 72, trend ↑"  │
│  → Despacha Scout con reason documentado                    │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│  ACT — Cadena automática                                    │
│  WF2 Scout → WF3 Architect → WF4 Writer                    │
│  WF6 Analyst → WF7 Reporter                                │
│  Cada agente escribe de vuelta en Supabase                 │
│  → El loop comienza de nuevo                                │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Pipeline Completo: De Cliente Nuevo a Reporte

```
[CLIENTE NUEVO]
      │
      ▼
WF1 — Onboarding
  • Airtable CLIENTES ✓
  • Google Drive carpetas ✓
  • Email de bienvenida ✓
      │
      ▼
WF0 — Director detecta nuevo cliente
  [P2: Sin Scout previo → Activa WF2]
      │
      ▼
WF2 — Scout (1–2 días desde alta)
  • Perplexity: investiga negocio + competidores
  • DataForSEO: métricas competidores
  • GPT-4o: hipótesis estratégica
  ─── dispara WF3 automáticamente ───→
      │
      ▼
WF3 — Architect
  • DataForSEO: keywords expandidas
  • GPT-4o: plan 90 días + clusters
  • Airtable: N artículos "Pendiente de Brief"
  • Supabase: agent_decisions registrado
  ─── dispara WF4 automáticamente ───→
      │
      ▼
WF4 — Writer (loop por cada artículo en cola)
  • GPT-4o: brief editorial
  • GPT-4o: artículo completo
  • QA automático: 7 reglas SEO
  • Google Doc creado + guardado en Drive
  • Airtable: status → "En Revisión Humana"
      │
      ▼
[REVISIÓN HUMANA — El equipo revisa y publica]
      │
      ▼
WF5 — Watchdog (todos los lunes, automático)
  • GSC: tráfico, posiciones, CTR
  • Alertas si hay caídas o oportunidades
  • Supabase: keyword_performance actualizado
      │
      ▼
WF6 — Analyst (día 1 de cada mes)
  • Perplexity: movimientos competidores + GEO
  • GPT-4o: top 3 oportunidades del mes
  ─── dispara WF7 automáticamente ───→
      │
      ▼
WF7 — Reporter
  • GSC: métricas del mes completo
  • GPT-4o: narrativa ejecutiva
  • Google Doc del reporte
  • Gmail: reporte enviado al cliente
  • Supabase: client_trajectory snapshot
      │
      ▼
[CLIENTE RECIBE REPORTE — Ciclo se reinicia]
```

---

## 9. Lead Generation — WF8 Free Diagnosis

El WF8 es la máquina de captación de leads. Opera de forma independiente del pipeline principal.

**Flujo desde la perspectiva del lead:**
1. Llena el formulario en `rankyourbrand.co` (powered by Web3Forms)
2. Espera (unos minutos mientras el agente trabaja)
3. Recibe por email un reporte HTML personalizado de su situación SEO

**Flujo desde la perspectiva del equipo:**
1. WF8 se activa y analiza el dominio del lead (4 llamadas DataForSEO en paralelo)
2. GPT-4o genera diagnóstico + score + plan de acción
3. Telegram avisa a Julio con el reporte listo + links de acción:
   - ✅ **Aprobar** → enviar al lead
   - ✏️ **Editar** → Julio escribe correcciones → GPT-4o regenera → vuelve a Telegram
   - ❌ **Descartar** → no se envía, se registra en Supabase
4. Si aprobado: Gmail envía el HTML + se marca en Supabase + Airtable LEADS

**Calendly embebido en el reporte:** `https://calendly.com/julio-rankyourbrand/30min`

---

## 10. Modelo de Negocio y Pricing

### Tiers actuales (2026)

| Tier | Precio | Qué incluye |
|------|--------|-------------|
| **Starter** | $1,500/mes | Scout + Architect + Writer básico, 1 mercado |
| **Growth** | $2,500/mes | Full suite WF2–WF7, Watchdog semanal, reporte CI+GEO |
| **Scale** | $3,500+/mes | Multi-site, sesiones estratégicas, customizaciones |

**Contexto:** RYB está en **fase de portafolio** — construyendo casos de estudio con resultados reales como base para escalar el ticket promedio. Los precios actuales son deliberadamente accesibles para acelerar esa construcción.

### Objetivo a 24 meses

Una vez que los casos de estudio demuestren ROI claro:
- Ticket promedio objetivo: $3,500–$8,000/mes
- 8–10 clientes activos → MRR: $30,000–$80,000
- Equipo humano: mínimo (estrategia, relación cliente, supervisión del sistema)

### Modelo operativo

| Item | Descripción |
|------|-------------|
| Clientes máximos | 8–10 simultáneos |
| Rationale | Profundidad sobre volumen — el sistema produce calidad, no cantidad |
| Capacidad de escala | El sistema agéntico no tiene límite teórico; el cuello de botella es la supervisión humana |
| Diferencial | Ninguna agencia de $1,500/mes tiene un Watchdog semanal automatizado con GSC + un Analyst GEO mensual + reporting automático |

---

## 11. Estado Actual del Sistema

### Dashboard de agentes

| Agente | ID | Estado | Versión | Última actividad |
|--------|----|--------|---------|------------------|
| WF0 Director | `zyL4HyFMZ0FiiptF` | ✅ Activo | v3.0 | OODA loop activo diariamente |
| WF1 Onboarding | `Ef8vQUlX57OzBzFs` | ✅ Activo | v1.0 | Disponible para nuevos clientes |
| WF2 Scout | `gSBbWOaDNHY79x0t` | ✅ Activo | v2.6 | Pipeline activo |
| WF3 Architect | `MfhbZLXGj3jUCWzk` | ✅ Activo | v1.5 | Con Supabase integration |
| WF4 Writer | `xhX9DmA4Tm6lUNIC` | ✅ Activo | v1.1 | QA 7 reglas operativo |
| WF5 Watchdog | `s0KEv1B6eqmlAwfj` | ✅ Activo | v1.8 | Corre cada lunes |
| WF6 Analyst | `y9T99kWP6z0L9Fkx` | ✅ Activo | v1.1 | Corre día 1 de cada mes |
| WF7 Reporter | `1ONmZkJxkOBZs70u` | ✅ Activo | v1.2 | Con Supabase integration |
| WF8 Diagnosis | `qStHMljTcYjd72Fl` | ⏳ Pendiente activación | v1.0 | En espera de activar en UI |

### Integraciones de Supabase

| Tabla | Estado | Escribe |
|-------|--------|---------|
| `keyword_performance` | ✅ Verificado (20 registros) | WF5 |
| `agent_decisions` | ✅ Activo | WF3 |
| `client_trajectory` | ✅ Activo | WF7 |
| `agent_sessions` | ✅ Activo | WF0 |
| `lead_diagnoses` | ⏳ Schema pendiente | WF8 |
| `pattern_memory` | 🔜 Futuro (WF8 Memory Keeper) | — |
| `director_context` (vista) | ✅ Activa | Lee WF0 |

### Pendientes inmediatos

- [ ] **Activar WF8** en n8n UI + aplicar SQL migration `002_lead_diagnoses.sql`
- [ ] **Configurar Web3Forms** para apuntar al webhook de WF8
- [ ] **Llenar campo ICP Cliente** en Airtable para V&P Proyectamos y ACJ Cargo
- [ ] **Test AUTO completo** del Director con ICP relleno
- [ ] **Verificar credencial Gmail** para envío de reportes en WF7
- [ ] **WF4 Writer** → añadir escritura de `agent_decisions` en Supabase (article_created)
- [ ] **WF8 Memory Keeper** — construir cuando haya 2–3 semanas de datos en Supabase

### Clientes activos actuales

- **V&P Proyectamos** — construcción
- **ACJ Cargo** — logística

---

## Referencia de Comandos Telegram

El bot de Telegram es la interfaz de comando principal para el equipo.

| Comando | Resultado |
|---------|-----------|
| `/scout Empresa: [nombre]` | Activa WF2 para ese cliente |
| `/architect Empresa: [nombre]` | Activa WF3 para ese cliente |
| `/writer Empresa: [nombre]` | Activa WF4 para ese cliente |
| `/watchdog Empresa: [nombre]` | Activa WF5 manualmente |
| `/analyst ACJ Cargo` | Activa WF6 para ese cliente |
| `/report ACJ Cargo` | Activa WF7 para ese cliente |
| `/director [pregunta libre]` | Modo conversacional con Director AI |
| `/help` | Lista todos los comandos disponibles |

---

*Documento generado el 19 de mayo de 2026. Sistema en producción activa.*
