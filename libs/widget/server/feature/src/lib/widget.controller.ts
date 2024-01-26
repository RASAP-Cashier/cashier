import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Public } from '@cashier/common/server/logic';
import { WidgetService } from './widget.service';
import {
  IGetWidgetSettingsParams,
  IGetWidgetSettingsResponse,
  ISaveWidgetSettingsParams,
  ISaveWidgetSettingsResponse,
  IWidgetPayParams,
  IWidgetPayResponse,
  WidgetRoutes,
} from '@cashier/widget/cs';

@Controller()
export class WidgetController {
  constructor(private readonly widgetService: WidgetService) {}

  @Public()
  @Get(WidgetRoutes.Settings)
  async getSettings(
    @Body() params: IGetWidgetSettingsParams
  ): Promise<IGetWidgetSettingsResponse> {
    return this.widgetService.getSettings(params);
  }

  @Public()
  @Post(WidgetRoutes.Settings)
  async saveSettings(
    @Body() params: ISaveWidgetSettingsParams
  ): Promise<ISaveWidgetSettingsResponse> {
    return this.widgetService.saveSettings(params);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post(WidgetRoutes.Pay)
  async pay(@Body() params: IWidgetPayParams): Promise<IWidgetPayResponse> {
    return this.widgetService.pay(params);
  }
}
