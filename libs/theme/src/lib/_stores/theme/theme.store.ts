import React from 'react';
import { action, makeObservable, observable } from 'mobx';
import { IThemeStore } from './theme.interface';
import { ThemeName } from '../../theme.interface';

class ThemeStore implements IThemeStore {
  private readonly localStorageKey = 'appTheme';

  @observable
  public themeName;

  constructor() {
    this.themeName = localStorage.getItem(this.localStorageKey) as ThemeName || ThemeName.Light;

    makeObservable(this);
  }

  @action
  public async change(themeName: ThemeName) {
    this.themeName = themeName;
    localStorage.setItem(this.localStorageKey, this.themeName);
  }
}

const themeStore = new ThemeStore();

export const ThemeStoreContext = React.createContext(themeStore);

export const useThemeStore = () => React.useContext(ThemeStoreContext);
