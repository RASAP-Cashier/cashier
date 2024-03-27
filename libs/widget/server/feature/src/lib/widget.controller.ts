import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
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
    Logger.log(`"${WidgetRoutes.Settings}", params:`, params);

    const settings = await this.widgetService.getSettings(params);
    const paymentMethods = await this.widgetService.getPaymentMethods(params);

    const result = {
      userId: params.userId,
      widgetId: settings.widgetId,
      paymentMethods,
      settings: settings.configuration,
    };

    Logger.log(`"${WidgetRoutes.Settings}", result:`, result);

    return result;
  }

  @Public()
  @Post(WidgetRoutes.Settings)
  async saveSettings(@Body() params: ISaveWidgetSettingsParams) {
    Logger.log(`"${WidgetRoutes.Settings}", params:`, params);
    const result = await this.widgetService.saveSettings(params);
    Logger.log(`"${WidgetRoutes.Settings}", result:`, result);

    return result;
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post(WidgetRoutes.Pay)
  async pay(@Body() params: IWidgetPayParams) {
    Logger.debug(`BASE-API, widget/pay, params: ${params}`);
    return this.widgetService.pay(params);
  }
}
