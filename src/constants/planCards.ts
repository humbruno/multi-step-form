import iconArcade from '../assets/icon-arcade.svg';
import iconAdvanced from '../assets/icon-advanced.svg';
import iconPro from '../assets/icon-pro.svg';

const PLAN_CARDS = [
  {
    title: 'Arcade',
    price: {
      monthly: '$9/mo',
      yearly: '$90/yr',
    },
    icon: iconArcade,
  },
  {
    title: 'Advanced',
    price: {
      monthly: '$12/mo',
      yearly: '$120/yr',
    },
    icon: iconAdvanced,
  },
  {
    title: 'Pro',
    price: {
      monthly: '$15/mo',
      yearly: '$150/yr',
    },
    icon: iconPro,
  },
];

export default PLAN_CARDS;
