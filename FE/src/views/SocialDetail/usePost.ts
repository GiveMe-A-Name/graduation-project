import { get } from '@/api/request';
import { Ref } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';

interface Post {
  id: number;
  images: string[];
  title: string;
  content: string;
  createTime: string;
}

export default function usePost(postId: any) {
  const post: Ref<Post> = ref({
    id: 0,
    images: [],
    title: '',
    content: '',
    createTime: '',
  });
  async function getPost() {
    const url = `/posts/${postId}`;
    const response = await get(url);
    if (response.errcode == 0) {
      const data = response.data;
      post.value = data;
    }
  }
  return {
    post,
    getPost,
  };
}
