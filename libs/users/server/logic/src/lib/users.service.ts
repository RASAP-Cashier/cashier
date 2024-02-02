import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from '@cashier/db/server/logic';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Merchant)
    private usersRepository: Repository<Merchant>,
  ) {}

  private static toPublicUser(user: Merchant): any {
    return {
      ...user,
      password: '',
    };
  }

  create(createUserDto: CreateUserDto) {
    const entity = this.usersRepository.create(createUserDto);
    entity.isActive = true;

    return this.usersRepository.save(entity);
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  findOneById = async(userId: number) => {
    return this.usersRepository
      .findOneByOrFail({ userId })
      .catch(() => {
        throw new BadRequestException('Can\'t find user');
      })
      .then((user) => UsersService.toPublicUser(user as Merchant));
  };

  async update(userId: number, dto: UpdateUserDto) {
    const merchant = await this.usersRepository.findOneBy({ userId });

    if (merchant) {
      merchant.email = dto.email as string;
      merchant.username = dto.userName as string;
      merchant.password = dto.password as string;

      return this.usersRepository.save(merchant);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
