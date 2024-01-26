import { IWidgetConfig } from './widget-instance-config.interface';

export const getWidgetConfigLocal = (): IWidgetConfig => {
  return {
    url: process.env['WIDGET_URL'] as string,
  };
}
