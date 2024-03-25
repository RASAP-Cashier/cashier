import { Language } from '@cashier/i18n';

export enum WidgetFont {
  Inter = 'Inter',
}

export enum WidgetFontSize {
  Size12 = 12,
  Size14 = 14,
  Size16 = 16,
}

export enum WidgetCornerRadius {
  Radius2 = 2,
  Radius3 = 3,
  Radius4 = 4,
  Radius5 = 5,
  Radius6 = 6,
  Radius7 = 7,
}

export enum WidgetPaymentMethodsViewType {
  Minimal = 'Minimal',
  Basic = 'Basic',
  Advanced = 'Advanced',
}

export enum WidgetLayout {
  Single = 'Single',
  Separate = 'Separate',
}

export type IColor = string;

export interface IWidgetStylesSettings {
  font: WidgetFont;
  fontSize: WidgetFontSize;
  cornerRadius: WidgetCornerRadius;
  textColor: IColor;
  backgroundColor: IColor;
  fieldColor: IColor;
  lineColor: IColor;
  iconColor: IColor;
  buttonBackgroundColor: IColor;
  buttonTextColor: IColor;
}

export enum WidgetColorMode {
  Dark = 'dark',
  Light = 'light',
}

export type ICurrency = string;

export interface IWidgetSettings {
  paymentMethodsViewType: WidgetPaymentMethodsViewType;
  layout: WidgetLayout;
  colorMode: WidgetColorMode;
  companyLogo?: string;
  buttonText: string;

  colorModeStyles: {
    [WidgetColorMode.Light]: IWidgetStylesSettings;
    [WidgetColorMode.Dark]: IWidgetStylesSettings;
  };
}

export type IMerchantInfo = {
  userId: string;
  currency: ICurrency;
  amount: number;
  tax: number;
  vat: number;
  lang: Language;
};
