import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
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
}
