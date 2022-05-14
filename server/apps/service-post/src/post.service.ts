import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { PostComment } from './postComment.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post) private postModel: typeof Post,
    @InjectModel(PostComment) private postCommentModel: typeof PostComment,
  ) {}
  async getPosts() {
    return 'posts';
    // throw new Error('Method not implemented.');
  }
  async getPost(id: number) {
    return `post ${id}`;
    // throw new Error('Method not implemented.');
  }
}
