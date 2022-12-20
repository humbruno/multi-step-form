export interface Addon {
  title: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
}

const ADDONS: Addon[] = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: {
      monthly: '+$1/mo',
      yearly: '+$10/yr',
    },
  },
  {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: {
      monthly: '+$2/mo',
      yearly: '+$20/yr',
    },
  },
  {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      monthly: '+$2/mo',
      yearly: '+$20/yr',
    },
  },
];

export default ADDONS;
