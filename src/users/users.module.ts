import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Services } from 'src/services/services.model';
import { Booking } from 'src/booking/booking.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Services, Booking])],
  exports: [UsersService],
})
export class UsersModule {}
