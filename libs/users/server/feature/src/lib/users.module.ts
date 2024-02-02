import { Module } from '@nestjs/common';
import { UsersService } from '@cashier/users/server/logic';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from '@cashier/db/server/logic';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
