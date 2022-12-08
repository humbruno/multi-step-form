import React from 'react';
import InfoTab from '~/components/Tabs/InfoTab';

const STEPS = [
  {
    number: 1,
    text: 'Your info',
    tab: <InfoTab />,
  },
  {
    number: 2,
    text: 'Select plan',
    tab: <InfoTab />,
  },
  {
    number: 3,
    text: 'Add-ons',
    tab: <InfoTab />,
  },
  {
    number: 4,
    text: 'Summary',
    tab: <InfoTab />,
  },
];

export default STEPS;
