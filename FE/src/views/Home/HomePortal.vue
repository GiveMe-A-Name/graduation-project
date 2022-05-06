<script setup lang="ts">
import { getImage } from '@/utils';
const router = useRouter();
interface portalMenuItem {
  iconImage?: string;
  content: string;
  goto: string;
}
const portalMenu: portalMenuItem[] = reactive([
  {
    content: '通知公告',
    iconImage: getImage('home/icon-notification'),
    goto: '/news',
  },
  {
    content: '健康打卡',
    iconImage: getImage('home/icon-health'),
    goto: '/health_report',
  },
  {
    content: '校园卡',
    iconImage: getImage('home/icon-card'),
    goto: '/id_card',
  },
  {
    content: '校园新闻',
    iconImage: getImage('home/icon-message'),
    goto: '/social',
  },
]);
</script>

<template>
  <section class="portal__container">
    <aside class="notification__wrapper">
      <img src="@/assets/home/notification.png" />
      <p>关于网络安全知识科普宣传的通知</p>
      <div
        class="more"
        @click="
          () => {
            router.push('/news');
          }
        "
      >
        <span class="text">更多</span>
        <span class="icon">&#xe6a3;</span>
      </div>
    </aside>
    <ul>
      <li
        v-for="{ content, iconImage, goto } in portalMenu"
        :key="content"
        @click="
          () => {
            router.push(goto);
          }
        "
      >
        <img :src="iconImage" />
        <p class="content">{{ content }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.portal__container {
  width: 3rem;
  border-radius: 0.1rem;
  padding: 0.1rem 0.16rem 0.25rem;
  margin: auto;
  position: relative;
  top: -0.3rem;
  background-color: #f1f1f1;
  .notification__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.1rem;
    > img {
      width: 0.2rem;
      height: 0.2rem;
    }
    > div > .icon {
      font-family: 'iconfont';
    }
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-top: 0.3rem;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 0.22rem;
        height: 0.22rem;
      }
      .content {
        margin-top: 0.07rem;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
