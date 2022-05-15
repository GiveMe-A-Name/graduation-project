<script setup lang="ts">
import { getStaticURL } from '@/api/request';
const props = defineProps<{
  headImage: string;
  nickname: string;
  content: string;
  time: string;
}>();
</script>

<template>
  <div class="comment__card__wrapper">
    <img :src="getStaticURL(props.headImage)" />
    <div class="body">
      <span class="username">{{ props.nickname }}</span>
      <div class="content">{{ props.content }}</div>
    </div>
    <div class="time">
      <span class="text">{{ props.time }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment__card__wrapper {
  display: flex;

  img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
  }
  > .body {
    padding-bottom: 0.1rem;
    margin: 0 0.15rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f1f1;
    .username {
      font-size: 0.15rem;
    }
    .content {
      margin-top: 0.1rem;
      font-size: 0.15rem;
    }
  }
  .time {
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
