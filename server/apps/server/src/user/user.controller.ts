import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from 'apps/dto/login.dto';

@Controller('api/user')
export class UserController {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}
  @Post()
  login(@Body() loginDto: LoginDto) {
    return this.client.send<string>({ cmd: 'login' }, loginDto).toPromise();
  }
}
