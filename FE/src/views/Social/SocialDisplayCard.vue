<script setup lang="ts">
export interface DisplayProps {
  imageUrl: string;
  headImageUrl: string;
  title: string;
  nickname: string;
  likeCount: number;
  goto: () => {};
}

const props = defineProps<DisplayProps>();
</script>

<template>
  <div class="display-card__container">
    <img :src="props.imageUrl" @click="props.goto" />
    <h3 class="title">{{ props.title }}</h3>
    <div class="card-info">
      <img :src="props.headImageUrl" class="head-image" />
      <span class="username">{{ props.nickname }}</span>
      <div class="like">
        <span class="icon">&#xe60f;</span>
        <span class="like_count">{{ props.likeCount }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.display-card__container {
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
        color: red;
      }
      // .icon-active {
      //   color: red;
      // }
      .like_count {
        font-size: 0.12rem;
        display: inline-block;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
