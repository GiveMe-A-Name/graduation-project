import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { POST_SERVICE } from 'apps/const';
import { PostModule } from './post.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PostModule,
    {
      transport: Transport.TCP,
      options: {
        port: POST_SERVICE.port,
      },
    },
  );
  await app.listen();
}
bootstrap();
