<script setup lang="ts">
import { useCard, useUser } from '@/hooks';
import { staticBaseURL } from '@/api/request';

const user = useUser();
const card = useCard();
</script>

<template>
  <section class="user__container">
    <img :src="`${staticBaseURL}/${user.headImage}`" class="head_image" />
    <div class="content">
      <p class="school">中南林业科技大学</p>
      <p class="user">
        <span class="name">{{ user.realname }}</span>
        <span class="id-card">{{ user.id }}</span>
      </p>
    </div>
    <div class="account-balance">
      <p class="price">￥{{ card.money }}</p>
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
