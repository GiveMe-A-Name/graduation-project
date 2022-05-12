import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ANNUNCIATE_SERVICE } from 'apps/const';
import { AnnunciateModule } from './annunciate.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AnnunciateModule,
    {
      transport: Transport.TCP,
      options: {
        port: ANNUNCIATE_SERVICE.port,
      },
    },
  );
  await app.listen();
}
bootstrap();
