<script setup lang="ts"></script>

<template>
  <div class="display-card__container">
    <img
      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.Jqzlm4QzTzbqLHf6HoTBhAHaEo?w=248&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7"
      alt=""
    />
    <h3 class="title">大厂暑期实习该如何准备</h3>
    <div class="card-info">
      <img
        src="https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1650240000&Signature=XE72T~18MygmbURuJdBgtL23lJ6Ge7T9RT~ill1ig3tEiMqSApgBLRJmQelXtjLyUAebcFbyLaPdHPdkn8sWA23ArpFVR0aXHU76AheechOuLxB0hPbEuJRol9RerFvpSnHppgKXnkSdcyyEBtE4NKlgGqz6bNmuVudcdvTMpQBs3qJPng9axZ6StT6F6-5AsTCKzp-AL0D0lNSgQdOkq3UhMxlFN5RUj9RYfjhNPEBKDEJ0cqictXehkIHED2LXbCVBtImvcavjnl0IdZ-bYybR9KKZZ6-2YmZUPJkA0fcVIvt35DJMIx-lTt7y152iPyUQWgumt2DsWHXZV1xNHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        class="head-image"
      />
      <span class="username">小杨同学</span>
      <div class="like">
        <span class="icon">&#xe60f;</span>
        <span class="like_count">1123</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.display-card__container {
  width: 183px;
  height: 245px;
  display: flex;
  flex-direction: column;
  > img {
    width: 100%;
    height: 400px;
  }
  > .title {
    margin: 0.07rem 0;
    font-size: 0.15rem;
  }
  > .card-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.03rem;
    margin-bottom: 0.1rem;
    .head-image {
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
    }
    .username {
      font-size: 0.13rem;
    }
    .like {
      display: flex;
      align-items: center;
      .icon {
        font-family: 'iconfont';
        color: red;
      }
      // .icon-active {
      //   color: red;
      // }
      .like_count {
        font-size: 0.12rem;
        display: inline-block;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
