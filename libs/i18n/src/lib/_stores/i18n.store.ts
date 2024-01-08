import React from 'react';
import { makeObservable, observable, reaction } from 'mobx';
import { defaultLanguage } from '../i18n.const';
import { Language } from '../i18n.interface';
import { getI18next } from '../i18n-init';

class I18nStore {
  @observable
  public lang: Language = defaultLanguage;

  constructor() {
    makeObservable(this);

    reaction(
      () => this.lang,
      locale => {
        const i18n = getI18next();
        i18n.changeLanguage(locale);
      },
    );
  }
}

const i18nStore = new I18nStore();

export const I18nStoreContext = React.createContext(i18nStore);

export const useI18nStore = () => React.useContext(I18nStoreContext);
