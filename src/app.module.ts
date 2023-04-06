import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { ServicesModule } from './services/services.module';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { Services } from './services/services.model';

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
      models: [User, Services],
      autoLoadModels: true,
    }),
    UsersModule,
    ServicesModule,
  ],
})
export class AppModule {}
