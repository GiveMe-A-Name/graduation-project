<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
const article = ref(`
[林科大网讯]
12月20日下午，“长沙”
`);
</script>

<template>
  <main class="news_container">
    <Comeback />
    <div class="article__wrapper">
      <h3 class="title">专家共同为长沙体育产业发展</h3>
      <div class="split"></div>
      <v-md-preview :text="article"></v-md-preview>
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
