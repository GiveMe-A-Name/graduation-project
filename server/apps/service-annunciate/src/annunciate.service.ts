import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Annunciate } from './annunciate.model';

@Injectable()
export class AnnunciateService {
  constructor(
    @InjectModel(Annunciate) private annunciateModel: typeof Annunciate,
  ) {}
  async getAnnuciates() {
    const annuciates = await this.annunciateModel.findAll();
    return annuciates;
  }

  async getAnnuciate(id: number) {
    const annuciate = await this.annunciateModel.findOne({
      where: {
        id,
      },
    });
    return annuciate;
  }
}
