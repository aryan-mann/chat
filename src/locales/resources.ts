import { DEFAULT_LANG } from '@/const/locale';

import resources from './default';

export const locales = ['en-US'] as const;
export type DefaultResources = typeof resources;
export type NS = keyof DefaultResources;
export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string): string => {
  if (!locale) return DEFAULT_LANG;

  if (locale.startsWith('ar')) return 'ar';
  if (locale.startsWith('fa')) return 'fa-IR';

  if (locale.startsWith('cn')) return 'zh-CN';

  for (const l of locales) {
    if (l.startsWith(locale)) {
      return l;
    }
  }

  return DEFAULT_LANG;
};

type LocaleOptions = {
  label: string;
  value: Locales;
}[];

export const localeOptions: LocaleOptions = [
  {
    label: 'English',
    value: 'en-US',
  },
] as LocaleOptions;

export const supportLocales: string[] = [...locales, 'en'];
