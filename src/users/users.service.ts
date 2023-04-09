import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async findUserById(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }
  async findUserByPhone(phone: string) {
    const user = await this.userRepository.findOne({ where: { phone } });
    return user;
  }
}
