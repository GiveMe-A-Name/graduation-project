import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CardModule } from './card.module';
import { CARD_SERVICE } from 'apps/const';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CardModule,
    {
      transport: Transport.TCP,
      options: {
        port: CARD_SERVICE.port,
      },
    },
  );
  await app.listen();
}
bootstrap();
