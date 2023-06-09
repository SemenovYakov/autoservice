import { Injectable } from '@nestjs/common';
import { Booking } from './booking.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookingDto } from './dto/creactDto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private bookingRepository: typeof Booking,
  ) {}

  async createBooking(dto: CreateBookingDto) {
    const user = await this.bookingRepository.create(dto);
    return user;
  }
}
