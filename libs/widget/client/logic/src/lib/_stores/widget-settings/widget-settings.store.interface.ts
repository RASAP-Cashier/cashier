import { IPaymentMethod, IWidgetSettings } from '@cashier/widget/cs';

export type IWidgetSettingsStore = {
  paymentMethods: IPaymentMethod[];
  isLoading: boolean;
  settings: IWidgetSettings;
};
