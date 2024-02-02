import { Module } from '@nestjs/common';
import { WidgetModule } from '@cashier/widget/server/feature';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@cashier/auth/server/feature';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AtGuard, HttpExceptionFilter, RolesGuard } from '@cashier/common/server/logic';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.registerAsync([
      {
        name: 'STRIPE',
        useFactory: () => ({
          transport: Transport.RMQ,
          options: {
            urls: [process.env.STRIPE_URL as string],
            queue: process.env.STRIPE_QUEUE as string,
            queueOptions: {
              durable: false,
            },
          },
        }),
      },
      {
        name: 'CHECKOUT',
        useFactory: () => ({
          transport: Transport.RMQ,
          options: {
            urls: [process.env.CHECKOUT_URL as string],
            queue: process.env.CHECKOUT_QUEUE as string,
            queueOptions: {
              durable: false,
            },
          },
        }),
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
