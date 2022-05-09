import { Body, Controller, HttpException, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from 'apps/dto/login.dto';
import { createSuccessResponse } from '../common/request';

@Controller('api/user')
export class UserController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}
  @Post()
  async login(@Body() loginDto: LoginDto) {
    const data = await this.client
      .send<string>({ cmd: 'login' }, loginDto)
      .toPromise();
    return createSuccessResponse(data);
  }
}
