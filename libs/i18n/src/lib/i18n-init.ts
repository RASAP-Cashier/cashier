import { i18nextDefaultOptions } from './i18n.const';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export async function initI18n() {
  await i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init<object>({
      ...i18nextDefaultOptions,
    });
}
