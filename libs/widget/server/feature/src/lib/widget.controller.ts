import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { Public } from '@cashier/common/server/logic';
import { WidgetService } from '../../../logic/src/lib/widget.service';
import {
  IGetWidgetSettingsParams,
  IGetWidgetSettingsResponse,
  ISaveWidgetSettingsParams,
  IWidgetPayParams,
  WidgetRoutes,
} from '@cashier/widget/cs';

@Controller()
export class WidgetController {
  constructor(private readonly widgetService: WidgetService) {}

  @Public()
  @Get(`${WidgetRoutes.Settings}`)
  async getSettings(
    @Query() params: IGetWidgetSettingsParams,
  ): Promise<IGetWidgetSettingsResponse> {
    console.log('getSettings', params);
    const settings = await this.widgetService.getSettings(params);
    const paymentMethods = await this.widgetService.getPaymentMethods(params);

    return {
      userId: params.userId,
      widgetId: settings.widgetId,
      paymentMethods,
      settings: settings.configuration,
    };
  }

  @Public()
  @Post(WidgetRoutes.Settings)
  async saveSettings(@Body() params: ISaveWidgetSettingsParams) {
    console.log('saveSettings 1', params);
    return this.widgetService.saveSettings(params);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post(WidgetRoutes.Pay)
  async pay(@Body() params: IWidgetPayParams) {
    return this.widgetService.pay(params);
  }
}
