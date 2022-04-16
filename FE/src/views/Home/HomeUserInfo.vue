<script setup lang="ts"></script>

<template>
  <section class="user__container">
    <img
      src="https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1650240000&Signature=XE72T~18MygmbURuJdBgtL23lJ6Ge7T9RT~ill1ig3tEiMqSApgBLRJmQelXtjLyUAebcFbyLaPdHPdkn8sWA23ArpFVR0aXHU76AheechOuLxB0hPbEuJRol9RerFvpSnHppgKXnkSdcyyEBtE4NKlgGqz6bNmuVudcdvTMpQBs3qJPng9axZ6StT6F6-5AsTCKzp-AL0D0lNSgQdOkq3UhMxlFN5RUj9RYfjhNPEBKDEJ0cqictXehkIHED2LXbCVBtImvcavjnl0IdZ-bYybR9KKZZ6-2YmZUPJkA0fcVIvt35DJMIx-lTt7y152iPyUQWgumt2DsWHXZV1xNHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      class="head_image"
    />
    <div class="content">
      <p class="school">中南林业科技大学</p>
      <p class="user">
        <span class="name">谢奇璇</span>
        <span class="id-card">20184065</span>
      </p>
    </div>
    <div class="account-balance">
      <p class="price">￥61.3</p>
      <p class="text">账户余额</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.user__container {
  padding: 0.22rem 0.26rem 0.6rem;
  background-color: #ece4dc;
  display: flex;
  justify-content: space-between;
  .head_image {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
  }
  .content {
    font-size: 0.12rem;
    padding: 0.07rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .school {
      font-size: 0.15rem;
      color: #8d8b8b;
      font-weight: bold;
    }
    .user {
      display: flex;
      justify-content: space-around;
    }
  }
  .account-balance {
    font-size: 0.12rem;
    padding: 0.09rem 0;
    .price {
      font-weight: bold;
    }
    .text {
      margin-top: 12px;
    }
  }
}
</style>
