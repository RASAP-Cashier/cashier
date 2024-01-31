import React from 'react';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material';
import { getTheme } from './get-theme';
import { StylesProvider } from '@mui/styles';
import { useThemeStore } from './_stores';
import { observer } from 'mobx-react';
import type { IWithChildrenProps } from '@cashier/utils';

const ThemeProviderWrapper: React.FC<IWithChildrenProps> = observer(props => {
  const themeName = useThemeStore().themeName;
  const theme = getTheme(themeName);

  return <StylesProvider injectFirst>
    <ThemeProviderMaterial theme={theme}>{props.children}</ThemeProviderMaterial>
  </StylesProvider>;
});

export const ThemeProvider = ThemeProviderWrapper;
