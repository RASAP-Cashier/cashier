import { RequestService, singleton } from '@cashier/utils';
import { WidgetInstanceRoutes } from './cs';
import { IWidgetSettingsServer } from '@cashier/widget-instance';

class WidgetInstanceServiceInner {
  public async LoadSettings(params: any): Promise<IWidgetSettingsServer> {
    const response = await RequestService.getInstance().getAxiosInstance()({
      url: WidgetInstanceRoutes.LoadSettings,
      method: 'get',
      data: params,
    });

    return response.data;
  };

  public async Pay(params: any): Promise<any> {
    const response = await RequestService.getInstance().getAxiosInstance()({
      url: WidgetInstanceRoutes.Pay,
      method: 'post',
      data: params,
    });

    return response.data;
  };

  public async SaveSettings(params: any): Promise<any> {
    const response = await RequestService.getInstance().getAxiosInstance()({
      url: WidgetInstanceRoutes.SaveSettings,
      method: 'post',
      data: params,
    });

    return response.data;
  };
}

export const WidgetInstanceService = singleton(WidgetInstanceServiceInner);
