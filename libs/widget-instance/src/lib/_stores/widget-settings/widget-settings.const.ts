import {
  IWidgetSettings,
  WidgetColorMode,
  WidgetCornerRadius,
  WidgetFont,
  WidgetFontSize,
  WidgetLayout,
  WidgetPaymentMethodsViewType,
} from './widget-settings.interface';
import { defaultCurrency } from '../../widget-instance.const';

export const DefaultWidgetSettings: IWidgetSettings = {
  paymentMethodsViewType: WidgetPaymentMethodsViewType.Minimal,
  layout: WidgetLayout.Separate,
  companyLogo: undefined,
  buttonText: 'PAY',

  colorMode: WidgetColorMode.Light,
  currency: defaultCurrency,

  allColorModesStyles: {
    [WidgetColorMode.Dark]: { // TODO mast change (not ready yet)
      font: WidgetFont.Inter,
      fontSize: WidgetFontSize.Size16,
      cornerRadius: WidgetCornerRadius.Radius7,
      backgroundColor: '#070707',
      textColor: '#fcfbfb',
      fieldColor: '#161616',
      lineColor: '#282829',
      iconColor: '#a48ee4',
      buttonBackgroundColor: '#a48ee4',
      buttonTextColor: '#FFFFFF'
    },
    [WidgetColorMode.Light]: {
      font: WidgetFont.Inter,
      fontSize: WidgetFontSize.Size16,
      cornerRadius: WidgetCornerRadius.Radius7,
      backgroundColor: '#F6F6F6',
      textColor: '#000000',
      fieldColor: '#FFFFFF',
      lineColor: '#E9E6EF',
      iconColor: '#4723AD',
      buttonBackgroundColor: '#4723AD',
      buttonTextColor: '#FFFFFF'
    },
  },
};
