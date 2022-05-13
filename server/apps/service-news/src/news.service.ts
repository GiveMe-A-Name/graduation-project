import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { News } from './news.model';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newsModel: typeof News) {}
  async getNewsList() {
    const newsList = await this.newsModel.findAll();
    const result = newsList.map((news) => {
      return {
        id: news.id,
        title: news.title,
        content: news.content,
        date: news.createdAt,
      };
    });
    return result;
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
