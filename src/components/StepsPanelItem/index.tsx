import React, { useContext } from 'react';
import { StepsContext } from '~/context/StepsContext';
import styles from './styles.module.scss';

interface PanelItemProps {
  step: {
    number: number;
    text: string;
  };
}

const StepsPanelItem = ({ step }: PanelItemProps) => {
  const { activeStep } = useContext(StepsContext);

  return (
    <li className={styles.step__item}>
      <button
        type="button"
        className={`${styles.step__button} ${
          activeStep === step.number && styles.active
        }`}
      >
        {step.number}
      </button>
      <div>
        <h3 className={styles.step__header}>STEP {step.number}</h3>
        <strong className={styles.step__title}>{step.text}</strong>
      </div>
    </li>
  );
};

export default StepsPanelItem;
