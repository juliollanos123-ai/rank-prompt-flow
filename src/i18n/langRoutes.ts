export const langMap: Record<string, string> = {
  '/': '/es',
  '/services': '/es/servicios',
  '/services/technical-seo': '/es/servicios/seo-tecnico',
  '/services/seo-for-b2b': '/es/servicios/seo-b2b',
  '/services/ai-seo-agency': '/es/servicios/agencia-seo-ia',
  '/methodology': '/es/metodologia',
  '/contact': '/es/contacto',
  '/audit': '/es/auditoria',
  '/blog': '/es',
  '/es': '/',
  '/es/servicios': '/services',
  '/es/servicios/seo-tecnico': '/services/technical-seo',
  '/es/servicios/seo-b2b': '/services/seo-for-b2b',
  '/es/servicios/agencia-seo-ia': '/services/ai-seo-agency',
  '/es/metodologia': '/methodology',
  '/es/contacto': '/contact',
  '/es/auditoria': '/audit',
};

export function isEsPath(path: string): boolean {
  return path === '/es' || path.startsWith('/es/');
}

export function getAlternateLang(path: string): string {
  // strip trailing slash for matching
  const clean = path.replace(/\/$/, '') || '/';
  return langMap[clean] ?? (isEsPath(path) ? '/' : '/es');
}
