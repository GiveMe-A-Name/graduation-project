<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
import useReport from './useReport';
import ReportInput from './ReportInput.vue';
import ReportSelect from './ReportSelect.vue';

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
  handleReport,
} = useReport();
</script>

<template>
  <main class="health-report__container">
    <Comeback />
    <form>
      <ReportInput label="姓名" class="input_component" v-model="name" />
      <ReportInput label="学号/工号" class="input_component" v-model="id" />
      <ReportSelect
        title="今日体温"
        :options="temperatures"
        v-model="temperature"
      />
      <ReportSelect
        title="居民健康码颜色"
        :options="healthCodeColors"
        v-model="healthCodeColor"
      />
      <ReportSelect
        title="自己当日所在位置"
        :options="positions"
        v-model="position"
      />
      <ReportSelect
        title="身体健康状况"
        :options="healths"
        v-model="healthStatus"
      />
      <ReportInput label="本人电话" class="input_component" v-model="phone" />
    </form>
    <div class="submit_btn" @click="handleReport">提交信息</div>
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
