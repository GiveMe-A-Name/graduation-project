import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { USER_SERVICE } from 'apps/const';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './models/post.model';
import { PostComment } from './models/postComment.model';
import { PostLike } from './models/postLike.model';

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
      models: [Post, PostComment, PostLike],
    }),
    SequelizeModule.forFeature([Post, PostComment, PostLike]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
