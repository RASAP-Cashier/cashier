import React, { useState } from 'react';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material';
import { getTheme } from './get-theme';
import { StylesProvider } from '@mui/styles';
import { ThemeName } from './theme.interface';

export const ThemeContext = React.createContext({
  setThemeName: (themeName: string): void => {
    // Not implemented yet
  },
  theme: {}
});

export const useTheme = () => React.useContext(ThemeContext).theme;

const ThemeProviderWrapper: React.FC = (props) => {
  const curThemeName = localStorage.getItem('appTheme') as ThemeName || ThemeName.Light;
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = getTheme(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName as ThemeName);
  };

  console.log(theme);

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={{ setThemeName, theme }}>
        <ThemeProviderMaterial theme={theme}>{props.children}</ThemeProviderMaterial>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export const ThemeProvider = ThemeProviderWrapper;
