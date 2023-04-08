import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/:value')
  getById(@Param('value') value: string) {
    return this.userService.findUserById(value);
  }
}
