import { IWidgetSettings } from './widget-settings.interface';

export enum PaymentMethod {
  Stripe = 'stripe',
  Checkout = 'checkout',
}

export type IPaymentMethod = {
  name: string;
  title: string;
  description?: string;
  type: PaymentMethod;
  iconBase64: string;
};

export type IGetWidgetSettingsParams = {
  userId: string;
};

export type IGetWidgetSettingsResponse = {
  userId: string;
  widgetId?: number;
  settings: IWidgetSettings;
  paymentMethods: IPaymentMethod[];
};

export type ISaveWidgetSettingsParams = {
  widgetId: number;
  userId: number;
  settings: IWidgetSettings;
};

export type ISaveWidgetSettingsResponse = {
  // TOD
};

export type IWidgetPayParams = {
  // TOD
};

export type IWidgetPayResponse = {
  // TOD
};
