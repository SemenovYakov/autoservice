import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Services } from 'src/services/services.model';
import { Booking } from './booking.model';

@Module({
  providers: [BookingService],
  controllers: [BookingController],
  imports: [SequelizeModule.forFeature([User, Services, Booking])],
  exports: [BookingService],
})
export class BookingModule {}
