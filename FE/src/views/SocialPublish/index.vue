<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
</script>

<template>
  <section class="social-publish__container">
    <Comeback />
    <div class="images">
      <img
        src="https://tse3-mm.cn.bing.net/th/id/OIP-C.bD7xjhrST-wDcnNVdXnzLwHaE8?w=259&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7"
      />
      <div class="upload"></div>
    </div>
    <div class="content">
      <input
        type="text"
        class="title-input"
        placeholder="填写标题会有更多的赞哦"
      />
      <textarea
        placeholder="添加正文"
        cols="30"
        rows="10"
        class="article-input"
      ></textarea>
    </div>
    <div class="publish__container">
      <div class="save__wrapper">
        <span class="icon">&#xe603;</span>
        <span>存草稿</span>
      </div>
      <div class="publish">发布笔记</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
