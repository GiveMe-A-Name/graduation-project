import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NEWS_SERVICE } from 'apps/const';
import { NewsModule } from './news.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NewsModule,
    {
      transport: Transport.TCP,
      options: {
        port: NEWS_SERVICE.port,
      },
    },
  );
  await app.listen();
}
bootstrap();
