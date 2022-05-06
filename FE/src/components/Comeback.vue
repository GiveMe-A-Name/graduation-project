<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="comeback">
    <span
      class="icon"
      @click="
        () => {
          router.back();
        }
      "
      >&#xe7eb;</span
    >
  </div>
</template>

<style scoped lang="scss">
.comeback {
  display: flex;
  align-items: center;
  height: 0.32rem;
  .icon {
    font-family: 'iconfont';
    font-size: 0.23rem;
    margin-left: 0.05rem;
  }
}
</style>
