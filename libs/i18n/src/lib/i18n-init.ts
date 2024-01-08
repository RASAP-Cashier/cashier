import { i18nDefaultNS, i18nextDefaultOptions } from './i18n.const';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ILocalization } from './localization/localization.interface';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof i18nDefaultNS;
    resources: ILocalization;
  }
}

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<object>({
    ...i18nextDefaultOptions,
  });

export function getI18next() {
  return i18next;
}
