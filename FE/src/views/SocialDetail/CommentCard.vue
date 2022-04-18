<script setup lang="ts"></script>

<template>
  <div class="comment__card__wrapper">
    <img src="https://www.keaidian.com/uploads/allimg/190424/24110307_6.jpg" />
    <div class="body">
      <span class="username">用户昵称xxx</span>
      <div class="content">这里是评论内容</div>
    </div>
    <div class="like">
      <span class="icon">&#xe60f;</span>
      <span class="like_count">1123</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment__card__wrapper {
  display: flex;

  img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
  }
  > .body {
    padding-bottom: 0.1rem;
    margin: 0 0.15rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f1f1;
    .username {
      font-size: 0.15rem;
    }
    .content {
      margin-top: 0.1rem;
      font-size: 0.15rem;
    }
  }
  .like {
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    .icon {
      font-family: 'iconfont';
    }
  }
}
</style>
