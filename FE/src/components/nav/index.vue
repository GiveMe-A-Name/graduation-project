<script setup lang="ts">
interface Navigation {
  icon: string;
  content: string;
  path: string;
}
const navigations: Navigation[] = [
  { icon: '&#xe696;', content: '首页', path: '/' },
  { icon: '&#xe600;', content: '校内发现', path: '/social' },
  { icon: '&#xe78b;', content: '我的', path: '/myself' },
];
const activeIndex = ref(0);
const changeActiveIndex = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <nav class="nav__container">
    <router-link
      v-for="({ icon, content, path }, index) in navigations"
      :to="path"
      class="link"
      :class="{ link__active: activeIndex == index }"
      @click="changeActiveIndex(index)"
    >
      <span class="icon" v-html="icon"></span>
      <p class="content">{{ content }}</p>
    </router-link>
  </nav>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
