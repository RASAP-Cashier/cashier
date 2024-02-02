import { RequestService, singleton } from '@cashier/utils';
import {
  IGetWidgetSettingsParams,
  IGetWidgetSettingsResponse,
  ISaveWidgetSettingsParams,
  ISaveWidgetSettingsResponse,
  IWidgetPayParams,
  IWidgetPayResponse,
  WidgetRoutes,
} from '@cashier/widget/cs';

class WidgetServiceInner {
  public async LoadSettings(params: IGetWidgetSettingsParams): Promise<IGetWidgetSettingsResponse> {
    const response = await RequestService.getInstance().get<IGetWidgetSettingsResponse>(WidgetRoutes.Settings, {
      params,
    });

    return response.data;
  }

  public async SaveSettings(params: ISaveWidgetSettingsParams): Promise<ISaveWidgetSettingsResponse> {
    const response = await RequestService.getInstance()
      .post<ISaveWidgetSettingsResponse, ISaveWidgetSettingsParams>(WidgetRoutes.Settings, params);

    return response.data;
  }

  public async Pay(params: IWidgetPayParams): Promise<IWidgetPayResponse> {
    const response = await RequestService.getInstance()
      .post<IWidgetPayResponse, IWidgetPayParams>(WidgetRoutes.Pay, params);

    return response.data;
  }
}

export const WidgetService = singleton(WidgetServiceInner);
