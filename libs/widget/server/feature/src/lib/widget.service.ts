import { Injectable } from '@nestjs/common';
import {
  CheckoutPaymentMethod,
  DefaultWidgetSettings,
  IGetWidgetSettingsParams,
  IGetWidgetSettingsResponse,
  ISaveWidgetSettingsParams,
  ISaveWidgetSettingsResponse,
  IWidgetPayParams,
  IWidgetPayResponse,
  StripePaymentMethod,
} from '@cashier/widget/cs';

@Injectable()
export class WidgetService {
  public async getSettings(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: IGetWidgetSettingsParams
  ): Promise<IGetWidgetSettingsResponse> {
    // TODO implement - get data from DB
    const widgetSettings = DefaultWidgetSettings;
    return Promise.resolve({
      settings: widgetSettings,
      paymentMethods: [StripePaymentMethod, CheckoutPaymentMethod],
    });
  }

  public async saveSettings(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: ISaveWidgetSettingsParams
  ): Promise<ISaveWidgetSettingsResponse> {
    // TODO implement - save data to DB
    return Promise.resolve({});
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async pay(params: IWidgetPayParams): Promise<IWidgetPayResponse> {
    // TODO implement
    return Promise.resolve({});
  }
}
