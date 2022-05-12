import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { HealthReportDto } from 'apps/dto/healthReport.dto';
import { HealthReportService } from './healthReportservice';

@Controller()
export class HealthReportController {
  constructor(
    private readonly serviceHealthReportService: HealthReportService,
  ) {}

  @MessagePattern({ cmd: 'healthreport' })
  reportHealth(reportDto: HealthReportDto) {
    return this.serviceHealthReportService.reportHealth(reportDto);
  }
}
