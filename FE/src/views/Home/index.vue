<script setup lang="ts">
import HomeUserInfo from './HomeUserInfo.vue';
import HomePortal from './HomePortal.vue';
import HomeNews from './HomeNews.vue';
import { useStore } from 'vuex';
import { useUser } from '@/hooks';

const user = useUser();
const store = useStore();
store.dispatch('GET_CARD', user.value.id);
</script>

<template>
  <article class="home__container">
    <HomeUserInfo />
    <HomePortal />
    <HomeNews />
  </article>
</template>

<style scoped lang="scss">
.home__container {
  background-color: #f1f1f1;
}
</style>
