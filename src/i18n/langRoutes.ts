export const langMap: Record<string, string> = {
  '/': '/es',
  '/services': '/es/servicios',
  '/services/blueprint': '/es/servicios/blueprint',
  '/services/scale': '/es/servicios/scale',
  '/services/landmark': '/es/servicios/landmark',
  '/methodology': '/es/metodologia',
  '/contact': '/es/contacto',
  '/audit': '/es/auditoria',
  '/es': '/',
  '/es/servicios': '/services',
  '/es/servicios/blueprint': '/services/blueprint',
  '/es/servicios/scale': '/services/scale',
  '/es/servicios/landmark': '/services/landmark',
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
