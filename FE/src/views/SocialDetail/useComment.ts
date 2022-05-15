import { get } from '@/api/request';

interface Comment {
  nickname: string;
  content: string;
  time: string;
  headImage: string;
}
export default function useComment(postId: string | string[]) {
  const comments: Comment[] = reactive([]);
  async function getComment() {
    const url = `/posts/${postId}/comments`;
    const response = await get(url);
    if (response.errcode === 0) {
      const data = response.data.map((item: any) => {
        return {
          ...item,
          time: new Date(item.time).toLocaleDateString(),
        };
      });
      comments.push(...data);
    }
  }
  return {
    comments,
    getComment,
  };
}
