import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Services } from './services.model';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [SequelizeModule.forFeature([User, Services])],
})
export class ServicesModule {}
