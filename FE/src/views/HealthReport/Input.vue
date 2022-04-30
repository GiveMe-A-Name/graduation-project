<script setup lang="ts">
const props = defineProps<{
  label: string;
  modelValue: string | number;
}>();

const emits = defineEmits(['update:modelValue']);
const handleChange = (e: any) => {
  emits('update:modelValue', e.target.value);
};
</script>

<template>
  <div class="input__container">
    <label>{{ props.label }}</label>
    <input type="text" :value="props.modelValue" @change="handleChange" />
  </div>
</template>

<style scoped lang="scss">
.input__container {
  font-size: 0.16rem;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
  border-bottom: 1px solid #f1f1f1;

  > label {
    margin-left: 0.15rem;
  }
  > input {
    background-color: #fff;
    border: none;
    outline: none;
  }
}
</style>
