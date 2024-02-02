import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { WidgetSettingsService } from './widget-settings.service';
import { CreateWidgetSettingDto } from './dto/create-widget-setting.dto';
import { UpdateWidgetSettingDto } from './dto/update-widget-setting.dto';

@Controller('widget-settings')
export class WidgetSettingsController {
  constructor(private readonly widgetSettingsService: WidgetSettingsService) {}

  @Post()
  create(@Body() createWidgetSettingDto: CreateWidgetSettingDto) {
    return this.widgetSettingsService.create(createWidgetSettingDto);
  }

  @Get()
  findAll() {
    return this.widgetSettingsService.findAll();
  }

  @Get('by-user-id/:userId')
  findOneByUserId(@Param('userId') id: string) {
    return this.widgetSettingsService.findOneByUserId(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.widgetSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWidgetSettingDto: UpdateWidgetSettingDto) {
    return this.widgetSettingsService.update(+id, updateWidgetSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.widgetSettingsService.remove(+id);
  }
}
