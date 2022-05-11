import { useStore } from 'vuex';

export function useUser() {
  const store = useStore();
  const user = computed(() => store.state.user);
  return user;
}
