import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/creactDto';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}
  @Post('/create')
  create(@Body() dto: CreateBookingDto) {
    return this.bookingService.createBooking(dto)
  }
}
