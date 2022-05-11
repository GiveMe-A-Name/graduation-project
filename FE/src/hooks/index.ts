import { useStore } from 'vuex';

export function useUser() {
  const store = useStore();
  const user = computed(() => store.state.user);
  return user;
}

export function useCard() {
  const store = useStore();
  const card = computed(() => store.state.card);
  return card;
}
