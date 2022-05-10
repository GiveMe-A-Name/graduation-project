import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from 'apps/dto/login.dto';
import { createSuccessResponse } from './common/request';

@Controller('/api')
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('CARD_SERVICE') private readonly cardClient: ClientProxy,
  ) {}
  @Post('/user')
  async login(@Body() loginDto: LoginDto) {
    const data = await this.userClient
      .send<string>({ cmd: 'login' }, loginDto)
      .toPromise();
    return createSuccessResponse(data);
  }

  @Get('/card/:id')
  async getCard(@Param('id') id: number) {
    const data = await this.cardClient
      .send<string>({ cmd: 'getcard' }, id)
      .toPromise();
    return createSuccessResponse(data);
  }
}
