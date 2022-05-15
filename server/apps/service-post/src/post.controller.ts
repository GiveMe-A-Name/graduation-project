import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AddCommentDto } from 'apps/dto/addComment.dto';
import { LikePostDto } from 'apps/dto/likePost.dto';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern({ cmd: 'getPosts' })
  getPosts() {
    return this.postService.getPosts();
  }

  @MessagePattern({ cmd: 'getPost' })
  getPost(id: number) {
    return this.postService.getPost(id);
  }

  @MessagePattern({ cmd: 'getPostComment' })
  getPostComment(id: number) {
    return this.postService.getPostComment(id);
  }

  @MessagePattern({ cmd: 'addPostComment' })
  addPostComment(postCommentDto: AddCommentDto) {
    return this.postService.addPostComment(postCommentDto);
  }

  @MessagePattern({ cmd: 'updatePostLike' })
  updatePostLike(likeDto: LikePostDto) {
    return this.postService.updatePostLike(likeDto);
  }
}
