import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoginDto } from 'apps/dto/login.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @MessagePattern({ cmd: 'login' })
  login(loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }
}
