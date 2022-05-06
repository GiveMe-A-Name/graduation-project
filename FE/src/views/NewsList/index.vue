<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
import NewsListCard from './NewsListCard.vue';

interface NewsItem {
  title: string;
  date: string;
  content: string;
}

const newsList: NewsItem[] = [
  {
    title: '专家共同为长沙体育产业发展',
    date: '04月30日 16:17',
    content:
      ' 12月20日下午，“长沙”12月20日下午，“长沙”12月20日下午，“长沙”12月20日下午，“长沙”',
  },
  {
    title: '专家共同为长沙体育产业发展1',
    date: '04月30日 16:17',
    content:
      ' 12月20日下午，“长沙”12月20日下午，“长沙”12月20日下午，“长沙”12月20日下午，“长沙”',
  },
  {
    title: '专家共同为长沙体育产业发展2',
    date: '04月30日 16:17',
    content:
      ' 12月20日下午，“长沙”12月20日下午，“长沙”12月20日下午，“长沙”12月20日下午，“长沙”',
  },
];
</script>

<template>
  <main class="news-list__container">
    <Comeback />
    <div class="list__container">
      <NewsListCard
        v-for="newsItem in newsList"
        :key="newsItem.title"
        :="newsItem"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.news-list__container {
  .list__container {
    background-color: #f3f3f3;
    padding: 0 0.05rem;
  }
}
</style>
