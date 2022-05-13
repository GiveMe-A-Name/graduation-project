import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDto } from 'apps/dto/login.dto';
import { UpdatePasswordDto } from 'apps/dto/updatePassword.dto';
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

  async updateUserPassword(updateDto: UpdatePasswordDto) {
    const user = await this.userModel.findOne({
      where: {
        id: updateDto.id,
      },
    });
    if (user?.password !== updateDto.oldPassword) {
      throw new RpcException({
        errcode: -10001,
        errmsg: 'password error',
      });
    }

    await this.userModel.update(
      {
        password: updateDto.newPassword,
      },
      {
        where: {
          id: updateDto.id,
        },
      },
    );
    return 'success';
  }
}
