<script setup lang="ts">
import SocialDisplayCard from './SocialDisplayCard.vue';
import useDisplay from './useDisplay';
import useNav from './useNav';

const { navList, navActiveIndex, changeNavActive } = useNav();
const sourceDisplayList = useDisplay();
const filterDisplayList = computed(() => {
  return sourceDisplayList.filter((display) => {
    return display.tag === navList[navActiveIndex.value].tag;
  });
});
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
      <SocialDisplayCard
        v-for="display in filterDisplayList"
        :key="display.title"
        :="display"
      />
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
