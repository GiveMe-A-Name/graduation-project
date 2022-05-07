<script setup lang="ts">
import useMyselfCard from './useMyselfCard';
const { myselfCards, clickCard } = useMyselfCard();
</script>

<template>
  <article class="myself__container">
    <div class="self-introduction">
      <img
        src="https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1650240000&Signature=XE72T~18MygmbURuJdBgtL23lJ6Ge7T9RT~ill1ig3tEiMqSApgBLRJmQelXtjLyUAebcFbyLaPdHPdkn8sWA23ArpFVR0aXHU76AheechOuLxB0hPbEuJRol9RerFvpSnHppgKXnkSdcyyEBtE4NKlgGqz6bNmuVudcdvTMpQBs3qJPng9axZ6StT6F6-5AsTCKzp-AL0D0lNSgQdOkq3UhMxlFN5RUj9RYfjhNPEBKDEJ0cqictXehkIHED2LXbCVBtImvcavjnl0IdZ-bYybR9KKZZ6-2YmZUPJkA0fcVIvt35DJMIx-lTt7y152iPyUQWgumt2DsWHXZV1xNHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        class="head-image"
      />
      <div class="detail">
        <p class="name">认真的名字XXX</p>
        <p class="id">20184065</p>
      </div>
    </div>
    <div class="more">
      <li
        v-for="{ text, id, iconUrl } in myselfCards"
        :key="id"
        class="nav_item"
        @click="clickCard(id)"
      >
        <img :src="iconUrl" class="head-icon" />
        <span class="text">{{ text }}</span>
        <span class="icon">&#xe6a3;</span>
      </li>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
