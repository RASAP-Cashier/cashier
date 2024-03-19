import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WidgetSettingsService } from './widget-settings.service';
import { UpdateWidgetSettingDto } from './dto/update-widget-setting.dto';
import { WidgetSettingsRoutes } from '@cashier/widget/cs';
import { CreateWidgetSettingDto } from '@cashier/db/server/logic';

@Controller()
export class WidgetSettingsController {
  constructor(private readonly widgetSettingsService: WidgetSettingsService) {}

  @Post(WidgetSettingsRoutes.Create)
  create(@Body() createWidgetSettingDto: CreateWidgetSettingDto) {
    console.log('WidgetSettingsController Create');
    return this.widgetSettingsService.create(createWidgetSettingDto);
  }

  @Get(WidgetSettingsRoutes.GetAll)
  findAll() {
    return this.widgetSettingsService.findAll();
  }

  @Get(`${WidgetSettingsRoutes.GetByUserId}/:userId`)
  findOneByUserId(@Param('userId') id: string) {
    return this.widgetSettingsService.findByUserId(+id);
  }

  @Get(`${WidgetSettingsRoutes.Get}/:id`)
  findOne(@Param('id') id: string) {
    return this.widgetSettingsService.findOne(+id);
  }

  @Patch(WidgetSettingsRoutes.Update)
  updateOrInsert(@Body() dto: UpdateWidgetSettingDto) {
    Logger.log(`${WidgetSettingsRoutes.Update}, dto:`, dto);
    if (!dto.widgetId) {
      return this.widgetSettingsService.create(dto);
    } else {
      return this.widgetSettingsService.update(dto);
    }
  }

  @Delete(WidgetSettingsRoutes.Delete)
  remove(@Param('id') id: string) {
    return this.widgetSettingsService.remove(+id);
  }
}
