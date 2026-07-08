export const locales = ['es', 'pt', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'ES',
  pt: 'PT',
  ru: 'RU',
  en: 'EN',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
