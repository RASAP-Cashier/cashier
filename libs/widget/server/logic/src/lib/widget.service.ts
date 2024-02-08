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
  WidgetSettingsRoutes,
} from '@cashier/widget/cs';
import { HttpService } from '@nestjs/axios';
import { CreateWidgetSettingDto, WidgetSettingDto } from '@cashier/db/server/logic';

@Injectable()
export class WidgetService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  public async getSettings(
    params: IGetWidgetSettingsParams,
  ) {
    let widgetSettings;
    try {
      widgetSettings =
        await this.httpService.axiosRef.get<WidgetSettingDto>(`${process.env.DB_API_URL}/${WidgetSettingsRoutes.GetByUserId}/${params.userId}`);
    }
    catch (err) {
      console.log(`Get widget settings error: params (${params}), response (${JSON.stringify(err)})`);
    }

    if (!widgetSettings?.data) {
      return DefaultWidgetSettings;
    }

    return JSON.parse(widgetSettings.data.configuration) as IWidgetSettings;
  }

  public async getPaymentMethods(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _params: IGetWidgetSettingsParams,
  ): Promise<IPaymentMethod[]> {
    // TODO implement - get data from DB
    return Promise.resolve([StripePaymentMethod, CheckoutPaymentMethod]);
  }

  public async saveSettings(
    params: ISaveWidgetSettingsParams,
  ): Promise<ISaveWidgetSettingsResponse> {
    console.log('saveSettings service');
    const response = await this.httpService.axiosRef.patch<CreateWidgetSettingDto>(`${process.env.DB_API_URL}/${WidgetSettingsRoutes.Update}`, {
      widgetId: params.widgetId,
      userId: params.userId,
      configuration: params.settings,
    });
    if (!response) {
      // TODO implement error
      return Promise.resolve({});
    }

    return response.data.configuration as IWidgetSettings;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async pay(_params: IWidgetPayParams): Promise<IWidgetPayResponse> {
    // TODO implement
    return Promise.resolve({});
  }
}
