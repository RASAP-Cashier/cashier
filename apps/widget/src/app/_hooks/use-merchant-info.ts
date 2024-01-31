import { Language } from '@cashier/i18n';
import { IMerchantInfo, WidgetColorMode } from '@cashier/widget/cs';
import { getQueryParam } from '@cashier/utils';

export const useMerchantInfo = (): IMerchantInfo => {
  const userId = getQueryParam('userId') || '1';
  const currency = getQueryParam('currency') || 'USD';
  const amount = parseInt(getQueryParam('amount')) || 1500;
  const tax = parseInt(getQueryParam('tax')) || 10;
  const vat = parseInt(getQueryParam('vat')) || 15;
  const lang = (getQueryParam('lang') || Language.en) as Language;
  const colorMode = (getQueryParam('colorMode') || WidgetColorMode.Light) as WidgetColorMode;

  // TODO implement validation

  return {
    userId,
    currency,
    amount,
    tax,
    vat,
    lang,
    colorMode,
  };
};
