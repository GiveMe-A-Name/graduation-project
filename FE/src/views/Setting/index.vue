<script setup lang="ts">
import Comeback from '@/components/Comeback.vue';
import BaseButton from '@/components/BaseButton.vue';
import { post } from '@/api/request';
import { useUser } from '@/hooks';

const passwords = reactive({
  oldPassword: '',
  newPassword: '',
});

async function updatePassword() {
  const user = useUser();
  const url = '/user/updatePassword';
  const response = await post(url, {
    id: user.value.id,
    ...passwords,
  });
  if (response.errcode === 0) {
    console.log('修改成功');
  } else {
    console.log(response);
  }
}
</script>

<template>
  <Comeback />
  <main class="setting__container">
    <h3>修改密码</h3>
    <div class="input_wrapper">
      <label> 旧密码：</label>
      <input type="password" v-model="passwords.oldPassword" />
    </div>
    <div class="input_wrapper">
      <label> 新密码：</label>
      <input type="password" v-model="passwords.newPassword" />
    </div>
    <BaseButton text="修改密码" class="submit-btn" @click="updatePassword" />
  </main>
</template>

<style scoped lang="scss">
.setting__container {
  font-size: 0.2rem;
  > h3 {
    text-align: center;
  }
  > .input_wrapper {
    font-size: 0.16rem;
    padding: 0 0.4rem;
    margin-top: 0.2rem;
    input {
      border: 1px solid #625f5f;
      padding: 0.05rem 0.1rem;
      box-sizing: content-box;
      width: 70%;
    }
  }
  > .submit-btn {
    margin: 0.5rem auto 0.1rem;
  }
}
</style>
