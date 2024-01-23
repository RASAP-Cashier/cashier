import { Language } from '@cashier/i18n';
import { ICurrency, WidgetColorMode } from './_stores';

export type IMerchantInfo = {
  currency: ICurrency;
  amount: number;
  tax: number;
  vat: number;
}

export type IWidgetInstanceProps = {
  lang: Language;
  colorMode: WidgetColorMode;
  merchantInfo: IMerchantInfo;
};

export type IWidgetSettingsServer = any;
