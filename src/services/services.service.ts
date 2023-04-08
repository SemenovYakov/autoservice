import { InjectModel } from '@nestjs/sequelize';
import { Services } from './services.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Services) private servicesRepository: typeof Services,
  ) {}

  async getAllServices() {
    const services = await this.servicesRepository.findAll();
    return services;
  }
}
