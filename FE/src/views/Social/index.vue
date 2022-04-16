<script setup lang="ts">
import SocialDisplayCard from './SocialDisplayCard.vue';
const navList = reactive([
  { content: '热门', name: 'hot' },
  { content: '表白墙' },
  { content: '社交' },
  { content: '学习' },
  { content: '社团' },
]);
const navActiveIndex = ref(0);
const changeNavActive = (index: number) => {
  navActiveIndex.value = index;
};
</script>

<template>
  <section class="social__container">
    <nav>
      <li
        v-for="({ content }, index) in navList"
        :key="content"
        @click="changeNavActive(index)"
        :class="{ active: navActiveIndex === index }"
      >
        {{ content }}
      </li>
    </nav>
    <div class="display__wrapper">
      <SocialDisplayCard />
      <SocialDisplayCard />
      <SocialDisplayCard />
      <SocialDisplayCard />
    </div>
  </section>
</template>

<style scoped lang="scss">
.social__container {
  font-size: 20px;
  > nav {
    justify-content: space-between;
    display: flex;
    padding: 0.15rem 0;
    li {
      margin: 0 0.15rem;
      list-style: none;
    }
    li.active {
      color: #bc1f1f;
    }
  }
  .display__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0.03rem;
  }
}
</style>
