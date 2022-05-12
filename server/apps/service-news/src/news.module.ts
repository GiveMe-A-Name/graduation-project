import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NewsController } from './news.controller';
import { News } from './news.model';
import { NewsService } from './news.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'qixuan',
      password: 'asd123456',
      database: 'our_school',
      models: [News],
    }),
    SequelizeModule.forFeature([News]),
  ],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
