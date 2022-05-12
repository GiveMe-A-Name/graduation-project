<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();
const user = window.localStorage.getItem('user');
if (user) {
  store.commit('UPDATE_USER', JSON.parse(user));
}
</script>

<template>
  <div class="app"><RouterView /></div>
</template>

<style></style>
