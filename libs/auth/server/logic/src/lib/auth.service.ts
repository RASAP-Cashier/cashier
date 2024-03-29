import {
  Body,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, UserDto } from '@cashier/users/server/logic';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';
import { ITokenData } from './auth.interface';
import { HttpService } from '@nestjs/axios';
import { UsersRoutes } from '@cashier/users/server/cs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async signUp(@Body() dto: CreateUserDto) {
    const user = await this.findByEmail(dto.email);
    if (user) {
      throw new UnauthorizedException('This email is already in use');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    try {
      const createdUser = await this.httpService.axiosRef.post<UserDto>(
        `${this.configService.get('DB_API_URL')}${UsersRoutes.Create}`,
        {
          ...dto,
          password: hashedPassword,
        },
      );

      return await this.getToken(createdUser.data.id, createdUser.data.email);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  public async signIn(@Body() dto: AuthDto) {
    const user = await this.findByEmail(dto.email);
    if (!user) {
      throw new ForbiddenException('Access Denied. Email not exists.');
    }

    if (!user.isActive) {
      throw new ForbiddenException('User is inactive');
    }

    const passwordMatch = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Access Denied. Password mismatch.');
    }

    return await this.getToken(user.id, user.email);
  }

  async validateToken(token: string) {
    return await this.jwtService.verifyAsync(token);
  }

  public async findByEmail(email: string) {
    console.log('AuthService findByEmail', email);
    let response;

    try {
      response = await this.httpService.axiosRef.post<UserDto>(
        `${this.configService.get('DB_API_URL')}${UsersRoutes.GetByEmail}`,
        {
          email,
        },
      );
    } catch (err) {
      console.log('AuthService findByEmail error');
    }

    if (response?.data) {
      return response.data as UserDto;
    }

    return undefined;
  }

  private async getToken(userId: string, email: string): Promise<ITokenData> {
    const [at] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: '1d',
        },
      ),
    ]);

    return {
      access_token: at,
    };
  }
}
