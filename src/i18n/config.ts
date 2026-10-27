export const locales = ['en', 'hr'] as const;
export type Locale = (typeof locales)[number];

// English stays at the root (/work); Croatian lives under /hr (/hr/work).
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<
  Locale,
  { name: string; short: string; hreflang: string; ogLocale: string }
> = {
  en: { name: 'English', short: 'EN', hreflang: 'en-GB', ogLocale: 'en_GB' },
  hr: { name: 'Hrvatski', short: 'HR', hreflang: 'hr-HR', ogLocale: 'hr_HR' },
};

/**
 * Pages that already have a Croatian version (English paths, no /hr prefix).
 * Add a path here only after the matching file exists in src/pages/hr/.
 * Until then the language switcher and hreflang tags stay hidden, and links
 * on Croatian pages fall back to the English page.
 */
export const croatianPages: string[] = ['/', '/work', '/prices', '/contact', '/quiz', '/privacy-policy', '/legal', '/work/icd11', '/work/ist2027', '/work/mirisni-potpisi', '/work/bakteriologija', '/work/hbd-sbc'];
