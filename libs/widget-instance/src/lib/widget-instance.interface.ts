import { Language } from '@cashier/i18n';
import { ICurrency, WidgetColorMode } from './_stores';

export type IWidgetInstanceProps = {
  lang: Language;
  colorMode: WidgetColorMode;
  currency: ICurrency;
};
