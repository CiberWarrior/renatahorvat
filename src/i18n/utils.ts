import { croatianPages, defaultLocale, localeMeta, locales, type Locale } from './config';
import { ui, type UiKey } from './ui';

const normalise = (pathname: string) => pathname.replace(/\/$/, '') || '/';

export function getLocale(url: URL): Locale {
  const first = url.pathname.split('/')[1];
  return (locales as readonly string[]).includes(first) && first !== defaultLocale
    ? (first as Locale)
    : defaultLocale;
}

/** Path without the locale prefix: /hr/work -> /work, /hr -> / */
export function stripLocale(pathname: string): string {
  const path = normalise(pathname);
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (path === `/${locale}`) return '/';
    if (path.startsWith(`/${locale}/`)) return path.slice(locale.length + 1);
  }
  return path;
}

/** Adds the locale prefix: ('/work', 'hr') -> /hr/work */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

export function hasTranslation(path: string, locale: Locale): boolean {
  return locale === defaultLocale || (locale === 'hr' && croatianPages.includes(normalise(path)));
}

/** Link target for a page: the translated page if it exists, otherwise the English one. */
export function pageHref(path: string, locale: Locale): string {
  return hasTranslation(path, locale) ? localizePath(path, locale) : path;
}

export function useTranslations(locale: Locale) {
  return (key: UiKey, vars?: Record<string, string>): string => {
    let text = ui[locale][key] ?? ui[defaultLocale][key];
    if (vars) {
      for (const [name, value] of Object.entries(vars)) {
        text = text.replaceAll(`{${name}}`, value);
      }
    }
    return text;
  };
}

/** Language versions of the current page that actually exist (includes the page itself). */
export function getAlternates(url: URL) {
  const path = stripLocale(url.pathname);
  return locales
    .filter((locale) => hasTranslation(path, locale))
    .map((locale) => ({
      locale,
      hreflang: localeMeta[locale].hreflang,
      path: localizePath(path, locale),
    }));
}

/** Plural form for counts: English has one/other, Croatian has one/few/many (1 projekt, 2 projekta, 5 projekata). */
export function pluralForm(locale: Locale, n: number): 'one' | 'few' | 'many' {
  if (locale === 'hr') {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'one';
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'few';
    return 'many';
  }
  return n === 1 ? 'one' : 'many';
}
