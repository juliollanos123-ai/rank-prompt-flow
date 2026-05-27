import type { CategorySlug, Author, Block, Article } from "./blog";
export type { CategorySlug, Author, Block, Article };
export { readingTimeMinutes } from "./blog";

// ─── Slugs en español ───────────────────────────────────────────────────────

export type EsCategorySlug =
  | "busqueda-con-ia"
  | "crecimiento-b2b"
  | "seo-tecnico"
  | "roi-del-seo";

export type CategoryEs = {
  slug: EsCategorySlug;
  enSlug: CategorySlug;
  label: string;
  description: string;
  chipClass: string;
};

export type ArticleEs = Article & {
  enSlug: string;
  categoryEs: EsCategorySlug;
};

// ─── Mapeos de slugs ────────────────────────────────────────────────────────

export const categorySlugEnToEs: Record<CategorySlug, EsCategorySlug> = {
  "ai-search": "busqueda-con-ia",
  "b2b-growth": "crecimiento-b2b",
  "seo-engineering": "seo-tecnico",
  "seo-roi": "roi-del-seo",
};

export const categorySlugEsToEn: Record<EsCategorySlug, CategorySlug> = {
  "busqueda-con-ia": "ai-search",
  "crecimiento-b2b": "b2b-growth",
  "seo-tecnico": "seo-engineering",
  "roi-del-seo": "seo-roi",
};

export const articleSlugEnToEs: Record<string, string> = {
  "what-is-geo": "que-es-geo",
  "ai-seo-vs-traditional-seo": "seo-ia-vs-seo-tradicional",
  "how-to-rank-in-chatgpt": "como-aparecer-en-chatgpt",
  "seo-for-b2b-companies": "seo-para-empresas-b2b",
  "b2b-saas-seo-guide": "seo-saas-b2b",
  "best-b2b-seo-agency": "como-elegir-agencia-seo-b2b",
  "technical-seo-for-saas": "seo-tecnico-para-saas",
  "technical-seo-audit": "auditoria-seo-tecnico",
  "how-much-does-b2b-seo-cost": "cuanto-cuesta-seo-b2b",
  "seo-retainer-vs-project": "retainer-seo-vs-proyecto",
};

export const articleSlugEsToEn: Record<string, string> = {
  "que-es-geo": "what-is-geo",
  "seo-ia-vs-seo-tradicional": "ai-seo-vs-traditional-seo",
  "como-aparecer-en-chatgpt": "how-to-rank-in-chatgpt",
  "seo-para-empresas-b2b": "seo-for-b2b-companies",
  "seo-saas-b2b": "b2b-saas-seo-guide",
  "como-elegir-agencia-seo-b2b": "best-b2b-seo-agency",
  "seo-tecnico-para-saas": "technical-seo-for-saas",
  "auditoria-seo-tecnico": "technical-seo-audit",
  "cuanto-cuesta-seo-b2b": "how-much-does-b2b-seo-cost",
  "retainer-seo-vs-proyecto": "seo-retainer-vs-project",
};

// ─── Categorías en español ──────────────────────────────────────────────────

export const categoriesEs: Record<EsCategorySlug, CategoryEs> = {
  "busqueda-con-ia": {
    slug: "busqueda-con-ia",
    enSlug: "ai-search",
    label: "Búsqueda con IA",
    description: "Cómo la IA generativa está transformando la búsqueda — y qué significa para la visibilidad B2B.",
    chipClass: "bg-prompt text-canvas",
  },
  "crecimiento-b2b": {
    slug: "crecimiento-b2b",
    enSlug: "b2b-growth",
    label: "Crecimiento B2B",
    description: "Estrategias de crecimiento orgánico diseñadas para ciclos de compra B2B complejos y procesos de venta largos.",
    chipClass: "bg-flow text-canvas",
  },
  "seo-tecnico": {
    slug: "seo-tecnico",
    enSlug: "seo-engineering",
    label: "SEO Técnico",
    description: "Fundamentos técnicos que hacen que los sitios web B2B sean rastreables, rápidos y confiables.",
    chipClass: "bg-ink text-canvas",
  },
  "roi-del-seo": {
    slug: "roi-del-seo",
    enSlug: "seo-roi",
    label: "ROI del SEO",
    description: "Cómo medir, predecir y maximizar el retorno de tu inversión en SEO.",
    chipClass: "bg-canvas text-ink border border-prompt/60",
  },
};

// ─── Autores ────────────────────────────────────────────────────────────────

const julio: Author = {
  name: "Julio Llanos",
  role: "Fundador y Director de Estrategia SEO",
  initials: "JL",
};

const diego: Author = {
  name: "Diego Parra",
  role: "Co-fundador y Director de Crecimiento",
  initials: "DP",
};

const katty: Author = {
  name: "Katty Theran",
  role: "Estratega SEO",
  initials: "KT",
};

const paula: Author = {
  name: "Paula Elena",
  role: "Líder de Contenido y GEO",
  initials: "PE",
};

// ─── Artículos ──────────────────────────────────────────────────────────────

