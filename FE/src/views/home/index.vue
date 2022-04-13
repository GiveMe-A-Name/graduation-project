<script setup lang="ts">
import UserInfo from './UserInfo.vue';
import Portal from './Portal.vue';
import News from './News.vue';
</script>

<template>
  <article class="home__container">
    <UserInfo />
    <Portal />
    <News />
  </article>
</template>

<style scoped lang="scss">
.home__container {
  background-color: #f1f1f1;
}
</style>
