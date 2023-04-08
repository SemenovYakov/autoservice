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
      host: 'containers-us-west-15.railway.app',
      port: 6161,
      username: 'root',
      password: '9FXgEUW17eYbLDjoR3tS',
      database: 'railway',
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
