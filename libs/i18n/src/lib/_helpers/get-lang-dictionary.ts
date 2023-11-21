import { i18nDefaultNS } from '../i18n.const';
import { IDictionary, Language } from '../i18n.interface';

export const getLangDictionary = async (lang: Language): Promise<IDictionary> => {
  let dictionary = {
    [i18nDefaultNS]: {},
  };

  if (lang === Language.en) {
    dictionary = await import(
      '../localization/en.json'
    );
  } else if (lang === Language.ru) {
    dictionary = await import(
      '../localization/ru.json'
    );
  }

  return dictionary[i18nDefaultNS];
};
