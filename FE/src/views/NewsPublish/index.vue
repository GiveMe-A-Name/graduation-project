<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
import BaseButton from '@/components/BaseButton.vue';
import { post } from '@/api/request';

const news = reactive({
  title: '',
  content: '',
});

async function publishNews() {
  const url = '/addNews';
  const response = await post(url, {
    data: news,
  });
  if (response.errcode === 0) {
    console.log('发布成功');
  }
}
</script>

<template>
  <main class="news-publish__container">
    <Comeback />
    <article class="publish__wrapper">
      <div class="title">
        <label>标题:</label>
        <input type="text" v-model="news.title" />
      </div>
      <div class="content">
        <label>内容:</label>
        <textarea v-model="news.content"></textarea>
      </div>
      <BaseButton text="发布" class="publish" @click="publishNews" />
    </article>
  </main>
</template>

<style scoped lang="scss">
.news-publish__container {
  font-size: 0.16rem;
  .publish__wrapper {
    display: flex;
    flex-direction: column;
    padding: 0.15rem 0.25rem;
    label {
      vertical-align: top;
      margin-right: 0.2rem;
    }
    > .title {
      input {
        width: 70%;
        padding: 0.05rem 0.1rem;
        border: 1px solid #625f5f;
      }
    }
    > .content {
      margin-top: 0.3rem;
      textarea {
        border: 1px solid #625f5f;
        margin-top: 0.1rem;
        resize: none;
        height: 4.3rem;
        width: 3rem;
        padding: 0.1rem;
      }
    }
    > .publish {
      margin-top: 0.17rem;
      width: 100%;
    }
  }
}
</style>
