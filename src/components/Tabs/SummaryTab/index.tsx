import React from 'react';
import Button from '~/components/Button';
import { useAppDispatch } from '~/hooks';
import { changeStep } from '~/store/stepsSlice';
import { Steps } from '~/types';
import Container from '../Container';
import styles from './styles.module.scss';

const SummaryTab = () => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <h2 className={styles.title}>Finishing up</h2>
      <p className={styles.description}>
        Double-check everything looks OK before confirming.
      </p>
      <div className={styles.summaryContainer}>
        <div className={styles.planWrapper}>
          <div className={styles.plan}>
            <strong>Arcade (Monthly)</strong>
            <small>Change</small>
          </div>
          <small className={styles.planPrice}>$9/mo</small>
        </div>
        <ul className={styles.addonsList}>
          <li className={styles.addon}>
            <small>Online Service</small>
            <span>+$1/mo</span>
          </li>
          <li className={styles.addon}>
            <small>Larger storage</small>
            <span>+$2/mo</span>
          </li>
        </ul>
      </div>
      <div className={styles.total}>
        <p>Total (per month)</p>
        <span>+$12/mo</span>
      </div>
      <div className={styles.btn}>
        <Button
          type="button"
          back
          onClick={() => dispatch(changeStep(Steps.ADDONS))}
        >
          Go Back
        </Button>
        <Button type="button" confirm onClick={() => console.log('confirm')}>
          Confirm
        </Button>
      </div>
    </Container>
  );
};

export default SummaryTab;
