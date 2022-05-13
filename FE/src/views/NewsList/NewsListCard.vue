<script setup lang="ts">
const props = defineProps<{
  title: string;
  date: string | null;
  content: string;
}>();
</script>

<template>
  <div class="news-card__container">
    <h3 class="title">{{ props.title }}</h3>
    <p class="date">{{ props.date }}</p>
    <p class="content">{{ props.content }}</p>
  </div>
</template>

<style scoped lang="scss">
.news-card__container {
  padding: 0.1rem;
  margin-top: 0.06rem;
  background-color: #fff;
  .title {
    font-size: 0.16rem;
  }
  .date {
    margin: 0.1rem 0;
    font-size: 0.12rem;
    color: #cdcdcd;
  }
  .content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.14rem;
    padding-right: 0.4rem;
  }
}
</style>
