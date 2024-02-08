import { CreateWidgetSettingDto } from './create-widget-setting.dto';
import { IsNumber } from 'class-validator';
import { MerchantWidgetConfiguration } from '../entities';
import { IWidgetSettings } from '@cashier/widget/cs';

export class UpdateWidgetSettingDto extends CreateWidgetSettingDto {
  @IsNumber()
  widgetId: number;

  public static toDto(proto: MerchantWidgetConfiguration): UpdateWidgetSettingDto {
    return {
      widgetId: proto.widgetId,
      userId: proto.merchant.userId,
      configuration: proto.configuration as IWidgetSettings,
    };
  }
}
