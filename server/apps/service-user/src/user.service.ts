import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
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
    if (user?.password !== loginDto.password) {
      throw new RpcException({
        errcode: 403,
        errmsg: 'Authentication failed',
      });
    }

    const data = {
      id: user.id,
      nickname: user.nickname,
      headImage: user.head_image,
      realname: user.realname,
      sex: user.sex,
    };
    return data;
  }
}
