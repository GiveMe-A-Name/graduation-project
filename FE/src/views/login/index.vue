<script setup lang="ts">
function useLogin() {
  const user = reactive({
    account: '',
    password: '',
  });

  const { account, password } = toRefs(user);
  const handleLogin = () => {
    console.log(account.value);
    console.log(password.value);
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
  <article class="login__contaier">
    <h1 class="title">Login</h1>
    <aside>
      <img
        src="https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1650240000&Signature=XE72T~18MygmbURuJdBgtL23lJ6Ge7T9RT~ill1ig3tEiMqSApgBLRJmQelXtjLyUAebcFbyLaPdHPdkn8sWA23ArpFVR0aXHU76AheechOuLxB0hPbEuJRol9RerFvpSnHppgKXnkSdcyyEBtE4NKlgGqz6bNmuVudcdvTMpQBs3qJPng9axZ6StT6F6-5AsTCKzp-AL0D0lNSgQdOkq3UhMxlFN5RUj9RYfjhNPEBKDEJ0cqictXehkIHED2LXbCVBtImvcavjnl0IdZ-bYybR9KKZZ6-2YmZUPJkA0fcVIvt35DJMIx-lTt7y152iPyUQWgumt2DsWHXZV1xNHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        class="head-image"
      />
      <input type="text" v-model="account" class="email" placeholder="账号" />
      <input
        type="password"
        v-model="password"
        class="password"
        placeholder="密码"
      />
      <div class="login-btn" @click="handleLogin">Next</div>
    </aside>
  </article>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
