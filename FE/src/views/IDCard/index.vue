<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
</script>

<template>
  <main class="id-card__container">
    <Comeback />
    <div class="card__wrapper">
      <div class="info">
        <img src="@/assets/image/school-card.png" />
        <div class="detail">
          <p class="school">中南林业科技大学</p>
          <p class="id">20184065</p>
        </div>
      </div>
      <p class="money">校园卡余额 ￥61.00</p>
    </div>
  </main>
</template>

<style scoped lang="scss">
.id-card__container {
  > .card__wrapper {
    color: #fff;
    border-radius: 0.13rem;
    margin: 0.2rem;
    padding: 0.15rem;
    background: linear-gradient(90deg, #fe5864, #fe6d66, #ff836b, #ff926b);
    .info {
      display: flex;

      img {
        width: 0.4rem;
        height: 0.4rem;
      }
      .detail {
        margin-left: 0.1rem;
        .school {
          font-size: 0.13rem;
        }
        .id {
          margin-top: 0.05rem;
          font-size: 0.12rem;
        }
      }
    }
    .money {
      font-size: 0.24rem;
      font-weight: bolder;
      margin-top: 0.7rem;
    }
  }
}
</style>
