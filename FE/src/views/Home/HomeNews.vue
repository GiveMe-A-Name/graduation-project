<script setup lang="ts">
interface News {
  title: string;
  viewCount: number;
  imageUrl: string;
}
const news: News[] = reactive([
  {
    title: '五一放假调休共5天，能跨省旅行吗1？',
    viewCount: 2.7,
    imageUrl:
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?pid=ImgDet&rs=1',
  },
  {
    title: '五一放假调休共5天，能跨省旅行吗2？',
    viewCount: 3.6,
    imageUrl:
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?pid=ImgDet&rs=1',
  },
  {
    title: '五一放假调休共5天，能跨省旅行吗3？',
    viewCount: 4.7,
    imageUrl:
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?pid=ImgDet&rs=1',
  },
]);
</script>

<template>
  <section class="news__container">
    <div class="news__wrapper">
      <h3 class="title">校园通告</h3>
      <div
        class="news__card"
        v-for="{ title, viewCount, imageUrl } in news"
        :key="title"
      >
        <div class="content">
          <p class="title">{{ title }}</p>
          <p class="view">{{ viewCount }}k 阅读量</p>
        </div>
        <img :src="imageUrl" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.news__container {
  margin: 0 0.15rem;
  .news__wrapper {
    border-radius: 0.15rem;
    padding: 0.2rem 0.15rem;
    background-color: #fff;
    > .title {
      font-size: 0.2rem;
    }
    .news__card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.1rem;
      border-bottom: 1px solid #f8f8fa;
      img {
        height: 0.7rem;
        width: 0.7rem;
      }
      > .content {
        width: 70%;
        padding: 0.13rem;
        padding-left: 0;
        .title {
          font-size: 0.18rem;
        }
        .view {
          font-weight: lighter;
          margin-top: 0.2rem;
          font-size: 0.12rem;
        }
      }
    }
  }
}
</style>
