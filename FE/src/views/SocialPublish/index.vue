<script setup lang="ts">
import { post } from '@/api/request';
import Comeback from '@/components/Comeback.vue';
import { useUser } from '@/hooks';
import { useShowTips } from '@/hooks';
import BaseTips from '@/components/BaseTips.vue';

const article = reactive({
  title: '',
  content: '',
  type: '请选择要发布的类型',
});

const { message, show, showTips } = useShowTips();
const router = useRouter();
async function addArticle() {
  const user = useUser();
  const url = '/createPost';
  const data = {
    ...article,
    userId: user.value.id,
  };
  const response = await post(url, data);
  if (response.errcode === 0) {
    showTips('发布成功, 1秒后跳转');
    router.push('/social');
  } else {
    showTips('发布失败，请稍后重试');
  }
}
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
        v-model="article.title"
      />
      <textarea
        placeholder="添加正文"
        cols="30"
        rows="10"
        class="article-input"
        v-model="article.content"
      ></textarea>
      <select v-model="article.type" class="type_input">
        <option disabled="true" value="请选择要发布的类型">
          请选择要发布的类型
        </option>
        <option value="study">学习</option>
        <option value="love">表白墙</option>
        <option value="social">社交</option>
        <option value="club">社团</option>
      </select>
    </div>
    <div class="publish__container">
      <div class="publish" @click="addArticle">发布笔记</div>
    </div>
  </section>
  <BaseTips :message="message" v-if="show" />
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
