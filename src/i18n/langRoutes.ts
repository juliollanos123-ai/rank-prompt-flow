import {
  categorySlugEnToEs,
  categorySlugEsToEn,
  articleSlugEnToEs,
  articleSlugEsToEn,
} from "@/data/blog.es";

export const langMap: Record<string, string> = {
  '/': '/es',
  '/services': '/es/servicios',
  '/services/technical-seo': '/es/servicios/seo-tecnico',
  '/services/seo-for-b2b': '/es/servicios/seo-b2b',
  '/services/ai-seo-agency': '/es/servicios/agencia-seo-ia',
  '/methodology': '/es/metodologia',
  '/contact': '/es/contacto',
  '/audit': '/es/auditoria',
  '/blog': '/es/blog',
  '/es': '/',
  '/es/servicios': '/services',
  '/es/servicios/seo-tecnico': '/services/technical-seo',
  '/es/servicios/seo-b2b': '/services/seo-for-b2b',
  '/es/servicios/agencia-seo-ia': '/services/ai-seo-agency',
  '/es/metodologia': '/methodology',
  '/es/contacto': '/contact',
  '/es/auditoria': '/audit',
  '/es/blog': '/blog',
};

export function isEsPath(path: string): boolean {
  return path === '/es' || path.startsWith('/es/');
}

export function getAlternateLang(path: string): string {
  const clean = path.replace(/\/$/, '') || '/';

  if (langMap[clean]) return langMap[clean];

  // /es/blog/$esCategory/$esSlug → /blog/$enCategory/$enSlug
  if (clean.startsWith('/es/blog/')) {
    const rest = clean.slice('/es/blog/'.length);
    const parts = rest.split('/');
    if (parts.length === 1) {
      // /es/blog/$esCategory → /blog/$enCategory
      const enCat = categorySlugEsToEn[parts[0] as keyof typeof categorySlugEsToEn];
      return enCat ? `/blog/${enCat}` : '/blog';
    }
    if (parts.length === 2) {
      // /es/blog/$esCategory/$esSlug → /blog/$enCategory/$enSlug
      const enCat = categorySlugEsToEn[parts[0] as keyof typeof categorySlugEsToEn];
      const enSlug = articleSlugEsToEn[parts[1]];
      return enCat && enSlug ? `/blog/${enCat}/${enSlug}` : '/blog';
    }
  }

  // /blog/$enCategory/$enSlug → /es/blog/$esCategory/$esSlug
  if (clean.startsWith('/blog/')) {
    const rest = clean.slice('/blog/'.length);
    const parts = rest.split('/');
    if (parts.length === 1) {
      // /blog/$enCategory → /es/blog/$esCategory
      const esCat = categorySlugEnToEs[parts[0] as keyof typeof categorySlugEnToEs];
      return esCat ? `/es/blog/${esCat}` : '/es/blog';
    }
    if (parts.length === 2) {
      // /blog/$enCategory/$enSlug → /es/blog/$esCategory/$esSlug
      const esCat = categorySlugEnToEs[parts[0] as keyof typeof categorySlugEnToEs];
      const esSlug = articleSlugEnToEs[parts[1]];
      return esCat && esSlug ? `/es/blog/${esCat}/${esSlug}` : '/es/blog';
    }
  }

  return isEsPath(path) ? '/' : '/es';
}
