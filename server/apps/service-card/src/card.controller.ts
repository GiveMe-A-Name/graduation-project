import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CardService } from './card.service';

@Controller()
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @MessagePattern({ cmd: 'getcard' })
  getCard(id: number) {
    return this.cardService.getCard(id);
  }
}
