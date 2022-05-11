<script setup lang="ts">
import { useUser } from '@/hooks';
import { staticBaseURL } from '@/api/request';
import useMyselfCard from './useMyselfCard';

const { myselfCards, clickCard } = useMyselfCard();
const user = useUser();
</script>

<template>
  <article class="myself__container">
    <div class="self-introduction">
      <img :src="`${staticBaseURL}/${user.headImage}`" class="head-image" />
      <div class="detail">
        <p class="name">{{ user.realname }}</p>
        <p class="id">{{ user.id }}</p>
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
