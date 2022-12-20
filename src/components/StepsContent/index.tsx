import STEPS from '~/constants/stepsList';
import { useAppSelector } from '~/hooks';

const StepsContent = () => {
  const { activeStep } = useAppSelector((state) => state.steps);

  return STEPS.filter((step) => step.name === activeStep)[0].tab;
};

export default StepsContent;
