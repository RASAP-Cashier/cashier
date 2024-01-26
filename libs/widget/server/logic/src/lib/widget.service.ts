import { Injectable } from '@nestjs/common';
import {
  CheckoutPaymentMethod,
  DefaultWidgetSettings,
  IGetWidgetSettingsParams,
  IPaymentMethod,
  ISaveWidgetSettingsParams,
  ISaveWidgetSettingsResponse,
  IWidgetPayParams,
  IWidgetPayResponse,
  IWidgetSettings,
  StripePaymentMethod,
} from '@cashier/widget/cs';

@Injectable()
export class WidgetService {
  public async getSettings(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: IGetWidgetSettingsParams
  ): Promise<IWidgetSettings> {
    // TODO implement - get data from DB
    const widgetSettings = DefaultWidgetSettings;
    return Promise.resolve(widgetSettings);
  }

  public async getPaymentMethods(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: IGetWidgetSettingsParams
  ): Promise<IPaymentMethod[]> {
    // TODO implement - get data from DB
    return Promise.resolve([StripePaymentMethod, CheckoutPaymentMethod]);
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
