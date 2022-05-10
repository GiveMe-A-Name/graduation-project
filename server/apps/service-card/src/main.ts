import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CardModule } from './card.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CardModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4001,
      },
    },
  );
  await app.listen();
}
bootstrap();
