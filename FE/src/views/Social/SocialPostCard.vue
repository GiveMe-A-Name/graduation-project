<script setup lang="ts">
import { post } from '@/api/request';
import { useUser } from '@/hooks';

export interface PostProps {
  id: number;
  imageUrl: string;
  headImageUrl: string;
  title: string;
  nickname: string;
  likeCount: number;
  like: boolean;
  goto: () => {};
  updateLike: (id: number, like: boolean) => void;
}

const props = defineProps<PostProps>();

async function updatePostLike() {
  const user = useUser();
  const url = '/posts/like';
  const data = {
    postId: props.id,
    userId: user.value.id,
    like: !props.like,
  };
  const response = await post(url, data);
  if (response.errcode === 0) {
    props.updateLike(props.id, !props.like);
  }
}
</script>

<template>
  <div class="post-card__container">
    <img :src="props.imageUrl" @click="props.goto" />
    <h3 class="title">{{ props.title }}</h3>
    <div class="card-info">
      <img :src="props.headImageUrl" class="head-image" />
      <span class="username">{{ props.nickname }}</span>
      <div class="like" @click="updatePostLike">
        <span class="icon" :class="{ 'icon-active': props.like }"
          >{{ props.like ? '&#xe60f;' : '&#xe8ab;' }}
        </span>
        <span class="like_count">{{ props.likeCount }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-card__container {
  width: 183px;
  height: 245px;
  display: flex;
  flex-direction: column;
  > img {
    width: 100%;
    height: 2.3rem;
  }
  > .title {
    margin: 0.07rem 0;
    font-size: 0.15rem;
  }
  > .card-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.03rem;
    margin-bottom: 0.1rem;
    .head-image {
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
    }
    .username {
      font-size: 0.13rem;
    }
    .like {
      display: flex;
      align-items: center;
      .icon {
        font-family: 'iconfont';
      }
      .icon-active {
        color: red;
      }
      .like_count {
        font-size: 0.12rem;
        display: inline-block;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
