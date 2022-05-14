import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from 'apps/dto/login.dto';
import { createSuccessResponse } from './common/request';
import {
  USER_SERVICE,
  CARD_SERVICE,
  HEALTH_REPORT_SERVICE,
  NEWS_SERVICE,
  POST_SERVICE,
} from 'apps/const';
import { HealthReportDto } from 'apps/dto/healthReport.dto';
import { AddNewsDto } from 'apps/dto/addNews.dto';
import { UpdatePasswordDto } from 'apps/dto/updatePassword.dto';
import { AddCommentDto } from 'apps/dto/addComment.dto';

@Controller('/api')
export class AppController {
  constructor(
    @Inject(USER_SERVICE.name)
    private readonly userClient: ClientProxy,
    @Inject(CARD_SERVICE.name)
    private readonly cardClient: ClientProxy,
    @Inject(HEALTH_REPORT_SERVICE.name)
    private readonly healthClient: ClientProxy,
    @Inject(NEWS_SERVICE.name)
    private readonly newsClient: ClientProxy,
    @Inject(POST_SERVICE.name)
    private readonly postClient: ClientProxy,
  ) {}
  @Post('/user/login')
  async login(@Body() loginDto: LoginDto) {
    const data = await this.userClient
      .send<string>({ cmd: 'login' }, loginDto)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Post('/user/updatePassword')
  async updateUserPassword(@Body() updateDto: UpdatePasswordDto) {
    const data = await this.userClient
      .send<string>({ cmd: 'updatePassword' }, updateDto)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/getCard/:id')
  async getCard(@Param('id') id: number) {
    const data = await this.cardClient
      .send<string>({ cmd: 'getcard' }, id)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Post('/healthReport')
  async healthReport(@Body() reportDto: HealthReportDto) {
    const data = await this.healthClient
      .send<string>({ cmd: 'healthreport' }, reportDto)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/news')
  async getnewsList() {
    const data = await this.newsClient
      .send<string>({ cmd: 'getNewsList' }, {})
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/news/:id')
  async getNews(@Param('id') id: number) {
    const data = await this.newsClient
      .send<string>({ cmd: 'getNews' }, id)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Post('/addNews')
  async addNews(@Body() addNewsDto: AddNewsDto) {
    const data = await this.newsClient
      .send<string>({ cmd: 'addNews' }, addNewsDto)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/posts')
  async getPosts() {
    const data = await this.postClient
      .send<string>({ cmd: 'getPosts' }, {})
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/posts/:id')
  async getPost(@Param('id') id: number) {
    const data = await this.postClient
      .send<string>({ cmd: 'getPost' }, id)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/posts/:id/comments/')
  async getPostComment(@Param('id') id: number) {
    const data = await this.postClient
      .send<string>({ cmd: 'getPostComment' }, id)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Post('/posts/addComments')
  async addPostComment(@Body() postComentDto: AddCommentDto) {
    const data = await this.postClient
      .send<string>({ cmd: 'addPostComment' }, postComentDto)
      .toPromise();
    return createSuccessResponse(data);
  }

  // @Post('/createPost')
  // async createPost() {}
}
