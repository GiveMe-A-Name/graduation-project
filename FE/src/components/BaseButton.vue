<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="button">{{ props.text }}</div>
</template>

<style scoped lang="scss">
.button {
  font-size: 0.2rem;
  width: 2.39rem;
  height: 0.43rem;
  background-color: #ff2444;
  border-radius: 0.2rem;
  color: #fff;
  text-align: center;
  line-height: 0.43rem;
}
</style>
