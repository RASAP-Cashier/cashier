export enum Language {
  en = 'en',
  ru = 'ru',
}

export interface ILocale {
  value: string;
  title: string;
}

export type ILocales = {
  [key in Language]: string;
};

export interface IDictionary {
  [key: string]: string;
}
