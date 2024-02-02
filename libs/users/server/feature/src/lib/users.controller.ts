import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, UsersService } from '@cashier/users/server/logic';
import { Role, Roles } from '@cashier/auth/server/logic';
import { UsersRoutes } from '@cashier/users/server/cs';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(UsersRoutes.Create)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(UsersRoutes.Get)
  @Roles(Role.Admin)
  findOne(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  @Post(UsersRoutes.GetByEmail)
  @Roles(Role.Admin)
  findOneByEmail(@Body('email') email: string) {
    console.log(email);
    return this.usersService.findOneByEmail(email);
  }

  @Delete(UsersRoutes.Delete)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
