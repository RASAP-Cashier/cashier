import { Module } from '@nestjs/common';
import { AtStrategy, AuthService } from '@cashier/auth/server/logic';
import { AuthController } from './auth.controller';
import { UsersModule } from '@cashier/users/server/feature';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '6h',
      },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AtStrategy],
})
export class AuthModule {}
