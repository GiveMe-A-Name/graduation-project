import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/sequelize';
import { USER_SERVICE } from 'apps/const';
import { AddCommentDto } from 'apps/dto/addComment.dto';
import { LikePostDto } from 'apps/dto/likePost.dto';
import { UserMap } from 'apps/service-user/src/user.service';
import { Post } from './models/post.model';
import { PostComment } from './models/postComment.model';
import { PostLike } from './models/postLike.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post) private postModel: typeof Post,
    @InjectModel(PostComment) private postCommentModel: typeof PostComment,
    @InjectModel(PostLike) private postLikeModel: typeof PostLike,
    @Inject(USER_SERVICE.name) private userClient: ClientProxy,
  ) {}
  async getPosts() {
    const posts = await this.postModel.findAll();
    const usersId = posts.map((post) => post.user_id);
    const userMap = await this.userClient
      .send<UserMap>({ cmd: 'getUserList' }, usersId)
      .toPromise();

    const data = await Promise.all(
      posts.map(async (post) => {
        const userId = post.user_id;
        const user = userMap[userId];
        const record = await this.postLikeModel.findOne({
          where: {
            post_id: post.id,
            user_id: userId,
            like: true,
          },
        });
        const like = record !== null;
        return {
          id: post.id,
          userId,
          headImage: user.head_image,
          nickname: user.nickname,
          likeNum: post.like_num,
          images: JSON.parse(post.images),
          title: post.title,
          type: post.type,
          like,
        };
      }),
    );

    return data;
  }
  async getPost(id: number) {
    const post = await this.postModel.findOne({
      where: {
        id,
      },
    });
    const { images, title, content, createdAt } = post;
    const data = {
      id,
      images: JSON.parse(images),
      title,
      content,
      createTime: createdAt,
    };
    return data;
  }
  async getPostComment(id: number) {
    const comments = (
      await this.postCommentModel.findAll({
        where: {
          post_id: id,
        },
      })
    ).filter((item) => item.comment !== null);
    const usersId = comments.map((comment) => comment.user_id);
    const userMap = await this.userClient
      .send<UserMap>({ cmd: 'getUserList' }, usersId)
      .toPromise();
    const data = comments.map((comment) => {
      const user = userMap[comment.user_id];
      return {
        headImage: user.head_image,
        nickname: user.nickname,
        content: comment.comment,
        time: comment.createdAt,
      };
    });
    return data;
  }

  async addPostComment(postCommentDto: AddCommentDto) {
    await this.postCommentModel.create({
      post_id: postCommentDto.postId,
      user_id: postCommentDto.userId,
      comment: postCommentDto.content,
    });
    return 'success';
  }

  async updatePostLike(likeDto: LikePostDto) {
    let record = await this.postLikeModel.findOne({
      where: {
        post_id: likeDto.postId,
        user_id: likeDto.userId,
      },
    });
    if (!record) {
      record = await this.postLikeModel.build({
        post_id: likeDto.postId,
        user_id: likeDto.userId,
      });
    }
    record.like = likeDto.like;
    await record.save();
    return 'success';
  }
}
