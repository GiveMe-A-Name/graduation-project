import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import {
  USER_SERVICE,
  CARD_SERVICE,
  HEALTH_REPORT_SERVICE,
  ANNUNCIATE_SERVICE,
} from 'apps/const';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE.name,
        transport: Transport.TCP,
        options: {
          port: USER_SERVICE.port,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: CARD_SERVICE.name,
        transport: Transport.TCP,
        options: {
          port: CARD_SERVICE.port,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: HEALTH_REPORT_SERVICE.name,
        transport: Transport.TCP,
        options: {
          port: HEALTH_REPORT_SERVICE.port,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: ANNUNCIATE_SERVICE.name,
        transport: Transport.TCP,
        options: {
          port: ANNUNCIATE_SERVICE.port,
        },
      },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../public'),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
