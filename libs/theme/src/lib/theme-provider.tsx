import React, { useState } from 'react';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material/styles';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';
import { ThemeName } from './theme.interface';

export const ThemeContext = React.createContext(
  (themeName: string): void => {
    // Not implemented yet
  }
);

const ThemeProviderWrapper: React.FC = (props) => {
  const curThemeName = localStorage.getItem('appTheme') as ThemeName || ThemeName.Default;
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName as ThemeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProviderMaterial theme={theme}>{props.children}</ThemeProviderMaterial>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export const ThemeProvider = ThemeProviderWrapper;
