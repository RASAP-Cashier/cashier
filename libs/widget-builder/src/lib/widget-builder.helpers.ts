import { IWidgetSettings } from '@cashier/widget-instance';

export function getWidgetSettings(userId: number): IWidgetSettings {
  // TODO
  return {
    brandColor: 'red',
    style: 'rounded',
    font: 'Arial',
    buttonText: 'Deposit',
    layout: 'panoramic',
  };
}
