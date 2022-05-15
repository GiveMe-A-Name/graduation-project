import { get, getStaticURL } from '@/api/request';

export interface Post {
  id: number;
  imageUrl: string;
  headImageUrl: string;
  title: string;
  nickname: string;
  likeCount: number;
  tag: string;
  like: boolean;
}

export default function usePost() {
  const posts: Post[] = reactive([]);
  async function getPost() {
    const url = '/posts/';
    const response = await get(url);
    if (response.errcode === 0) {
      posts.push(
        ...response.data.map((item: any) => {
          return {
            id: item.id,
            headImageUrl: getStaticURL(item.headImage),
            imageUrl: getStaticURL(item.images[0]),
            title: item.title,
            nickname: item.nickname,
            likeCount: item.likeNum,
            tag: item.type,
            like: item.like,
          };
        }),
      );
    }
  }

  function updatePostLike(id: number, like: boolean) {
    const post = posts.find((post) => post.id === id);
    if (post) {
      post.like = like;
      if (like) {
        post.likeCount += 1;
      } else {
        post.likeCount -= 1;
      }
    }
  }

  return {
    posts,
    getPost,
    updatePostLike,
  };
}
