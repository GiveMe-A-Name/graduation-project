import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostController } from './post.controller';
import { Post } from './post.model';
import { PostService } from './post.service';
import { PostComment } from './postComment.model';

@Module({
  imports: [
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
