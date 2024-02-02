import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService, WidgetSettingsModule } from '@cashier/db/server/logic';
import { UsersModule } from '@cashier/users/server/feature';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from '@cashier/common/server/logic';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    WidgetSettingsModule,
    UsersModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
