interface Option {
  text: string;
  value: string;
}

interface Report {
  name: string;
  id: number;
  temperature: string;
  healthCodeColor: string;
  position: string;
  healthStatus: string;
  phone: string;
}

export default function useReport() {
  const temperatures: Option[] = [
    {
      value: 'normal',
      text: '温度正常(小于37.3°C)',
    },
    { value: 'abnormal', text: '发热(大于等于37.3°C)' },
  ];

  const healthCodeColors: Option[] = [
    { value: 'green', text: '绿色' },
    { value: 'yellow', text: '黄色' },
    { value: 'red', text: '红色' },
  ];

  const positions: Option[] = [
    { value: 'home', text: '自己家中' },
    { value: 'relative', text: '亲友家中' },
    { value: 'business', text: '实习单位' },
    { value: 'school', text: '在校' },
    { value: 'other', text: '其他' },
  ];

  const healths: Option[] = [
    { value: 'good', text: '良好' },
    { value: 'doubt', text: '有疑是症状' },
    { value: 'bad', text: '确诊病例' },
  ];

  const report: Report = reactive({
    name: '谢奇璇',
    id: 20184065,
    temperature: '',
    healthCodeColor: '',
    position: '',
    healthStatus: '',
    phone: '',
  });

  return {
    ...toRefs(report),
    temperatures,
    healthCodeColors,
    positions,
    healths,
  };
}
