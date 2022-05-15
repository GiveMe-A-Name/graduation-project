<script setup lang="ts">
import SocialPostCard from './SocialPostCard.vue';
import usePost from './usePost';
import useNav from './useNav';
import BaseButton from '@/components/BaseButton.vue';

const { navList, navActiveIndex, changeNavActive } = useNav();
const { posts: sourcePosts, getPost, updatePostLike } = usePost();
getPost();
const filterPosts = computed(() => {
  return sourcePosts.filter((post) => {
    return post.tag === navList[navActiveIndex.value].tag;
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
    <div class="post__wrapper">
      <SocialPostCard
        v-for="display in filterPosts"
        :key="display.id"
        :="display"
        :goto="() => $router.push(`/social/${display.id}`)"
        :update-like="updatePostLike"
      />
    </div>
    <BaseButton
      text="发布新东西"
      class="publish"
      @click="() => $router.push('/social/publish')"
    />
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
  .post__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0.03rem;
  }
  .publish {
    width: 90%;
    // width: 0.5rem;
    margin: 0.2rem auto 0.1rem;
  }
}
</style>
