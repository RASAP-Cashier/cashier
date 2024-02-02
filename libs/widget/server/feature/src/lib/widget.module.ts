import { Module } from '@nestjs/common';
import { WidgetService } from '@cashier/widget/server/logic';
import { WidgetController } from './widget.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [WidgetController],
  providers: [WidgetService],
})
export class WidgetModule {}
