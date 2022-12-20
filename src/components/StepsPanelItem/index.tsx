import React from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { changeStep } from '~/store/stepsSlice';
import { Steps } from '~/types';
import styles from './styles.module.scss';

interface PanelItemProps {
  step: {
    number: number;
    name: Steps;
    text: string;
  };
}

const StepsPanelItem = ({ step }: PanelItemProps) => {
  const { activeStep } = useAppSelector((state) => state.steps);
  const dispatch = useAppDispatch();

  return (
    <li className={styles.step__item}>
      <button
        onClick={() => dispatch(changeStep(step.name))}
        type="button"
        className={`${styles.step__button} ${
          activeStep === step.name && styles.active
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
