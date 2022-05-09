import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDto } from 'apps/dto/login.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  async login(loginDto: LoginDto) {
    const user = await this.userModel.findOne({
      where: {
        id: loginDto.id,
      },
    });
    if (user.password !== loginDto.password) {
    }
    return user.nickname;
  }
}
