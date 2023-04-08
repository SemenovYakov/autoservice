import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userServices: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userServices.findAll();
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userServices.create(dto);
    return user;
  }

  async findUserById(id: string) {
    const user = await this.userServices.findOne({ where: { id } });

    return user;
  }
  async findUserByPhone(phone: number) {
    const user = await this.userServices.findOne({ where: { phone } });
    return user;
  }
}
