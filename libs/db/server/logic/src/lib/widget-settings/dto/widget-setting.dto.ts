import { IsNotEmpty, IsNumber } from 'class-validator';
import { IWidgetSettings } from '@cashier/widget/cs';

export class WidgetSettingDto {
  @IsNotEmpty()
  configuration: IWidgetSettings;

  @IsNumber()
  widgetId?: number;
}
