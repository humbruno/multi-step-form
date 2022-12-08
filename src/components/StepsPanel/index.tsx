import React from 'react';
import STEPS from '~/constants/stepsList';
import StepsPanelItem from '../StepsPanelItem';
import styles from './styles.module.scss';

const StepsPanel = () => (
  <nav className={styles.container}>
    <ul className={styles.steps__list}>
      {STEPS.map((item) => (
        <StepsPanelItem step={item} key={item.number} />
      ))}
    </ul>
  </nav>
);

export default StepsPanel;
