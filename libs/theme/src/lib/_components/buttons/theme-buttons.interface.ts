import { CSSObject } from '@mui/material';
import { IFontMixin, IThemeFonts } from '../../_base/fonts';
import { IThemePalette } from '../../_base/palette';
import { IThemeSpacings } from '../../_base/spacings';

export type IButtonMixin = IFontMixin &
  Partial<Pick<CSSObject,
    'color' | 'backgroundColor' | 'borderRadius' | 'padding' | 'height' | 'width'>>;

export interface IThemeButtons {
  $menu: IButtonMixin;
}

export interface IGetThemeButtonsParams {
  palette: IThemePalette,
  spacings: IThemeSpacings,
  fonts: IThemeFonts
}
