import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HEALTH_REPORT_SERVICE } from 'apps/const';
import { HealthReportModule } from './healthReport.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HealthReportModule,
    {
      transport: Transport.TCP,
      options: {
        port: HEALTH_REPORT_SERVICE.port,
      },
    },
  );
  await app.listen();
}
bootstrap();
