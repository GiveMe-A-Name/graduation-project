import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CardController } from './card.controller';
import { Card } from './card.model';
import { CardService } from './card.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'qixuan',
      password: 'asd123456',
      database: 'our_school',
      models: [Card],
    }),
    SequelizeModule.forFeature([Card]),
  ],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
