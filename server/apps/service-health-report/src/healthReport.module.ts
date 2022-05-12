import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HealthReportController } from './healthReport.controller';
import { HealthReport } from './healthReport.model';
import { HealthReportService } from './healthReportservice';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'qixuan',
      password: 'asd123456',
      database: 'our_school',
      models: [HealthReport],
    }),
    SequelizeModule.forFeature([HealthReport]),
  ],
  controllers: [HealthReportController],
  providers: [HealthReportService],
})
export class HealthReportModule {}
