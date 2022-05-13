<script setup lang="ts">
import { get } from '@/api/request';
import Comeback from '@/components/Comeback.vue';
import NewsListCard from './NewsListCard.vue';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
}
const newsList: NewsItem[] = reactive([]);
async function getNews() {
  const url = '/news';
  const response = await get(url);
  if (response.errcode === 0) {
    newsList.push(...response.data);
  }
}
getNews();

const router = useRouter();
const goto = (id: string) => {
  router.push(`/news/${id}`);
};
</script>

<template>
  <main class="news-list__container">
    <Comeback />
    <div class="list__container">
      <NewsListCard
        v-for="newsItem in newsList"
        :key="newsItem.title"
        :="newsItem"
        @click="goto(newsItem.id)"
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
