import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NewsService } from './news.service';

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @MessagePattern({ cmd: 'getNewsList' })
  getNewsList() {
    return this.newsService.getNewsList();
  }

  @MessagePattern({ cmd: 'getNews' })
  getNews(id: number) {
    return this.newsService.getNews(id);
  }
}
