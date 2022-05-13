<script setup lang="ts">
import { get } from '@/api/request';
import Comeback from '@/components/Comeback.vue';
const news = reactive({
  title: '',
  content: '',
});
const route = useRoute();
const { id } = route.params;
async function getNews() {
  const url = `/news/${id}`;
  const response = await get(url);
  if (response.errcode === 0) {
    const data = response.data;
    news.title = data.title;
    news.content = data.content;
  }
}
getNews();
</script>

<template>
  <main class="news_container">
    <Comeback />
    <div class="article__wrapper">
      <h3 class="title">{{ news.title }}</h3>
      <div class="split"></div>
      <v-md-preview :text="news.content"></v-md-preview>
    </div>
  </main>
</template>

<style scoped lang="scss">
.news_container {
  .article__wrapper {
    padding-top: 0.2rem;
    // padding: 0.2rem;
    .title {
      font-size: 0.18rem;
      text-align: center;
    }
    .split {
      margin: 0 0.32rem;
      height: 1px;
      border: 1px solid gray;
      margin: 0.1rem 0;
    }
  }
}
</style>
