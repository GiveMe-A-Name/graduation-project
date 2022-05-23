<script setup lang="ts">
import { post } from '@/api/request';
import router from '@/router';
import { useStore } from 'vuex';
import BaseTips from '@/components/BaseTips.vue';
import { useShowTips } from '@/hooks';

const { show, showTips, message } = useShowTips();
const store = useStore();
function useLogin() {
  const user = reactive({
    account: '',
    password: '',
  });

  const { account, password } = toRefs(user);
  const handleLogin = async () => {
    const response = await post('/user/login', {
      id: account.value,
      password: password.value,
    });
    if (response.errcode === 0) {
      store.commit('UPDATE_USER', response.data);
      window.localStorage.setItem('isLogin', 'true');
      window.localStorage.setItem('user', JSON.stringify(response.data));
      showTips('登录成功，1秒后跳转');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } else {
      showTips('登录失败，请重试');
    }
  };
  return {
    account,
    password,
    handleLogin,
  };
}

const { account, password, handleLogin } = useLogin();
</script>

<template>
  <main class="login__contaier">
    <h1 class="title">Login</h1>
    <aside>
      <img src="@/assets/login.jpg" class="head-image" />
      <input type="text" v-model="account" class="email" placeholder="账号" />
      <input
        type="password"
        v-model="password"
        class="password"
        placeholder="密码"
      />
      <div class="login-btn" @click="handleLogin">Next</div>
    </aside>
  </main>
  <BaseTips :message="message" v-if="show" />
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
