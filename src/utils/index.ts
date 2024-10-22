import { locales, defaultLocale } from "../locales";

type Locale = keyof typeof locales;

function getLocale(lang?: string): Locale {
  return locales[lang as Locale] ? (lang as Locale) : defaultLocale;
}

export function useTranslations(lang?: string) {
  const locale = getLocale(lang);
  return function t(key: keyof (typeof locales)[typeof defaultLocale]): string {
    return locales[locale][key] ?? `key: '${key}' not found in '${lang}'`;
  };
}
