import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { News } from './news.model';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newsModel: typeof News) {}
  async getNewsList() {
    const newsList = await this.newsModel.findAll();
    return newsList;
  }

  async getNews(id: number) {
    const news = await this.newsModel.findOne({
      where: {
        id,
      },
    });
    return news;
  }
}
