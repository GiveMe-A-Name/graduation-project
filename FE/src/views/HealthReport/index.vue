<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
import useReport from './useReport';
import Input from './Input.vue';
import Select from './Select.vue';

const {
  name,
  id,
  temperature,
  temperatures,
  healthCodeColor,
  healthCodeColors,
  position,
  positions,
  healthStatus,
  healths,
  phone,
} = useReport();
</script>

<template>
  <main class="health-report__container">
    <Comeback />
    <form>
      <Input label="姓名" class="input_component" v-model="name" />
      <Input label="学号/工号" class="input_component" v-model="id" />
      <Select title="今日体温" :options="temperatures" v-model="temperature" />
      <Select
        title="居民健康码颜色"
        :options="healthCodeColors"
        v-model="healthCodeColor"
      />
      <Select
        title="自己当日所在位置"
        :options="positions"
        v-model="position"
      />
      <Select title="身体健康状况" :options="healths" v-model="healthStatus" />
      <Input label="本人电话" class="input_component" v-model="phone" />
    </form>
    <div class="submit_btn">提交信息</div>
  </main>
</template>

<style scoped lang="scss">
.health-report__container {
  > form {
    margin-top: 0.3rem;
    padding: 0 0.3rem;
    .input_component {
      margin-top: 0.1rem;
    }
  }
  > .submit_btn {
    color: #fff;
    margin: 0.2rem 0.15rem;
    font-size: 0.16rem;
    font-weight: bold;
    height: 0.4rem;
    border-radius: 0.1rem;
    line-height: 0.4rem;
    text-align: center;
    background: linear-gradient(90deg, #fe7e3c, #ff8647, #fe9955, #fea15b);
  }
}
</style>
