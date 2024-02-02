import { PartialType } from '@nestjs/mapped-types';
import { CreateWidgetSettingDto } from './create-widget-setting.dto';

export class UpdateWidgetSettingDto extends PartialType(CreateWidgetSettingDto) {}
