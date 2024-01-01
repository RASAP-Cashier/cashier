import type { SerializedStyles } from '@emotion/react';
import type { ITheme } from '../theme.interface';

export type { SerializedStyles } from '@emotion/react';
export type { CSSObject } from '@emotion/serialize';
export { useTheme, ThemeProvider, withTheme } from '@emotion/react';

export type IBaseElementCssStyles = SerializedStyles | SerializedStyles[];

export type IWithThemeProps = {
  theme: ITheme;
};

export type IWithClassesProps<T> = {
  classes?: T;
};

// declare module '@wt-nx/wt-client/theme' {
//   export type Theme = ITheme;
//
//   export function useTheme(): ITheme;
// }
