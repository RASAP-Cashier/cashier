import { IWidgetConfig } from './widget-instance-config.interface';

export const getWidgetConfigLocal = (): IWidgetConfig => {
  return {
    url: 'http://localhost:4201',
  };
}
