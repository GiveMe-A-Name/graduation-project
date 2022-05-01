<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
const article = ref(`
  # hello world
`);
</script>

<template>
  <main class="news_container">
    <Comeback />
    <div class="article__wrapper">
      <h3 class="title">专家共同为长沙体育产业发展</h3>
      <div class="split"></div>
      <!-- <v-md-preview :text="article"></v-md-preview> -->
    </div>
  </main>
</template>

<style scoped lang="scss">
.news_container {
  .article__wrapper {
    padding: 0.2rem;
    .title {
      font-size: 0.18rem;
      text-align: center;
    }
    .split {
      height: 1px;
      border: 1px solid gray;
      margin: 0.1rem 0;
    }
  }
}
</style>
