<script setup lang="ts">
interface Option {
  value: string;
  text: string;
}
const props = defineProps<{
  options: Option[];
  modelValue: string;
  title: string;
}>();
const emits = defineEmits(['update:modelValue']);
const handleChange = (e: any) => {
  emits('update:modelValue', e?.target?.defaultValue);
};
</script>

<template>
  <div class="select__container">
    <h3 class="title">{{ props.title }}</h3>
    <div
      class="option_wrapper"
      v-for="{ value, text } in props.options"
      :key="value"
    >
      <input
        type="radio"
        :checked="props.modelValue === value"
        :value="value"
        @change="handleChange"
      />
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select__container {
  margin-top: 0.3rem;
  padding: 0 0.1rem;
  > .title {
    font-size: 0.15rem;
    color: #5e5e5e;
    margin: 0.1rem 0;
  }
  > .option_wrapper {
    margin-top: 0.1rem;
    font-size: 0.14rem;
    span {
      display: inline-block;
      margin-left: 0.08rem;
    }
  }
}
</style>
