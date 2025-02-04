export interface Event {
  id: string;
  name: string;
  description: string;
  active: boolean;
  imgSrc: string;
  startAt: string;
  endAt: string;
}

export interface EventProps extends Event {
  eventType: 'Weapon' | 'Character' | 'Event';
  duration?: string;
}

/**
 * @name StatisticProps
 * @example
 * {
 *   character_up: [UserProps, UserProps],
 *   total_pulls: 100,
 *   players: 100,
 * }
 * **/

export type StatisticProps = {
  character_up: EventProps[];
  total_pulls: number;
  players: number;
};

/**
 * @name UserProps
 * @example
 * {
 *   email: 'example@gmail.com',
 *   pasword: 'hashedPassword',
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   pulls: 10,
 *   pity: 10,
 *   astriteSpent: 100,
 *   createdAt: new Date(),
 *   updatedAt: new Date(),
 * }
 * **/
export type UserProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  pulls: number;
  pity: number;
  astriteSpent: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ConveneHistoryProps = {
  type: string;
  image: string;
  fivestar: number;
  fourstar: number;
};
