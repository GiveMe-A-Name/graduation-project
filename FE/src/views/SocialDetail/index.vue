<script setup lang="ts">
import CommentCard from './CommentCard.vue';
import Comeback from '@/components/Comeback.vue';
</script>

<template>
  <section class="social-detail__container">
    <Comeback />
    <div class="detail-image">
      <img
        src="https://www.keaidian.com/uploads/allimg/190424/24110307_6.jpg"
      />
      <div class="range">
        <li class="active"></li>
        <li></li>
        <li></li>
      </div>
    </div>
    <div class="detail_text">
      <h4 class="title">真的，别再去字节面试了</h4>
      <p>这里全是文字</p>
      <div class="time">
        <span class="date">今天</span>
        <span class="clock">12:43</span>
      </div>
    </div>
    <div class="comment__container">
      <h4 class="title">共有123条评论</h4>
      <div class="comment-input__container">
        <img
          src="https://www.keaidian.com/uploads/allimg/190424/24110307_6.jpg"
        />
        <input type="text" placeholder="说点什么吧，万一花了呢" />
        <div class="submit-btn">发送</div>
      </div>
      <CommentCard class="card" />
      <CommentCard class="card" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.social-detail__container {
  > .detail-image {
    img {
      display: block;
      width: 100%;
      height: 60vh;
    }
    .range {
      margin: 0;
      display: flex;
      font-size: 0.2rem;
      justify-content: center;
      li {
        color: #e6e6e6;
        width: 0.15rem;
      }
      li.active {
        color: rgb(206, 40, 40);
      }
    }
  }
  > .detail_text {
    padding: 0.18rem 0.12rem;
    font-size: 0.16rem;
    border-bottom: 1px solid #f1f1f1;
    .time {
      margin-top: 0.1rem;
      font-size: 0.12rem;
      .clock {
        display: inline-block;
        margin-left: 0.05rem;
      }
    }
  }
  > .comment__container {
    padding: 0.12rem;
    .title {
      font-size: 0.14rem;
    }
    .comment-input__container {
      display: flex;
      align-items: center;
      margin-top: 0.22rem;
      img {
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
      }
      input {
        padding: 0.03rem 0.1rem;
        background: rgba(246, 246, 246, 0.17);
        border: 1px solid #000000;
        border-radius: 0.1rem;
        height: 0.2rem;
        margin-left: 0.2rem;
        width: 65%;
      }
      .submit-btn {
        margin-left: 0.1rem;
        font-size: 0.14rem;
        height: 0.28rem;
        width: 0.4rem;
        line-height: 0.28rem;
      }
    }
    .card {
      margin-top: 0.3rem;
    }
  }
}
</style>
