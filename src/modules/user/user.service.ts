import { Injectable } from '@nestjs/common';
import { DataServices } from './../../repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly db: DataServices) {}

  async create(createUserDto: CreateUserDto) {
    console.log(
      '🚀 ~ file: user.service.ts:10 ~ UserService ~ create ~ createUserDto:',
      createUserDto,
    );
    const user = {
      username: createUserDto.username,
      password: createUserDto.password,

      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,

      mobile: createUserDto.mobile,
      email: createUserDto.email,

      nid: createUserDto.nid,
      address: createUserDto.address,

      role: createUserDto.role,
      gender: createUserDto.gender,
      permissions: createUserDto.permissions,
    };
    const newUser = await this.db.user.createOne(user);
    console.log(
      '🚀 ~ file: user.service.ts:33 ~ UserService ~ create ~ newUser:',
      newUser,
    );
    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
