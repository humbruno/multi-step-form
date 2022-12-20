import React from 'react';
import InfoTab from '~/components/Tabs/InfoTab';
import PlanTab from '~/components/Tabs/PlanTab';
import { Steps } from '~/types';

const STEPS = [
  {
    number: 1,
    name: Steps.INFO,
    text: 'Your info',
    tab: <InfoTab />,
  },
  {
    number: 2,
    name: Steps.PLAN,
    text: 'Select plan',
    tab: <PlanTab />,
  },
  {
    number: 3,
    name: Steps.ADDONS,
    text: 'Add-ons',
    tab: <InfoTab />,
  },
  {
    number: 4,
    name: Steps.SUMMARY,
    text: 'Summary',
    tab: <InfoTab />,
  },
];

export default STEPS;
