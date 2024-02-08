import { EntityRepository, Repository } from 'typeorm';
import { Merchant } from '../entities';

@EntityRepository(Merchant)
export class UsersRepository extends Repository<Merchant> {}
