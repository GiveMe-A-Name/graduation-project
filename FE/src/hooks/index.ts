import store from '@/store';

export function useUser() {
  const user = computed(() => store.state?.user as any);
  return user;
}

export function useCard() {
  const card = computed(() => store.state?.card as any);
  return card;
}

export function useShowTips() {
  const show = ref(false);
  const message = ref('');
  function showTips(text: string, time: number = 1000) {
    message.value = text;
    show.value = true;
    setTimeout(() => {
      show.value = false;
    }, time);
  }

  return {
    show,
    showTips,
    message,
  };
}
