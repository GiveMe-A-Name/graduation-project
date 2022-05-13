import store from '@/store';

export function useUser() {
  const user = computed(() => store.state?.user as any);
  return user;
}

export function useCard() {
  const card = computed(() => store.state?.card as any);
  return card;
}
