<script setup lang="ts">
interface Navigation {
  icon: string;
  content: string;
  path: string;
}
const navigations: Navigation[] = [
  { icon: '&#xe696;', content: '首页', path: '/' },
  { icon: '&#xe600;', content: '校内发现', path: '/community' },
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
.nav__container {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  justify-content: space-around;
  .link {
    font-size: 10px;
    text-decoration: none;
    color: gray;
    text-align: center;
    .icon {
      font-family: 'iconfont';
      display: inline-block;
      font-size: 30px;
    }
    .content {
      font-weight: 600;
      margin: 5px 0;
    }
  }
  .link__active {
    color: #000;
  }
}
</style>
