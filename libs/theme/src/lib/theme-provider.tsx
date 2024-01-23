import React from 'react';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material';
import { getTheme } from './get-theme';
import { StylesProvider } from '@mui/styles';
import { useThemeStore } from './_stores/theme';
import { observer } from 'mobx-react';

const ThemeProviderWrapper: React.FC = observer((props) => {
  const themeName = useThemeStore().themeName;
  const theme = getTheme(themeName);

  return (
    <StylesProvider injectFirst>
      <ThemeProviderMaterial theme={theme}>{props.children}</ThemeProviderMaterial>
    </StylesProvider>
  );
});

export const ThemeProvider = ThemeProviderWrapper;
