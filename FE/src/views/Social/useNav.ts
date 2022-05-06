export default function useNav() {
  const navList = reactive([
    { content: '热门', tag: 'hot' },
    { content: '表白墙', tag: 'love' },
    { content: '社交', tag: 'social' },
    { content: '学习', tag: 'study' },
    { content: '社团', tag: 'club' },
  ]);
  const navActiveIndex = ref(0);
  const changeNavActive = (index: number) => {
    navActiveIndex.value = index;
  };
  return {
    navList,
    navActiveIndex,
    changeNavActive,
  };
}
