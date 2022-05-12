type ServiceName =
  | 'USER_SERVICE'
  | 'CARD_SERVICE'
  | 'HEALTH_REPORT_SERVICE'
  | 'ANNUNCIATE_SERVICe';

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

export const HEALTH_REPORT_SERVICE: Service = {
  name: 'HEALTH_REPORT_SERVICE',
  port: 4002,
};

export const ANNUNCIATE_SERVICE: Service = {
  name: 'ANNUNCIATE_SERVICe',
  port: 4003,
};
