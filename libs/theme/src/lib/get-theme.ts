import { Theme } from '@mui/material';
import { ThemeLight } from './schemes/theme.light';
import { ThemeName } from './theme.interface';
import type { IMUITheme } from '@cashier/theme';

export function getTheme(theme: ThemeName): Theme {
  return themeMap[theme];
}

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends IMUITheme {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface ThemeOptions extends IMUITheme {}
}

const themeMap: { [key: string]: Theme } = {
  [ThemeName.Light]: ThemeLight,
};
