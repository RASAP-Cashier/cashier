import { Language } from '@cashier/i18n';
import { IMerchantInfo, WidgetColorMode } from '@cashier/widget/cs';

export type IWidgetInstanceProps = {
  lang: Language;
  colorMode: WidgetColorMode;
  userId: string;
  merchantInfo: IMerchantInfo;
};
