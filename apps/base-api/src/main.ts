import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from '@cashier/common/server/logic';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = '';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.startAllMicroservices();

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );

  Logger.log('!!!!!!! ENV VARIABLES !!!!!!!', {
    BASE_API_URL: process.env.BASE_API_URL,
    DB_API_URL: process.env.DB_API_URL,
    WIDGET_URL: process.env.WIDGET_URL,
    DATABASE_PASS: process.env.DATABASE_PASS,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_USER: process.env.DATABASE_USER,
    JWT_SECRET: process.env.JWT_SECRET,
    STRIPE_QUEUE: process.env.STRIPE_QUEUE,
    STRIPE_URL: process.env.STRIPE_URL,
    CHECKOUT_QUEUE: process.env.CHECKOUT_QUEUE,
    CHECKOUT_URL: process.env.CHECKOUT_URL,
  });
}

bootstrap();
