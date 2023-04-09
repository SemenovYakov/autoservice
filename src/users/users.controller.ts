import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/:id')
  getById(@Param('id') value: number) {
    return this.userService.findUserBookingByUserId(value);
  }
  
  @Get()
  allusers() {
    return this.userService.findAll();
  }
}
