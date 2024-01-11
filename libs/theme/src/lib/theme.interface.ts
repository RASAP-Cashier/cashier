import { IThemeFonts } from './_base/fonts';
import { IThemeSpacings } from './_base/spacings';
import { IThemePalette } from './_base/palette';
import { IThemeButtons } from './_components';

export enum ThemeName {
  Light = 'light',
}

export interface ITheme {
  name: ThemeName;
  fonts: IThemeFonts;
  spacings: IThemeSpacings;
  palette: IThemePalette;
  components: {
    buttons: IThemeButtons;
  };
}
