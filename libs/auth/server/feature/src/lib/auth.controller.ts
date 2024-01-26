import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthDto, AuthService, ITokenData } from '@cashier/auth/server/logic';
import { CreateUserDto } from '@cashier/users/server/logic';
import { Public } from '@cashier/common/server/logic';
import { AuthRoutes } from '@cashier/auth/cs';

@Controller()
export class AuthController {
  constructor(private readonly authenticationService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post(AuthRoutes.SignIn)
  async signIn(@Body() authDto: AuthDto): Promise<ITokenData> {
    return this.authenticationService.login(authDto);
  }

  @Public()
  @Post(AuthRoutes.SignUp)
  async signUp(@Body() createUserDto: CreateUserDto): Promise<ITokenData> {
    return this.authenticationService.register(createUserDto);
  }
}
