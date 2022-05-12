import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from 'apps/dto/login.dto';
import { createSuccessResponse } from './common/request';
import {
  USER_SERVICE,
  CARD_SERVICE,
  HEALTH_REPORT_SERVICE,
  NEWS_SERVICE,
} from 'apps/const';
import { HealthReportDto } from 'apps/dto/healthReport.dto';

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
  ) {}
  @Post('/user/login')
  async login(@Body() loginDto: LoginDto) {
    const data = await this.userClient
      .send<string>({ cmd: 'login' }, loginDto)
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

  @Post('/health/report')
  async healthReport(@Body() reportDto: HealthReportDto) {
    const data = await this.healthClient
      .send<string>({ cmd: 'healthreport' }, reportDto)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/annunciates')
  async getnewsList() {
    const data = await this.newsClient
      .send<string>({ cmd: 'getnewsList' }, {})
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/annuciate/:id')
  async getNews(@Param('id') id: number) {
    const data = await this.newsClient
      .send<string>({ cmd: 'getNews' }, id)
      .toPromise();
    return createSuccessResponse(data);
  }
}
