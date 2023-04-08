import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/createUserDto';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/loginDto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginUserDto) {
    const user = await this.validateUser(loginDto);
    return user;
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.findUserByPhone(userDto.phone);
    if (candidate) {
      throw new HttpException(
        'Пользователь существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hash = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userDto,
      password: hash,
    });
    return user;
  }

  // private async generateToken(user: User) {
  //   const payload = { id: user.id };
  //   return { token: this.jwtService.sign(payload) };
  // }
  private async validateUser(dto: LoginUserDto) {
    const user = await this.userService.findUserByPhone(dto.phone);
    const passwordEquals = await bcrypt.compare(dto.password, user.password);
    if (user && passwordEquals) {
      return user;
    } else {
      throw new HttpException(
        'Неверный логин или пароль',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
