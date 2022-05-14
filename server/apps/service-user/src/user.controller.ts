import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoginDto } from 'apps/dto/login.dto';
import { UpdatePasswordDto } from 'apps/dto/updatePassword.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @MessagePattern({ cmd: 'login' })
  login(loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }

  @MessagePattern({ cmd: 'updatePassword' })
  updateUserPassword(updateDto: UpdatePasswordDto) {
    return this.userService.updateUserPassword(updateDto);
  }

  @MessagePattern({ cmd: 'getUserList' })
  getUserList(ids: number[]) {
    return this.userService.getUserList(ids);
  }
}
