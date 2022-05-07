import { getImage } from '@/utils';
interface MyselfCard {
  iconUrl?: string;
  text: string;
  id: string;
}
const IMAGE_PATH = 'myself';
export default function useMyselfCard() {
  const myselfCards: MyselfCard[] = reactive([
    {
      text: '校园卡',
      id: 'idCard',
      iconUrl: getImage(`${IMAGE_PATH}/icon-IdCard`),
    },
    {
      text: '与我相关',
      id: 'about',
      iconUrl: getImage(`${IMAGE_PATH}/icon-aboutMe`),
    },
    {
      text: '设置',
      id: 'set',
      iconUrl: getImage(`${IMAGE_PATH}/icon-setting`),
    },
  ]);
  const clickCard = (id: string) => {
    console.log(`click [${id}]`);
  };
  return {
    myselfCards,
    clickCard,
  };
}
