import { get, getStaticURL } from '@/api/request';

export interface Display {
  id: number;
  imageUrl: string;
  headImageUrl: string;
  title: string;
  nickname: string;
  likeCount: number;
  tag: string;
}

export default function useDisplay() {
  const displayList: Display[] = reactive([
    {
      id: 1,
      imageUrl:
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.Jqzlm4QzTzbqLHf6HoTBhAHaEo?w=248&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7',
      title: '大厂暑期实习该如何准备',
      headImageUrl:
        'https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1650240000&Signature=XE72T~18MygmbURuJdBgtL23lJ6Ge7T9RT~ill1ig3tEiMqSApgBLRJmQelXtjLyUAebcFbyLaPdHPdkn8sWA23ArpFVR0aXHU76AheechOuLxB0hPbEuJRol9RerFvpSnHppgKXnkSdcyyEBtE4NKlgGqz6bNmuVudcdvTMpQBs3qJPng9axZ6StT6F6-5AsTCKzp-AL0D0lNSgQdOkq3UhMxlFN5RUj9RYfjhNPEBKDEJ0cqictXehkIHED2LXbCVBtImvcavjnl0IdZ-bYybR9KKZZ6-2YmZUPJkA0fcVIvt35DJMIx-lTt7y152iPyUQWgumt2DsWHXZV1xNHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      nickname: '小杨同学',
      likeCount: 1123,
      tag: 'hot',
    },
    {
      id: 2,
      imageUrl:
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.Jqzlm4QzTzbqLHf6HoTBhAHaEo?w=248&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7',
      title: '大厂暑期实习该如何准备1',
      headImageUrl:
        'https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1650240000&Signature=XE72T~18MygmbURuJdBgtL23lJ6Ge7T9RT~ill1ig3tEiMqSApgBLRJmQelXtjLyUAebcFbyLaPdHPdkn8sWA23ArpFVR0aXHU76AheechOuLxB0hPbEuJRol9RerFvpSnHppgKXnkSdcyyEBtE4NKlgGqz6bNmuVudcdvTMpQBs3qJPng9axZ6StT6F6-5AsTCKzp-AL0D0lNSgQdOkq3UhMxlFN5RUj9RYfjhNPEBKDEJ0cqictXehkIHED2LXbCVBtImvcavjnl0IdZ-bYybR9KKZZ6-2YmZUPJkA0fcVIvt35DJMIx-lTt7y152iPyUQWgumt2DsWHXZV1xNHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      nickname: '小杨同学',
      likeCount: 1123,
      tag: 'hot',
    },
    {
      id: 3,
      imageUrl:
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.Jqzlm4QzTzbqLHf6HoTBhAHaEo?w=248&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7',
      title: '大厂暑期实习该如何准备2',
      headImageUrl:
        'https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1650240000&Signature=XE72T~18MygmbURuJdBgtL23lJ6Ge7T9RT~ill1ig3tEiMqSApgBLRJmQelXtjLyUAebcFbyLaPdHPdkn8sWA23ArpFVR0aXHU76AheechOuLxB0hPbEuJRol9RerFvpSnHppgKXnkSdcyyEBtE4NKlgGqz6bNmuVudcdvTMpQBs3qJPng9axZ6StT6F6-5AsTCKzp-AL0D0lNSgQdOkq3UhMxlFN5RUj9RYfjhNPEBKDEJ0cqictXehkIHED2LXbCVBtImvcavjnl0IdZ-bYybR9KKZZ6-2YmZUPJkA0fcVIvt35DJMIx-lTt7y152iPyUQWgumt2DsWHXZV1xNHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      nickname: '小杨同学',
      likeCount: 1123,
      tag: 'love',
    },
  ]);
  async function getPost() {
    const url = '/posts/';
    const response = await get(url);
    if (response.errcode === 0) {
      displayList.push(
        ...response.data.map((item: any) => {
          return {
            id: item.id,
            headImageUrl: getStaticURL(item.headImage),
            imageUrl: getStaticURL(item.images[0]),
            title: item.title,
            nickname: item.nickname,
            likeCount: item.like,
            tag: item.type,
          };
        }),
      );
    }
  }
  return {
    displayList,
    getPost,
  };
}
