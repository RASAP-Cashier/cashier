import { IsNotEmpty, IsNumber } from 'class-validator';
import { IWidgetSettings } from '@cashier/widget/cs';

export class CreateWidgetSettingDto {
  @IsNotEmpty()
  configuration: IWidgetSettings;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
