import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { ServicesModule } from './services/services.module';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { Services } from './services/services.model';
import { Booking } from './booking/booking.model';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'auto',
      models: [User, Services, Booking],
      autoLoadModels: true,
    }),
    UsersModule,
    ServicesModule,
    BookingModule,
    AuthModule,
  ],
})
export class AppModule {}
