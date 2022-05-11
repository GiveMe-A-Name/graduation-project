type ServiceName = 'USER_SERVICE' | 'CARD_SERVICE';

type Service = {
  name: ServiceName;
  port: number;
};

export const USER_SERVICE: Service = {
  name: 'USER_SERVICE',
  port: 4000,
};

export const CARD_SERVICE: Service = {
  name: 'CARD_SERVICE',
  port: 4001,
};
