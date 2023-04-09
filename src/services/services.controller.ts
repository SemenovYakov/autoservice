import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}
  @Get()
  getAllServices() {
    return this.servicesService.getAllServices();
  }
}
