import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { User } from '../schemas/user.schema';
import { DataServices } from './data-service.abastract';
import { MongoDBGenericRepository } from './mongodb-generic.repository';

@Injectable()
export class MongoDBDataServices
  implements DataServices, OnApplicationBootstrap
{
  user: MongoDBGenericRepository<User>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: PaginateModel<User>,
  ) {}

  onApplicationBootstrap() {
    this.user = new MongoDBGenericRepository<User>(this.UserRepository);
  }
}
