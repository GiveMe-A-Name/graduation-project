import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { USER_SERVICE } from 'apps/const';
import { PostController } from './post.controller';
import { Post } from './post.model';
import { PostService } from './post.service';
import { PostComment } from './postComment.model';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE.name,
        transport: Transport.TCP,
        options: {
          port: USER_SERVICE.port,
        },
      },
    ]),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'qixuan',
      password: 'asd123456',
      database: 'our_school',
      models: [Post, PostComment],
    }),
    SequelizeModule.forFeature([Post, PostComment]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
