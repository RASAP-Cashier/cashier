import { CSSObject } from '@mui/material';
import { IFontMixin } from '../../_base/fonts';

export type IIconMixin = IFontMixin &
  Partial<Pick<CSSObject,
    'color' | 'backgroundColor' | 'borderRadius' | 'padding' | 'height' | 'width'>>;


export enum IconPalette {
  OnPrime = 'on-prime',
  OnAccent = 'on-accent',
  OnAlert = 'on-alert',
  OnTertiary = 'on-tertiary',
  OnHighlight = 'on-highlight',
  OnSuccess = 'on-success',
  OnSecond = 'on-second',
  OnError = 'on-error',
  SurfBg = 'surf-bg',
  SurfPrimary = 'surf-primary',
  SurfAccent = 'surf-accent',
  BrandLogo = 'brand-logo',
}
