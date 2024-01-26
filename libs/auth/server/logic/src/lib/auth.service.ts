import {
  Body,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, UsersService } from '@cashier/users/server/logic';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';
import { ITokenData } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  public async register(@Body() registrationData: CreateUserDto) {
    const isEmail = await this.usersService.findOneByEmail(
      registrationData.email
    );
    if (isEmail) {
      throw new UnauthorizedException('This email is already in use');
    }
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdUser = await this.usersService.create({
        ...registrationData,
        password: hashedPassword,
      });
      createdUser.password = undefined;

      const token = await this.getToken(createdUser.id, createdUser.email);
      return token;
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  public async login(@Body() dto: AuthDto) {
    const user = await this.usersService.findOneByEmail(dto.email);
    if (!user) throw new ForbiddenException('Access Denied');

    if (!user.isActive) throw new ForbiddenException('User is inactive');

    const passwordMatch = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatch) throw new UnauthorizedException('Access Denied');

    const tokens = await this.getToken(user.id, user.email);
    return tokens;
  }

  private async getToken(userId: number, email: string): Promise<ITokenData> {
    const [at] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: '1d',
        }
      ),
    ]);

    return {
      access_token: at,
    };
  }

  async validateToken(token: string) {
    const isValid = await this.jwtService.verifyAsync(token);
    return isValid;
  }

  public async findByEmail(email: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      return user;
    }
    return null;
  }
}
