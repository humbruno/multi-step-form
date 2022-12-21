/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import iconArcade from '../assets/icon-arcade.svg';
import iconAdvanced from '../assets/icon-advanced.svg';
import iconPro from '../assets/icon-pro.svg';

enum PlanOptions {
  ARCADE = 'Arcade',
  ADVANCED = 'Advanced',
  PRO = 'Pro',
}

export interface Plan {
  title: PlanOptions;
  price: {
    monthly: string;
    yearly: string;
  };
  icon: any;
}

const PLAN_CARDS: Plan[] = [
  {
    title: PlanOptions.ARCADE,
    price: {
      monthly: '$9/mo',
      yearly: '$90/yr',
    },
    icon: iconArcade,
  },
  {
    title: PlanOptions.ADVANCED,
    price: {
      monthly: '$12/mo',
      yearly: '$120/yr',
    },
    icon: iconAdvanced,
  },
  {
    title: PlanOptions.PRO,
    price: {
      monthly: '$15/mo',
      yearly: '$150/yr',
    },
    icon: iconPro,
  },
];

export default PLAN_CARDS;
