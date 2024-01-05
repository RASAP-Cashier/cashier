import type { ILocales } from './i18n.interface';
import defaultI18nDictionary from './localization/en.json';
import ruDictionary from './localization/ru.json';
import { Language } from './i18n.interface';
import { InitOptions } from 'i18next/typescript/options';

export const i18nDefaultNS = 'default';

export const defaultLanguage = Language.ru;

export const i18nextDefaultOptions: InitOptions<object> = {
  fallbackLng: Language.en,
  defaultNS: i18nDefaultNS,
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  detection: {
    order: [],
  },
  react: {
    // wait: true, // special options for react-i18next
  },
  nsSeparator: false as false | string,
  keySeparator: false as false | string,
  lng: defaultLanguage,
  resources: {
    [Language.en]: {
      [i18nDefaultNS]: defaultI18nDictionary,
    },
    [Language.ru]: {
      [i18nDefaultNS]: ruDictionary,
    },
  },
};

export const LocaleNames: ILocales = {
  [Language.en]: 'English',
  [Language.ru]: 'Русский',
};
