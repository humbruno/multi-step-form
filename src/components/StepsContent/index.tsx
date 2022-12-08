import { useContext } from 'react';
import STEPS from '~/constants/stepsList';
import { StepsContext } from '~/context/StepsContext';

const StepsContent = () => {
  const { activeStep } = useContext(StepsContext);

  return STEPS[activeStep + 1].tab;
};

export default StepsContent;