const articlesEs: ArticleEs[] = [
  // ── BÚSQUEDA CON IA ─────────────────────────────────────────────────────
  {
    slug: "que-es-geo",
    enSlug: "what-is-geo",
    title: "¿Qué es GEO? La Optimización para Motores Generativos explicada para B2B",
    category: "ai-search",
    categoryEs: "busqueda-con-ia",
    excerpt: "GEO es la práctica de optimizar tu marca para ser citada por sistemas de IA como ChatGPT, Perplexity y Google AI Overviews. Aquí explicamos por qué es más importante que el SEO tradicional para las empresas B2B.",
    publishedAt: "2026-05-10",
    author: julio,
    featured: true,
    body: [
      {
        type: "p",
        text: "En 2024, algo cambió que la mayoría de los profesionales de marketing B2B pasaron por alto: los compradores empezaron a consultar asistentes de IA en lugar de motores de búsqueda. No en lugar de Google del todo — sino antes de Google. Escribían una pregunta en ChatGPT o Perplexity, obtenían una respuesta sintetizada y confiable, y solo entonces visitaban uno o dos de los sitios web citados.",
      },
      {
        type: "p",
        text: "Si tu marca no era citada en esa respuesta de IA, no existías en ese primer momento crítico del recorrido del comprador. Ese es el problema que GEO — Generative Engine Optimization (Optimización para Motores Generativos) — nació para resolver.",
      },
      {
        type: "h2",
        id: "what-geo-means",
        text: "Qué significa realmente GEO",
      },
      {
        type: "p",
        text: "La Optimización para Motores Generativos (GEO) es la disciplina de optimizar tu contenido, marca y presencia digital para que los sistemas de búsqueda impulsados por IA — incluyendo ChatGPT, Perplexity, Google AI Overviews, Claude y Bing Copilot — citen tu marca cuando respondan preguntas relevantes para tu negocio.",
      },
      {
        type: "p",
        text: "A diferencia del SEO tradicional, que optimiza para una lista ordenada de enlaces azules, el GEO optimiza para la inclusión en una respuesta sintetizada. La IA lee cientos de fuentes, decide cuáles son más confiables y relevantes, y teje una respuesta que cita a los ganadores. Tu objetivo es ser una de esas fuentes ganadoras.",
      },
      {
        type: "quote",
        text: "El cambio de resultados ordenados a respuestas sintetizadas es el mayor cambio en recuperación de información desde PageRank. Las marcas que optimizan para citaciones — no solo para rankings — dominarán la próxima década de la búsqueda orgánica.",
        cite: "Julio Llanos, Rank Your Brand",
      },
      {
        type: "h2",
        id: "traditional-seo-limits",
        text: "Por qué el SEO tradicional solo no es suficiente",
      },
      {
        type: "p",
        text: "El SEO tradicional fue construido para un mundo donde los usuarios recorren una lista ordenada y hacen clic. En ese modelo, estar en el #1 significa el máximo tráfico. Pero en la búsqueda generativa, el modelo sintetiza una respuesta a partir de docenas de fuentes — y el usuario a menudo obtiene lo que necesita sin hacer clic en absoluto.",
      },
      {
        type: "p",
        text: "Esto no significa que el SEO tradicional haya muerto. Significa que la definición de 'ganar' ha cambiado. Ganar ahora significa ser citado en la respuesta de la IA, tener tu entidad (tu empresa, tus fundadores, tus conceptos clave) reconocida y confiada por los datos de entrenamiento del modelo, y tener contenido estructurado de una manera que los sistemas de IA puedan citar con confianza.",
      },
      {
        type: "ul",
        items: [
          "El SEO tradicional gana: tu página aparece en el #1 en los enlaces azules debajo de la respuesta de IA",
          "El GEO gana: tu marca es citada en la respuesta de IA, antes de que aparezcan los enlaces azules",
          "El objetivo real: ambos — visibilidad en AI Overviews Y rankings orgánicos",
        ],
      },
      {
        type: "h2",
        id: "three-pillars",
        text: "Los tres pilares del GEO",
      },
      {
        type: "h3",
        text: "1. Autoridad de Entidad",
      },
      {
        type: "p",
        text: "Los modelos de IA entienden el mundo a través de entidades — personas, empresas, productos, conceptos. Tu marca necesita ser una entidad bien definida y confiable en el grafo de conocimiento. Esto implica menciones consistentes en sitios autorizados, presencia en Wikidata, Crunchbase y bases de datos del sector, y una clara desambiguación de entidad.",
      },
      {
        type: "h3",
        text: "2. Ingeniería de Citabilidad",
      },
      {
        type: "p",
        text: "No todo el contenido es igualmente citable por una IA. El contenido optimizado para GEO está estructurado de manera que los modelos de IA puedan extraer respuestas claras y confiadas. Esto implica usar definiciones precisas, afirmaciones factuales con atribuciones, datos estructurados (schema.org) y un estilo de escritura directo — no ambiguo, no vago.",
      },
      {
        type: "h3",
        text: "3. Alineación Conversacional",
      },
      {
        type: "p",
        text: "Los compradores hacen preguntas a los sistemas de IA en lenguaje natural, no en cadenas de palabras clave. El GEO requiere mapear tu contenido a las preguntas reales que hacen tus compradores — en oraciones completas, con el contexto que rodea a una conversación real.",
      },
      {
        type: "h2",
        id: "how-ai-cites",
        text: "Cómo deciden los modelos de IA qué citar",
      },
      {
        type: "p",
        text: "Los algoritmos exactos son propietarios y evolucionan constantemente, pero mediante pruebas sistemáticas en cientos de consultas, varios factores influyen consistentemente en las tasas de citación de IA:",
      },
      {
        type: "ul",
        items: [
          "Autoridad de dominio por backlinks tradicionales — sigue importando, alimenta la señal de confianza subyacente",
          "Autoridad temática — publicar en profundidad sobre un cluster de temas específico de manera consistente",
          "Frescura — el contenido reciente, especialmente en temas de rápida evolución, se cita más",
          "Claridad estructural — los encabezados, viñetas y definiciones son más fáciles de citar para la IA",
          "Menciones de terceros — ser citado POR otras fuentes acreditadas señala que vales la pena citar",
          "Desambiguación de entidad — ser claramente identificable como una empresa o experto específico",
        ],
      },
      {
        type: "callout",
        text: "Probamos más de 50 consultas semanalmente en ChatGPT, Perplexity y Claude para cada cliente. Las marcas que se citan con mayor consistencia comparten un rasgo: han publicado contenido autorizado y estructurado en un cluster de temas bien definido — no contenido generalista disperso.",
      },
      {
        type: "h2",
        id: "geo-vs-seo",
        text: "GEO vs SEO: Una comparación práctica",
      },
      {
        type: "p",
        text: "Piensa en GEO y SEO como dos capas de la misma estrategia. El SEO construye la base: salud técnica, autoridad de backlinks, rankings de palabras clave. El GEO construye sobre eso: reconocimiento de entidad, citabilidad, alineación conversacional. Ninguno reemplaza al otro — pero las marcas que solo hacen SEO están dejando toda la capa de IA de la búsqueda a sus competidores.",
      },
      {
        type: "h2",
        id: "measuring-geo",
        text: "Cómo medir tu rendimiento GEO",
      },
      {
        type: "ul",
        items: [
          "Tasa de citación: % de consultas objetivo donde se menciona tu marca en las respuestas de IA",
          "Posición de citación: ¿eres la primera marca mencionada o la tercera? La primera importa más",
          "Calidad del contexto: ¿tu marca se cita de forma positiva, neutral o en una comparación?",
          "Desplazamiento competitivo: ¿te están citando en lugar de competidores con el tiempo?",
          "Cuota de voz en IA: en 50–100 consultas objetivo, ¿qué % incluye tu marca?",
        ],
      },
      {
        type: "h2",
        id: "getting-started",
        text: "Por dónde empezar: Tus primeros 30 días",
      },
      {
        type: "p",
        text: "Primero, ejecuta una auditoría GEO base — prueba 20–30 consultas en ChatGPT y Perplexity donde deberías aparecer. Documenta dónde apareces y dónde no. Este es tu punto de partida.",
      },
      {
        type: "p",
        text: "Segundo, fortalece tu huella de entidad. Asegúrate de que tu empresa tenga un perfil completo en Crunchbase, LinkedIn y, si es suficientemente notable, una entrada en Wikidata.",
      },
      {
        type: "callout",
        text: "El GEO no es una estrategia separada del marketing de contenido — es una forma de hacer que tu marketing de contenido trabaje el doble. El mismo contenido que posiciona en Google puede optimizarse para ser citado en ChatGPT. Solo necesita estar estructurado correctamente.",
      },
    ],
  },
  {
    slug: "seo-ia-vs-seo-tradicional",
    enSlug: "ai-seo-vs-traditional-seo",
    title: "SEO con IA vs SEO Tradicional: Qué cambia y qué sigue siendo válido",
    category: "ai-search",
    categoryEs: "busqueda-con-ia",
    excerpt: "El SEO tradicional y el SEO con IA comparten los mismos fundamentos — pero divergen en la capa estratégica. Esto es lo que los equipos B2B necesitan saber para competir en ambos.",
    publishedAt: "2026-05-03",
    author: diego,
    body: [
      {
        type: "p",
        text: "Cada semana, un nuevo artículo declara al SEO tradicional muerto. Y cada semana, el tráfico orgánico de resultados de enlace azul continúa generando ingresos para las empresas que prestan atención. La realidad es más matizada: el SEO tradicional no está muerto, pero ya no es suficiente por sí solo. Los equipos B2B que ganan en 2026 ejecutan ambos en paralelo.",
      },
      {
        type: "h2",
        id: "the-fundamental-difference",
        text: "La diferencia fundamental",
      },
      {
        type: "p",
        text: "El SEO tradicional es un juego de posicionamiento: rankear lo más alto posible en la lista ordenada de resultados para una consulta. La tasa de clics cae drásticamente después de la posición 3. La posición 1 obtiene aproximadamente el 40% de los clics. Todo lo demás lucha por las migajas restantes.",
      },
      {
        type: "p",
        text: "El SEO con IA — o GEO — es un juego de citación. Cuando ChatGPT responde '¿Cuál es la mejor agencia de SEO B2B para empresas SaaS?', sintetiza una respuesta a partir de múltiples fuentes y puede citar entre 0 y 5 marcas. No hay ranking; o apareces en la respuesta o no. Y a diferencia de la posición 1 vs. posición 3, ser citado vs. no ser citado es un resultado binario.",
      },
      {
        type: "h2",
        id: "what-still-works",
        text: "Lo que el SEO tradicional sigue haciendo bien",
      },
      {
        type: "p",
        text: "Los backlinks siguen importando — alimentan las señales de confianza que los modelos de IA usan para decidir qué es creíble. El SEO técnico sigue importando — los sitios lentos o bloqueados para rastreo no se indexan, y el contenido no indexado no puede ser citado. La estrategia de palabras clave sigue importando — necesitas rankear para las consultas que aparecen por encima o debajo de los AI Overviews.",
      },
      {
        type: "ul",
        items: [
          "La autoridad de dominio por backlinks alimenta las señales de confianza para citación de IA",
          "El SEO técnico garantiza que el contenido sea indexable y, por tanto, entrenable",
          "Los rankings de palabras clave siguen generando tráfico para consultas que la IA responde de forma incompleta",
          "La profundidad del contenido señala autoridad temática tanto a Google como a los modelos de IA",
        ],
      },
      {
        type: "h2",
        id: "what-ai-seo-adds",
        text: "Lo que el SEO con IA agrega a la mezcla",
      },
      {
        type: "p",
        text: "El GEO añade tres capacidades que el SEO tradicional no aborda: optimización de entidad (garantizar que los modelos de IA reconozcan y confíen en tu marca), ingeniería de citabilidad (estructurar el contenido para que la IA pueda citarlo con confianza), y cobertura de consultas conversacionales (optimizar para preguntas en oraciones completas, no solo palabras clave).",
      },
      {
        type: "h2",
        id: "b2b-hybrid-strategy",
        text: "La estrategia híbrida B2B",
      },
      {
        type: "p",
        text: "Para las empresas B2B, la decisión correcta es ejecutar el SEO tradicional como base (salud técnica, backlinks, rankings de palabras clave) y superponer el GEO (autoridad de entidad, contenido estructurado, alineación conversacional). No elijas uno — ambos sirven a diferentes momentos del recorrido del comprador. Tu comprador podría descubrirte a través de una citación de IA y luego validarte encontrando tu contenido rankeando en Google. Ambos puntos de contacto importan.",
      },
    ],
  },
  {
    slug: "como-aparecer-en-chatgpt",
    enSlug: "how-to-rank-in-chatgpt",
    title: "Cómo lograr que tu marca aparezca en ChatGPT (Guía práctica para B2B)",
    category: "ai-search",
    categoryEs: "busqueda-con-ia",
    excerpt: "Ser mencionado en las respuestas de ChatGPT se está convirtiendo en una fuente principal de leads para empresas B2B. Aquí está el enfoque sistemático que usamos para aumentar las tasas de citación de nuestros clientes.",
    publishedAt: "2026-04-25",
    author: katty,
    body: [
      {
        type: "p",
        text: "Ejecutamos auditorías de citación semanales para nuestros clientes en ChatGPT, Perplexity y Claude. Después de probar miles de consultas durante 18 meses, hemos identificado los patrones que de manera consistente predicen si una marca B2B es citada — o ignorada. Esta guía comparte los hallazgos más accionables.",
      },
      {
        type: "h2",
        id: "why-chatgpt-citations-matter",
        text: "Por qué las citaciones en ChatGPT importan para B2B",
      },
      {
        type: "p",
        text: "En B2B, el recorrido de compra generalmente comienza con la conciencia del problema, no con el descubrimiento del proveedor. Tu comprador tiene un problema y busca comprenderlo — 'cómo mejorar la calidad de leads B2B', 'mejores prácticas para el onboarding de SaaS', 'qué es el SEO programático'. Los asistentes de IA son cada vez más el primer puerto de escala para estas consultas exploratorias.",
      },
      {
        type: "p",
        text: "Si tu marca es citada cuando un comprador le pregunta a ChatGPT sobre tu espacio de problemas, entras en su conjunto de consideración antes de que siquiera haya visitado un sitio web. Esa es una ventaja significativa que se acumula con el tiempo.",
      },
      {
        type: "h2",
        id: "signals-chatgpt-uses",
        text: "Las señales que ChatGPT usa para elegir fuentes",
      },
      {
        type: "ul",
        items: [
          "Profundidad temática: 10 artículos exhaustivos sobre un tema supera a 100 artículos superficiales",
          "Citaciones entrantes: ser enlazado por publicaciones reconocidas del sector",
          "Señales de entidad: presencia en Wikidata, Crunchbase, LinkedIn",
          "Estructura del contenido: encabezados claros, viñetas, definiciones, pasos numerados",
          "Edad y autoridad del dominio: confianza construida con el tiempo",
          "Frescura para temas de rápida evolución: la búsqueda de IA favorece contenido reciente en categorías volátiles",
        ],
      },
      {
        type: "h2",
        id: "five-tactics",
        text: "Cinco tácticas para aumentar tu tasa de citación",
      },
      {
        type: "p",
        text: "Primero: escribe definiciones directas. Cuando un comprador pregunta '¿qué es [tu concepto]?', quiere una respuesta clara y definitiva. Escríbela y hazla el primer párrafo de tu página más relevante. Segundo: consigue citaciones de publicaciones del sector respetadas — le indica a los modelos de IA que eres una fuente creíble. Tercero: crea un FAQ estructurado para cada servicio. Los sistemas de IA adoran los FAQs — son pares pregunta-respuesta que mapean perfectamente cómo la IA generativa formatea respuestas.",
      },
      {
        type: "callout",
        text: "La forma más rápida de aparecer en ChatGPT es escribir la definición más clara y autorizada del problema que tienen tus compradores — y luego conseguir que esa página sea enlazada por al menos tres fuentes respetadas del sector.",
      },
      {
        type: "h2",
        id: "measuring-chatgpt-presence",
        text: "Cómo medir tu presencia en ChatGPT",
      },
      {
        type: "p",
        text: "Construye un banco de consultas de 30–50 preguntas que hacen tus compradores en diferentes etapas (conciencia, consideración, decisión). Prueba cada una en ChatGPT (con y sin navegación), Perplexity y Claude mensualmente. Rastrea: frecuencia de citación, posición de citación y sentimiento. Esto se convierte en tu scorecard de GEO — tan valioso como tu informe de rankings de palabras clave.",
      },
    ],
  },

  // ── CRECIMIENTO B2B ────────────────────────────────────────────────────────
  {
    slug: "seo-para-empresas-b2b",
    enSlug: "seo-for-b2b-companies",
    title: "SEO para Empresas B2B: Guía Completa de Estrategia",
    category: "b2b-growth",
    categoryEs: "crecimiento-b2b",
    excerpt: "El SEO para B2B es fundamentalmente diferente al B2C. Los ciclos de compra largos, las decisiones en comité y las keywords de nicho requieren un enfoque distinto. Aquí te mostramos cómo construirlo.",
    publishedAt: "2026-05-15",
    author: paula,
    body: [
      {
        type: "p",
        text: "El SEO para B2B tiene fama de ser lento y difícil de medir. Esa reputación no es errónea — pero está incompleta. Las empresas que tratan el SEO B2B como un activo de capitalización a largo plazo superan consistentemente a aquellas que lo tratan como un canal de ganancias rápidas. La clave es entender qué hace diferente al SEO B2B y construir una estrategia que tenga en cuenta esas diferencias.",
      },
      {
        type: "h2",
        id: "b2b-vs-b2c-seo",
        text: "El SEO B2B es fundamentalmente diferente al B2C",
      },
      {
        type: "p",
        text: "En B2C, el recorrido del comprador suele durar días o semanas. Un usuario busca, lee algunas reseñas y convierte. En B2B, el proceso puede durar de 6 a 18 meses. Hay múltiples partes interesadas involucradas. El contenido que necesita un VP de Operaciones es completamente diferente al que necesita el CFO o el usuario final. Tu estrategia de SEO tiene que cubrir a todos ellos.",
      },
      {
        type: "ul",
        items: [
          "Ciclos de compra: B2C días-semanas, B2B meses-años",
          "Tomadores de decisiones: B2C individual, B2B comité de 5–10 personas",
          "Contenido necesario: B2C enfocado en producto, B2B educativo + enfocado en ROI + técnico",
          "Palabras clave: B2C alto volumen amplio, B2B bajo volumen altamente específico",
          "Conversión: B2C añadir al carrito, B2B agendar una llamada / solicitar demo / contactar",
        ],
      },
      {
        type: "h2",
        id: "keyword-strategy",
        text: "Estrategia de palabras clave para ciclos de venta largos",
      },
      {
        type: "p",
        text: "El error que cometen la mayoría de los equipos B2B con el SEO es apuntar a palabras clave demasiado amplias. 'Software CRM' obtiene millones de búsquedas mensuales — y está dominado por HubSpot, Salesforce y Gartner. 'Software CRM para empresas manufactureras con equipos de servicio de campo' obtiene 200 búsquedas mensuales — y puedes rankear para eso en 90 días con un buen artículo.",
      },
      {
        type: "p",
        text: "La estrategia de palabras clave B2B debe escalar desde broad (conciencia de marca) a través de mid-funnel (educación de categoría) hasta bottom-funnel (consultas específicas de alta intención). El contenido de bottom-funnel convierte mejor y a menudo tiene menos competencia.",
      },
      {
        type: "h2",
        id: "content-for-b2b-buyers",
        text: "Contenido que convierte a los compradores B2B",
      },
      {
        type: "p",
        text: "Los compradores B2B consumen en promedio 13 piezas de contenido antes de tomar una decisión de compra. Tu biblioteca de contenido necesita atender cada etapa: conciencia (tendencias del sector, definiciones de problemas), consideración (guías prácticas, comparativas, casos de estudio) y decisión (calculadoras de ROI, demostraciones, casos de estudio con métricas específicas). La última categoría es donde la mayoría de los sitios B2B fallan.",
      },
      {
        type: "h2",
        id: "technical-seo-for-b2b",
        text: "SEO técnico para sitios web B2B",
      },
      {
        type: "p",
        text: "Los sitios web B2B acumulan deuda técnica más rápido que los B2C: configuraciones de CMS complejas, plataformas con mucho JavaScript, cadenas de redirección heredadas y contenido duplicado de páginas protegidas. Antes de invertir en contenido, audita tu base técnica. Un sitio con problemas de rastreo no verá los retornos del nuevo contenido que vería un sitio técnicamente limpio.",
      },
    ],
  },
  {
    slug: "seo-saas-b2b",
    enSlug: "b2b-saas-seo-guide",
    title: "SEO para SaaS B2B: De cero a pipeline medible en 12 meses",
    category: "b2b-growth",
    categoryEs: "crecimiento-b2b",
    excerpt: "Las empresas SaaS tienen desafíos SEO únicos: iteración de producto rápida, landscape amplio de palabras clave y presión para atribuir ingresos. Así es como los mejores equipos SaaS B2B lo abordan.",
    publishedAt: "2026-04-18",
    author: julio,
    body: [
      {
        type: "p",
        text: "El SEO para SaaS es una de las inversiones más apalancadas que puede hacer una empresa B2B — pero solo si se configura correctamente desde el principio. A diferencia de los negocios basados en proyectos, las empresas SaaS pueden usar el SEO para construir canales de adquisición de clientes orgánicos que se acumulan mes a mes, reduciendo el CAC mientras aumentan el LTV.",
      },
      {
        type: "h2",
        id: "saas-seo-funnel",
        text: "El embudo SEO para SaaS",
      },
      {
        type: "p",
        text: "Piensa en el SEO para SaaS en tres capas. La capa superior es contenido de conciencia del problema — usuarios que tienen el problema que resuelve tu software pero no saben que el software es la solución. La capa intermedia es contenido de categoría — usuarios que saben que necesitan una herramienta como la tuya pero están evaluando opciones. La capa inferior es contenido de alta intención — usuarios buscando 'mejor software de [categoría]', 'alternativa a [competidor]' o 'precios de [tu marca]'.",
      },
      {
        type: "h2",
        id: "bottom-funnel-keywords",
        text: "Palabras clave de bottom-funnel que generan pruebas gratuitas",
      },
      {
        type: "p",
        text: "El camino más rápido hacia ingresos atribuibles del SEO son las palabras clave de bottom-funnel. Estas tienen menor volumen pero una intención dramáticamente mayor. Las páginas '[Competidor] vs [Tu Producto]', páginas de precios y páginas de reseñas convierten a 3–5× la tasa del contenido de top-funnel. Construye estas primero.",
      },
      {
        type: "ul",
        items: [
          "'Alternativa a [Competidor]' — captura compradores que están evaluando activamente tu espacio",
          "'Software de [Categoría] para [Sector]' — nicho, alta intención, baja competencia",
          "'Cómo [caso de uso clave]' — atrae usuarios con exactamente el problema que resuelves",
          "'[Tu producto] vs [competidor]' — controla la comparación antes de que lo haga G2/Capterra",
        ],
      },
      {
        type: "h2",
        id: "product-led-seo",
        text: "SEO basado en producto para SaaS",
      },
      {
        type: "p",
        text: "La estrategia de SEO más escalable para SaaS es basada en producto: dejar que tu producto genere páginas valiosas para SEO de forma automática. Las páginas públicas de Notion, los archivos de la comunidad de Figma, el directorio de plantillas de Airtable — todos crean miles de páginas indexadas sin creación manual de contenido. Si tu producto genera contenido creado por usuarios o tiene resultados compartibles, hay un enfoque de SEO basado en producto que vale la pena explorar.",
      },
      {
        type: "h2",
        id: "measuring-seo-on-arr",
        text: "Cómo medir el impacto del SEO en el ARR",
      },
      {
        type: "p",
        text: "El problema clásico de atribución: un prospecto lee tu blog, regresa dos semanas después por un anuncio pagado, se registra para una prueba gratuita y convierte tras una llamada de ventas. ¿Qué canal se lleva el crédito? La respuesta correcta es todos — pero la contribución de primer contacto del SEO a menudo es invisible en los modelos de último contacto. Configura la atribución de primer contacto en GA4 y rastrea los registros de prueba orgánicos por separado de otros canales.",
      },
    ],
  },
  {
    slug: "como-elegir-agencia-seo-b2b",
    enSlug: "best-b2b-seo-agency",
    title: "Cómo elegir la mejor agencia de SEO B2B (Qué preguntar, qué evitar)",
    category: "b2b-growth",
    categoryEs: "crecimiento-b2b",
    excerpt: "No todas las agencias de SEO entienden el B2B. Aquí hay un framework práctico para evaluar agencias, evitar trampas comunes y asegurarte de que el engagement realmente genere pipeline.",
    publishedAt: "2026-04-10",
    author: diego,
    body: [
      {
        type: "p",
        text: "La mayoría de las agencias de SEO están construidas para B2C o e-commerce. Están optimizadas para el volumen de tráfico y las ganancias rápidas — no para los ciclos de nurture de 6 meses, los procesos de compra con múltiples partes interesadas y las métricas basadas en cuentas que definen el éxito B2B. Encontrar una agencia que realmente entienda tu negocio requiere hacer las preguntas correctas antes de firmar nada.",
      },
      {
        type: "h2",
        id: "what-makes-a-great-b2b-seo-agency",
        text: "Qué hace grande a una agencia de SEO B2B",
      },
      {
        type: "p",
        text: "Una gran agencia de SEO B2B entiende que el objetivo es el pipeline, no el tráfico. Puede explicar cómo atribuyen la contribución del SEO a los ingresos. Han trabajado con empresas en ciclos de venta complejos. Conocen la diferencia entre MQL y SQL. Y pueden hablar inteligentemente sobre el comité de compra — a quién realmente estás tratando de llegar y qué necesita ver cada parte interesada.",
      },
      {
        type: "ul",
        items: [
          "Enfoque en pipeline, no en métricas de vanidad de tráfico",
          "Casos de estudio específicos de B2B con atribución de ingresos",
          "Comprensión de ciclos de venta complejos y comités de compradores",
          "Reporting transparente con indicadores tanto adelantados como rezagados",
          "Capacidad de integrarse con tu CRM para atribución de circuito cerrado",
        ],
      },
      {
        type: "h2",
        id: "questions-to-ask",
        text: "Preguntas que hacer antes de contratar",
      },
      {
        type: "p",
        text: "Pregunta: '¿Cómo se ve el éxito en el mes 6 para una empresa como la nuestra?' Si responden solo con rankings y tráfico, sal corriendo. Pregunta: '¿Pueden mostrarme un caso de estudio de una empresa B2B en un ciclo de venta largo?' Si muestran ejemplos de e-commerce, es una señal de alerta. Pregunta: '¿Cómo abordan la creación de contenido — usan IA, escritores humanos o una combinación?' La respuesta te dice mucho sobre la calidad que puedes esperar.",
      },
      {
        type: "h2",
        id: "red-flags",
        text: "Señales de alerta a tener en cuenta",
      },
      {
        type: "p",
        text: "Señal #1: garantías. Ninguna agencia legítima garantiza rankings específicos — el algoritmo cambia y los resultados son inherentemente impredecibles. Señal #2: contratos largos sin cláusulas de rendimiento. Señal #3: contenido generado por IA a escala sin supervisión editorial. La cantidad sin calidad no funciona en B2B, donde tus compradores son sofisticados y detectan el contenido superficial de inmediato.",
      },
      {
        type: "h2",
        id: "evaluating-roi",
        text: "Cómo evaluar el ROI de una agencia",
      },
      {
        type: "p",
        text: "Establece una línea base antes de comenzar: tráfico orgánico, leads orgánicos y tasa de MQL orgánico actual. En el mes 3, verifica indicadores adelantados: movimiento de palabras clave, páginas indexadas, backlinks. En el mes 6, verifica indicadores rezagados: crecimiento de MQL orgánico y atribución de ingresos. Si no ves tendencias positivas para el mes 3, la estrategia necesita cambiar — no esperar hasta el mes 12.",
      },
    ],
  },

  // ── SEO TÉCNICO ─────────────────────────────────────────────────────────────
  {
    slug: "seo-tecnico-para-saas",
    enSlug: "technical-seo-for-saas",
    title: "SEO Técnico para SaaS: El checklist completo 2026",
    category: "seo-engineering",
    categoryEs: "seo-tecnico",
    excerpt: "Los sitios web de SaaS tienen desafíos únicos de SEO técnico: renderizado JavaScript, estrategia de subdominios, contenido dinámico y Core Web Vitals. Aquí te explicamos cómo abordar cada uno.",
    publishedAt: "2026-05-08",
    author: katty,
    body: [
      {
        type: "p",
        text: "Las empresas SaaS construyen productos técnicamente sofisticados — pero sus sitios web de marketing a menudo tienen brechas significativas de SEO técnico. Construcciones con mucho JavaScript, mala canonicalización, subdominios de aplicación que diluyen la autoridad y Core Web Vitals descuidados son los culpables más comunes. Esta guía cubre las correcciones técnicas más impactantes para sitios web de SaaS en 2026.",
      },
      {
        type: "h2",
        id: "core-web-vitals",
        text: "Core Web Vitals y rankings de SaaS",
      },
      {
        type: "p",
        text: "Los Core Web Vitals de Google (LCP, FID/INP, CLS) son un factor de ranking confirmado. Los sitios de marketing de SaaS fallan frecuentemente en LCP porque cargan imágenes de héroe grandes o dependen de JavaScript para renderizar contenido above-the-fold. La solución: precarga tu imagen LCP, elimina los recursos que bloquean el renderizado de la ruta crítica y usa un CDN que sirva desde nodos edge cercanos a tus visitantes.",
      },
      {
        type: "ul",
        items: [
          "LCP (Largest Contentful Paint): objetivo < 2.5s — precarga la imagen de héroe, optimiza el tiempo de respuesta del servidor",
          "INP (Interaction to Next Paint): objetivo < 200ms — reduce la ejecución de JavaScript en el hilo principal",
          "CLS (Cumulative Layout Shift): objetivo < 0.1 — dimensiona explícitamente todas las imágenes e incrustaciones",
          "TTFB (Time to First Byte): objetivo < 800ms — usa un CDN y optimiza el renderizado del lado del servidor",
        ],
      },
      {
        type: "h2",
        id: "javascript-rendering",
        text: "Renderizado JavaScript y rastreabilidad",
      },
      {
        type: "p",
        text: "Google puede renderizar JavaScript, pero procesa las páginas renderizadas con JS en una segunda ola de rastreo — lo que puede retrasar la indexación días o semanas. El presupuesto de Googlebot para renderizado JS es limitado, por lo que las SPAs complejas a menudo ven un rastreo incompleto de su contenido. La solución para los sitios de marketing: renderizado del lado del servidor (SSR) o generación de sitios estáticos (SSG) para todas las páginas de contenido. Reserva el renderizado del lado del cliente para la propia aplicación.",
      },
      {
        type: "h2",
        id: "subdomain-vs-subdirectory",
        text: "Subdominio vs subdirectorio para tu blog",
      },
      {
        type: "p",
        text: "Una de las decisiones técnicas más importantes de una empresa SaaS es dónde alojar su blog: blog.empresa.com (subdominio) vs empresa.com/blog (subdirectorio). La respuesta SEO es inequívoca: los subdirectorios ganan. Los backlinks a blog.empresa.com construyen autoridad de dominio para ese subdominio, no para tu dominio principal. Las publicaciones en subdirectorios transfieren link equity de vuelta a tu dominio principal.",
      },
      {
        type: "h2",
        id: "schema-for-saas",
        text: "Schema markup para productos SaaS",
      },
      {
        type: "p",
        text: "Las empresas SaaS se benefician de tres tipos de schema principalmente. El schema SoftwareApplication le indica a Google exactamente qué hace tu producto y en qué categoría está. El schema FAQPage ayuda a capturar featured snippets para consultas de tipo pregunta. Y el schema Review/AggregateRating (con reseñas reales) puede mostrar calificaciones con estrellas en los resultados de búsqueda, mejorando drásticamente el CTR.",
      },
    ],
  },
  {
    slug: "auditoria-seo-tecnico",
    enSlug: "technical-seo-audit",
    title: "Cómo realizar una auditoría de SEO técnico: Proceso paso a paso",
    category: "seo-engineering",
    categoryEs: "seo-tecnico",
    excerpt: "Una auditoría de SEO técnico es el punto de partida de cualquier engagement SEO serio. Aquí está el proceso exacto de 4 fases que usamos con cada cliente B2B.",
    publishedAt: "2026-04-02",
    author: paula,
    body: [
      {
        type: "p",
        text: "Una auditoría de SEO técnico no es un evento único — es un protocolo de diagnóstico que debería ejecutarse trimestralmente para cualquier sitio con más de 100 páginas indexadas. Bien ejecutada, saca a la luz los problemas técnicos que bloquean tu crecimiento orgánico antes de que se conviertan en pérdidas de tráfico. Aquí está el proceso de cuatro fases que ejecutamos con cada cliente B2B.",
      },
      {
        type: "h2",
        id: "phase-1-crawl",
        text: "Fase 1 — Análisis de rastreo",
      },
      {
        type: "p",
        text: "Comienza con un rastreo completo usando Screaming Frog, Sitebulb o Ahrefs. Buscas: páginas que devuelven códigos de estado que no son 200, páginas bloqueadas por robots.txt que no deberían estarlo, cadenas de redirección de más de dos saltos, páginas sin etiquetas canonical o con canonicals incorrectos, y páginas con títulos y meta descripciones duplicados.",
      },
      {
        type: "ul",
        items: [
          "Errores 4xx: páginas rotas que pueden tener backlinks — redirige a una página viva relevante",
          "Errores 5xx: errores del servidor que impiden el rastreo — escala al equipo de desarrollo de inmediato",
          "Cadenas de redirección: las cadenas A → B → C pierden PageRank — aplana a A → C",
          "Páginas bloqueadas: confirma que robots.txt no está bloqueando contenido importante accidentalmente",
          "Contenido duplicado: encuentra y resuelve con etiquetas canonical o redirects 301",
        ],
      },
      {
        type: "h2",
        id: "phase-2-indexability",
        text: "Fase 2 — Indexabilidad y canonicals",
      },
      {
        type: "p",
        text: "La rastreabilidad (un bot puede llegar a la página) y la indexabilidad (Google la incluirá en los resultados) son cosas diferentes. Cruza los datos de tu rastreo con el informe de Cobertura de Google Search Console. Las páginas marcadas como 'Excluidas' o 'Noindex' necesitan investigación. Verifica: etiquetas noindex, inconsistencias de canonical, errores de hreflang y páginas huérfanas (contenido sin enlaces internos que apunten a él).",
      },
      {
        type: "h2",
        id: "phase-3-performance",
        text: "Fase 3 — Rendimiento y Core Web Vitals",
      },
      {
        type: "p",
        text: "Usa PageSpeed Insights y los datos de Chrome UX Report (CrUX) en GSC para medir los Core Web Vitals de usuarios reales. Los datos de campo de CrUX reflejan cómo los usuarios reales experimentan tu sitio — eso es lo que Google usa para el ranking. Enfócate primero en tus páginas más valiosas: página de inicio, páginas clave de servicios, publicaciones principales del blog.",
      },
      {
        type: "h2",
        id: "phase-4-schema",
        text: "Fase 4 — Schema y datos estructurados",
      },
      {
        type: "p",
        text: "Valida todo el schema existente con la Prueba de Resultados Enriquecidos de Google. Busca: schema con errores (JSON-LD inválido), schema presente pero no elegible para resultados enriquecidos, y páginas de alto valor sin schema alguno. Schemas prioritarios para sitios B2B: Organization, WebSite, Service, FAQPage en páginas de servicios, Article en publicaciones de blog, y BreadcrumbList en todas las páginas internas.",
      },
    ],
  },

  // ── ROI DEL SEO ─────────────────────────────────────────────────────────────
  {
    slug: "cuanto-cuesta-seo-b2b",
    enSlug: "how-much-does-b2b-seo-cost",
    title: "¿Cuánto cuesta el SEO para B2B? Un desglose honesto",
    category: "seo-roi",
    categoryEs: "roi-del-seo",
    excerpt: "El precio del SEO para B2B va desde $500/mes hasta más de $20,000. Aquí te explicamos qué determina ese rango, qué obtienes en cada nivel y cómo saber cuál es el adecuado para tu etapa.",
    publishedAt: "2026-05-01",
    author: julio,
    body: [
      {
        type: "p",
        text: "La pregunta más común que recibimos de fundadores B2B y líderes de marketing: '¿Cuánto deberíamos invertir en SEO?' La respuesta honesta: depende de tu base orgánica actual, tu panorama competitivo, tus objetivos de crecimiento y tu horizonte de tiempo. Pero eso no es útil sin contexto. Aquí está el contexto.",
      },
      {
        type: "h2",
        id: "the-range",
        text: "El rango es más amplio de lo que crees",
      },
      {
        type: "p",
        text: "Los precios de SEO para B2B van desde aproximadamente $500/mes (un freelancer con optimizaciones básicas) hasta $25,000+/mes (una agencia de servicio completo gestionando contenido, enlaces, técnico y GEO para una marca empresarial). El número correcto para tu negocio no está determinado por lo que puedes permitirte. Está determinado por el nivel de inversión competitivo que requiere tu mercado para ganar.",
      },
      {
        type: "callout",
        text: "La peor inversión en SEO es gastar muy poco para competir. Si tus tres principales competidores están invirtiendo cada uno $5,000–$10,000/mes en SEO, invertir $800/mes te dará actividad sin resultados.",
      },
      {
        type: "h2",
        id: "what-you-pay-for",
        text: "Qué obtienes en cada nivel",
      },
      {
        type: "ul",
        items: [
          "$500–1,500/mes: Freelancer o agencia básica — seguimiento de palabras clave, reportes mensuales, ediciones ligeras. Sin construcción proactiva de links, sin SEO técnico, sin GEO.",
          "$1,500–3,500/mes: Agencia intermedia — estrategia de palabras clave, 2–4 artículos/mes, algunas correcciones técnicas, alcance trimestral de links. Adecuado para empresas en etapa temprana en nichos de baja competencia.",
          "$3,500–8,000/mes: Retainer de servicio completo — producción continua de contenido, construcción proactiva de links, SEO técnico, CRO y reporting. El nivel donde el crecimiento orgánico compuesto se vuelve realista.",
          "$8,000+/mes: Retainer premium — agrega GEO, liderazgo de pensamiento, ghostwriting ejecutivo, SEO internacional y gestión de cuenta dedicada. Para marcas establecidas en mercados saturados.",
        ],
      },
      {
        type: "h2",
        id: "agency-vs-inhouse",
        text: "Agencia vs interno vs freelancer",
      },
      {
        type: "p",
        text: "El SEO interno tiene sentido cuando tienes suficiente volumen de producción de contenido para justificar un líder a tiempo completo, cuando tu complejidad técnica requiere atención diaria, y cuando estás gastando $15,000+/mes en la función total (salario + herramientas + presupuesto de links). Por debajo de ese umbral, una agencia o freelancer senior generalmente proporciona mejor ROI.",
      },
      {
        type: "h2",
        id: "budgeting-for-roi",
        text: "Cómo presupuestar para el ROI del SEO",
      },
      {
        type: "p",
        text: "Comienza con el valor de tu tráfico orgánico: ¿cuánto pagarías en PPC para obtener el mismo tráfico que entrega tu canal orgánico? Si obtienes 5,000 sesiones orgánicas/mes con un CPC promedio de $8, tu canal orgánico vale $40,000/mes en equivalente pagado. Si estás gastando $3,000/mes en SEO para generar ese valor, tienes un retorno de 13×. La mayoría de los programas de SEO B2B con ejecución adecuada entregan 5–15× en 12–24 meses. El desafío es el desfase temporal — el SEO no paga en el mes 1.",
      },
    ],
  },
  {
    slug: "retainer-seo-vs-proyecto",
    enSlug: "seo-retainer-vs-project",
    title: "Retainer de SEO vs Proyecto: ¿Cuál modelo es el correcto para tu empresa B2B?",
    category: "seo-roi",
    categoryEs: "roi-del-seo",
    excerpt: "¿Contratar para un proyecto SEO único o un retainer mensual? La respuesta depende de tu estado actual, tus objetivos y tu capacidad de ejecución. Aquí está el framework.",
    publishedAt: "2026-03-28",
    author: diego,
    body: [
      {
        type: "p",
        text: "La pregunta de retainer vs proyecto surge en casi todas las conversaciones de SEO B2B. Ambos modelos tienen casos de uso legítimos — el error es elegir el equivocado para tu situación. Las empresas que comienzan con un retainer cuando necesitan un proyecto desperdician dinero en trabajo continuo antes de que los cimientos estén listos. Las empresas que hacen un proyecto cuando necesitan una inversión continua ven cómo las ganancias iniciales se revierten en 6 meses.",
      },
      {
        type: "h2",
        id: "when-project",
        text: "Cuándo tiene sentido un proyecto",
      },
      {
        type: "p",
        text: "Un engagement basado en proyectos tiene sentido cuando tienes un problema específico y acotado: tu sitio tiene problemas técnicos graves que bloquean la indexación, necesitas un documento de estrategia de contenido único, estás lanzando un nuevo sitio web y necesitas desarrollo integrado con SEO, o quieres una auditoría para guiar las prioridades de tu equipo interno.",
      },
      {
        type: "ul",
        items: [
          "Nuevo sitio web sin base SEO — proyecto para construir primero los cimientos",
          "Emergencia técnica — problemas de rastreo, penalizaciones manuales, impacto de algoritmo importante",
          "Migración de sitio — consolidación de dominios, cambio de plataforma, cambios en la estructura de URL",
          "Auditoría única para guiar la ejecución interna o de freelancer",
        ],
      },
      {
        type: "h2",
        id: "when-retainer",
        text: "Cuándo el retainer es la decisión correcta",
      },
      {
        type: "p",
        text: "Un retainer tiene sentido cuando el SEO es un canal de crecimiento sostenido, no una solución única. Si quieres hacer crecer el tráfico orgánico mes a mes, publicar contenido consistentemente, construir autoridad a través de la obtención de links, y rastrear mejoras acumulativas, necesitas un engagement continuo. La palabra clave es 'acumulativo' — los retornos del SEO no vienen de una sola intervención sino de esfuerzo consistente durante 6–24 meses.",
      },
      {
        type: "h2",
        id: "hybrid-approaches",
        text: "Enfoques híbridos que funcionan",
      },
      {
        type: "p",
        text: "El modelo más efectivo para muchas empresas B2B: comenzar con un proyecto (fundamentos + auditoría + estrategia), luego transitar a un retainer una vez que los cimientos estén sólidos. Esto evita pagar tarifas de retainer mientras tu agencia todavía está solucionando problemas técnicos. Presupuesta 1–2 meses de trabajo de proyecto, luego 6+ meses de retainer.",
      },
      {
        type: "h2",
        id: "transition-to-retainer",
        text: "Cómo transitar del proyecto al retainer",
      },
      {
        type: "p",
        text: "La transición debe ser activada por condiciones específicas: problemas técnicos resueltos (puntuación de salud del sitio > 80), analytics configurado y validado, estrategia de palabras clave acordada, calendario de contenido establecido. No extiendas un retainer solo porque te gusta trabajar con la agencia — asegúrate de tener KPIs claros y objetivos de hitos que justifiquen la inversión continua.",
      },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function isEsCategorySlug(slug: string): slug is EsCategorySlug {
  return slug in categoriesEs;
}

export function getCategoryEs(esSlug: string): CategoryEs | undefined {
  return categoriesEs[esSlug as EsCategorySlug];
}

export function getArticleEs(esSlug: string): ArticleEs | undefined {
  return articlesEs.find((a) => a.slug === esSlug);
}

export function articlesByCategoryEs(esSlug: EsCategorySlug): ArticleEs[] {
  return articlesEs.filter((a) => a.categoryEs === esSlug);
}

export function relatedArticlesEs(article: ArticleEs, count = 3): ArticleEs[] {
  return articlesEs
    .filter((a) => a.slug !== article.slug && a.categoryEs === article.categoryEs)
    .slice(0, count);
}

export function formatDateEs(iso: string): string {
  return new Date(iso).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const allArticlesEs = articlesEs;
export const featuredArticleEs = articlesEs.find((a) => a.featured) ?? articlesEs[0];
