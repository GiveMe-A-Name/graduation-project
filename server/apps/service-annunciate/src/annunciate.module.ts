import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnnunciateController } from './annunciate.controller';
import { Annunciate } from './annunciate.model';
import { AnnunciateService } from './annunciate.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'qixuan',
      password: 'asd123456',
      database: 'our_school',
      models: [Annunciate],
    }),
    SequelizeModule.forFeature([Annunciate]),
  ],
  controllers: [AnnunciateController],
  providers: [AnnunciateService],
})
export class AnnunciateModule {}
