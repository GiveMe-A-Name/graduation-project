import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AnnunciateService } from './annunciate.service';

@Controller()
export class AnnunciateController {
  constructor(private readonly annunciateService: AnnunciateService) {}

  @MessagePattern({ cmd: 'getAnnuciates' })
  getAnnuciates() {
    return this.annunciateService.getAnnuciates();
  }

  @MessagePattern({ cmd: 'getAnnuciates' })
  getAnnuciate(id: number) {
    return this.annunciateService.getAnnuciate(id);
  }
}
