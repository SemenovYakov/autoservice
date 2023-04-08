import { Injectable } from '@nestjs/common';
import { Booking } from './booking.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private bookingRepository: typeof Booking,
  ) {}

  // getBookingsByUserId(userId: string){

  // }
}
