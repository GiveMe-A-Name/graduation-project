<script setup lang="ts"></script>

<template>
  <section class="user__container">
    <img
      src="https://tse1-mm.cn.bing.net/th/id/R-C.e2a66a0597cacc3f27cfcfffe43a9236?rik=GFLh2RwyBUYqpw&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202012%2f20201229210432113.jpg&ehk=KfEMTPscAHLtffcXRF4CPE2%2b9kWjx47cCeoTNhmv2K0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
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
