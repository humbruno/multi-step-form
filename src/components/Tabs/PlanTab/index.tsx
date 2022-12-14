import React from 'react';
import Button from '~/components/Button';
import PlanCard from '~/components/PlanCard';
import TogglePill from '~/components/TogglePill';
import PLAN_CARDS from '~/constants/planCards';
import { useAppDispatch } from '~/hooks';
import { changeStep } from '~/store/stepsSlice';
import { Steps } from '~/types';
import Container from '../Container';
import styles from './styles.module.scss';

const PlanTab = () => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <h2 className={styles.title}>Select your plan</h2>
      <p className={styles.description}>
        You have the option of monthly or yearly billing.
      </p>
      <ul className={styles.plan__list}>
        {PLAN_CARDS.map((item) => (
          <PlanCard element={item} key={item.title} />
        ))}
      </ul>
      <div className={styles.price__container}>
        <TogglePill />
      </div>
      <div className={styles.btn}>
        <Button
          type="button"
          back
          onClick={() => dispatch(changeStep(Steps.INFO))}
        >
          Go Back
        </Button>
        <Button
          type="button"
          next
          onClick={() => dispatch(changeStep(Steps.ADDONS))}
        >
          Next Step
        </Button>
      </div>
    </Container>
  );
};

export default PlanTab;
