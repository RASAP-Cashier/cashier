import { Module } from '@nestjs/common';
import { WidgetModule } from '@cashier/widget/server/feature';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from '@cashier/auth/server/feature';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import {
  AtGuard,
  HttpExceptionFilter,
  RolesGuard,
} from '@cashier/common/server/logic';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    ClientsModule.registerAsync([
      {
        name: 'STRIPE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get('STRIPE_URL') as string],
            queue: configService.get('STRIPE_QUEUE') as string,
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
      {
        name: 'CHECKOUT',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get('CHECKOUT_URL') as string],
            queue: configService.get('CHECKOUT_QUEUE') as string,
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
    AuthModule,
    WidgetModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
