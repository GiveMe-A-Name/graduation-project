<script setup lang="ts">
const props = defineProps<{
  message: string;
}>();
</script>

<template>
  <div class="tips__container">{{ props.message }}</div>
</template>

<style scoped lang="scss">
.tips__container {
  color: #fff;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-size: 0.16rem;
  width: 80vw;
  height: 8vh;
  border-radius: 0.15rem;
  line-height: 8vh;
  text-align: center;
  background-color: rgba($color: #000000, $alpha: 0.6);
}
</style>
