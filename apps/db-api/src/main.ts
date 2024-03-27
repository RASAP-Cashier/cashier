import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { VersioningType } from '@nestjs/common/enums/version-type.enum';
import * as packageJson from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor: () => packageJson.version,
  });

  const globalPrefix = '';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3005;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );

  Logger.log('!!!!!!! ENV VARIABLES, DB-API !!!!!!!', {
    BASE_API_OLD_URL: process.env.BASE_API_OLD_URL,
    BASE_API_URL: process.env.BASE_API_URL,
    DB_API_URL: process.env.DB_API_URL,
    WIDGET_URL: process.env.WIDGET_URL,
    DATABASE_PASS: process.env.DATABASE_PASS,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_USER: process.env.DATABASE_USER,
    JWT_SECRET: process.env.JWT_SECRET,
  });
}

bootstrap();
