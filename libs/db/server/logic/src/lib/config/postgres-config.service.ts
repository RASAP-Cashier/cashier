import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {
    //
  }

  public createTypeOrmOptions(
    _connectionName?: string,
  ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DATABASE_HOST'),
      port: parseInt(this.configService.get('DATABASE_PORT') as string),
      username: this.configService.get('DATABASE_USER'),
      password: this.configService.get('DATABASE_PASS'),
      database: this.configService.get('DATABASE_NAME'),
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: false,
      autoLoadEntities: true,
      logging: true,
    };
  }
}
