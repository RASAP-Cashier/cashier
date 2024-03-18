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
import {
  CreateWidgetSettingDto,
  WidgetSettingDto,
} from '@cashier/db/server/logic';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WidgetService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  public async getSettings(
    params: IGetWidgetSettingsParams,
  ): Promise<WidgetSettingDto> {
    let widgetSettingsResponse;
    try {
      const url = `${this.configService.get<{ DB_API_URL: string }>('DB_API_URL')}/${WidgetSettingsRoutes.GetByUserId}/${params.userId}`;
      console.log('getSettings service', url);
      widgetSettingsResponse =
        await this.httpService.axiosRef.get<WidgetSettingDto[]>(url);
      console.log('getSettings service', widgetSettingsResponse);
    } catch (err) {
      console.log(
        `Get widget settings error: params (${params}), response (${JSON.stringify(err)})`,
      );
    }

    if (!widgetSettingsResponse?.data?.length) {
      return {
        widgetId: undefined,
        configuration: DefaultWidgetSettings,
      };
    }

    console.log('widgetSettingsResponseData', widgetSettingsResponse.data);

    return widgetSettingsResponse.data[0];
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
    const url = `${this.configService.get<{ DB_API_URL: string }>('DB_API_URL')}/${WidgetSettingsRoutes.Update}`;
    const response =
      await this.httpService.axiosRef.patch<CreateWidgetSettingDto>(url, {
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
