import { IFonts } from './fonts';
import { ISpacings } from './spacings';

export enum ThemeName {
  Light = 'light',
  Default = 'Default',
}

export interface ITheme {
  name: ThemeName;
  palette: IPalette;
  spacings: ISpacings;
  fonts: IFonts;
}

export interface IPalette {
  surfaces: {
    $surf_bg: string;
    $surf_prime: string;
    $surf_second: string;
    $surf_tertiary: string;
    $surf_accent: string;
    $surf_alert: string;
    $surf_warning: string;
    $surf_error: string;
    $surf_success: string;
  };
  on: {
    $on_prime: string;
    $on_second: string;
    $on_tertiary: string;
    $on_highlight: string;
    $on_accent: string;
    $on_alert: string;
    $on_warning: string;
    $on_error: string;
    $on_success: string;
  };
}

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
