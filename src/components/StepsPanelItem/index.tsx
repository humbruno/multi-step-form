import React from 'react';
import styles from './styles.module.scss';

interface PanelItemProps {
  step: {
    number: number;
    text: string;
  };
}

const StepsPanelItem = ({ step }: PanelItemProps) => (
  <li className={styles.step__item}>
    <button type="button" className={styles.step__button}>
      {step.number}
    </button>
    <div>
      <h2 className={styles.step__header}>STEP {step.number}</h2>
      <strong className={styles.step__title}>{step.text}</strong>
    </div>
  </li>
);

export default StepsPanelItem;
