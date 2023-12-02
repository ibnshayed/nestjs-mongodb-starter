import { UserEntity } from '../entities';
import { GenericRepository } from './generic-repository.abstract';

export abstract class DataServices {
  abstract user: GenericRepository<UserEntity>;
}
