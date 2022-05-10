import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Card } from './card.model';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card) private cardModel: typeof Card) {}
  async getCard(id: number) {
    const card = await this.cardModel.findOne({
      where: {
        id,
      },
    });
    return card;
  }
}
