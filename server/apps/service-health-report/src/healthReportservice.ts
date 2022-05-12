import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HealthReportDto } from 'apps/dto/healthReport.dto';
import { HealthReport } from './healthReport.model';

@Injectable()
export class HealthReportService {
  constructor(
    @InjectModel(HealthReport) private healthReportModel: typeof HealthReport,
  ) {}

  async reportHealth(reportDto: HealthReportDto) {
    await this.healthReportModel.create({
      student_id: reportDto.studentId,
      student_name: reportDto.studentName,
      temperature: reportDto.temperature,
      health_code_color: reportDto.healthCodeColor,
      health: reportDto.health,
      position: reportDto.position,
      phone: reportDto.phone,
    });
    return 'success';
  }
}
